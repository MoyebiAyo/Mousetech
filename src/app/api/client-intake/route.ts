import { NextResponse } from "next/server";
import crypto from "node:crypto";
import {
  buildSubmissionRows,
  fieldValueToText,
  intakeSteps,
  validateIntakePayload,
  type IntakePayload,
} from "@/lib/clientIntake";

export const runtime = "nodejs";

type IntegrationResult = {
  name: "email" | "googleSheets" | "notion" | "clientEmail";
  status: "sent" | "saved" | "skipped" | "failed";
  message?: string;
};

function env(name: string) {
  return process.env[name]?.trim();
}

function submissionTitle(payload: IntakePayload) {
  const clientName = fieldValueToText(payload.clientName) || "New client";
  const businessName = fieldValueToText(payload.businessName);
  return businessName ? `${clientName} - ${businessName}` : clientName;
}

function buildPlainText(payload: IntakePayload) {
  const rows = buildSubmissionRows(payload);
  const grouped = intakeSteps
    .map((step) => {
      const sectionRows = rows.filter((row) => row.section === step.title);
      return [
        step.title,
        ...sectionRows.map((row) => `${row.label}: ${row.value || "Not provided"}`),
      ].join("\n");
    })
    .join("\n\n");

  return `New MouseTech client intake submission\n\n${grouped}`;
}

function buildHtml(payload: IntakePayload) {
  const rows = buildSubmissionRows(payload);
  const sections = intakeSteps
    .map((step) => {
      const sectionRows = rows
        .filter((row) => row.section === step.title)
        .map(
          (row) => `
            <tr>
              <td style="padding:10px 12px;border-bottom:1px solid #eaeaea;color:#555;width:34%;vertical-align:top;">${escapeHtml(row.label)}</td>
              <td style="padding:10px 12px;border-bottom:1px solid #eaeaea;color:#111;vertical-align:top;">${escapeHtml(row.value || "Not provided")}</td>
            </tr>`,
        )
        .join("");

      return `
        <h2 style="font-size:18px;line-height:1.3;margin:28px 0 10px;color:#111;">${escapeHtml(step.title)}</h2>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border:1px solid #eaeaea;border-radius:8px;overflow:hidden;">${sectionRows}</table>`;
    })
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;max-width:760px;margin:0 auto;padding:24px;color:#111;">
      <p style="font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:#666;margin:0 0 8px;">MouseTech client intake</p>
      <h1 style="font-size:28px;line-height:1.2;margin:0 0 12px;">${escapeHtml(submissionTitle(payload))}</h1>
      <p style="font-size:15px;color:#555;margin:0 0 24px;">A new website project intake form was submitted from mousetech.app.</p>
      ${sections}
    </div>`;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function sendResendEmail(payload: IntakePayload): Promise<IntegrationResult> {
  const apiKey = env("RESEND_API_KEY");
  const from = env("INTAKE_EMAIL_FROM") || "MouseTech <onboarding@resend.dev>";
  const to = env("INTAKE_EMAIL_TO") || "hello@mousetech.app";

  if (!apiKey) {
    return { name: "email", status: "skipped", message: "RESEND_API_KEY is not configured." };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `New client intake: ${submissionTitle(payload)}`,
      html: buildHtml(payload),
      text: buildPlainText(payload),
      reply_to: fieldValueToText(payload.email) || undefined,
    }),
  });

  if (!response.ok) {
    return { name: "email", status: "failed", message: await response.text() };
  }

  return { name: "email", status: "sent" };
}

async function sendClientConfirmation(payload: IntakePayload): Promise<IntegrationResult> {
  const apiKey = env("RESEND_API_KEY");
  const from = env("INTAKE_EMAIL_FROM") || "MouseTech <onboarding@resend.dev>";
  const email = fieldValueToText(payload.email);

  if (!apiKey || !email) {
    return { name: "clientEmail", status: "skipped", message: "Client confirmation email is not configured." };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [email],
      subject: "We received your MouseTech intake form",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;padding:24px;color:#111;">
          <h1 style="font-size:26px;line-height:1.2;margin:0 0 12px;">Thanks, ${escapeHtml(fieldValueToText(payload.clientName) || "there")}.</h1>
          <p style="font-size:16px;line-height:1.6;color:#444;">We received your project intake form and will review your goals, content needs, timeline, and budget.</p>
          <p style="font-size:16px;line-height:1.6;color:#444;">A MouseTech project lead will contact you through your preferred channel within 1 business day.</p>
          <p style="font-size:14px;line-height:1.6;color:#666;margin-top:28px;">Mouse Technologies<br/>Web Development & Tech Services</p>
        </div>`,
      text: "Thanks. We received your MouseTech project intake form and will contact you within 1 business day.",
    }),
  });

  if (!response.ok) {
    return { name: "clientEmail", status: "failed", message: await response.text() };
  }

  return { name: "clientEmail", status: "sent" };
}

async function getGoogleAccessToken() {
  const clientEmail = env("GOOGLE_SERVICE_ACCOUNT_EMAIL");
  const privateKey = env("GOOGLE_PRIVATE_KEY")?.replace(/\\n/g, "\n");

  if (!clientEmail || !privateKey) return null;

  const now = Math.floor(Date.now() / 1000);
  const header = base64Url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claim = base64Url(
    JSON.stringify({
      iss: clientEmail,
      scope: "https://www.googleapis.com/auth/spreadsheets",
      aud: "https://oauth2.googleapis.com/token",
      exp: now + 3600,
      iat: now,
    }),
  );
  const signature = crypto.sign("RSA-SHA256", Buffer.from(`${header}.${claim}`), privateKey);
  const assertion = `${header}.${claim}.${base64Url(signature)}`;

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  const data = (await response.json()) as { access_token?: string };
  return data.access_token || null;
}

function base64Url(value: string | Buffer) {
  return Buffer.from(value).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}

async function saveToGoogleSheets(payload: IntakePayload): Promise<IntegrationResult> {
  const spreadsheetId = env("GOOGLE_SHEETS_SPREADSHEET_ID");
  const sheetName = env("GOOGLE_SHEETS_SHEET_NAME") || "Client Intake";

  if (!spreadsheetId) {
    return { name: "googleSheets", status: "skipped", message: "GOOGLE_SHEETS_SPREADSHEET_ID is not configured." };
  }

  const accessToken = await getGoogleAccessToken();
  if (!accessToken) {
    return { name: "googleSheets", status: "skipped", message: "Google service account credentials are not configured." };
  }

  const metadataResponse = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}?fields=sheets.properties.title`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  if (!metadataResponse.ok) {
    return { name: "googleSheets", status: "failed", message: await metadataResponse.text() };
  }

  const metadata = (await metadataResponse.json()) as {
    sheets?: Array<{ properties?: { title?: string } }>;
  };
  const hasTargetSheet = metadata.sheets?.some((sheet) => sheet.properties?.title === sheetName);

  if (!hasTargetSheet) {
    const createSheetResponse = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}:batchUpdate`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          requests: [
            {
              addSheet: {
                properties: {
                  title: sheetName,
                },
              },
            },
          ],
        }),
      },
    );

    if (!createSheetResponse.ok) {
      return { name: "googleSheets", status: "failed", message: await createSheetResponse.text() };
    }
  }

  const values = [
    [
      new Date().toISOString(),
      fieldValueToText(payload.clientName),
      fieldValueToText(payload.businessName),
      fieldValueToText(payload.email),
      fieldValueToText(payload.phone),
      fieldValueToText(payload.preferredContactMethod),
      fieldValueToText(payload.websitePurpose),
      fieldValueToText(payload.primaryGoal),
      fieldValueToText(payload.pagesRequired),
      fieldValueToText(payload.overallVibe),
      fieldValueToText(payload.domainName),
      fieldValueToText(payload.desiredLaunchDate),
      fieldValueToText(payload.budgetRange),
      buildPlainText(payload),
    ],
  ];

  const escapedSheetName = sheetName.replace(/'/g, "''");
  const range = encodeURIComponent(`'${escapedSheetName}'!A1`);
  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ values }),
    },
  );

  if (!response.ok) {
    return { name: "googleSheets", status: "failed", message: await response.text() };
  }

  return { name: "googleSheets", status: "saved" };
}

function notionText(value: string) {
  return value ? [{ type: "text", text: { content: value.slice(0, 1900) } }] : [];
}

async function saveToNotion(payload: IntakePayload): Promise<IntegrationResult> {
  const token = env("NOTION_API_KEY");
  const databaseId = env("NOTION_DATABASE_ID");
  const titleProperty = env("NOTION_TITLE_PROPERTY") || "Name";

  if (!token || !databaseId) {
    return { name: "notion", status: "skipped", message: "Notion credentials are not configured." };
  }

  const rows = buildSubmissionRows(payload);
  const children = intakeSteps.map((step) => ({
    object: "block",
    type: "toggle",
    toggle: {
      rich_text: notionText(step.title),
      children: rows
        .filter((row) => row.section === step.title)
        .map((row) => ({
          object: "block",
          type: "paragraph",
          paragraph: {
            rich_text: notionText(`${row.label}: ${row.value || "Not provided"}`),
          },
        })),
    },
  }));

  const pageBody = {
    parent: { database_id: databaseId },
    properties: {
      [titleProperty]: {
        title: notionText(submissionTitle(payload)),
      },
    },
    children,
  };

  let response = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28",
    },
    body: JSON.stringify(pageBody),
  });

  if (response.status === 400) {
    const errorText = await response.text();
    if (!errorText.includes("is a page, not a database")) {
      return { name: "notion", status: "failed", message: errorText };
    }

    response = await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28",
      },
      body: JSON.stringify({
        parent: { page_id: databaseId },
        properties: {
          title: {
            title: notionText(submissionTitle(payload)),
          },
        },
        children,
      }),
    });
  }

  if (!response.ok) {
    return { name: "notion", status: "failed", message: await response.text() };
  }

  return { name: "notion", status: "saved" };
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (body?.companyWebsite) {
    return NextResponse.json({ ok: true });
  }

  const validation = validateIntakePayload(body);
  if (!validation.valid) {
    return NextResponse.json({ ok: false, errors: validation.errors }, { status: 400 });
  }

  const payload = validation.sanitized;
  const storageIntegrations = await Promise.allSettled([
    saveToGoogleSheets(payload),
    saveToNotion(payload),
  ]);

  const storageResults: IntegrationResult[] = storageIntegrations.map((result, index) => {
    if (result.status === "fulfilled") return result.value;
    const names: IntegrationResult["name"][] = ["googleSheets", "notion"];
    return { name: names[index], status: "failed", message: result.reason instanceof Error ? result.reason.message : "Unknown error" };
  });

  const failedStorage = storageResults.filter((result) => result.status === "failed");
  if (failedStorage.length > 0) {
    return NextResponse.json(
      {
        ok: false,
        message: "Your form was valid, but one or more storage integrations failed. Please contact MouseTech on WhatsApp.",
        integrations: [
          { name: "email", status: "skipped", message: "Email was not sent because storage failed." },
          { name: "clientEmail", status: "skipped", message: "Client confirmation was not sent because storage failed." },
          ...storageResults,
        ],
      },
      { status: 502 },
    );
  }

  const emailIntegrations = await Promise.allSettled([
    sendResendEmail(payload),
    sendClientConfirmation(payload),
  ]);

  const emailResults: IntegrationResult[] = emailIntegrations.map((result, index) => {
    if (result.status === "fulfilled") return result.value;
    const names: IntegrationResult["name"][] = ["email", "clientEmail"];
    return { name: names[index], status: "failed", message: result.reason instanceof Error ? result.reason.message : "Unknown error" };
  });

  const results = [...emailResults, ...storageResults];
  const failedEmail = emailResults.filter((result) => result.status === "failed");
  if (failedEmail.length > 0) {
    return NextResponse.json(
      {
        ok: false,
        message: "Your form was saved, but one or more email notifications failed. Please contact MouseTech on WhatsApp.",
        integrations: results,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Your intake form has been submitted. We will review it and contact you within 1 business day.",
    integrations: results,
  });
}

# Client Intake Setup

The `/client-intake` page submits to `/api/client-intake`.

## Email

Create a Resend API key and set:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxx
INTAKE_EMAIL_FROM=MouseTech <hello@mousetech.app>
INTAKE_EMAIL_TO=hello@mousetech.app
```

`INTAKE_EMAIL_FROM` should use a domain verified in Resend for production.

## Google Sheets

1. Create a Google Cloud service account.
2. Enable the Google Sheets API.
3. Create a spreadsheet with a sheet named `Client Intake`.
4. Share the spreadsheet with the service account email as Editor.
5. Add these variables:

```env
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_SPREADSHEET_ID=your-google-sheet-id
GOOGLE_SHEETS_SHEET_NAME=Client Intake
```

The first row can use these headers:

```text
Submitted At, Client Name, Business Name, Email, Phone, Preferred Contact, Website Purpose, Primary Goal, Pages Required, Overall Vibe, Domain Name, Desired Launch Date, Budget Range, Full Submission
```

## Notion

1. Create a Notion integration and copy its secret.
2. Create or choose a database for intake submissions.
3. Make sure it has a title property named `Name`, or set `NOTION_TITLE_PROPERTY` to the actual title property name.
4. Share the database with the integration.
5. Add these variables:

```env
NOTION_API_KEY=secret_xxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_DATABASE_ID=your-notion-database-id
NOTION_TITLE_PROPERTY=Name
```

Each Notion page stores the full intake as section toggles, so the database can stay simple.

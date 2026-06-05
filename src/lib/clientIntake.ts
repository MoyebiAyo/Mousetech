export type IntakeFieldType =
  | "text"
  | "email"
  | "tel"
  | "url"
  | "date"
  | "select"
  | "checkbox"
  | "textarea"
  | "checkbox-group";

export type IntakeField = {
  name: string;
  label: string;
  type: IntakeFieldType;
  required?: boolean;
  placeholder?: string;
  options?: string[];
  helpText?: string;
};

export type IntakeStep = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  fields: IntakeField[];
};

export const intakeSteps: IntakeStep[] = [
  {
    id: "admin",
    eyebrow: "01",
    title: "Project & Admin Details",
    description: "Tell us who we are working with and the best way to reach you.",
    fields: [
      { name: "clientName", label: "Client full name", type: "text", required: true },
      { name: "businessName", label: "Business / brand name", type: "text", required: true },
      { name: "email", label: "Client email", type: "email", required: true },
      { name: "phone", label: "Phone number", type: "tel", required: true },
      {
        name: "preferredContactMethod",
        label: "Preferred contact method",
        type: "select",
        required: true,
        options: ["Email", "WhatsApp", "Call", "Email & WhatsApp"],
      },
      { name: "referredBy", label: "Referred by", type: "text", placeholder: "Google, Instagram, referral, event..." },
    ],
  },
  {
    id: "client",
    eyebrow: "02",
    title: "About the Client",
    description: "A quick profile helps us shape the message, voice, and structure.",
    fields: [
      { name: "profession", label: "Profession / role", type: "text", required: true },
      { name: "industry", label: "Industry / niche", type: "text", required: true },
      {
        name: "shortBio",
        label: "Short bio",
        type: "textarea",
        required: true,
        placeholder: "How should the client or business be described?",
      },
      { name: "location", label: "Location", type: "text", placeholder: "City, state, country" },
      {
        name: "profilePhotoAvailable",
        label: "Profile photo available?",
        type: "select",
        options: ["Yes", "No", "Not sure yet"],
        helpText: "If yes, upload it to Google Drive and share a link with access set to anyone with the link as editor.",
      },
    ],
  },
  {
    id: "goals",
    eyebrow: "03",
    title: "Website Goals & Audience",
    description: "Define what the website must achieve and who it must persuade.",
    fields: [
      {
        name: "websitePurpose",
        label: "Purpose of website",
        type: "select",
        required: true,
        options: ["Business website", "Portfolio", "E-commerce", "Booking / services", "Blog / publication", "Landing page", "Other"],
      },
      { name: "primaryGoal", label: "Primary goal", type: "text", required: true, placeholder: "Contact and hire, sell products, book calls..." },
      { name: "targetAudience", label: "Target audience", type: "textarea", required: true },
      { name: "competitors", label: "Competitors / inspiration websites", type: "textarea", placeholder: "Add links and what you like about them." },
      { name: "sitesDisliked", label: "Sites or styles to avoid", type: "textarea" },
    ],
  },
  {
    id: "content",
    eyebrow: "04",
    title: "Content & Pages Needed",
    description: "Choose the content blocks and pages we should plan for.",
    fields: [
      {
        name: "pagesRequired",
        label: "Pages required",
        type: "checkbox-group",
        required: true,
        options: ["Home", "About", "Services", "Portfolio", "Skills", "Blog", "Contact", "Pricing", "FAQ", "Testimonials"],
      },
      {
        name: "portfolioSamples",
        label: "Portfolio / work samples",
        type: "textarea",
        placeholder: "Paste Google Drive links for images/videos/files, plus case study links and quantity.",
        helpText: "Upload files to Google Drive and set access to anyone with the link as editor.",
      },
      { name: "projectDescriptions", label: "Project descriptions", type: "textarea", placeholder: "Titles, roles, summaries, outcomes..." },
      {
        name: "testimonials",
        label: "Testimonials",
        type: "textarea",
        placeholder: "Paste written testimonials or Google Drive links for video testimonials.",
        helpText: "For video files, upload to Google Drive and set access to anyone with the link as editor.",
      },
      { name: "clientLogosToShow", label: "Client logos to show?", type: "select", options: ["Yes", "No", "Not sure yet"] },
      { name: "downloadableResume", label: "Downloadable CV / resume?", type: "select", options: ["Yes", "No", "Not applicable"] },
      { name: "blogSection", label: "Blog / articles section?", type: "select", options: ["Yes", "No", "Later"] },
    ],
  },
  {
    id: "brand",
    eyebrow: "05",
    title: "Design & Branding",
    description: "Share the visual direction, assets, and tone we should design around.",
    fields: [
      {
        name: "hasLogo",
        label: "Do you have a logo?",
        type: "select",
        required: true,
        options: ["Yes", "No", "Needs refinement"],
        helpText: "If yes, upload logo files to Google Drive and share a link with access set to anyone with the link as editor.",
      },
      { name: "brandColors", label: "Brand colors", type: "text", placeholder: "Example: orange, purple, black, calm neutrals..." },
      { name: "preferredFonts", label: "Preferred fonts", type: "text", placeholder: "Or leave to designer" },
      { name: "overallVibe", label: "Overall vibe", type: "text", required: true, placeholder: "Elegant, corporate, bold, playful, luxury..." },
      { name: "themePreference", label: "Dark or light mode?", type: "select", options: ["Dark", "Light", "No preference", "Both"] },
      { name: "referenceWebsites", label: "Reference websites", type: "textarea", placeholder: "Paste links and notes." },
      {
        name: "existingStyleGuide",
        label: "Existing style guide?",
        type: "select",
        options: ["Yes", "No", "Not sure"],
        helpText: "If yes, upload the guide to Google Drive and share a link with access set to anyone with the link as editor.",
      },
    ],
  },
  {
    id: "technical",
    eyebrow: "06",
    title: "Technical Requirements",
    description: "Capture the operational pieces needed behind the scenes.",
    fields: [
      { name: "domainName", label: "Domain name", type: "text", required: true, placeholder: "Existing domain or needs help getting one" },
      { name: "cmsRequired", label: "CMS required?", type: "select", options: ["Yes", "No", "Not sure"] },
      { name: "contactForm", label: "Contact form?", type: "select", options: ["Yes", "No", "Not sure"] },
      { name: "bookingScheduling", label: "Booking / scheduling?", type: "select", options: ["Yes", "No", "Email or WhatsApp only", "Not sure"] },
      { name: "socialMediaLinks", label: "Social media links", type: "textarea", placeholder: "Instagram, LinkedIn, X, Facebook, TikTok..." },
      { name: "otherIntegrations", label: "Other integrations", type: "textarea", placeholder: "Payment, chat widget, analytics, newsletter, CRM..." },
    ],
  },
  {
    id: "timeline",
    eyebrow: "07",
    title: "Timeline & Budget",
    description: "Help us plan scope, urgency, and the right delivery approach.",
    fields: [
      { name: "desiredLaunchDate", label: "Desired launch date", type: "date", required: true },
      { name: "hardDeadline", label: "Hard deadline or event date?", type: "text" },
      {
        name: "budgetRange",
        label: "Agreed budget / range",
        type: "select",
        required: true,
        options: ["Below ₦300k", "₦300k - ₦600k", "₦600k - ₦1m", "₦1m - ₦2m", "Above ₦2m", "Not decided yet"],
      },
      { name: "depositPaid", label: "Deposit paid?", type: "select", options: ["Yes", "No", "Pending"] },
      { name: "paymentPlan", label: "Payment plan", type: "textarea", placeholder: "Describe split payments or milestones if applicable." },
    ],
  },
  {
    id: "notes",
    eyebrow: "08",
    title: "Additional Notes & Confirmation",
    description: "Add any final details and confirm we can review your submission.",
    fields: [
      { name: "specialRequests", label: "Special requests", type: "textarea", placeholder: "Anything specific not covered above." },
      {
        name: "filesToProvide",
        label: "Google Drive links for files",
        type: "textarea",
        placeholder: "Paste Drive links for photos, logos, copy, CV, brand guide, videos, and other files.",
        helpText: "Upload all files to Google Drive and set each folder/file to anyone with the link as editor before sharing.",
      },
      {
        name: "accuracyConfirmation",
        label: "I confirm this information is accurate and MouseTech can contact me about this project.",
        type: "checkbox",
        required: true,
      },
    ],
  },
];

export const allIntakeFields = intakeSteps.flatMap((step) => step.fields);

export type IntakePayload = Record<string, string | string[] | boolean>;

export type IntakeValidationResult = {
  valid: boolean;
  errors: Record<string, string>;
  sanitized: IntakePayload;
};

function sanitizeString(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, 4000) : "";
}

function sanitizeStringArray(value: unknown) {
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is string => typeof item === "string").map((item) => item.trim()).filter(Boolean).slice(0, 20);
}

export function validateIntakePayload(input: unknown): IntakeValidationResult {
  const source = input && typeof input === "object" ? (input as Record<string, unknown>) : {};
  const errors: Record<string, string> = {};
  const sanitized: IntakePayload = {};

  for (const field of allIntakeFields) {
    if (field.type === "checkbox-group") {
      const value = sanitizeStringArray(source[field.name]);
      sanitized[field.name] = value;
      if (field.required && value.length === 0) {
        errors[field.name] = "Choose at least one option.";
      }
      continue;
    }

    if (field.type === "checkbox") {
      const value = source[field.name] === true;
      sanitized[field.name] = value;
      if (field.required && !value) {
        errors[field.name] = "This confirmation is required.";
      }
      continue;
    }

    const value = sanitizeString(source[field.name]);
    sanitized[field.name] = value;

    if (field.required && !value) {
      errors[field.name] = "This field is required.";
      continue;
    }

    if (field.type === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      errors[field.name] = "Enter a valid email address.";
    }

    if (field.type === "url" && value) {
      try {
        new URL(value);
      } catch {
        errors[field.name] = "Enter a valid URL.";
      }
    }
  }

  return { valid: Object.keys(errors).length === 0, errors, sanitized };
}

export function fieldValueToText(value: string | string[] | boolean | undefined) {
  if (Array.isArray(value)) return value.join(", ");
  if (typeof value === "boolean") return value ? "Yes" : "No";
  return value || "";
}

export function buildSubmissionRows(payload: IntakePayload) {
  return intakeSteps.flatMap((step) =>
    step.fields.map((field) => ({
      section: step.title,
      label: field.label,
      value: fieldValueToText(payload[field.name]),
    })),
  );
}

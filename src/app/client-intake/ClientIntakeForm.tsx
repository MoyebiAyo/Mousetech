"use client";

import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ClipboardList,
  Loader2,
  Send,
} from "lucide-react";
import { intakeSteps, validateIntakePayload, type IntakeField, type IntakePayload } from "@/lib/clientIntake";

const initialPayload = intakeSteps.reduce<IntakePayload>((payload, step) => {
  step.fields.forEach((field) => {
    payload[field.name] = field.type === "checkbox-group" ? [] : field.type === "checkbox" ? false : "";
  });
  return payload;
}, {});

function getStepErrors(stepIndex: number, errors: Record<string, string>) {
  const fields = intakeSteps[stepIndex].fields.map((field) => field.name);
  return fields.filter((name) => errors[name]);
}

function valueToPreview(value: string | string[] | boolean | undefined) {
  if (Array.isArray(value)) return value.length ? value.join(", ") : "Not provided";
  if (typeof value === "boolean") return value ? "Confirmed" : "Not confirmed";
  return value || "Not provided";
}

export default function ClientIntakeForm() {
  const [stepIndex, setStepIndex] = useState(0);
  const [payload, setPayload] = useState<IntakePayload>(initialPayload);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  const activeStep = intakeSteps[stepIndex];
  const isReview = stepIndex === intakeSteps.length;
  const progress = Math.round(((Math.min(stepIndex + 1, intakeSteps.length)) / intakeSteps.length) * 100);

  const completedSteps = useMemo(
    () =>
      intakeSteps.map((_, index) => {
        const validation = validateIntakePayload(payload);
        return getStepErrors(index, validation.errors).length === 0;
      }),
    [payload],
  );

  function updateField(name: string, value: string | string[] | boolean) {
    setPayload((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      if (!current[name]) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
  }

  function validateCurrentStep() {
    const validation = validateIntakePayload(payload);
    const stepErrors = isReview
      ? validation.errors
      : Object.fromEntries(
          Object.entries(validation.errors).filter(([name]) =>
            activeStep.fields.some((field) => field.name === name),
          ),
        );

    setErrors((current) => ({ ...current, ...stepErrors }));
    return Object.keys(stepErrors).length === 0;
  }

  function goNext() {
    if (!validateCurrentStep()) return;
    setStepIndex((current) => Math.min(current + 1, intakeSteps.length));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goBack() {
    setStepIndex((current) => Math.max(current - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function submitForm() {
    const validation = validateIntakePayload(payload);
    setErrors(validation.errors);
    if (!validation.valid) {
      const firstInvalidStep = intakeSteps.findIndex((step) =>
        step.fields.some((field) => validation.errors[field.name]),
      );
      setStepIndex(firstInvalidStep >= 0 ? firstInvalidStep : 0);
      return;
    }

    setSubmitState("submitting");
    setServerMessage("");

    try {
      const response = await fetch("/api/client-intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, companyWebsite: "" }),
      });
      const data = (await response.json()) as { ok?: boolean; message?: string; errors?: Record<string, string> };

      if (!response.ok || !data.ok) {
        setSubmitState("error");
        setServerMessage(data.message || "Something went wrong while submitting your intake form.");
        if (data.errors) setErrors(data.errors);
        return;
      }

      setSubmitState("success");
      setServerMessage(data.message || "Your intake form has been submitted.");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setSubmitState("error");
      setServerMessage("Network error. Please check your connection and try again.");
    }
  }

  if (submitState === "success") {
    return (
      <section className="px-[5%] py-12 sm:py-16">
        <div className="mx-auto max-w-[860px] rounded-lg border border-[#eaeaea] bg-white p-8 sm:p-12 text-center shadow-[0_16px_48px_rgba(0,0,0,0.06)]">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-black text-white">
            <CheckCircle2 className="h-7 w-7" />
          </div>
          <h1 className="mb-4 text-3xl font-bold text-black sm:text-4xl" style={{ letterSpacing: "-0.03em" }}>
            Intake submitted
          </h1>
          <p className="mx-auto max-w-[620px] text-base leading-7 text-gray-600">
            {serverMessage} A MouseTech project lead will review your goals, content needs, timeline, and budget before reaching out.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="https://wa.me/2348078933943" target="_blank" rel="noopener noreferrer" className="btn-solid">
              Message on WhatsApp
            </a>
            <a href="/" className="btn-outline">
              Back to homepage
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-[5%] py-10 sm:py-14">
      <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[300px_1fr]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-lg border border-[#eaeaea] bg-white p-5">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-black text-white">
                <ClipboardList className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-gray-500">Progress</p>
                <p className="text-sm font-semibold text-black">{progress}% complete</p>
              </div>
            </div>
            <div className="mb-5 h-2 overflow-hidden rounded-full bg-[#f0f0f0]">
              <div className="h-full rounded-full bg-black transition-all duration-300" style={{ width: `${progress}%` }} />
            </div>
            <div className="space-y-1">
              {intakeSteps.map((step, index) => {
                const active = index === stepIndex;
                const done = completedSteps[index] && index < stepIndex;
                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => setStepIndex(index)}
                    className={`flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left transition-colors ${
                      active ? "bg-black text-white" : "text-gray-700 hover:bg-[#fafafa]"
                    }`}
                  >
                    <span
                      className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md border text-xs font-semibold ${
                        active ? "border-white/20 bg-white text-black" : done ? "border-black bg-black text-white" : "border-[#eaeaea] bg-white text-gray-500"
                      }`}
                    >
                      {done ? <Check className="h-3.5 w-3.5" /> : index + 1}
                    </span>
                    <span className="text-sm font-medium">{step.title}</span>
                  </button>
                );
              })}
              <button
                type="button"
                onClick={() => {
                  if (validateCurrentStep()) setStepIndex(intakeSteps.length);
                }}
                className={`flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left transition-colors ${
                  isReview ? "bg-black text-white" : "text-gray-700 hover:bg-[#fafafa]"
                }`}
              >
                <span className={`flex h-6 w-6 items-center justify-center rounded-md border text-xs font-semibold ${isReview ? "border-white/20 bg-white text-black" : "border-[#eaeaea] bg-white text-gray-500"}`}>
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-medium">Review & submit</span>
              </button>
            </div>
          </div>
        </aside>

        <div className="rounded-lg border border-[#eaeaea] bg-white p-5 shadow-[0_16px_48px_rgba(0,0,0,0.04)] sm:p-8">
          {isReview ? (
            <ReviewStep payload={payload} onEdit={(index) => setStepIndex(index)} />
          ) : (
            <>
              <div className="mb-8 border-b border-[#eaeaea] pb-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">{activeStep.eyebrow}</p>
                <h2 className="mb-3 text-2xl font-bold text-black sm:text-3xl" style={{ letterSpacing: "-0.03em" }}>
                  {activeStep.title}
                </h2>
                <p className="max-w-[680px] text-base leading-7 text-gray-600">{activeStep.description}</p>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {activeStep.fields.map((field) => (
                  <FieldControl
                    key={field.name}
                    field={field}
                    value={payload[field.name]}
                    error={errors[field.name]}
                    onChange={(value) => updateField(field.name, value)}
                  />
                ))}
              </div>
            </>
          )}

          <input
            type="text"
            value=""
            onChange={() => undefined}
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            name="companyWebsite"
            aria-hidden="true"
          />

          {submitState === "error" && (
            <div className="mt-6 rounded-md border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-700">{serverMessage}</div>
          )}

          <div className="mt-8 flex flex-col-reverse gap-3 border-t border-[#eaeaea] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={goBack}
              disabled={stepIndex === 0 || submitState === "submitting"}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-[#eaeaea] bg-white px-5 py-3 text-sm font-medium text-black transition-colors hover:border-black disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>

            {isReview ? (
              <button
                type="button"
                onClick={submitForm}
                disabled={submitState === "submitting"}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-900 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitState === "submitting" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                {submitState === "submitting" ? "Submitting..." : "Submit intake"}
              </button>
            ) : (
              <button
                type="button"
                onClick={goNext}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-900"
              >
                Continue
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FieldControl({
  field,
  value,
  error,
  onChange,
}: {
  field: IntakeField;
  value: string | string[] | boolean | undefined;
  error?: string;
  onChange: (value: string | string[] | boolean) => void;
}) {
  const fieldId = `intake-${field.name}`;
  const baseClass =
    "mt-2 w-full rounded-md border bg-white px-4 py-3 text-sm text-black transition-colors placeholder:text-gray-400 focus:border-black focus:outline-none";
  const borderClass = error ? "border-red-300" : "border-[#dcdcdc]";
  const wide = field.type === "textarea" || field.type === "checkbox-group" || field.type === "checkbox";

  return (
    <div className={wide ? "md:col-span-2" : undefined}>
      {field.type === "checkbox" ? (
        <label htmlFor={fieldId} className={`flex items-start gap-3 rounded-md border p-4 ${error ? "border-red-300 bg-red-50" : "border-[#eaeaea] bg-[#fafafa]"}`}>
          <input
            id={fieldId}
            type="checkbox"
            checked={value === true}
            onChange={(event) => onChange(event.target.checked)}
            className="mt-1 h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
          />
          <span className="text-sm font-medium leading-6 text-black">
            {field.label}
            {field.required && <span className="text-red-600"> *</span>}
          </span>
        </label>
      ) : (
        <>
          <label htmlFor={fieldId} className="text-sm font-semibold text-black">
            {field.label}
            {field.required && <span className="text-red-600"> *</span>}
          </label>
          {field.type === "textarea" && (
            <textarea
              id={fieldId}
              value={(value as string) || ""}
              onChange={(event) => onChange(event.target.value)}
              placeholder={field.placeholder}
              rows={5}
              className={`${baseClass} ${borderClass} resize-y leading-6`}
            />
          )}
          {field.type === "select" && (
            <select
              id={fieldId}
              value={(value as string) || ""}
              onChange={(event) => onChange(event.target.value)}
              className={`${baseClass} ${borderClass}`}
            >
              <option value="">Select an option</option>
              {field.options?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}
          {field.type === "checkbox-group" && (
            <div className={`mt-2 grid gap-2 rounded-md border p-3 sm:grid-cols-2 ${error ? "border-red-300 bg-red-50" : "border-[#eaeaea] bg-[#fafafa]"}`}>
              {field.options?.map((option) => {
                const selected = Array.isArray(value) && value.includes(option);
                return (
                  <label key={option} className="flex items-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-medium text-black">
                    <input
                      type="checkbox"
                      checked={selected}
                      onChange={(event) => {
                        const current = Array.isArray(value) ? value : [];
                        onChange(event.target.checked ? [...current, option] : current.filter((item) => item !== option));
                      }}
                      className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                    />
                    {option}
                  </label>
                );
              })}
            </div>
          )}
          {!["textarea", "select", "checkbox-group"].includes(field.type) && (
            <input
              id={fieldId}
              type={field.type === "date" ? "text" : field.type}
              inputMode={field.type === "date" ? "numeric" : undefined}
              value={(value as string) || ""}
              onChange={(event) => onChange(event.target.value)}
              placeholder={field.placeholder || (field.type === "date" ? "YYYY-MM-DD or preferred date" : undefined)}
              className={`${baseClass} ${borderClass}`}
            />
          )}
        </>
      )}
      {field.helpText && <p className="mt-2 text-xs leading-5 text-gray-500">{field.helpText}</p>}
      {error && <p className="mt-2 text-xs font-medium text-red-600">{error}</p>}
    </div>
  );
}

function ReviewStep({ payload, onEdit }: { payload: IntakePayload; onEdit: (stepIndex: number) => void }) {
  return (
    <div>
      <div className="mb-8 border-b border-[#eaeaea] pb-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">Final review</p>
        <h2 className="mb-3 text-2xl font-bold text-black sm:text-3xl" style={{ letterSpacing: "-0.03em" }}>
          Review & submit
        </h2>
        <p className="max-w-[680px] text-base leading-7 text-gray-600">
          Check the details below before sending them to MouseTech. You can jump back to any section if something needs a quick edit.
        </p>
      </div>

      <div className="space-y-6">
        {intakeSteps.map((step, index) => (
          <section key={step.id} className="rounded-lg border border-[#eaeaea]">
            <div className="flex items-center justify-between gap-4 border-b border-[#eaeaea] px-4 py-3">
              <h3 className="text-base font-semibold text-black">{step.title}</h3>
              <button type="button" onClick={() => onEdit(index)} className="rounded-md border border-[#eaeaea] px-3 py-1.5 text-xs font-semibold text-black transition-colors hover:border-black">
                Edit
              </button>
            </div>
            <dl className="grid gap-0 md:grid-cols-2">
              {step.fields.map((field) => (
                <div key={field.name} className="border-b border-[#f0f0f0] px-4 py-3 last:border-b-0 md:last:border-b md:[&:nth-last-child(-n+2)]:border-b-0">
                  <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-gray-500">{field.label}</dt>
                  <dd className="mt-1 whitespace-pre-wrap text-sm leading-6 text-black">{valueToPreview(payload[field.name])}</dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
    </div>
  );
}

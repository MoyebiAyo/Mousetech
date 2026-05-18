/** Vibecode masterclass — dates and pricing aligned with promotional flyer */

export const VIBECODE_WHATSAPP_NUMBER = "2348078933943";

export const VIBECODE_WHATSAPP_MESSAGE = `VIBECODE

Full name:
See attached payment proof.`;

export const VIBECODE_WHATSAPP_URL =
  "https://wa.me/2348078933943?text=" + encodeURIComponent(VIBECODE_WHATSAPP_MESSAGE);

/** WAT (+01:00) — keep in sync with flyer */
export const vibecodeSchedule = {
  earlyBirdStart: new Date("2026-05-08T00:00:00+01:00"),
  earlyBirdEnd: new Date("2026-05-20T23:59:59+01:00"),
  regularStart: new Date("2026-05-21T00:00:00+01:00"),
  regularEnd: new Date("2026-05-22T23:59:59+01:00"),
  classStart: new Date("2026-05-22T00:00:00+01:00"),
  classEnd: new Date("2026-05-26T23:59:59+01:00"),
} as const;

export const vibecodePricing = {
  earlyBirdNgn: 7000,
  regularNgn: 10000,
} as const;

export function formatClassDatesLabel() {
  return "22nd – 26th May 2026";
}

export function formatEarlyBirdWindowLabel() {
  return "8th – 20th May 2026";
}

export function formatRegularWindowLabel() {
  return "21st – 22nd May 2026";
}

export function isEarlyBirdActive(now: Date = new Date()) {
  return now >= vibecodeSchedule.earlyBirdStart && now <= vibecodeSchedule.earlyBirdEnd;
}

export function isRegularWindowActive(now: Date = new Date()) {
  return now >= vibecodeSchedule.regularStart && now <= vibecodeSchedule.regularEnd;
}

export function getActivePricing(now: Date = new Date()) {
  if (isEarlyBirdActive(now)) {
    return {
      tier: "earlyBird" as const,
      price: vibecodePricing.earlyBirdNgn,
      windowLabel: formatEarlyBirdWindowLabel(),
    };
  }
  if (isRegularWindowActive(now)) {
    return {
      tier: "regular" as const,
      price: vibecodePricing.regularNgn,
      windowLabel: formatRegularWindowLabel(),
    };
  }
  return {
    tier: "closed" as const,
    price: vibecodePricing.regularNgn,
    windowLabel: "Registration closed",
  };
}

export function formatCountdown(totalSeconds: number) {
  const clamped = Math.max(0, totalSeconds);
  const days = Math.floor(clamped / (24 * 3600));
  const hours = Math.floor((clamped % (24 * 3600)) / 3600);
  const minutes = Math.floor((clamped % 3600) / 60);
  return { days, hours, minutes };
}

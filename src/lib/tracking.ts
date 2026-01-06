/**
 * Simple tracking helper that logs and forwards analytics events.
 */
import { sendAnalyticsEvent } from "./analytics";

type EventPayload = Record<string, unknown>;

export const standardEvents = {
  ctaEstimateClick: "cta_estimate_click",
  phoneClick: "phone_click",
  estimateStepComplete: "estimate_step_complete",
  estimateSubmit: "estimate_submit",
  estimateSuccess: "estimate_success",
  estimateError: "estimate_error",
  leadFormSubmit: "lead_form_submit",
} as const;

export const track = (event: string, payload: EventPayload = {}): void => {
  if (process.env.NODE_ENV !== "production") {
    // Helpful for debugging analytics locally.
    console.info("[track]", event, payload);
  }
  sendAnalyticsEvent(event, payload);
};

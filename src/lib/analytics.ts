/**
 * Analytics provider wiring for client-side event forwarding.
 */
import { siteConfig } from "@/config/site";

export type AnalyticsProvider = "none" | "ga4" | "plausible";

type EventPayload = Record<string, unknown>;

const provider = siteConfig.analytics.provider;

export const sendAnalyticsEvent = (event: string, payload: EventPayload = {}): void => {
  if (provider === "none") {
    return;
  }

  if (provider === "ga4" && typeof window !== "undefined") {
    const measurementId = (siteConfig.analytics as { ga4MeasurementId: string }).ga4MeasurementId;
    // GA4 via @next/third-parties/google is initialized in the layout when configured.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).gtag?.("event", event, { ...payload, send_to: measurementId });
    return;
  }

  if (provider === "plausible" && typeof window !== "undefined") {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).plausible?.(event, { props: payload });
  }
};

export const getAnalyticsProvider = (): AnalyticsProvider => provider;

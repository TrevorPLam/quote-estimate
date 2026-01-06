/**
 * Sticky global call-to-action bar for quick estimate access.
 */
"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { track, standardEvents } from "@/lib/tracking";

interface StickyCTAProps {
  className?: string;
}

export function StickyCTA({ className }: StickyCTAProps) {
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur-lg shadow-lg ${className ?? ""}`}
    >
      <div className="container-responsive flex items-center justify-between gap-3 py-3">
        <div className="text-xs font-medium text-slate-700">Plan your project? Get an estimate first.</div>
        <div className="flex items-center gap-2 text-sm font-semibold">
          <a
            href={`tel:${siteConfig.phoneDial}`}
            className="rounded-full border border-slate-200 px-4 py-2 text-slate-800 hover:bg-slate-100"
            onClick={() => track(standardEvents.phoneClick)}
          >
            Call
          </a>
          <Link
            href="/estimate"
            className="rounded-full bg-brand-primary px-4 py-2 text-white hover:bg-slate-800"
            onClick={() => track(standardEvents.ctaEstimateClick)}
          >
            Get Estimate
          </Link>
        </div>
      </div>
    </div>
  );
}

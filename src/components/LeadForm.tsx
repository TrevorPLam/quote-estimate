/**
 * Simple single-step lead capture form as a fallback.
 */
"use client";

import { FormEvent, useState } from "react";
import { track, standardEvents } from "@/lib/tracking";

export function LeadForm() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    track(standardEvents.leadFormSubmit, { form: "fallback" });

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formState, source: "lead-form" }),
      });

      if (!response.ok) throw new Error("Submission failed");
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div>
        <label className="block text-sm font-medium text-slate-900" htmlFor="lead-name">
          Name
        </label>
        <input
          id="lead-name"
          required
          className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2"
          value={formState.name}
          onChange={(e) => setFormState((prev) => ({ ...prev, name: e.target.value }))}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-900" htmlFor="lead-email">
          Email
        </label>
        <input
          id="lead-email"
          type="email"
          required
          className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2"
          value={formState.email}
          onChange={(e) => setFormState((prev) => ({ ...prev, email: e.target.value }))}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-900" htmlFor="lead-message">
          Project details
        </label>
        <textarea
          id="lead-message"
          className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2"
          rows={4}
          value={formState.message}
          onChange={(e) => setFormState((prev) => ({ ...prev, message: e.target.value }))}
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-lg bg-brand-primary px-4 py-2 text-white hover:bg-slate-800"
      >
        {status === "submitting" ? "Sending..." : "Submit"}
      </button>
      {status === "success" && <p className="text-sm text-green-700">Thanks! We will follow up shortly.</p>}
      {status === "error" && <p className="text-sm text-red-600">Something went wrong. Please try again.</p>}
    </form>
  );
}

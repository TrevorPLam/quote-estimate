/**
 * Multi-step estimate wizard with validation and upload stub.
 */
"use client";

import { useMemo, useState } from "react";
import { siteConfig } from "@/config/site";
import { FileUpload } from "./FileUpload";
import { ProgressBar } from "./ProgressBar";
import { track, standardEvents } from "@/lib/tracking";

const steps = siteConfig.estimateWizard.steps;

export function EstimateWizard() {
  const [stepIndex, setStepIndex] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const currentStep = steps[stepIndex];

  const stepIsValid = useMemo(() => {
    return currentStep.fields.every((field) => {
      if (!field.required) return true;
      return Boolean(formData[field.name]?.trim());
    });
  }, [currentStep, formData]);

  const handleNext = () => {
    if (!stepIsValid) return;
    const nextIndex = stepIndex + 1;
    track(standardEvents.estimateStepComplete, { step: currentStep.id });
    setStepIndex(nextIndex);
  };

  const handleBack = () => setStepIndex((index) => Math.max(0, index - 1));

  const onSubmit = async () => {
    if (!stepIsValid) return;
    setStatus("submitting");
    track(standardEvents.estimateSubmit, { source: "wizard" });

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          photos: files.length ? files.map((file) => file.name) : ["upload not configured"],
          source: "estimate-wizard",
        }),
      });

      if (!response.ok) throw new Error("Submit failed");
      setStatus("success");
      track(standardEvents.estimateSuccess, { source: "wizard" });
    } catch (error) {
      console.error(error);
      setStatus("error");
      track(standardEvents.estimateError, { source: "wizard" });
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Thanks for reaching out!</h2>
        <p className="mt-2 text-slate-700">
          We received your estimate request. What happens next: our team reviews submissions daily and will respond within
          TODO:INPUT with a scheduling link.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="space-y-2">
        <p className="text-sm font-semibold text-slate-700">Step {stepIndex + 1} of {steps.length}</p>
        <ProgressBar currentStep={stepIndex + 1} totalSteps={steps.length} />
        <h2 className="text-xl font-semibold text-slate-900">{currentStep.title}</h2>
      </div>

      <div className="space-y-4">
        {currentStep.fields.map((field) => (
          <div key={field.name}>
            <label className="block text-sm font-medium text-slate-900" htmlFor={field.name}>
              {field.label}
              {field.required && <span className="ml-1 text-red-600">*</span>}
            </label>
            {field.type === "select" ? (
              <select
                id={field.name}
                required={field.required}
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2"
                value={formData[field.name] ?? ""}
                onChange={(e) => setFormData((prev) => ({ ...prev, [field.name]: e.target.value }))}
              >
                <option value="">Select an option</option>
                {(field.options ?? []).map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : field.type === "textarea" ? (
              <textarea
                id={field.name}
                required={field.required}
                rows={4}
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2"
                value={formData[field.name] ?? ""}
                onChange={(e) => setFormData((prev) => ({ ...prev, [field.name]: e.target.value }))}
              />
            ) : (
              <input
                id={field.name}
                required={field.required}
                type={field.type === "tel" ? "tel" : field.type === "email" ? "email" : "text"}
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2"
                value={formData[field.name] ?? ""}
                onChange={(e) => setFormData((prev) => ({ ...prev, [field.name]: e.target.value }))}
              />
            )}
          </div>
        ))}
      </div>

      {siteConfig.estimateWizard.enablePhotoUpload && (
        <FileUpload maxFiles={siteConfig.estimateWizard.maxPhotos} onFilesChange={setFiles} />
      )}

      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={handleBack}
          disabled={stepIndex === 0}
          className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Back
        </button>
        {stepIndex === steps.length - 1 ? (
          <button
            type="button"
            onClick={onSubmit}
            disabled={!stepIsValid || status === "submitting"}
            className="rounded-lg bg-brand-primary px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            {status === "submitting" ? "Submitting..." : "Submit"}
          </button>
        ) : (
          <button
            type="button"
            onClick={handleNext}
            disabled={!stepIsValid}
            className="rounded-lg bg-brand-primary px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Next
          </button>
        )}
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">We could not submit your request. Please try again shortly.</p>
      )}
    </div>
  );
}

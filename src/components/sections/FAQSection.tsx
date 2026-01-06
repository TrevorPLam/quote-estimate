/**
 * Home FAQ section for quick answers.
 */
import { FAQ } from "../FAQ";
import { siteConfig } from "@/config/site";

export function FAQSection() {
  return (
    <section className="bg-slate-50 py-12">
      <div className="container-responsive space-y-4">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Frequently asked</h2>
          <p className="text-slate-700">Straightforward answers to common project questions.</p>
        </div>
        <FAQ items={siteConfig.faqs} />
      </div>
    </section>
  );
}

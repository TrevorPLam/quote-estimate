/**
 * Social proof section combining testimonials and badges.
 */
import { Testimonials } from "../Testimonials";
import { ProofStack } from "../ProofStack";

export function ProofSection() {
  return (
    <section className="bg-slate-50 py-12">
      <div className="container-responsive space-y-6">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-semibold text-slate-900">Clients trust our process</h2>
            <p className="mt-2 text-slate-700">Outcome-oriented stories and credentials clients can verify.</p>
            <ProofStack />
          </div>
          <div className="md:col-span-2">
            <Testimonials />
          </div>
        </div>
      </div>
    </section>
  );
}

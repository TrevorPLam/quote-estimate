/**
 * Home section highlighting available services.
 */
import { ServiceCards } from "../ServiceCards";

export function ServicesSection() {
  return (
    <section className="bg-white py-12">
      <div className="container-responsive space-y-4">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Services tailored to your project</h2>
          <p className="text-slate-700">Each estimate outlines scope, options, and timeline expectations.</p>
        </div>
        <ServiceCards />
      </div>
    </section>
  );
}

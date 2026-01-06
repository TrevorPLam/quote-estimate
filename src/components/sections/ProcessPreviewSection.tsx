/**
 * Overview of the project delivery process.
 */
export function ProcessPreviewSection() {
  const steps = [
    { title: "Discover", text: "Share goals and constraints so we can scope accurately." },
    { title: "Plan", text: "We develop phased estimates, schedule options, and permit steps." },
    { title: "Build", text: "Dedicated lead keeps you updated until punch list is closed." },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container-responsive space-y-4">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">How we work</h2>
          <p className="text-slate-700">Predictable steps from consultation through completion.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

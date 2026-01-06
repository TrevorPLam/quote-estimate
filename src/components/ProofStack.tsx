/**
 * Quick proof block for credentials and guarantees.
 */
import { siteConfig } from "@/config/site";

export function ProofStack() {
  return (
    <div className="grid gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-3">
      {siteConfig.proof.yearsInBusiness && (
        <div>
          <div className="text-xs uppercase tracking-wide text-slate-500">Experience</div>
          <div className="text-sm font-semibold text-slate-900">{siteConfig.proof.yearsInBusiness}</div>
        </div>
      )}
      {siteConfig.proof.credentials && siteConfig.proof.credentials.length > 0 && (
        <div>
          <div className="text-xs uppercase tracking-wide text-slate-500">Credentials</div>
          <ul className="mt-2 space-y-1 text-sm text-slate-700">
            {siteConfig.proof.credentials.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      {siteConfig.proof.guarantees && siteConfig.proof.guarantees.length > 0 && (
        <div>
          <div className="text-xs uppercase tracking-wide text-slate-500">Guarantees</div>
          <ul className="mt-2 space-y-1 text-sm text-slate-700">
            {siteConfig.proof.guarantees.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

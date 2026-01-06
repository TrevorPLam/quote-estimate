/**
 * Custom not-found page for missing routes.
 */
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="space-y-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-slate-900">Page not found</h1>
      <p className="text-slate-700">We could not find that page. Try starting an estimate instead.</p>
      <div className="flex justify-center gap-3">
        <Link href="/" className="rounded-full border border-slate-200 px-4 py-2 text-slate-800">
          Back home
        </Link>
        <Link href="/estimate" className="rounded-full bg-brand-primary px-4 py-2 text-white">
          Get Estimate
        </Link>
      </div>
    </div>
  );
}

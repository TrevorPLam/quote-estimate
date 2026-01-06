/**
 * Testimonial quotes for social proof.
 */
import { siteConfig } from "@/config/site";

export function Testimonials() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {siteConfig.reviews.highlightQuotes.map((quote, index) => (
        <figure key={index} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <blockquote className="text-slate-800">“{quote.text}”</blockquote>
          {quote.name && <figcaption className="mt-2 text-sm text-slate-600">— {quote.name}</figcaption>}
        </figure>
      ))}
    </div>
  );
}

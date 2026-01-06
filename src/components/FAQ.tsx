/**
 * Frequently asked questions list.
 */
interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  items: FAQItem[];
}

export function FAQ({ items }: FAQProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details key={item.q} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <summary className="cursor-pointer text-sm font-semibold text-slate-900">{item.q}</summary>
          <p className="mt-2 text-sm text-slate-700">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

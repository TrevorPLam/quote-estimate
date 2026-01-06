/**
 * Horizontal progress indicator for multi-step flows.
 */
interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const percentage = Math.min(100, Math.round((currentStep / totalSteps) * 100));
  return (
    <div className="h-2 w-full rounded-full bg-slate-100" role="progressbar" aria-valuenow={percentage} aria-valuemin={0} aria-valuemax={100}>
      <div className="h-full rounded-full bg-brand-primary transition-all" style={{ width: `${percentage}%` }} />
    </div>
  );
}

"use client";

export const fieldClass =
  "w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/50 transition-colors placeholder:text-muted-foreground";

export function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-foreground/80 mb-1.5 inline-block">
        {label}
        {required && <span className="text-[var(--gold)]"> *</span>}
      </span>
      {children}
    </label>
  );
}

export function ConsentCheck({
  checked,
  onChange,
  label,
  required,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
  required?: boolean;
}) {
  return (
    <label className="flex items-start gap-2.5 text-xs text-muted-foreground cursor-pointer">
      <input
        type="checkbox"
        required={required}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 h-4 w-4 rounded border-input accent-[var(--purple-glow)] shrink-0"
      />
      <span>{label}</span>
    </label>
  );
}
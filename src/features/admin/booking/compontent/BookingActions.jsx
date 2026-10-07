"use client";

export default function BookingActions({
  onClose,
  onSave,
}) {
  return (
    <div className="flex gap-3">
      <button
        type="button"
        onClick={onClose}
        className="flex-1 rounded-xl border border-border px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
      >
        Close
      </button>

      <button
        type="button"
        onClick={onSave}
        className="flex-1 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90 active:scale-[0.98]"
      >
        Save changes
      </button>
    </div>
  );
}
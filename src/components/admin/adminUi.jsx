"use client";

import { Search } from "lucide-react";

export function SectionHeading({ eyebrow, title, description, action }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow && <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>}
        <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{title}</h1>
        {description && <p className="mt-2 text-sm text-muted-foreground">{description}</p>}
      </div>
      {action}
    </div>
  );
}

export function StatCard({ label, value, change, detail, icon: Icon }) {
  return (
    <article className="rounded-2xl border border-border bg-card p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-card">
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm text-muted-foreground">{label}</p>
        {Icon && <span className="rounded-xl bg-accent p-2.5 text-primary"><Icon size={18} /></span>}
      </div>
      <p className="mt-5 text-3xl font-semibold tracking-tight text-foreground">{value}</p>
      <div className="mt-3 flex items-center gap-2 text-xs">
        {change && <span className="font-semibold text-success">{change}</span>}
        <span className="text-muted-foreground">{detail}</span>
      </div>
    </article>
  );
}

export function StatusBadge({ status }) {
  const tone = {
    Confirmed: "bg-success/10 text-success",
    Completed: "bg-primary/10 text-primary",
    Pending: "bg-warning/15 text-warning-foreground",
    Cancelled: "bg-destructive/10 text-destructive",
    Active: "bg-success/10 text-success",
    Inactive: "bg-muted text-muted-foreground",
  }[status] || "bg-muted text-muted-foreground";

  return <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${tone}`}>{status}</span>;
}

export function SearchInput({ value, onChange, placeholder = "Search..." }) {
  return (
    <label className="flex h-10 min-w-0 items-center gap-2 rounded-xl border border-border bg-background px-3 text-muted-foreground focus-within:ring-2 focus-within:ring-ring/30">
      <Search size={16} />
      <input value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} className="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground" />
    </label>
  );
}

export function EmptyState({ title, description }) {
  return <div className="rounded-2xl border border-dashed border-border bg-card px-6 py-14 text-center"><p className="font-medium text-foreground">{title}</p><p className="mt-2 text-sm text-muted-foreground">{description}</p></div>;
}

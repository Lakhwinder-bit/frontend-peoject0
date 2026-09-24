"use client";

import { MoreHorizontal, Plus } from "lucide-react";
import { packages } from "@/components/admin/adminData";
import { SectionHeading, StatusBadge } from "@/components/admin/adminUi";

export default function PackagesPage() {
	return <div className="mx-auto w-full max-w-[1500px] space-y-7 p-4 sm:p-6 lg:p-8"><SectionHeading eyebrow="Catalog" title="Packages" description="Curate the journeys your customers remember." action={<button className="inline-flex h-10 items-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground"><Plus size={16} /> Create package</button>} /><div className="grid gap-4 lg:grid-cols-3">{packages.map((item, index) => <article key={item.name} className="group rounded-2xl border border-border bg-card p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-card"><div className={`flex h-32 items-end rounded-xl bg-gradient-to-br ${index === 0 ? "from-secondary/70 to-primary/80" : index === 1 ? "from-primary/80 to-primary-light" : "from-accent to-secondary/60"} p-4`}><span className="text-lg font-semibold text-primary-foreground">{item.destination}</span></div><div className="mt-5 flex items-start justify-between"><div><h2 className="font-semibold text-foreground">{item.name}</h2><p className="mt-1 text-sm text-muted-foreground">{item.duration}</p></div><button aria-label={`More actions for ${item.name}`} className="text-muted-foreground"><MoreHorizontal size={18} /></button></div><div className="mt-5 flex items-end justify-between border-t border-border pt-4"><div><p className="text-xs text-muted-foreground">Starting from</p><p className="mt-1 text-lg font-semibold text-foreground">{item.price}</p></div><StatusBadge status={item.status} /></div></article>)}</div></div>;
}

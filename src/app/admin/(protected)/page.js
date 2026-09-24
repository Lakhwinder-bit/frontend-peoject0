"use client";

import { ArrowUpRight, CalendarCheck, CarFront, CheckCircle2, Clock3, IndianRupee, MoreHorizontal, TrendingUp } from "lucide-react";
import { bookings } from "@/components/admin/adminData";
import { SectionHeading, StatCard, StatusBadge } from "@/components/admin/adminUi";

const bars = [58, 76, 45, 82, 68, 91, 74, 88, 62, 79, 96, 84];

export default function AdminDashboard() {
  return (
    <div className="mx-auto w-full max-w-[1500px] space-y-7 p-4 sm:p-6 lg:p-8">
      <SectionHeading eyebrow="Overview" title="Dashboard" description="A live snapshot of your travel operations." action={<button className="inline-flex h-10 items-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-soft transition hover:bg-primary-dark"><ArrowUpRight size={16} /> Export report</button>} />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Today's bookings" value="18" change="+12%" detail="vs yesterday" icon={CalendarCheck} />
        <StatCard label="Monthly revenue" value="₹8.1L" change="+9.4%" detail="vs last month" icon={IndianRupee} />
        <StatCard label="Pending approvals" value="06" change="4 urgent" detail="needs attention" icon={Clock3} />
        <StatCard label="Completed trips" value="284" change="+7.2%" detail="this month" icon={CheckCircle2} />
      </div>
      <div className="grid gap-5 xl:grid-cols-[1.45fr_0.8fr]">
        <section className="rounded-2xl border border-border bg-card p-5 shadow-soft sm:p-6">
          <div className="flex items-start justify-between"><div><h2 className="font-semibold text-foreground">Revenue trend</h2><p className="mt-1 text-sm text-muted-foreground">Performance across the last 12 months</p></div><span className="flex items-center gap-1 text-xs font-semibold text-success"><TrendingUp size={14} /> 18.6%</span></div>
          <div className="mt-8 flex h-52 items-end gap-2 border-b border-l border-border px-2 sm:gap-4">{bars.map((height, index) => <div key={index} className="group flex h-full flex-1 items-end"><div className={`w-full rounded-t-lg transition hover:bg-secondary ${index === 10 ? "bg-secondary" : "bg-primary/15"}`} style={{ height: `${height}%` }} /></div>)}</div>
          <div className="mt-3 flex justify-between text-[10px] text-muted-foreground"><span>Oct</span><span>Dec</span><span>Feb</span><span>Apr</span><span>Jun</span><span>Sep</span></div>
        </section>
        <section className="rounded-2xl border border-border bg-card p-5 shadow-soft sm:p-6"><div className="flex items-start justify-between"><div><h2 className="font-semibold text-foreground">Bookings by vehicle</h2><p className="mt-1 text-sm text-muted-foreground">This month&apos;s trips</p></div><CarFront className="text-primary" size={20} /></div><div className="mt-7 space-y-5">{[["Sedan", "34%", "w-[80%]"], ["SUV", "28%", "w-[66%]"], ["Tempo Traveller", "22%", "w-[52%]"], ["Bus", "16%", "w-[38%]"]].map(([name, value, width]) => <div key={name}><div className="mb-2 flex justify-between text-sm"><span className="text-foreground">{name}</span><span className="text-muted-foreground">{value}</span></div><div className="h-2 rounded-full bg-muted"><div className={`h-full rounded-full bg-secondary ${width}`} /></div></div>)}</div></section>
      </div>
      <section className="rounded-2xl border border-border bg-card shadow-soft"><div className="flex items-center justify-between border-b border-border p-5 sm:p-6"><div><h2 className="font-semibold text-foreground">Recent bookings</h2><p className="mt-1 text-sm text-muted-foreground">Latest reservations across your network</p></div><button className="text-sm font-semibold text-primary hover:underline">View all</button></div><div className="overflow-x-auto"><table className="min-w-[720px] w-full text-left text-sm"><thead className="bg-muted/50 text-xs uppercase tracking-wide text-muted-foreground"><tr>{["Booking", "Customer", "Route", "Date", "Amount", "Status", ""].map((item) => <th key={item} className="px-5 py-3 font-semibold">{item}</th>)}</tr></thead><tbody className="divide-y divide-border">{bookings.map((booking) => <tr key={booking.id} className="transition hover:bg-muted/40"><td className="px-5 py-4 font-semibold text-primary">{booking.id}</td><td className="px-5 py-4 text-foreground">{booking.customer}</td><td className="px-5 py-4 text-muted-foreground">{booking.route}</td><td className="px-5 py-4 text-muted-foreground">{booking.date}</td><td className="px-5 py-4 font-medium text-foreground">{booking.amount}</td><td className="px-5 py-4"><StatusBadge status={booking.status} /></td><td className="px-5 py-4 text-muted-foreground"><MoreHorizontal size={18} /></td></tr>)}</tbody></table></div></section>
    </div>
  );
}

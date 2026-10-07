"use client";

export default function AdminTable({ columns, rows, renderRow }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-soft">
      <table className="min-w-[720px] w-full text-left text-sm">
        <thead className="border-b border-border bg-muted/50 text-xs uppercase tracking-wide text-muted-foreground">
          <tr>{columns.map((column) => <th key={column} className="px-5 py-4 font-semibold">{column}</th>)}</tr>
        </thead>
        <tbody className="divide-y divide-border">{rows.map(renderRow)}</tbody>
      </table>
    </div>
  );
}

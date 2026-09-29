"use client";

export default function BookingStatus({ status }) {
  const currentStatus = status?.toLowerCase() || "pending";

  const statusStyles = {
    confirmed:
      "bg-blue-50 text-blue-700 border-blue-200",

    pending:
      "bg-yellow-50 text-yellow-700 border-yellow-200",

    completed:
      "bg-green-50 text-green-700 border-green-200",

    cancelled:
      "bg-red-50 text-red-700 border-red-200",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium capitalize ${
        statusStyles[currentStatus] ||
        "bg-muted text-muted-foreground border-border"
      }`}
    >
      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-current" />

      {currentStatus}
    </span>
  );
}
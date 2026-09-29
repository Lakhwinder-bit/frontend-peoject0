"use client";

import {
  MapPin,
  CalendarDays,
  Star,
  MoreHorizontal,
} from "lucide-react";

import { StatusBadge } from "../adminUi";

export default function PackageTable({ packages }) {
  const packageData = packages?.data || [];

  console.log("Package Data:", packageData);

  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-soft">
      <table className="min-w-[1100px] w-full text-left text-sm">
        {/* Header */}
        <thead className="border-b border-border bg-muted/50 text-xs uppercase tracking-wide text-muted-foreground">
          <tr>
            {[
              "Package",
              "Location",
              "Duration",
              "Price",
              "Rating/Review",
              "Status",
              "Action",
            ].map((head) => (
              <th
                key={head}
                className="px-5 py-4 font-semibold"
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>

        {/* Body */}
        <tbody className="divide-y divide-border">
          {packageData.length > 0 ? (
            packageData.map((tour) => (
              <tr
                key={tour._id}
                className="transition-colors hover:bg-muted/40"
              >
                {/* Package */}
                <td className="px-5 py-5">
                  <div className="flex items-center gap-3">
                    {/* Image */}
                    <div className="h-14 w-20 shrink-0 overflow-hidden rounded-xl bg-muted">
                      {tour.image ? (
                        <img
                          src={tour.image}
                          alt={tour.title}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-xs text-muted-foreground">
                          No Image
                        </div>
                      )}
                    </div>

                    {/* Title */}
                    <div className="min-w-0">
                      <p className="truncate font-semibold text-foreground">
                        {tour.title}
                      </p>

                      <p className="mt-1 line-clamp-1 max-w-[260px] text-xs text-muted-foreground">
                        {tour.description}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Location */}
                <td className="px-5 py-5">
                  <div className="flex items-center gap-2 text-foreground">
                    <MapPin
                      size={15}
                      className="shrink-0 text-muted-foreground"
                    />

                    <span>{tour.location || "—"}</span>
                  </div>
                </td>

                {/* Duration */}
                <td className="px-5 py-5">
                  <div className="flex items-center gap-2 text-foreground">
                    <CalendarDays
                      size={15}
                      className="text-muted-foreground"
                    />

                    <span>{tour.duration || "—"}</span>
                  </div>
                </td>

                {/* Price */}
                <td className="px-5 py-5">
                  <p className="font-semibold text-foreground">
                    ₹{tour.price?.toLocaleString("en-IN")}
                  </p>
                </td>

                {/* Rating */}
                <td className="px-5 py-5">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 rounded-full bg-warning/10 px-2.5 py-1">
                      <Star
                        size={14}
                        className="fill-warning text-warning"
                      />

                      <span className="font-semibold text-foreground">
                        {tour.rating || "0.0"}
                      </span>
                    </div>

                    <span className="text-xs text-muted-foreground">
                      ({tour.reviewCount || 0})
                    </span>
                  </div>
                </td>

                {/* Status */}
                <td className="px-5 py-5">
                  <StatusBadge
                    status={tour.status ? "Active" : "Inactive"}
                  />
                </td>

                {/* Action */}
                <td className="px-5 py-5">
                  <button
                    type="button"
                    className="rounded-lg p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
                  >
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={7}
                className="px-5 py-10 text-center text-muted-foreground"
              >
                No tour packages found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
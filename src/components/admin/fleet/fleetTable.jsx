"use client";

import {
  MoreHorizontal,
  Users,
  Briefcase,
  Snowflake,
  IndianRupee,
} from "lucide-react";

import { StatusBadge } from "../adminUi";

export default function FleetTabel({ fleets }) {
  const fleetData = fleets?.data || [];

  console.log("Fleet Data:", fleetData);

  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-soft">
      <table className="min-w-[1000px] w-full text-left text-sm">
        {/* Header */}
        <thead className="border-b border-border bg-muted/50 text-xs uppercase tracking-wide text-muted-foreground">
          <tr>
            {[
              "Vehicle",
              "Category",
              "Capacity",
              "Pricing",
              "AC",
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
          {fleetData.length > 0 ? (
            fleetData.map((fleet) => (
              <tr
                key={fleet._id}
                className="transition-colors hover:bg-muted/40"
              >
                {/* Vehicle */}
                <td className="px-5 py-5">
                  <div className="flex items-center gap-3">
                    {/* Image */}
                    <div className="h-12 w-16 overflow-hidden rounded-lg bg-muted">
                      {fleet.image ? (
                        <img
                          src={fleet.image || "/veh-hatchback.jpg"}
                          alt={fleet.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-xs text-muted-foreground">
                          No Image
                        </div>
                      )}
                    </div>

                    {/* Name */}
                    <div>
                      <p className="font-semibold text-foreground">
                        {fleet.name}
                      </p>

                      {fleet.badge && (
                        <span className="mt-1 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                          {fleet.badge}
                        </span>
                      )}
                    </div>
                  </div>
                </td>

                {/* Category */}
                <td className="px-5 py-5">
                  <span className="text-foreground">
                    {fleet.category || "—"}
                  </span>
                </td>

                {/* Capacity */}
                <td className="px-5 py-5">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-foreground">
                      <Users size={15} className="text-muted-foreground" />
                      <span>{fleet.seat || 0} Seats</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Briefcase size={14} />
                      <span>{fleet.luggage || 0} kg luggage</span>
                    </div>
                  </div>
                </td>

                {/* Pricing */}
                <td className="px-5 py-5">
                  <div>
                    <p className="flex items-center gap-1 font-semibold text-foreground">
                      <IndianRupee size={14} />
                      {fleet.price?.toLocaleString("en-IN")}
                    </p>

                    <p className="mt-1 text-xs text-muted-foreground">
                      ₹{fleet.pricePerKm || 0}/km
                    </p>
                  </div>
                </td>

                {/* AC */}
                <td className="px-5 py-5">
                  <div
                    className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium ${
                      fleet.ac
                        ? "bg-success/10 text-success"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <Snowflake size={14} />

                    {fleet.ac ? "AC" : "Non-AC"}
                  </div>
                </td>

                {/* Status */}
                <td className="px-5 py-5">
                  <StatusBadge
                    status={fleet.status ? "Active" : "Inactive"}
                  />
                </td>

                {/* Action */}
                <td className="px-5 py-5 text-muted-foreground">
                  <button
                    type="button"
                    className="rounded-lg p-2 transition hover:bg-muted hover:text-foreground"
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
                No vehicles found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
"use client";

import {
  MapPin,
  MoreHorizontal,
  Route,
} from "lucide-react";

import { StatusBadge } from "../adminUi";

export default function RoutTabel({ routes }) {

  const routeData = routes?.data || [];

  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-soft">
      <table className="min-w-[850px] w-full text-left text-sm">
        {/* Header */}
        <thead className="border-b border-border bg-muted/50 text-xs uppercase tracking-wide text-muted-foreground">
          <tr>
            {[
              "Route",
              "Distance",
              "Price",
              "Assigned vehicle",
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
          {routeData.length > 0 ? (
            routeData.map((route) => (
              <tr
                key={route._id}
                className="transition-colors hover:bg-muted/40"
              >
                {/* Route */}
                <td className="px-5 py-5">
                  <div className="flex items-center gap-3">
                    <span className="rounded-lg bg-accent p-2 text-primary">
                      <Route size={16} />
                    </span>

                    <div>
                      <p className="font-semibold text-foreground">
                        {route.from}

                        <span className="mx-1 text-muted-foreground">
                          to
                        </span>

                        {route.to}
                      </p>

                      <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin size={12} />
                        North India corridor
                      </p>
                    </div>
                  </div>
                </td>

                {/* Distance */}
                <td className="px-5 py-5 text-muted-foreground">
                  {route.distance} km
                </td>

                {/* Price */}
                <td className="px-5 py-5 font-medium text-foreground">
                  ₹{route.price?.toLocaleString("en-IN")}
                </td>

                {/* Vehicle */}
                <td className="px-5 py-5 text-foreground">
                  {route.vehicle}
                </td>

                {/* Status */}
                <td className="px-5 py-5">
                 <StatusBadge status={route.status ? "Active" : "Inactive"} />
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
                colSpan={6}
                className="px-5 py-10 text-center text-muted-foreground"
              >
                No routes found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
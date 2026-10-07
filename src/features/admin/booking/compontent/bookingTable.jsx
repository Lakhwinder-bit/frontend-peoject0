"use client";

import { useState } from "react";
import {
  CalendarDays,
  Car,
  ArrowDown,
  Eye,
} from "lucide-react";

import BookingStatus from "./BookingStatus";
import BookingDetailsDrawer from "./BookingDetailsDrawer";

export default function BookingTable({ bookingTable }) {
  const [selectedBooking, setSelectedBooking] = useState(null);

  const bookings = bookingTable?.data || [];

  const formatDate = (date) => {
    if (!date) return "—";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <>
      {/* ================= TABLE ================= */}

      <div className="overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-[1250px] w-full">
            {/* ================= HEADER ================= */}

            <thead>
              <tr className="border-b border-border bg-muted/60">
                <th className="px-5 py-4 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Booking Date
                </th>

                <th className="px-5 py-4 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Customer
                </th>

                <th className="px-5 py-4 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Trip
                </th>

                <th className="px-5 py-4 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Vehicle
                </th>

                <th className="px-5 py-4 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Travel Date
                </th>

                <th className="px-5 py-4 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Status
                </th>

                <th className="px-5 py-4 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Action
                </th>
              </tr>
            </thead>

            {/* ================= BODY ================= */}

            <tbody className="divide-y divide-border">
              {bookings.length > 0 ? (
                bookings.map((booking) => (
                  <tr
                    key={booking._id}
                    className="group transition-colors hover:bg-muted/50"
                  >
                    {/* Booking Date */}

                    <td className="px-5 py-5">
                      <p className="text-sm font-medium text-foreground">
                        {formatDate(booking.createdAt)}
                      </p>

                      <p className="mt-1 text-xs text-muted-foreground">
                        {booking.createdAt
                          ? new Date(
                              booking.createdAt
                            ).toLocaleTimeString("en-IN", {
                              hour: "2-digit",
                              minute: "2-digit",
                            })
                          : "—"}
                      </p>
                    </td>

                    {/* Customer */}

                    <td className="px-5 py-5">
                      <p className="text-sm font-semibold text-foreground">
                        {booking.name || "—"}
                      </p>

                      {booking.mobile && (
                        <p className="mt-1 text-xs text-muted-foreground">
                          {booking.mobile}
                        </p>
                      )}
                    </td>

                    {/* Trip */}

                    <td className="px-5 py-5">
                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-foreground">
                          {booking.pickupLocation || "—"}
                        </p>

                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <ArrowDown size={12} />

                          <span>
                            {booking.dropLocation || "—"}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Vehicle */}

                    <td className="px-5 py-5">
                      <div className="flex items-center gap-2">
                        <Car
                          size={16}
                          className="text-muted-foreground"
                        />

                        <span className="text-sm capitalize text-foreground">
                          {booking.vehicleType || "—"}
                        </span>
                      </div>
                    </td>

                    {/* Travel Date */}

                    <td className="px-5 py-5">
                      <p className="text-sm font-medium text-foreground">
                        {formatDate(booking.travelDate)}
                      </p>

                      <p className="mt-1 text-xs text-muted-foreground">
                        {booking.travelTime || "—"}
                      </p>
                    </td>

                    {/* Status */}

                    <td className="px-5 py-5">
                      <BookingStatus status={booking.status} />
                    </td>

                    {/* Action */}

                    <td className="px-5 py-5">
                      <button
                        type="button"
                        onClick={() => setSelectedBooking(booking)}
                        className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-3.5 py-2 text-xs font-semibold text-foreground shadow-sm transition hover:border-primary/40 hover:bg-accent hover:text-accent-foreground active:scale-95"
                      >
                        <Eye size={15} />

                        View
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={7}
                    className="px-5 py-14 text-center"
                  >
                    <div className="flex flex-col items-center">
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                        <CalendarDays
                          size={20}
                          className="text-muted-foreground"
                        />
                      </div>

                      <p className="text-sm font-semibold text-foreground">
                        No bookings found
                      </p>

                      <p className="mt-1 text-xs text-muted-foreground">
                        Booking information will appear here.
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= DETAILS DRAWER ================= */}

      <BookingDetailsDrawer
        booking={selectedBooking}
        onClose={() => setSelectedBooking(null)}
      />
    </>
  );
}
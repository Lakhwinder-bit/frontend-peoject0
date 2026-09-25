"use client";

import React from "react";
import {
  CalendarDays,
  Car,
  Phone,
  Users,
  ArrowDown,
} from "lucide-react";



export default function BookingTable({ bookingTable }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-sm">

      {/* Table Scroll */}
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
                Passengers
              </th>

              <th className="px-5 py-4 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Mobile
              </th>


              <th className="px-5 py-4 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Action
              </th>

            </tr>
          </thead>

          {/* ================= BODY ================= */}
          <tbody className="divide-y divide-border">

            {bookingTable?.data.map((booking) => (

              <tr
                key={booking._id}
                className="
                  group
                  transition-colors
                  hover:bg-muted/50
                "
              >

                {/* ================= BOOKING DATE ================= */}
                <td className="px-5 py-5">

                  <div className="flex items-start gap-2.5">

                    <CalendarDays
                      size={16}
                      className="mt-0.5 text-muted-foreground"
                    />

                    <div>

                      <p className="text-sm font-medium text-foreground">
                        {booking.createdAt
                          ? new Date(
                              booking.createdAt
                            ).toLocaleDateString("en-IN")
                          : "—"}
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

                    </div>

                  </div>

                </td>

                {/* ================= CUSTOMER ================= */}
                <td className="px-5 py-5">

                  <div>

                    <p className="text-sm font-semibold text-foreground">
                      {booking.name || "—"}
                    </p>

       

                  </div>

                </td>

                {/* ================= TRIP ================= */}
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

                {/* ================= VEHICLE ================= */}
                <td className="px-5 py-5">

                  <div className="flex items-center gap-2">

                    <Car
                      size={17}
                      className="text-muted-foreground"
                    />

                    <span className="text-sm capitalize text-foreground">
                      {booking.vehicleType || "—"}
                    </span>

                  </div>

                </td>

                {/* ================= TRAVEL DATE ================= */}
                <td className="px-5 py-5">

                  <div>

                    <p className="text-sm font-medium text-foreground">
                      {booking.travelDate
                        ? new Date(
                            booking.travelDate
                          ).toLocaleDateString("en-IN")
                        : "—"}
                    </p>

                    <p className="mt-1 text-xs text-muted-foreground">
                      {booking.travelTime || "—"}
                    </p>

                  </div>

                </td>

                {/* ================= PASSENGERS ================= */}
                <td className="px-5 py-5">

                  <div className="flex items-center gap-2">

                    <Users
                      size={16}
                      className="text-muted-foreground"
                    />

                    <span className="text-sm font-medium text-foreground">
                      {booking.passengers ?? "—"}
                    </span>

                  </div>

                </td>

                {/* ================= MOBILE ================= */}
                <td className="px-5 py-5">

                  <span className="text-sm font-medium text-foreground">
                    {booking.mobile || "—"}
                  </span>

                </td>

      

                {/* ================= ACTION ================= */}
                <td className="px-5 py-5">

                  {booking.mobile ? (

                    <a
                      href={`tel:${booking.mobile}`}
                      className="
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        border
                        border-border
                        bg-background
                        px-4
                        py-2
                        text-xs
                        font-semibold
                        text-foreground
                        shadow-sm
                        transition-all
                        duration-200
                        hover:border-primary/40
                        hover:bg-accent
                        hover:text-accent-foreground
                        hover:shadow
                        active:scale-95
                      "
                    >

                      <Phone
                        size={15}
                        strokeWidth={2.3}
                      />

                      Call

                    </a>

                  ) : (

                    <span className="text-xs text-muted-foreground">
                      No number
                    </span>

                  )}

                </td>

              </tr>

            ))}

            {/* ================= EMPTY STATE ================= */}
            {(!bookingTable ||
              bookingTable.length === 0) && (

              <tr>

                <td
                  colSpan={9}
                  className="px-5 py-14 text-center"
                >

                  <div className="flex flex-col items-center">

                    <div className="
                      mb-3
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      bg-muted
                    ">

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
  );
}
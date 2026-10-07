"use client";

import {
  X,
  User,
  Phone,
  PhoneCall,
  MapPin,
  Car,
  CalendarDays,
  Clock,
  Users,
  IndianRupee,
} from "lucide-react";

import BookingStatus from "./BookingStatus";
import BookingDetailRow from "./BookingDetailRow";
import BookingActions from "./BookingActions";

export default function BookingDetailsDrawer({
  booking,
  onClose,
}) {
  if (!booking) return null;

  const formatDate = (date) => {
    if (!date) return "—";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const amount =
    booking.amount ??
    booking.price ??
    booking.totalAmount;

  return (
    <>
      {/* =====================================================
          BACKDROP
      ====================================================== */}

      <div
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px]"
        onClick={onClose}
      />

      {/* =====================================================
          RIGHT SIDEBAR
      ====================================================== */}

      <aside className="fixed right-0 top-0 z-50 flex h-screen w-full max-w-[500px] flex-col bg-background shadow-2xl">
        {/* =================================================
            HEADER
        ================================================== */}

        <div className="flex shrink-0 items-start justify-between border-b border-border px-7 py-6">
          <div>
            <h2 className="text-xl font-bold text-foreground">
              {booking.bookingId ||
                booking.bookingNumber ||
                booking._id}
            </h2>

            <div className="mt-2">
              <BookingStatus
                status={booking.status}
              />
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close booking details"
            className="rounded-full border border-border p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            <X size={18} />
          </button>
        </div>

        {/* =================================================
            CONTENT
        ================================================== */}

        <div className="flex-1 overflow-y-auto px-7 py-6">
          {/* ================= BOOKING DETAILS ================= */}

          <div className="rounded-3xl bg-muted/40 p-5">
            <BookingDetailRow
              icon={<User size={17} />}
              label="Customer"
              value={booking.name}
            />

            <BookingDetailRow
              icon={<Phone size={17} />}
              label="Phone"
              value={booking.mobile}
            />

            <BookingDetailRow
              icon={<MapPin size={17} />}
              label="Pickup"
              value={booking.pickupLocation}
            />

            <BookingDetailRow
              icon={<MapPin size={17} />}
              label="Drop"
              value={booking.dropLocation}
            />

            <BookingDetailRow
              icon={<Car size={17} />}
              label="Vehicle"
              value={booking.vehicleType}
            />

            <BookingDetailRow
              icon={<CalendarDays size={17} />}
              label="Date"
              value={formatDate(booking.travelDate)}
            />

            <BookingDetailRow
              icon={<Clock size={17} />}
              label="Time"
              value={booking.travelTime}
            />

            <BookingDetailRow
              icon={<Users size={17} />}
              label="Passengers"
              value={booking.passengers}
            />

            <BookingDetailRow
              icon={<IndianRupee size={17} />}
              label="Amount"
              value={
                amount
                  ? `₹${Number(
                      amount
                    ).toLocaleString("en-IN")}`
                  : "—"
              }
              last
            />
          </div>

          {/* =================================================
              CALL CUSTOMER
          ================================================== */}

          {booking.mobile && (
            <a
              href={`tel:${booking.mobile}`}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90 active:scale-[0.98]"
            >
              <PhoneCall size={17} />

              Call Customer
            </a>
          )}

          {/* =================================================
              NOTE
          ================================================== */}

          {(booking.note ||
            booking.notes ||
            booking.message) && (
            <div className="mt-5 rounded-2xl border border-dashed border-border px-5 py-4">
              <p className="text-sm leading-6 text-muted-foreground">
                {booking.note ||
                  booking.notes ||
                  booking.message}
              </p>
            </div>
          )}

          {/* =================================================
              BOOKING EXTRA INFORMATION
          ================================================== */}

          <div className="mt-7">
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Booking information
            </h3>

            <div className="space-y-3">
              <InfoRow
                label="Booking ID"
                value={
                  booking.bookingId ||
                  booking.bookingNumber ||
                  booking._id
                }
              />

              <InfoRow
                label="Created"
                value={
                  booking.createdAt
                    ? new Date(
                        booking.createdAt
                      ).toLocaleString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                    : "—"
                }
              />

              {booking.updatedAt && (
                <InfoRow
                  label="Last updated"
                  value={new Date(
                    booking.updatedAt
                  ).toLocaleString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                />
              )}
            </div>
          </div>

          {/* =================================================
              UPDATE STATUS
          ================================================== */}

          <div className="mt-7">
            <label className="mb-2 block text-sm font-medium text-foreground">
              Update status
            </label>

            <select
              defaultValue={
                booking.status || "pending"
              }
              className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
            >
              <option value="pending">
                Pending
              </option>

              <option value="confirmed">
                Confirmed
              </option>

              <option value="completed">
                Completed
              </option>

              <option value="cancelled">
                Cancelled
              </option>
            </select>
          </div>

          {/* =================================================
              ASSIGN DRIVER
          ================================================== */}

          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-foreground">
              Assign driver
            </label>

            <input
              type="text"
              placeholder="Driver name / ID"
              defaultValue={
                booking.driver || ""
              }
              className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none placeholder:text-muted-foreground transition focus:border-primary focus:ring-2 focus:ring-primary/10"
            />
          </div>

          {/* Extra bottom spacing */}

          <div className="h-6" />
        </div>

        {/* =================================================
            FOOTER
        ================================================== */}

        <div className="shrink-0 border-t border-border bg-background px-7 py-5">
          <BookingActions
            onClose={onClose}
            onSave={() => {
              console.log(
                "Save booking:",
                booking
              );
            }}
          />
        </div>
      </aside>
    </>
  );
}

/* ============================================================
   INFO ROW
============================================================ */

function InfoRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-5">
      <span className="text-xs text-muted-foreground">
        {label}
      </span>

      <span className="max-w-[260px] truncate text-right text-xs font-medium text-foreground">
        {value || "—"}
      </span>
    </div>
  );
}
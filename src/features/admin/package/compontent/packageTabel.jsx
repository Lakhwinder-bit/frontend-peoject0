"use client";

import {
  MapPin,
  CalendarDays,
  Star,
  MoreHorizontal,
  Pencil,
  CheckCircle,
  XCircle,
  Trash2,
  Loader2,
} from "lucide-react";

import { useState } from "react";
import {
  updatePackageAdmin,
  deletePackageAdmin,
} from "@/features/admin/package/api/adminPackage";
import { StatusBadge } from "../../adminShared/compontent/adminUi";

export default function PackageTable({ packages }) {
  const packageData = packages?.data || [];

  const [openMenu, setOpenMenu] = useState(null);
  const [loadingId, setLoadingId] = useState(null);

  console.log("Package Data:", packageData);

  // =========================================================
  // UPDATE STATUS
  // =========================================================

  const handleStatusChange = async (tour) => {
    try {
      setLoadingId(tour._id);

      await updatePackageAdmin(tour._id, {
        status: !tour.status,
      });

      setOpenMenu(null);

      window.location.reload();
    } catch (error) {
      console.error(
        "Status update error:",
        error?.response?.data || error
      );

      alert(
        error?.response?.data?.message ||
          "Failed to update package status"
      );
    } finally {
      setLoadingId(null);
    }
  };

  // =========================================================
  // DELETE PACKAGE
  // =========================================================

  const handleDelete = async (tour) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${tour.title}"?`
    );

    if (!confirmed) return;

    try {
      setLoadingId(tour._id);

      await deletePackageAdmin(tour._id);

      setOpenMenu(null);

      window.location.reload();
    } catch (error) {
      console.error(
        "Delete package error:",
        error?.response?.data || error
      );

      alert(
        error?.response?.data?.message ||
          "Failed to delete package"
      );
    } finally {
      setLoadingId(null);
    }
  };

  // =========================================================
  // EDIT PACKAGE
  // =========================================================

  const handleEdit = (tour) => {
    console.log("Edit Package ID:", tour._id);

    /*
      Later you can open your edit modal here:

      setEditingPackage(tour);
      setEditModalOpen(true);
    */

    setOpenMenu(null);
  };

  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-soft">
      <table className="min-w-[1100px] w-full text-left text-sm">
        {/* =====================================================
            HEADER
        ====================================================== */}

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

        {/* =====================================================
            BODY
        ====================================================== */}

        <tbody className="divide-y divide-border">
          {packageData.length > 0 ? (
            packageData.map((tour) => (
              <tr
                key={tour._id}
                className="transition-colors hover:bg-muted/40"
              >
                {/* =================================================
                    PACKAGE
                ================================================== */}

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

                {/* =================================================
                    LOCATION
                ================================================== */}

                <td className="px-5 py-5">
                  <div className="flex items-center gap-2 text-foreground">
                    <MapPin
                      size={15}
                      className="shrink-0 text-muted-foreground"
                    />

                    <span>
                      {tour.location || "—"}
                    </span>
                  </div>
                </td>

                {/* =================================================
                    DURATION
                ================================================== */}

                <td className="px-5 py-5">
                  <div className="flex items-center gap-2 text-foreground">
                    <CalendarDays
                      size={15}
                      className="text-muted-foreground"
                    />

                    <span>
                      {tour.duration || "—"}
                    </span>
                  </div>
                </td>

                {/* =================================================
                    PRICE
                ================================================== */}

                <td className="px-5 py-5">
                  <p className="font-semibold text-foreground">
                    ₹
                    {tour.price?.toLocaleString("en-IN")}
                  </p>
                </td>

                {/* =================================================
                    RATING
                ================================================== */}

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

                {/* =================================================
                    STATUS
                ================================================== */}

                <td className="px-5 py-5">
                  <StatusBadge
                    status={
                      tour.status
                        ? "Active"
                        : "Inactive"
                    }
                  />
                </td>

                {/* =================================================
                    ACTION
                ================================================== */}

                <td className="relative px-5 py-5">
                  <button
                    type="button"
                    disabled={loadingId === tour._id}
                    onClick={() =>
                      setOpenMenu(
                        openMenu === tour._id
                          ? null
                          : tour._id
                      )
                    }
                    className="rounded-lg p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground disabled:opacity-50"
                  >
                    {loadingId === tour._id ? (
                      <Loader2
                        size={18}
                        className="animate-spin"
                      />
                    ) : (
                      <MoreHorizontal size={18} />
                    )}
                  </button>

                  {/* =================================================
                      DROPDOWN
                  ================================================== */}

                  {openMenu === tour._id && (
                    <div className="absolute right-5 top-14 z-50 w-48 overflow-hidden rounded-xl border border-border bg-card shadow-xl">
                      {/* EDIT */}

                      <button
                        type="button"
                        onClick={() =>
                          handleEdit(tour)
                        }
                        className="flex w-full items-center gap-3 px-4 py-3 text-sm text-foreground transition hover:bg-muted"
                      >
                        <Pencil size={16} />

                        <span>Edit</span>
                      </button>

                      {/* ACTIVE / INACTIVE */}

                      <button
                        type="button"
                        disabled={
                          loadingId === tour._id
                        }
                        onClick={() =>
                          handleStatusChange(tour)
                        }
                        className="flex w-full items-center gap-3 px-4 py-3 text-sm text-foreground transition hover:bg-muted disabled:opacity-50"
                      >
                        {tour.status ? (
                          <XCircle
                            size={16}
                            className="text-orange-500"
                          />
                        ) : (
                          <CheckCircle
                            size={16}
                            className="text-green-500"
                          />
                        )}

                        <span>
                          {tour.status
                            ? "Deactivate"
                            : "Activate"}
                        </span>
                      </button>

                      {/* DELETE */}

                      <button
                        type="button"
                        disabled={
                          loadingId === tour._id
                        }
                        onClick={() =>
                          handleDelete(tour)
                        }
                        className="flex w-full items-center gap-3 px-4 py-3 text-sm text-red-500 transition hover:bg-red-500/10 disabled:opacity-50"
                      >
                        <Trash2 size={16} />

                        <span>Delete</span>
                      </button>
                    </div>
                  )}
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
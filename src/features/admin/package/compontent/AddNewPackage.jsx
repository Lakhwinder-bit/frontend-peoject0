"use client";

import { useState } from "react";
import { X, Plus, Loader2 } from "lucide-react";
import { createPackageAdmin } from "@/features/admin/package/api/adminPackage";

export default function AddNewPackage() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    duration: "",
    image: "",
    price: "",
    placesCovered: "",
    highlights: "",
    rating: 0,
    reviewCount: 0,
    status: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleStatusChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      status: e.target.value === "true",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const payload = {
        title: formData.title.trim(),
        description: formData.description.trim(),
        location: formData.location.trim(),
        duration: formData.duration.trim(),
        image: formData.image.trim(),

        price: Number(formData.price),

        placesCovered: formData.placesCovered
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),

        highlights: formData.highlights
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),

        rating: Number(formData.rating),
        reviewCount: Number(formData.reviewCount),

        // Boolean
        status: formData.status,
      };

      console.log("Package Payload:", payload);

      const response = await createPackageAdmin(payload);

      console.log("Package created:", response);

      // Close modal
      setOpen(false);

      // Reset form
      setFormData({
        title: "",
        description: "",
        location: "",
        duration: "",
        image: "",
        price: "",
        placesCovered: "",
        highlights: "",
        rating: 0,
        reviewCount: 0,
        status: false,
      });

      // Refresh package list
      window.location.reload();
    } catch (error) {
      console.error(
        "Create package error:",
        error?.response?.data || error
      );

      alert(
        error?.response?.data?.error ||
          error?.response?.data?.message ||
          "Failed to create package"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ================= CREATE BUTTON ================= */}

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex h-10 items-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground"
      >
        <Plus size={16} />
        Create package
      </button>

      {/* ================= MODAL ================= */}

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-background shadow-2xl">

            {/* ================= HEADER ================= */}

            <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-background p-5">
              <div>
                <h2 className="text-lg font-semibold">
                  Create Package
                </h2>

                <p className="text-sm text-muted-foreground">
                  Add a new travel package.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg p-2 transition hover:bg-muted"
              >
                <X size={18} />
              </button>
            </div>

            {/* ================= FORM ================= */}

            <form
              onSubmit={handleSubmit}
              className="space-y-6 p-5"
            >
              {/* TITLE + LOCATION */}

              <div className="grid gap-5 sm:grid-cols-2">

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Package Title
                  </label>

                  <input
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Manali Adventure"
                    required
                    className="input-style"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Location
                  </label>

                  <input
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Manali, Himachal Pradesh"
                    required
                    className="input-style"
                  />
                </div>

              </div>

              {/* DESCRIPTION */}

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Description
                </label>

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe the travel package..."
                  rows={4}
                  required
                  className="textarea-style"
                />
              </div>

              {/* DURATION + PRICE */}

              <div className="grid gap-5 sm:grid-cols-2">

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Duration
                  </label>

                  <input
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    placeholder="5 Days / 4 Nights"
                    required
                    className="input-style"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Price
                  </label>

                  <input
                    name="price"
                    type="number"
                    min="0"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="12999"
                    required
                    className="input-style"
                  />
                </div>

              </div>

              {/* IMAGE */}

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Image URL
                </label>

                <input
                  name="image"
                  type="url"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="https://example.com/manali.jpg"
                  required
                  className="input-style"
                />
              </div>

              {/* PLACES COVERED */}

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Places Covered
                </label>

                <input
                  name="placesCovered"
                  value={formData.placesCovered}
                  onChange={handleChange}
                  placeholder="Solang Valley, Rohtang Pass, Mall Road"
                  className="input-style"
                />

                <p className="text-xs text-muted-foreground">
                  Separate places with commas.
                </p>
              </div>

              {/* HIGHLIGHTS */}

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Highlights
                </label>

                <textarea
                  name="highlights"
                  value={formData.highlights}
                  onChange={handleChange}
                  placeholder="Mountain views, Snow activities, Local sightseeing"
                  rows={3}
                  className="textarea-style"
                />

                <p className="text-xs text-muted-foreground">
                  Separate highlights with commas.
                </p>
              </div>

              {/* RATING + REVIEW COUNT */}

              <div className="grid gap-5 sm:grid-cols-2">

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Rating
                  </label>

                  <input
                    name="rating"
                    type="number"
                    min="0"
                    max="5"
                    step="0.1"
                    value={formData.rating}
                    onChange={handleChange}
                    placeholder="4.5"
                    className="input-style"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Review Count
                  </label>

                  <input
                    name="reviewCount"
                    type="number"
                    min="0"
                    value={formData.reviewCount}
                    onChange={handleChange}
                    placeholder="120"
                    className="input-style"
                  />
                </div>

              </div>

              {/* STATUS */}

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Status
                </label>

                <select
                  name="status"
                  value={formData.status ? "true" : "false"}
                  onChange={handleStatusChange}
                  className="input-style"
                >
                  <option value="false">
                    Draft
                  </option>

                  <option value="true">
                    Published
                  </option>
                </select>

                <p className="text-xs text-muted-foreground">
                  Published = true, Draft = false
                </p>
              </div>

              {/* ================= ACTIONS ================= */}

              <div className="flex justify-end gap-3 border-t pt-5">

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  disabled={loading}
                  className="rounded-xl border px-4 py-2 text-sm font-medium transition hover:bg-muted"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {loading && (
                    <Loader2
                      size={16}
                      className="animate-spin"
                    />
                  )}

                  {loading
                    ? "Creating..."
                    : "Create Package"}
                </button>

              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= STYLES ================= */}

      <style jsx>{`
        .input-style {
          width: 100%;
          height: 44px;
          border-radius: 12px;
          border: 1px solid hsl(var(--border));
          background: hsl(var(--background));
          padding: 0 12px;
          font-size: 14px;
          outline: none;
        }

        .input-style:focus {
          box-shadow: 0 0 0 2px hsl(var(--primary));
        }

        .textarea-style {
          width: 100%;
          border-radius: 12px;
          border: 1px solid hsl(var(--border));
          background: hsl(var(--background));
          padding: 12px;
          font-size: 14px;
          outline: none;
          resize: none;
        }

        .textarea-style:focus {
          box-shadow: 0 0 0 2px hsl(var(--primary));
        }
      `}</style>
    </>
  );
}
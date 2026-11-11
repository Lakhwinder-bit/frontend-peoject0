"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import Button from "@/shared/compontent/button";

const CONTACT_ENQUIRIES_KEY = "kapoor-contact-enquiries";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState("");
  const [submissionError, setSubmissionError] = useState("");

  const updateField = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
    setSubmissionStatus("");
    setSubmissionError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const savedEnquiries = window.localStorage.getItem(CONTACT_ENQUIRIES_KEY);
      const enquiries = savedEnquiries ? JSON.parse(savedEnquiries) : [];

      if (!Array.isArray(enquiries)) {
        throw new Error("Saved contact enquiries are not in the expected format.");
      }

      enquiries.push({
        ...form,
        submittedAt: new Date().toISOString(),
      });
      window.localStorage.setItem(
        CONTACT_ENQUIRIES_KEY,
        JSON.stringify(enquiries)
      );

      setSubmissionStatus("Your enquiry has been saved in this browser.");
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      console.error("Unable to save contact enquiry:", error);
      setSubmissionError(
        "We couldn't save your enquiry in this browser. Please check your browser storage settings and try again."
      );
    }
  };

  return (
    <div
      className="
        rounded-2xl
        border border-border/80
        bg-card
        p-6
        shadow-soft
        sm:p-8
      "
    >
      {/* Label */}
      <span
        className="
          inline-flex rounded-full
          border border-secondary/40
          bg-accent
          px-4 py-1.5
          text-[11px]
          font-bold
          uppercase
          tracking-[0.2em]
          text-primary
        "
      >
        Enquiry
      </span>

      {/* Heading */}
      <h2
        className="
          mt-4
          text-3xl
          font-extrabold
          tracking-[-0.04em]
          text-foreground
          sm:text-4xl
        "
      >
        Send us a message
      </h2>

      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        Share your travel dates and group size — we’ll respond with a
        tailored quote.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-7 space-y-4"
      >
        {submissionStatus && (
          <p role="status" className="text-sm font-medium text-success">
            {submissionStatus}
          </p>
        )}
        {submissionError && (
          <p role="alert" className="text-sm font-medium text-destructive">
            {submissionError}
          </p>
        )}

        {/* Name + Phone */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-[11px] font-medium text-foreground"
            >
              Full name
            </label>

            <input
              id="name"
              type="text"
              autoComplete="name"
              placeholder="Your name"
              required
              value={form.name}
              onChange={(e) =>
                updateField("name", e.target.value)
              }
              className="
                h-11 w-full rounded-xl
                border border-border
                bg-background
                px-4
                text-xs
                outline-none
                transition
                placeholder:text-muted-foreground/60
                focus:border-secondary
                focus:ring-2
                focus:ring-ring/30
              "
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-[11px] font-medium text-foreground"
            >
              Mobile number
            </label>

            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+91 98765 43210"
              required
              value={form.phone}
              onChange={(e) =>
                updateField("phone", e.target.value)
              }
              className="
                h-11 w-full rounded-xl
                border border-border
                bg-background
                px-4
                text-xs
                outline-none
                transition
                placeholder:text-muted-foreground/60
                focus:border-secondary
                focus:ring-2
                focus:ring-ring/30
              "
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-[11px] font-medium text-foreground"
          >
            Email address
          </label>

          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            value={form.email}
            onChange={(e) =>
              updateField("email", e.target.value)
            }
            className="
              h-11 w-full rounded-xl
              border border-border
              bg-background
              px-4
              text-xs
              outline-none
              transition
              placeholder:text-muted-foreground/60
              focus:border-secondary
              focus:ring-2
              focus:ring-ring/30
            "
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-[11px] font-medium text-foreground"
          >
            How can we help?
          </label>

          <textarea
            id="message"
            rows={4}
            placeholder="We need a tempo traveller for 10 people from Chandigarh to Manali on 12 September..."
            required
            value={form.message}
            onChange={(e) =>
              updateField("message", e.target.value)
            }
            className="
              min-h-28
              w-full
              resize-y
              rounded-2xl
              border border-border
              bg-background
              px-4 py-3
              text-xs
              leading-5
              outline-none
              transition
              placeholder:text-muted-foreground/60
              focus:border-secondary
              focus:ring-2
              focus:ring-ring/30
            "
          />
        </div>

        {/* Submit */}
        <Button
          type="submit"
          variant="secondary"
          size="lg"
        >
          Send message
          <Send aria-hidden="true" />
        </Button>
      </form>
    </div>
  );
}
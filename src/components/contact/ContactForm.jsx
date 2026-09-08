"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import Button from "@/components/ui/button";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const updateField = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connect this handler to the enquiry API when it is available.
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
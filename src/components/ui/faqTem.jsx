"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="
        overflow-hidden
        rounded-3xl
        border border-border/80
        bg-card
        shadow-soft
        transition-all
        duration-300
      "
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="
          flex
          w-full
          items-center
          justify-between
          gap-5
          px-7
          py-6
          text-left
        "
        aria-expanded={isOpen}
      >
        <span
          className="
            text-[17px]
            font-bold
            tracking-[-0.025em]
            text-card-foreground
            sm:text-lg
          "
        >
          {question}
        </span>

        <ChevronDown
          size={20}
          strokeWidth={1.8}
          className={`
            shrink-0
            text-muted-foreground
            transition-transform
            duration-300
            ${isOpen ? "rotate-180 text-primary" : ""}
          `}
        />
      </button>

      <div
        className={`
          grid
          transition-all
          duration-300
          ${
            isOpen
              ? "grid-rows-[1fr]"
              : "grid-rows-[0fr]"
          }
        `}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="border-t border-border px-7 pb-6 pt-5">
            <p
              className="
                text-[15px]
                leading-7
                text-muted-foreground
              "
            >
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
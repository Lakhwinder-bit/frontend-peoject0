"use client";

import { useState, useRef, useEffect, useId } from "react";
import {
  Bot,
  LoaderCircle,
  Minus,
  Send,
  Sparkles,
  X,
  MessageCircle,
  RefreshCw,
} from "lucide-react";

/* =========================================
   3D CARTOON ROBOT
========================================= */

function SheruRobot({ size = 48 }) {
  const uniqueId = useId().replace(/:/g, "");
  const bodyGradient = `body-${uniqueId}`;
  const faceGradient = `face-${uniqueId}`;
  const eyeGradient = `eye-${uniqueId}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <defs>
        <linearGradient
          id={bodyGradient}
          x1="20"
          y1="10"
          x2="80"
          y2="90"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="var(--primary-light, #6ba5c5)" />
          <stop offset="50%" stopColor="var(--primary, #203e52)" />
          <stop offset="100%" stopColor="#102a3b" />
        </linearGradient>

        <linearGradient
          id={faceGradient}
          x1="25"
          y1="25"
          x2="75"
          y2="75"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#dceaf1" />
        </linearGradient>

        <linearGradient
          id={eyeGradient}
          x1="0"
          y1="0"
          x2="1"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0%" stopColor="#ffb36b" />
          <stop offset="100%" stopColor="var(--secondary, #ac5346)" />
        </linearGradient>
      </defs>

      {/* Antenna */}
      <path
        d="M50 15V8"
        stroke={`url(#${bodyGradient})`}
        strokeWidth="5"
        strokeLinecap="round"
      />

      <circle cx="50" cy="7" r="6" fill={`url(#${eyeGradient})`} />

      {/* Ears */}
      <rect
        x="8"
        y="38"
        width="13"
        height="25"
        rx="6"
        fill={`url(#${bodyGradient})`}
      />

      <rect
        x="79"
        y="38"
        width="13"
        height="25"
        rx="6"
        fill={`url(#${bodyGradient})`}
      />

      {/* Head */}
      <rect
        x="16"
        y="20"
        width="68"
        height="65"
        rx="23"
        fill={`url(#${bodyGradient})`}
      />

      {/* Face */}
      <rect
        x="23"
        y="29"
        width="54"
        height="45"
        rx="17"
        fill={`url(#${faceGradient})`}
      />

      {/* Eyes */}
      <ellipse
        cx="38"
        cy="48"
        rx="6"
        ry="8"
        fill={`url(#${eyeGradient})`}
      />

      <ellipse
        cx="62"
        cy="48"
        rx="6"
        ry="8"
        fill={`url(#${eyeGradient})`}
      />

      {/* Eye highlights */}
      <circle cx="36" cy="45" r="2" fill="white" />
      <circle cx="60" cy="45" r="2" fill="white" />

      {/* Smile */}
      <path
        d="M40 61Q50 69 60 61"
        stroke="#203e52"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Cheeks */}
      <circle cx="29" cy="58" r="4" fill="#f2a18f" opacity=".5" />
      <circle cx="71" cy="58" r="4" fill="#f2a18f" opacity=".5" />

      {/* Bottom detail */}
      <rect
        x="39"
        y="79"
        width="22"
        height="5"
        rx="2.5"
        fill={`url(#${eyeGradient})`}
      />
    </svg>
  );
}

/* =========================================
   TYPING INDICATOR
========================================= */

function TypingIndicator() {
  return (
    <div className="flex items-center gap-2">
      <SheruRobot size={36} />

      <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm bg-muted px-4 py-3">
        <span className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-primary" />
      </div>
    </div>
  );
}

/* =========================================
   MESSAGE TIME
========================================= */

function getCurrentTime() {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

/* =========================================
   MAIN CHATBOT COMPONENT
========================================= */

export default function SheruChatbot({
  apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/chatbot`,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "assistant",
      content:
        "Hello! I'm Sheru, your AI travel assistant. 🐾 How can I help you plan your next adventure?",
      time: getCurrentTime(),
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!isOpen || isMinimized) return;

    const mobileViewport = window.matchMedia("(max-width: 639px)");
    const previousOverflow = document.body.style.overflow;
    const previousOverscrollBehavior = document.body.style.overscrollBehavior;
    const syncScrollLock = () => {
      document.body.style.overflow = mobileViewport.matches
        ? "hidden"
        : previousOverflow;
      document.body.style.overscrollBehavior = mobileViewport.matches
        ? "none"
        : previousOverscrollBehavior;
    };

    syncScrollLock();
    mobileViewport.addEventListener("change", syncScrollLock);

    return () => {
      mobileViewport.removeEventListener("change", syncScrollLock);
      document.body.style.overflow = previousOverflow;
      document.body.style.overscrollBehavior = previousOverscrollBehavior;
    };
  }, [isOpen, isMinimized]);

  /* =========================================
     AUTO SCROLL
  ========================================= */

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isLoading]);

  /* =========================================
     FOCUS INPUT
  ========================================= */

  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 200);
    }
  }, [isOpen, isMinimized]);

  /* =========================================
     SEND MESSAGE
  ========================================= */

  const handleSendMessage = async (e) => {
    e?.preventDefault();

    const trimmedMessage = message.trim();

    if (!trimmedMessage || isLoading) return;

    const userMessage = {
      id: Date.now(),
      role: "user",
      content: trimmedMessage,
      time: getCurrentTime(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messagechat: trimmedMessage,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message || data?.error || "Something went wrong."
        );
      }

      // Support common backend response formats.
      const assistantResponse =
        data?.response ||
        data?.answer ||
        data?.message ||
        data?.data?.response ||
        data?.data?.answer;

      if (!assistantResponse) {
        throw new Error("No response received from Sheru AI.");
      }

      const assistantMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content: assistantResponse,
        time: getCurrentTime(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Sheru AI Error:", error);

      setErrorMessage(
        error.message || "Unable to connect with Sheru AI."
      );
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  /* =========================================
     CLEAR CHAT
  ========================================= */

  const handleResetChat = () => {
    setMessages([
      {
        id: Date.now(),
        role: "assistant",
        content:
          "Hello again! I'm Sheru, your AI travel assistant. Where would you like to travel?",
        time: getCurrentTime(),
      },
    ]);

    setErrorMessage("");
  };

  /* =========================================
     QUICK SUGGESTIONS
  ========================================= */

  const suggestions = [
    "Show me popular destinations",
    "Find budget-friendly trips",
    "Help me plan a vacation",
  ];

  const handleSuggestion = (suggestion) => {
    setMessage(suggestion);
    inputRef.current?.focus();
  };

  return (
    <>
      {/* =====================================
          FLOATING CHATBOT BUTTON
      ===================================== */}

      {!isOpen && (
        <button
          onClick={() => {
            setIsOpen(true);
            setIsMinimized(false);
          }}
          aria-label="Open Sheru AI chatbot"
          className="fixed bottom-6 right-6 z-[999] flex h-[68px] w-[68px] items-center justify-center rounded-full border border-border bg-card shadow-lift transition-all duration-300 hover:scale-110 hover:shadow-glow"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-primary/10" />

          <SheruRobot size={55} />

          <span className="absolute right-1 top-1 h-3.5 w-3.5 rounded-full border-2 border-card bg-green-500" />
        </button>
      )}

      {/* =====================================
          CHAT WINDOW
      ===================================== */}

      {isOpen && (
        <div
          className={`fixed z-[999] flex animate-scale-in flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-lift transition-all duration-300 motion-reduce:animate-none sm:animate-none ${
            isMinimized
              ? "bottom-6 right-6 h-[76px] w-[calc(100vw-32px)] sm:w-[380px]"
              : "inset-x-3 top-4 bottom-0 h-[calc(100dvh-1rem)] w-auto sm:inset-auto sm:bottom-6 sm:right-6 sm:h-[550px] sm:max-h-[80vh] sm:w-[380px]"
          }`}
        >
          {/* =====================================
              HEADER
          ===================================== */}

          <div className="flex shrink-0 items-center justify-between bg-gradient-primary px-4 py-3 text-primary-foreground">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary-foreground/20 bg-primary-foreground/10 shadow-soft">
                <SheruRobot size={45} />
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-foreground">Sheru AI</h3>

                  <Sparkles size={14} />
                </div>

                <div className="flex items-center gap-1.5  text-xs text-foreground ">
                  <span className="h-2 w-2 rounded-full bg-green-800" />
                  Your AI travel assistant
                </div>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-1 ">
    

              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsMinimized(false);
                }}
                title="Close chatbot"
                className="rounded-lg p-2 transition bg-primary hover:bg-white/10"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* =====================================
                  CHAT MESSAGES
              ===================================== */}

              <div className="flex-1 space-y-4 overflow-y-auto bg-background p-4">
                {/* Welcome label */}
                <div className="flex justify-center">
                  <span className="rounded-full border border-border bg-card px-3 py-1 text-[10px] font-medium text-muted-foreground">
                    YOUR TRAVEL JOURNEY STARTS HERE
                  </span>
                </div>

                {messages.map((msg) => {
                  const isAssistant = msg.role === "assistant";

                  return (
                    <div
                      key={msg.id}
                      className={`flex items-end gap-2 ${
                        isAssistant ? "justify-start" : "justify-end"
                      }`}
                    >
                      {/* Assistant Avatar */}
                      {isAssistant && <SheruRobot size={36} />}

                      {/* Message Bubble */}
                      <div
                        className={`max-w-[82%] rounded-2xl px-3.5 py-3 shadow-soft ${
                          isAssistant
                            ? "rounded-bl-sm bg-muted text-foreground"
                            : "rounded-br-sm bg-primary text-primary-foreground"
                        }`}
                      >
                        <p className="whitespace-pre-wrap break-words text-sm leading-relaxed">
                          {msg.content}
                        </p>

                        <p
                          className={`mt-1.5 text-right text-[10px] ${
                            isAssistant
                              ? "text-muted-foreground"
                              : "text-primary-foreground/70"
                          }`}
                        >
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  );
                })}

                {/* Loading */}
                {isLoading && <TypingIndicator />}

                {/* Error */}
                {errorMessage && (
                  <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-3">
                    <p className="text-xs text-red-500">
                      {errorMessage}
                    </p>

                    <button
                      onClick={() => setErrorMessage("")}
                      className="mt-1 text-xs font-semibold text-red-500 underline"
                    >
                      Dismiss
                    </button>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* =====================================
                  QUICK SUGGESTIONS
              ===================================== */}

              {messages.length === 1 && (
                <div className="shrink-0 border-t border-border bg-card px-3 py-3">
                  <p className="mb-2 text-xs font-semibold text-muted-foreground">
                    Try asking me
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {suggestions.map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => handleSuggestion(suggestion)}
                        className="rounded-full border border-border bg-background px-3 py-1.5 text-[11px] text-foreground transition hover:border-primary hover:text-primary"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* =====================================
                  MESSAGE INPUT
              ===================================== */}

              <form
                onSubmit={handleSendMessage}
                className="flex shrink-0 items-center gap-2 border-t border-border bg-card p-3"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask Sheru anything..."
                  disabled={isLoading}
                  className="h-11 min-w-0 flex-1 rounded-xl border border-border bg-background px-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/10 disabled:opacity-60"
                />

                <button
                  type="submit"
                  disabled={!message.trim() || isLoading}
                  aria-label="Send message"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {isLoading ? (
                    <LoaderCircle size={19} className="animate-spin" />
                  ) : (
                    <Send size={18} />
                  )}
                </button>
              </form>

              {/* Footer */}
              <div className="bg-card pb-2 text-center">
                <p className="text-[10px] text-muted-foreground">
                  Powered by Sheru AI
                  <Sparkles
                    size={10}
                    className="ml-1 inline-block text-primary"
                  />
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
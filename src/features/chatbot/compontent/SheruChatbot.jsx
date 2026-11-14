"use client";

import { useState, useRef, useEffect, useId } from "react";
import { LoaderCircle, Send, Sparkles, X } from "lucide-react";
import { chatBotAPi } from "../api/chatApi";
import { formatAIResponse } from "@/shared/utils/formatApiResponse";

// Robot Component
function SheruRobot({ size = 48 }) {
  const id = useId().replace(/:/g, "");

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
        <linearGradient id={`body-${id}`} x1="20" y1="10" x2="80" y2="90">
          <stop stopColor="var(--primary-light, #6ba5c5)" />
          <stop offset=".5" stopColor="var(--primary, #203e52)" />
          <stop offset="1" stopColor="#102a3b" />
        </linearGradient>

        <linearGradient id={`face-${id}`} x1="25" y1="25" x2="75" y2="75">
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#dceaf1" />
        </linearGradient>

        <linearGradient id={`eye-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#ffb36b" />
          <stop offset="1" stopColor="var(--secondary, #ac5346)" />
        </linearGradient>
      </defs>

      <path d="M50 15V8" stroke={`url(#body-${id})`} strokeWidth="5" />
      <circle cx="50" cy="7" r="6" fill={`url(#eye-${id})`} />

      <rect x="8" y="38" width="13" height="25" rx="6" fill={`url(#body-${id})`} />
      <rect x="79" y="38" width="13" height="25" rx="6" fill={`url(#body-${id})`} />

      <rect x="16" y="20" width="68" height="65" rx="23" fill={`url(#body-${id})`} />
      <rect x="23" y="29" width="54" height="45" rx="17" fill={`url(#face-${id})`} />

      <ellipse cx="38" cy="48" rx="6" ry="8" fill={`url(#eye-${id})`} />
      <ellipse cx="62" cy="48" rx="6" ry="8" fill={`url(#eye-${id})`} />

      <circle cx="36" cy="45" r="2" fill="white" />
      <circle cx="60" cy="45" r="2" fill="white" />

      <path d="M40 61Q50 69 60 61" stroke="#203e52" strokeWidth="3" strokeLinecap="round" />

      <circle cx="29" cy="58" r="4" fill="#f2a18f" opacity=".5" />
      <circle cx="71" cy="58" r="4" fill="#f2a18f" opacity=".5" />

      <rect x="39" y="79" width="22" height="5" rx="2.5" fill={`url(#eye-${id})`} />
    </svg>
  );
}

// Typing Animation
function TypingIndicator() {
  return (
    <div className="flex items-center gap-2">
      <SheruRobot size={36} />

      <div className="flex gap-1 rounded-2xl rounded-tl-sm bg-muted px-4 py-3">
        {[1, 2, 3].map((item) => (
          <span
            key={item}
            className="h-2 w-2 animate-bounce rounded-full bg-primary"
            style={{ animationDelay: `${item * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
}

// Main Chatbot
export default function SheruChatbot({
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(""); //user input like 
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! I'm Sheru, your AI travel assistant. 🐾 How can I help you plan your next adventure?",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const inputRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Auto Scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Send Message API
  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!message.trim() || isLoading) return;

    const userMessage = message.trim();

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: userMessage,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);

    setMessage("");
    setIsLoading(true);
    setError("");

    try {
      
      const response = await chatBotAPi({
    messagechat: userMessage,
  })
     
      const data = await response;
      
      console.log(data)

      const aiResponse = formatAIResponse(data.message)
   

      if (!aiResponse) {
        throw new Error("No response received from Sheru AI");
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: aiResponse,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    } catch (err) {
      setError(err.message || "Unable to connect with Sheru AI");
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  // Reset Chat
  const handleResetChat = () => {
    setMessages([
      {
        role: "assistant",
        content: "Hello again! I'm Sheru. Where would you like to travel?",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);

    setError("");
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open Sheru chatbot"
          className="fixed bottom-6 right-6 z-[999] flex h-[68px] w-[68px] items-center justify-center rounded-full border border-border bg-card shadow-lift transition hover:scale-110 hover:shadow-glow"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-primary/10" />

          <SheruRobot size={55} />

          <span className="absolute right-1 top-1 h-3.5 w-3.5 rounded-full border-2 border-card bg-green-500" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed inset-x-3 top-4 bottom-0 z-[999] flex h-[calc(100dvh-1rem)] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-lift sm:inset-auto sm:bottom-6 sm:right-6 sm:h-[550px] sm:max-h-[80vh] sm:w-[380px]">

          {/* Header */}
          <div className="flex shrink-0 items-center justify-between bg-gradient-primary px-4 py-3 text-primary-foreground">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary-foreground/20 bg-primary-foreground/10">
                <SheruRobot size={45} />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-foreground">
                    Sheru AI
                  </h3>
                  <Sparkles size={14} />
                </div>

                <div className="flex items-center gap-1.5 text-xs text-foreground">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  Your AI travel assistant
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              title="Close chatbot"
              className="rounded-lg bg-primary p-2 transition hover:bg-white/10"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto bg-background p-4">
            <div className="flex justify-center">
              <span className="rounded-full border border-border bg-card px-3 py-1 text-[10px] font-medium text-muted-foreground">
                YOUR TRAVEL JOURNEY STARTS HERE
              </span>
            </div>

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-end gap-2 ${
                  msg.role === "assistant" ? "justify-start" : "justify-end"
                }`}
              >
                {msg.role === "assistant" && <SheruRobot size={36} />}

                <div
                  className={`max-w-[82%] rounded-2xl px-3.5 py-3 shadow-soft ${
                    msg.role === "assistant"
                      ? "rounded-bl-sm bg-muted text-foreground"
                      : "rounded-br-sm bg-primary text-primary-foreground"
                  }`}
                >
                  <p className="whitespace-pre-wrap break-words text-sm leading-relaxed">
                    {msg.content}
                  </p>

                  <p className="mt-1.5 text-right text-[10px] opacity-60">
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}

            {isLoading && <TypingIndicator />}

            {error && (
              <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-3">
                <p className="text-xs text-red-500">{error}</p>

                <button
                  onClick={() => setError("")}
                  className="mt-1 text-xs font-semibold text-red-500 underline"
                >
                  Dismiss
                </button>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
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
              <Sparkles size={10} className="ml-1 inline-block text-primary" />
            </p>
          </div>
        </div>
      )}
    </>
  );
}

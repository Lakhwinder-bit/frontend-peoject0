import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "KPPOR Travel",
    template: "%s | KPPOR Travel",
  },
  description: "Explore destinations and plan your perfect journey.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.toggle("dark", window.localStorage.getItem("kapoor-theme") === "dark");`,
          }}
        />
        {children}
      </body>
    </html>
  );
}

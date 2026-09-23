import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css"

import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.toggle("dark", window.localStorage.getItem("kapoor-theme") === "dark");`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {/* <Navbar /> */}

        <main className="flex-1">
          {children}
        </main>

        {/* <Footer /> */}
      </body>
    </html>
  );
}
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css"

import { AdminAuthProvider } from "@/contrext/AdminAuthContext";

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

export default function AdminLayout({ children }) {
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
          <AdminAuthProvider>

          {children}
          </AdminAuthProvider>
        </main>

        {/* <Footer /> */}
      </body>
    </html>
  );
}
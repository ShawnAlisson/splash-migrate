import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import AnalayticsComponenet from "../components/AnalyticsComponent";
import CookieConsent from "../components/CookieConsent";

export const metadata: Metadata = {
  title: "Best of Web → Bowora",
  description: "Best of Web has moved to Bowora.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <AnalayticsComponenet />
      </head>
      <body>
        <CookieConsent />
        {children}
      </body>
    </html>
  );
}

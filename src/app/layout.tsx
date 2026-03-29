// /app/layout.tsx

import "./globals.css";
import type { Metadata } from "next";
import GlobalProvider from "./global";
import Header from "@/component/Navbar";
import Footer from "@/component/Footer";

export const metadata: Metadata = {
  title: "Ringer Pharma",
  description: "Pharmaceutical Company Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GlobalProvider>
          <Header />
          {children}
          <Footer />
        </GlobalProvider>
      </body>
    </html>
  );
}
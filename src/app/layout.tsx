// /app/layout.tsx

import "./globals.css";
import type { Metadata } from "next";
import GlobalProvider from "./global";
import Header from "@/component/Navbar";
import Footer from "@/component/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://ringer.co.in"),
  title: {
    default: "Ringer Lifesciences Pvt Ltd",
    template: "%s | Ringer Lifesciences",
  },
  description:
    "Ringer Lifesciences Pvt Ltd is an Indian super specialty pharma company focused on Gastro, Ortho, Neuro, ENT, Nutrition, Respiratory and Cardiometabolic care.",
  keywords: [
    "Ringer Lifesciences",
    "Indian pharma company",
    "super specialty pharma",
    "gastroenterology",
    "orthopaedics",
    "neuroscience",
    "ENT",
    "nutrition",
    "respiratory care",
    "cardiometabolic care",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ringer Lifesciences Pvt Ltd",
    description:
      "Super specialty pharmaceutical care across Gastro, Ortho, Neuro, ENT, Nutrition, Respiratory and Cardiometabolic divisions.",
    url: "https://ringer.co.in",
    siteName: "Ringer Lifesciences",
    type: "website",
  },
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

import type { Metadata } from "next";
import { Geist, Geist_Mono, Anton } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "UTSM — University of Toronto Supermileage",
    template: "%s | UTSM",
  },
  description:
    "University of Toronto Supermileage is a student design team building hyper-efficient Battery Electric and Hydrogen Fuel Cell vehicles for Shell Eco-Marathon Americas.",
  keywords: ["UTSM", "supermileage", "University of Toronto", "Shell Eco Marathon", "hydrogen", "electric vehicle"],
  openGraph: {
    title: "UTSM — University of Toronto Supermileage",
    description: "Designing, fabricating, and racing hyper energy-efficient vehicles.",
    url: "https://utsm.ca",
    siteName: "UTSM",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} antialiased text-white`}
        style={{ backgroundColor: "#1a3464" }}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

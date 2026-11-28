import type { Metadata } from "next";
import TempestBanner from "@/components/TempestBanner";
import CarPageContent from "@/components/CarPageContent";

export const metadata: Metadata = { title: "TEMPEST" };

export default function TempestPage() {
  return (
    <div style={{ backgroundColor: "#040e22", minHeight: "100dvh" }}>
      <TempestBanner />
      <CarPageContent car="tempest" />
    </div>
  );
}

import type { Metadata } from "next";
import PrototypeBanner from "@/components/PrototypeBanner";
import CarPageContent from "@/components/CarPageContent";

export const metadata: Metadata = { title: "PROTOTYPE | UTSM" };

export default function PrototypePage() {
  return (
    <div style={{ backgroundColor: "#040e22", minHeight: "100dvh" }}>
      <PrototypeBanner />
      <CarPageContent car="prototype" />
    </div>
  );
}

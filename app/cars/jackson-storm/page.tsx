import type { Metadata } from "next";
import JacksonStormBanner from "@/components/JacksonStormBanner";
import CarPageContent from "@/components/CarPageContent";

export const metadata: Metadata = { title: "JACKSON STORM | UTSM" };

export default function JacksonStormPage() {
  return (
    <div style={{ backgroundColor: "#040e22", minHeight: "100dvh" }}>
      <JacksonStormBanner />
      <CarPageContent car="jacksonStorm" />
    </div>
  );
}

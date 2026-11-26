import type { Metadata } from "next";
import UCBanner from "@/components/UCBanner";
import CarPageContent from "@/components/CarPageContent";

export const metadata: Metadata = { title: "URBAN CONCEPT | UTSM" };

export default function UrbanConceptPage() {
  return (
    <div style={{ backgroundColor: "#1a0404", minHeight: "100dvh" }}>
      <UCBanner />
      <CarPageContent car="urbanConcept" />
    </div>
  );
}

import type { Metadata } from "next";
import TeamLeads from "@/components/TeamLeads";

export const metadata: Metadata = { title: "Prototype Team" };

const rows = [
  [
    { name: "Keaton Bailie",         role: "Captain",                photo: "/Keaton%20Bailie.JPG",           linkedin: "https://ca.linkedin.com/in/keaton-bailie" },
    { name: "Brayden Chan Carusone", role: "Technical Director",     photo: "/Brayden%20Chan%20Carusone.JPG", linkedin: "https://ca.linkedin.com/in/b-chan-carusone" },
  ],
  [
    { name: "Rihanna Popescu",       role: "Aerostructural Lead",    photo: "/team-2t7/rihanna.jpg",          linkedin: "https://ca.linkedin.com/in/rihannapopescu" },
    { name: "Emma Sun",              role: "Aerostructural Lead",    photo: "/team-2t7/emma.jpg",             linkedin: "" },
  ],
  [
    { name: "Rafael Simogiarto",     role: "Mechanical Lead",        photo: "/team-2t7/raf.jpg",              linkedin: "https://ca.linkedin.com/in/rafael-simogiarto-739018259" },
    { name: "Ella Thompson",         role: "Mechanical Lead",        photo: "/Ella%20Thompson.jpg",           linkedin: "https://ca.linkedin.com/in/ellathompson-" },
  ],
  [
    { name: "Grace Chang",           role: "Electrical Lead",        photo: "/team-2t7/grace.jpg",            linkedin: "https://ca.linkedin.com/in/grace-chang-7308842a7" },
    { name: "Cynthia Wei",           role: "Electrical Lead",        photo: "/team-2t7/cynthia.jpg",          linkedin: "https://ca.linkedin.com/in/cynthiaawei" },
    { name: "Benjamin Noto",         role: "Powertrain Lead",        photo: "/Benjamin%20Noto.JPG",           linkedin: "https://ca.linkedin.com/in/benjamin-noto" },
  ],
  [
    { name: "Rihanna Popescu",       role: "Driver",                 photo: "/team-2t7/rihanna.jpg",          linkedin: "https://ca.linkedin.com/in/rihannapopescu" },
  ],
];

// Archive: 2t6 leads — flat list for compact grid
const archive2t6 = [
  { name: "Lilly-Claire Rankin",   role: "Captain",                photo: "/LC%20Rankin.JPG",               linkedin: "https://ca.linkedin.com/in/lilly-claire-rankin" },
  { name: "Olivia Fredrickson",    role: "Technical Director",     photo: "/Olvia%20Fredrickson.jpg",       linkedin: "https://ca.linkedin.com/in/olivia-fredrickson" },
  { name: "Demitri Pinnock",       role: "Aerostructural Lead",    photo: "/Demitri%20Pinnock.JPG",         linkedin: "https://ca.linkedin.com/in/demitrip" },
  { name: "Zain Glover",           role: "Aerostructural Lead",    photo: "/Zain%20Glover.jpg",             linkedin: "https://ca.linkedin.com/in/zain-glover" },
  { name: "Ella Thompson",         role: "Mechanical Lead",        photo: "/Ella%20Thompson.jpg",           linkedin: "https://ca.linkedin.com/in/ellathompson-" },
  { name: "Suvercha Sharma",       role: "Mechanical Lead",        photo: "/Survercha%20Sharma.jpg",        linkedin: "https://ca.linkedin.com/in/suvercha-sharma" },
  { name: "Brayden Chan Carusone", role: "Electrical Systems Lead",photo: "/Brayden%20Chan%20Carusone.JPG", linkedin: "https://ca.linkedin.com/in/b-chan-carusone" },
  { name: "Benjamin Noto",         role: "Powertrain Lead",        photo: "/Benjamin%20Noto.JPG",           linkedin: "https://ca.linkedin.com/in/benjamin-noto" },
  { name: "Keaton Bailie",         role: "Electrical Systems Lead",photo: "/Keaton%20Bailie.JPG",           linkedin: "https://ca.linkedin.com/in/keaton-bailie" },
];

// Official 2t6 photos go here as { src, alt }; the slideshow stays hidden while this is empty.
const photos2t6: { src: string; alt: string }[] = [];

export default function PrototypePage() {
  return <TeamLeads car="TEMPEST · 2t7" team="Prototype" squarePhotos rows={rows} archive={archive2t6} photos={photos2t6} />;
}

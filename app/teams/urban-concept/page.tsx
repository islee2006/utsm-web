import type { Metadata } from "next";
import TeamLeads from "@/components/TeamLeads";

export const metadata: Metadata = { title: "Urban Concept Team" };

const rows = [
  [
    { name: "Rafael Perez Vicente",  role: "Captain",             photo: "/Rafael%20Perez.JPG",          linkedin: "https://www.linkedin.com/in/rafael-perez-vicente-a604a0260/" },
    { name: "Brooklynn Bennitt",     role: "Technical Director",  photo: "/Brooklynn%20Bennitt.JPG",      linkedin: "https://www.linkedin.com/in/brooklynn-bennitt-88521820a/" },
  ],
  [
    { name: "Victoria Ling",         role: "Aerostructural Lead", photo: "/team-2t7/victoria.jpg",        linkedin: "https://ca.linkedin.com/in/victoria-ling-" },
    { name: "Alek Kilicyan",         role: "Aerostructural Lead", photo: "/team-2t7/alek.jpg",           linkedin: "https://ca.linkedin.com/in/alek-kilicyan" },
  ],
  [
    { name: "Jessica Wang",          role: "Mechanical Lead",     photo: "/team-2t7/jessica.jpg",         linkedin: "https://www.linkedin.com/in/jessica-wang-936245331/" },
    { name: "Vanessa Lee",           role: "Mechanical Lead",     photo: "/team-2t7/vanessa.jpg",         linkedin: "https://www.linkedin.com/in/vanessa-lee-a88852222/" },
    { name: "Ishan Patel",           role: "Mechanical Lead",     photo: "/team-2t7/ishan.jpg",          linkedin: "https://ca.linkedin.com/in/ish-pat" },
    { name: "Joan Sara Anish",role: "Mechanical Lead",     photo: "/team-2t7/joan.jpg",            linkedin: "https://ca.linkedin.com/in/joan-sara-anish" },
  ],
  [
    { name: "Jefferson Chen",        role: "Powertrain Lead",     photo: "/team-2t7/jefferson.jpg",       linkedin: "https://ca.linkedin.com/in/jefferson-chen-543b65327" },
    { name: "George Zimmermann",role: "Powertrain Lead",     photo: "/team-2t7/george.jpg",          linkedin: "https://ca.linkedin.com/in/georgezimmermann" },
    { name: "Ami Phung",role: "Powertrain Lead",     photo: "/team-2t7/ami.jpg",             linkedin: "https://ca.linkedin.com/in/amiphung" },
  ],
  [
    { name: "Novera Ahmed",          role: "Electrical Lead",     photo: "/team-2t7/novera.jpg",          linkedin: "https://www.linkedin.com/in/novera-a-523348183/" },
    { name: "Luke Luan",             role: "Electrical Lead",     photo: "/team-2t7/luke.jpg",            linkedin: "https://www.linkedin.com/in/luke765/" },
    { name: "Jahangir Khurram",role: "Electrical Lead",     photo: "/team-2t7/jahangir.jpg",             linkedin: "https://ca.linkedin.com/in/jahangir-khurram-32aa3534a" },
    { name: "Isaac Lee",             role: "Electrical Lead",     photo: "/team-2t7/isaac.jpg",          linkedin: "https://www.linkedin.com/in/isaac-lee-a45072339/" },
  ],
  [
    { name: "Victoria Ling",         role: "Driver",              photo: "/team-2t7/victoria.jpg",        linkedin: "https://ca.linkedin.com/in/victoria-ling-" },
  ],
];

// Archive: 2t6 leads — flat list for compact grid
const archive2t6 = [
  { name: "Rafael Perez Vicente", role: "Captain",                     photo: "/Rafael%20Perez.JPG",       linkedin: "https://ca.linkedin.com/in/rafael-perez-vicente-a604a0260" },
  { name: "Zaki Dawoodally",      role: "Technical Director",          photo: "/Zaki%20Dawoodally.JPG",    linkedin: "https://ca.linkedin.com/in/zaki-dawoodally" },
  { name: "Alex Nguyen",          role: "Aerostructural Lead",         photo: "/Alex%20Nguyen.JPG",        linkedin: "https://ca.linkedin.com/in/alexhuy" },
  { name: "Brandon Ha",           role: "Aerostructural Lead",         photo: "/Brandon%20Ha.JPG",         linkedin: "https://ca.linkedin.com/in/brandonha" },
  { name: "Brooklynn Bennitt",    role: "Mechanical Lead",             photo: "/Brooklynn%20Bennitt.JPG",  linkedin: "https://www.linkedin.com/in/brooklynn-bennitt-88521820a/" },
  { name: "Yuji Mun",             role: "Mechanical Lead",             photo: "/Yuji%20Mun.JPG",           linkedin: "https://ca.linkedin.com/in/yuji-mun-52726522b" },
  { name: "Michael Feng",         role: "Electrical Lead",             photo: "/Michael%20Feng.JPG",       linkedin: "https://ca.linkedin.com/in/michaelyyfeng" },
  { name: "Novera Ahmed",         role: "Electrical Lead",             photo: "/Novera%20Ahmed.JPG",       linkedin: "https://www.linkedin.com/in/novera-a-523348183/" },
  { name: "Kalli Alikakos",       role: "Powertrain Lead",             photo: "/Kalli%20Alikakos.JPG",     linkedin: "https://www.linkedin.com/in/kalli-alikakos/" },
  { name: "Vanessa Natalia",      role: "Hydrogen Lead",               photo: "/DSC09284.jpg",             linkedin: "https://ca.linkedin.com/in/vanessa-natalia" },
  { name: "Maanik Gogna",         role: "Powertrain Electronics Lead", photo: "/Maanik%20Gogna.JPG",       linkedin: "https://ca.linkedin.com/in/maanikgogna" },
  { name: "Aaron Zhang",          role: "Mechatronics Lead",           photo: "/Aaron%20Zhang.JPG",        linkedin: "https://www.linkedin.com/in/aaron-zhang-7383a827b/" },
];

// Official 2t6 photos go here as { src, alt }; the slideshow stays hidden while this is empty.
const photos2t6: { src: string; alt: string }[] = [];

export default function UrbanConceptPage() {
  return <TeamLeads car="JACKSON STORM · 2t7" team="Urban Concept" subtitle="JACKSON STORM" squarePhotos rows={rows} archive={archive2t6} photos={photos2t6} />;
}

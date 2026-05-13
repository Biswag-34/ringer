import type { DivisionData } from "@/types/division";
import { divisionProductLists } from "./products";

export const ent: DivisionData = {
  slug: "ent",
  title: "Otorhinolaryngology (ENT)",
  tagline: "Comprehensive ear, nose & throat care",

  intro: `
ENT focuses on diagnosing and treating disorders of the ear, nose, throat,
and related head and neck structures. These include infections, hearing loss,
sinus conditions, and more complex disorders.
`,

  // ✅ SECTION IMAGES
  heroImage: "/images/divisions/division-bg.png",
  introImage: "/images/divisions/ent/intro.png",
  contributionImage: "/images/divisions/ent/contribution.png",

  keyInsights: [
    {
      title: "Wide Disease Spectrum",
      description:
        "Conditions range from common infections to chronic and structural disorders.",
      image: "/images/divisions/ent/insight1.png",
    },
    {
      title: "Integrated Care Approach",
      description:
        "Combines medical and surgical management for effective outcomes.",
      image: "/images/divisions/ent/insight2.png",
    },
  ],

  contributions: [
    "Targeted therapies for ENT infections and inflammation",
    "Supportive care solutions for chronic ENT conditions",
  ],

  products: divisionProductLists.ent,

  accent: "#06b6d4",
};

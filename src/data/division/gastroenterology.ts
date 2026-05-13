import type { DivisionData } from "@/types/division";
import { divisionProductLists } from "./products";

export const gastroenterology: DivisionData = {
  slug: "gastroenterology",
  title: "Gastroenterology",
  tagline: "All disease begins in the gut",

  intro: `
Modern science validates the gut as the foundation of systemic health.
Imbalances in the microbiome are now linked to inflammation, metabolic disorders,
and neurological conditions. Rising lifestyle disorders have significantly increased
gastric and liver-related diseases globally.
`,

  // ✅ HERO + SECTION IMAGES
  heroImage: "/images/divisions/division-bg.png",
  introImage: "/images/divisions/gastro/intro.png",
  contributionImage: "/images/divisions/gastro/contribution.png",

  keyInsights: [
    {
      title: "Gut-Microbiome Link",
      description:
        "Microbiota imbalance contributes to immune dysfunction and chronic disease progression.",
      image: "/images/divisions/gastro/insight1.png", // ✅ NEW
    },
    {
      title: "Lifestyle Disease Surge",
      description:
        "Rapid increase in liver and gastric disorders due to diet and stress.",
      image: "/images/divisions/gastro/insight2.png", // ✅ NEW
    },
  ],

  contributions: [
    "Focused gut-health driven formulations",
    "Combination therapies targeting liver restoration",
    "Advanced probiotic solutions tailored for Indian microbiome",
  ],

  products: divisionProductLists.gastroenterology,

  accent: "#22c55e",
};

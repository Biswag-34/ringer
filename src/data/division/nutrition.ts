import type { DivisionData } from "@/types/division";
import { divisionProductLists } from "./products";

export const nutrition: DivisionData = {
  slug: "nutrition",
  title: "Nutrition",
  tagline: "Precision nutrition for microbiome-led recovery",

  intro: `
Nutrition is no longer supportive care alone. It plays a central therapeutic role in restoring gut integrity,
metabolic balance, neurological resilience, and long-term patient recovery. Modern nutritional science now
connects micronutrient status, microbiome diversity, inflammation, and cellular energy with outcomes across
multiple super-specialties.
`,

  heroImage: "/images/divisions/division-bg.png",
  introImage: "/images/health6.png",
  contributionImage: "/images/health6.png",

  keyInsights: [
    {
      title: "Micronutrients Shape Systems Biology",
      description:
        "Targeted nutritional interventions can influence immune signaling, mitochondrial function, and tissue repair across gut, liver, cardiac, and neurological pathways.",
      image: "/images/health6.png",
    },
    {
      title: "The Microbiome Depends on Nutrition",
      description:
        "Diet quality and bioavailable nutrients help regulate microbiome diversity, intestinal barrier strength, and inflammatory load in chronic disease states.",
      image: "/images/health6.png",
    },
    {
      title: "Bioavailability Drives Clinical Outcomes",
      description:
        "Advanced delivery formats such as liposomal nutrition improve absorption and help clinicians achieve more dependable therapeutic response.",
      image: "/images/health6.png",
    },
  ],

  contributions: [
    "Therapeutic nutrition strategies aligned to gut-brain, gut-liver, and gut-airways biology",
    "Bioavailable formulations designed to improve energy metabolism, recovery, and nutrient uptake",
    "Specialist-focused solutions that support chronic care, preventive care, and adjunct therapy plans",
  ],

  products: divisionProductLists.nutrition,

  accent: "#16a34a",
};

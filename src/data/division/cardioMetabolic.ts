import type { DivisionData } from "@/types/division";
import { divisionProductLists } from "./products";

export const cardioMetabolic: DivisionData = {
  slug: "cardio-metabolic",
  title: "Cardio Metabolic",
  tagline: "Managing lifestyle diseases at scale",

  intro: `
Cardio-metabolic disorders such as diabetes and hypertension are rising rapidly in India,
affecting even younger populations. These conditions significantly increase the risk of
severe complications if left unmanaged.
`,

  // ✅ SECTION IMAGES
  heroImage: "/images/divisions/division-bg.png",
  introImage: "/images/divisions/cardio/intro.png",
  contributionImage: "/images/divisions/cardio/contribution.png",

  keyInsights: [
    {
      title: "Rise in Lifestyle Disorders",
      description:
        "Sedentary lifestyle, stress, and dietary changes are driving diabetes, NAFLD, and metabolic syndrome.",
      image: "/images/divisions/cardio/insight1.png",
    },
    {
      title: "Gut-Driven Metabolic Health",
      description:
        "Probiotics and microbiome modulation can influence insulin resistance, inflammation, and obesity.",
      image: "/images/divisions/cardio/insight2.png",
    },
    {
      title: "Preventive Healthcare Shift",
      description:
        "Focus is moving toward early intervention and prevention using microbiome-based therapies.",
      image: "/images/divisions/cardio/insight3.png",
    },
  ],

  contributions: [
    "Dedicated therapies for diabetes and hypertension management",
    "Microbiome-focused metabolic interventions",
    "Preventive healthcare solutions tailored for Indian population",
  ],

  products: divisionProductLists.cardioMetabolic,

  accent: "#ef4444",
};

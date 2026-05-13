import type { DivisionData } from "@/types/division";
import { divisionProductLists } from "./products";

export const respiratory: DivisionData = {
  slug: "respiratory",
  title: "Respiratory",
  tagline: "Strengthening lung health through science",

  intro: `
Respiratory diseases affect a significant portion of the population.
Conditions like asthma, allergic rhinitis, and infections require
integrated therapeutic approaches.
`,

  // ✅ SECTION IMAGES
  heroImage: "/images/divisions/division-bg.png",
  introImage: "/images/divisions/respiratory/intro.png",
  contributionImage: "/images/divisions/respiratory/contribution.png",

  keyInsights: [
    {
      title: "Gut-Lung Axis",
      description:
        "Gut microbiota influences lung immunity and inflammation through immune signaling.",
      image: "/images/divisions/respiratory/insight1.png",
    },
    {
      title: "Chronic Disease Link",
      description:
        "Dysbiosis is linked to asthma, COPD, and respiratory infections.",
      image: "/images/divisions/respiratory/insight2.png",
    },
    {
      title: "Emerging Therapies",
      description:
        "Probiotics and microbiome modulation show promise in respiratory care.",
      image: "/images/divisions/respiratory/insight3.png",
    },
  ],

  contributions: [
    "Therapies targeting allergic and chronic respiratory diseases",
    "Microbiome-based immune modulation strategies",
  ],

  products: divisionProductLists.respiratory,

  accent: "#3b82f6",
};

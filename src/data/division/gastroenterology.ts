import { DivisionData } from "@/types/division";

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

  products: [
    {
      name: "SAMeTRAL-400",
      composition: "Ademetionine 400 mg",
      form: "Tablet",
      highlight: "Liver restoration",
      image: "/images/divisions/medicine.png",
    },
    {
      name: "EVINAF",
      composition:
        "Vitamin E 400 IU + Omega 3 (EPA 540 mg + DHA 360 mg)",
      form: "Soft Gel Capsule",
      image: "/images/divisions/medicine.png",
    },
    {
      name: "LACTORIN",
      composition:
        "Bacillus clausii 2B + Multi probiotics 13B CFU",
      form: "Capsule",
      image: "/images/divisions/medicine.png",
    },
    {
      name: "MAXTRUM",
      composition: "Multivitamin + Multimineral + Antioxidants",
      form: "Tablet",
      image: "/images/divisions/medicine.png",
    },
    {
      name: "HEPAZIN",
      composition:
        "L-Ornithine L-Aspartate + Zinc",
      form: "Sachet",
      image: "/images/divisions/medicine.png",
    },
    {
      name: "ESORIN-IT",
      composition: "Esomeprazole 40 mg + Itopride 150 mg",
      form: "Capsule",
      image: "/images/divisions/medicine.png",
    },
    {
      name: "MGBOOST PLUS",
      composition:
        "Triple Liposomal Magnesium + CoQ10 + B2 + TPP",
      form: "Tablet",
      highlight: "Mitochondrial energy boost",
      image: "/images/divisions/medicine.png",
    },
  ],

  accent: "#22c55e",
};
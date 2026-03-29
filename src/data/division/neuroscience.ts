import { DivisionData } from "@/types/division";

export const neuroscience: DivisionData = {
  slug: "neuroscience",
  title: "Neuroscience",
  tagline: "Decoding the brain through the gut",

  intro: `
Neuroscience focuses on the nervous system, particularly the brain, covering its structure,
function, and disorders. Modern research highlights strong connections between gut health
and brain function through the gut-brain axis.
`,

  // ✅ SECTION IMAGES
  heroImage: "/images/divisions/division-bg.png",
  introImage: "/images/divisions/neuro/intro.png",
  contributionImage: "/images/divisions/neuro/contribution.png",

  keyInsights: [
    {
      title: "Gut-Brain Axis",
      description:
        "Bidirectional communication between gut microbiota and brain influences cognition, mood, and immunity.",
      image: "/images/divisions/neuro/insight1.png",
    },
    {
      title: "Neurodegenerative Research",
      description:
        "Immune cells originating in the gut may contribute to diseases like Parkinson’s.",
      image: "/images/divisions/neuro/insight2.png",
    },
    {
      title: "Emerging Therapies",
      description:
        "Vagus nerve stimulation and microbiome modulation show promise in reversing memory loss.",
      image: "/images/divisions/neuro/insight3.png",
    },
  ],

  contributions: [
    "Research-driven neuro-metabolic formulations",
    "Focus on microbiome impact on cognitive health",
    "Targeting inflammation and neurodegeneration pathways",
  ],

  products: [
    {
      name: "Neuro Support Formulations",
      composition: "Neuroactive nutrients & mitochondrial cofactors",
      form: "Tablet/Capsule",
      highlight: "Cognitive & nerve support",
      image: "/images/divisions/medicine.png",
    },
  ],

  accent: "#8b5cf6",
};
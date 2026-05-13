import type { DivisionData } from "@/types/division";
import { divisionProductLists } from "./products";

export const orthoSpine: DivisionData = {
  slug: "orthopaedics-spine",
  title: "Orthopaedics & Spine",
  tagline: "Advancing mobility and recovery",

  intro: `
Orthopaedics focuses on musculoskeletal health including bones, joints, and spine.
Recent research highlights non-opioid approaches for pain management and recovery.
`,

  // ✅ SECTION IMAGES
  heroImage: "/images/divisions/division-bg.png",
  introImage: "/images/divisions/ortho/intro.png",
  contributionImage: "/images/divisions/ortho/contribution.png",

  keyInsights: [
    {
      title: "Magnesium in Pain Management",
      description:
        "Oral magnesium acts as an analgesic adjunct in post-operative pain.",
      image: "/images/divisions/ortho/insight1.png",
    },
    {
      title: "Bone Regeneration",
      description:
        "Nutritional and mineral support enhances bone healing and recovery.",
      image: "/images/divisions/ortho/insight2.png",
    },
  ],

  contributions: [
    "Non-opioid pain management solutions",
    "Bone health and recovery-focused formulations",
  ],

  products: divisionProductLists.orthoSpine,

  accent: "#f59e0b",
};

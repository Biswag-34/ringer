export interface DivisionProduct {
  name: string;
  composition: string;
  form: string;
  highlight?: string;
  image: string; // ✅ NEW
}

export interface DivisionInsight {
  title: string;
  description: string;
  image: string; // ✅ NEW
}

export interface DivisionData {
  slug: string;
  title: string;
  tagline: string;

  intro: string;

  keyInsights: DivisionInsight[];

  contributions: string[];

  products: DivisionProduct[];

  accent: string;

  // ✅ IMAGES (STRUCTURED)
  heroImage: string;              // hero background
  introImage: string;             // intro left image
  contributionImage: string;      // contribution right image
}
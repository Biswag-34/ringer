export interface DivisionProduct {
  name: string;
  composition: string;
  form: string;
  highlight?: string;
  image: string;
  normalImage?: string;
  detailImage?: string;
  keyIngredient?: string;
  fullIngredients?: string;
}

export interface DivisionInsight {
  title: string;
  description: string;
  image: string;
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

  heroImage: string;
  introImage: string;
  contributionImage: string;
}

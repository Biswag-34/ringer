import { divisions } from "@/data/division";
import { DivisionData } from "@/types/division";

// ✅ Safe + debug version
export function getDivision(slug: string): DivisionData | undefined {
  console.log("🔍 Searching for slug:", slug);

  if (!slug) {
    console.error("❌ Slug is undefined/null");
    return undefined;
  }

  const match = divisions.find(
    (d) => d.slug.toLowerCase() === slug.toLowerCase()
  );

  console.log(
    "📊 Available slugs:",
    divisions.map((d) => d.slug)
  );

  return match;
}

export function getAllDivisions(): DivisionData[] {
  console.log("📦 getAllDivisions called");
  return divisions;
}
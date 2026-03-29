import { notFound } from "next/navigation";
import DivisionWrapper from "@/component/division/DivisionWrapper";
import {
  getDivision,
  getAllDivisions,
} from "@/lib/utils/getDivision";

type Props = {
  params: {
    slug: string;
  };
};

// ✅ Static generation
export function generateStaticParams() {
  const all = getAllDivisions();

  console.log("🔥 generateStaticParams:", all.map((d) => d.slug));

  return all.map((d) => ({
    slug: d.slug,
  }));
}

// ✅ IMPORTANT: async + debug
export default async function DivisionPage({ params }: Props) {
  console.log("🚀 RAW params:", params);

  // Handle both sync + async cases safely
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  console.log("👉 Resolved slug:", slug);

  const division = getDivision(slug);

  console.log("📦 Division result:", division);

  if (!division) {
    console.error("❌ Division NOT FOUND for slug:", slug);
    return notFound();
  }

  return <DivisionWrapper data={division} />;
}
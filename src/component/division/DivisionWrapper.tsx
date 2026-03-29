// components/divisions/DivisionWrapper.tsx
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import DivisionHero from "./DivisionHero";
import DivisionIntro from "./DivisionIntro";
import DivisionInsight from "./DivisionInsights";
import DivisionContributions from "./DivisionContribution";
import DivisionProduct from "./DivisionProducts";
import DivisionCTA from "./DivisionCTA";
import { DivisionData } from "@/types/division";

export default function DivisionWrapper({ data }: { data: DivisionData }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <div ref={ref} className="bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <motion.div style={{ opacity, scale }}>
        <DivisionHero data={data} />
      </motion.div>
      <DivisionIntro data={data} />
      <DivisionInsight data={data} />
      <DivisionContributions data={data} />
      <DivisionProduct data={data} />
      <DivisionCTA data={data} />
    </div>
  );
}
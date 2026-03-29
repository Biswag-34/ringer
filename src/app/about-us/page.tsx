"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AboutPage() {
  const blobRef = useRef<HTMLDivElement>(null);

  // 🔥 Floating background animation
  useEffect(() => {
    if (!blobRef.current) return;

    gsap.to(blobRef.current, {
      x: 120,
      y: 80,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <main className="bg-[#F8FAFC] text-[#0F172A] overflow-hidden">

      {/* 🔥 HERO */}
      <section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">

        {/* Gradient BG */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E0F2FE] via-white to-[#CCFBF1]" />

        {/* Floating Blob */}
        <div
          ref={blobRef}
          className="absolute w-[500px] h-[500px] bg-[#0EA5A4]/20 blur-[120px] rounded-full top-20 left-20"
        />

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Science That Connects <br /> Human Health
          </h1>

          <p className="mt-6 text-[#64748B] max-w-xl mx-auto">
            Transforming healthcare by decoding the Gut–Brain and Gut–Airway
            connection through advanced research and innovation.
          </p>
        </motion.div>
      </section>

      {/* 🔥 ABOUT */}
      <section className="max-w-[1200px] mx-auto px-6 py-32 grid md:grid-cols-2 gap-20">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-semibold mb-6">Who We Are</h2>
          <p className="text-[#475569] leading-relaxed">
            Ringer Lifesciences (India) Pvt Ltd is committed to advancing
            healthcare through precision-driven research across hepatology,
            gastroenterology, neurology, pulmonology, and ENT.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-[#475569]"
        >
          Our work focuses on interconnected biological systems such as the
          Gut–Brain Axis and Gut–Airway Axis, enabling the development of
          therapies that improve overall health outcomes rather than isolated
          symptoms.
        </motion.div>
      </section>

      {/* 🔬 RESEARCH */}
      <section className="relative py-32 bg-white overflow-hidden">

        {/* Animated line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 2 }}
          className="absolute top-1/2 left-0 h-[2px] bg-gradient-to-r from-[#0EA5A4] to-[#2563EB]"
        />

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">

          <div className="text-center mb-20">
            <h2 className="text-4xl font-semibold mb-6">
              Our Research Focus
            </h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">
              We specialize in understanding how interconnected biological
              systems influence human health, enabling holistic and more
              effective treatment approaches.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">

            {/* Gut-Brain */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-[#F8FAFC] p-10 rounded-2xl border border-[#E2E8F0] shadow-sm"
            >
              <h3 className="text-2xl font-semibold text-[#0EA5A4] mb-4">
                Gut–Brain Axis
              </h3>

              <p className="text-[#475569] mb-4">
                The Gut–Brain Axis represents the bidirectional communication
                between the gastrointestinal system and the central nervous
                system.
              </p>

              <p className="text-[#64748B]">
                Our research explores how gut microbiota influence neurological
                health, cognitive function, and immune regulation—supporting
                therapies for neurological disorders and inflammatory conditions.
              </p>
            </motion.div>

            {/* Gut-Airway */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-[#F8FAFC] p-10 rounded-2xl border border-[#E2E8F0] shadow-sm"
            >
              <h3 className="text-2xl font-semibold text-[#2563EB] mb-4">
                Gut–Airway Axis
              </h3>

              <p className="text-[#475569] mb-4">
                The Gut–Airway Axis highlights the connection between gut health
                and respiratory function.
              </p>

              <p className="text-[#64748B]">
                We study how microbiota regulate immune responses affecting
                respiratory infections, allergies, and chronic pulmonary
                diseases.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 💊 PRODUCT */}
      <section className="py-32 px-6 max-w-[1200px] mx-auto">

        <div className="text-center mb-20">
          <h2 className="text-4xl font-semibold text-[#2563EB] mb-6">
            PRE-PROBIOTICS Innovation
          </h2>

          <p className="text-[#64748B] max-w-2xl mx-auto">
            A scientifically developed probiotic formulation designed to restore
            gut balance, enhance immunity, and improve therapeutic outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-[#0EA5A4]">
              Advanced Composition
            </h3>

            <p className="text-[#475569] mb-6">
              Combines strain-specific probiotics with poly-antibiotic resistant
              <strong> Bacillus Clausii</strong>, ensuring effectiveness even
              during antibiotic treatments.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-[#0EA5A4]">
              Clinical Relevance
            </h3>

            <p className="text-[#64748B]">
              Demonstrates improved H. pylori eradication rates and reduced side
              effects, aligning with global gastroenterology recommendations.
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              "Gut Dysbiosis",
              "Respiratory Infections",
              "Liver Health Support",
              "Immune Modulation",
              "Allergy Management",
              "Neurological Support",
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white border border-[#E2E8F0] rounded-xl shadow-sm text-center text-[#475569] hover:shadow-md transition"
              >
                {item}
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 🌟 VALUES */}
      <section className="py-32 px-6 bg-[#F1F5F9]">
        <h2 className="text-4xl font-semibold text-center mb-16">
          Our Core Values
        </h2>

        <div className="max-w-[1200px] mx-auto grid md:grid-cols-4 gap-10">
          {[
            "Innovation",
            "Integrity",
            "Excellence",
            "Customer Focus",
            "Teamwork",
            "R&D",
            "Continuous Improvement",
            "Collaboration",
          ].map((value, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-white shadow-md border border-[#E2E8F0] text-center"
            >
              {value}
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔥 CTA */}
      <section className="py-32 text-center bg-gradient-to-r from-[#E0F2FE] to-[#CCFBF1]">
        <h2 className="text-4xl font-semibold">
          Shaping the Future of Healthcare
        </h2>
        <p className="text-[#475569] mt-4">
          Driven by science. Guided by care.
        </p>
      </section>

    </main>
  );
}
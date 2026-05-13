"use client";

import { motion } from "framer-motion";

const missionPoints = [
  {
    title: "Pioneer New Frontiers",
    description:
      "Drive breakthrough research in Liposomal Magnesium, Psychobiotics, and Microbiome Therapeutics to set new clinical standards across Gastroenterology, Neurology, Hepatology, Pulmonology, and Cardiology.",
  },
  {
    title: "Unify Super-Specialties",
    description:
      "Develop evidence-based therapies that connect the Gut-Brain, Gut-Liver, and Gut-Airways Axis addressing complex disorders like IBS-C, stress, NAFLD, metabolic syndrome, and neuro-inflammation.",
  },
  {
    title: "Redefine Bioavailability",
    description:
      "Champion Liposomal Magnesium as the gold standard for cellular energy, neuroprotection, and cardiac health, ensuring superior absorption and clinical outcomes.",
  },
  {
    title: "Empower the Experts",
    description:
      "Partner with India's leading specialists through rigorous science, transparent data, and ethical engagement to elevate therapeutic decision-making.",
  },
  {
    title: "Transform Patient Journeys",
    description:
      "Deliver clinically superior, patient-centric solutions that treat the cause, not just the condition, with uncompromising quality, safety, and trust.",
  },
];

export default function VisionMission() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-20 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-xs font-semibold tracking-[0.24em] text-blue-600">
            VISION & MISSION
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight text-gray-900">
            Building the future of precision microbiome care
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <span className="text-sm font-semibold tracking-[0.2em] text-blue-700">
                VISION
              </span>
              <div className="mt-3 h-[3px] w-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />
            </div>

            <p className="text-[16.5px] leading-[1.9] text-gray-700">
              To lead India&apos;s next-generation healthcare revolution by decoding
              the Gut-Brain, Gut-Liver, and Gut-Airways Axis.
            </p>

            <p className="text-[16.5px] leading-[1.9] text-gray-700">
              As pioneers of Liposomal Magnesium and Psychobiotics, we are
              committed to making precision microbiome science and advanced
              nutritional therapeutics accessible to every patient.
            </p>

            <p className="text-[16.5px] leading-[1.9] text-gray-700">
              We envision a future where super-specialty care moves beyond
              symptom management to root-cause healing, powered by
              bioavailability, microbiome intelligence, and cross-disciplinary
              innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div>
              <span className="text-sm font-semibold tracking-[0.2em] text-blue-700">
                MISSION
              </span>
              <div className="mt-3 h-[3px] w-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />
            </div>

            <p className="mt-6 text-[16px] leading-[1.8] text-gray-700">
              At Ringer Lifesciences, we exist to:
            </p>

            <div className="mt-6 space-y-4">
              {missionPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="border-l-2 border-blue-200 pl-5 py-1"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-[15.5px] leading-[1.8] text-gray-700">
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

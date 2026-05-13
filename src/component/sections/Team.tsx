"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Mr. Saroj Tiwari",
    role: "Vice President – Operations",
    img: "/images/team1.png",
  },
  {
    name: "Mr. Jitendra Yadav",
    role: "General Manager- Sales and Marketing",
    img: "/images/team2.png",
  },
  {
    name: "Mrs. Rani Tiwari",
    role: "Director",
    img: "/images/team3.png",
  },
   {
    name: "Mrs. K M Sonmati",
    role: "Chairman & Managing Director (CMD)",
    img: "/images/team4.png",
  },
];

export default function OurTeam() {
  return (
    <section className="bg-white py-24 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-xs font-semibold tracking-[0.24em] text-blue-600">
            OUR TEAM
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-wide text-blue-700">
            The people behind Ringer
          </h2>
          <p className="mt-5 text-[16px] leading-7 text-gray-600">
            A focused team bringing together technology, business, and
            healthcare execution with the same patient-first mindset.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-gray-100 transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-[320px] overflow-hidden">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover-fit transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
              </div>

              <div className="border-t border-blue-50 bg-gradient-to-b from-white to-blue-50/60 px-6 py-5 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-blue-600">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

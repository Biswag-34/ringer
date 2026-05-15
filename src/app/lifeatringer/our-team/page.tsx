"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Briefcase, Users } from "lucide-react";

const teamMembers = [
  {
    name: "Mr. Saroj Tiwari",
    role: "Vice President - Operations",
    img: "/images/team1.png",
  },
  {
    name: "Mr. Jitendra Yadav",
    role: "General Manager - Sales and Marketing",
    img: "/images/team2.png",
  },
  {
    name: "Mrs. Rani Tiwari",
    role: "Director",
    img: "/images/team3.png",
  },
  {
    name: "Mrs. K M Sonmati",
    role: "Chairman & Managing Director",
    img: "/images/team4.png",
  },
];

export default function OurTeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden px-6 pb-16 pt-28">
        <div className="absolute inset-0">
          <Image
            src="/images/health1.png"
            alt="Ringer team"
            fill
            className="object-cover opacity-10"
            priority
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-cyan-600/5" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl px-6 text-center"
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-600">
            <Users className="h-8 w-8 text-white" />
          </div>

          <h1 className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
            Our Team
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Meet the people guiding Ringer Lifesciences with operational focus,
            commercial discipline, and patient-first intent.
          </p>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">
            Leadership
          </span>
          <h2 className="mt-3 text-3xl font-bold text-gray-950 md:text-5xl">
            The people behind Ringer
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-gray-100 transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-[320px] overflow-hidden bg-blue-50">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
              </div>

              <div className="border-t border-blue-50 bg-gradient-to-b from-white to-blue-50/60 px-6 py-5 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-blue-600">
                  {member.role}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 p-8 text-center"
        >
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/images/health1.png"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          <div className="relative z-10">
            <Briefcase className="mx-auto mb-4 h-8 w-8 text-white" />
            <h3 className="text-2xl font-bold text-white">
              Want to join our team?
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-blue-100">
              We are always looking for committed professionals who want to
              contribute to meaningful healthcare work.
            </p>
            <Link
              href="/lifeatringer/careers"
              className="mt-6 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-blue-600 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              View Open Positions
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

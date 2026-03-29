"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users } from "lucide-react";
import TeamCard from "@/component/life-at-ringer/TeamCard";
import Link from "next/link";

const teamMembers = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    position: "Chief Scientific Officer",
    department: "Research & Development",
    bio: "Leading microbiome research with over 15 years of experience in clinical studies.",
    image: "/images/health1.png",
    email: "sarah.johnson@ringer.com",
    location: "Boston, MA",
    linkedin: "#",
    expertise: ["Microbiome", "Clinical Research", "Immunology"],
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    position: "Head of Product Development",
    department: "Innovation",
    bio: "Expert in formulation science and therapeutic product development.",
    image: "/images/health1.png",
    email: "michael.chen@ringer.com",
    location: "San Francisco, CA",
    linkedin: "#",
    expertise: ["Formulation", "Product Development", "Regulatory"],
  },
  {
    id: 3,
    name: "Prof. Emily Rodriguez",
    position: "Clinical Research Director",
    department: "Clinical Affairs",
    bio: "Leading clinical trials and evidence generation for novel therapeutics.",
    image: "/images/health1.png",
    email: "emily.rodriguez@ringer.com",
    location: "London, UK",
    linkedin: "#",
    expertise: ["Clinical Trials", "Data Analysis", "Regulatory Affairs"],
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    position: "Senior Research Scientist",
    department: "Microbiology",
    bio: "Specializing in gut microbiome and its role in metabolic health.",
    image: "/images/health1.png",
    email: "james.wilson@ringer.com",
    location: "Sydney, Australia",
    linkedin: "#",
    expertise: ["Microbiology", "Metabolism", "Bioinformatics"],
  },
  {
    id: 5,
    name: "Dr. Lisa Thompson",
    position: "Medical Affairs Lead",
    department: "Medical",
    bio: "Bridging science and clinical practice for better patient outcomes.",
    image: "/images/health1.png",
    email: "lisa.thompson@ringer.com",
    location: "Toronto, Canada",
    linkedin: "#",
    expertise: ["Medical Affairs", "Clinical Education", "KOL Management"],
  },
  {
    id: 6,
    name: "Dr. Robert Kumar",
    position: "Director of Innovation",
    department: "Strategy",
    bio: "Driving innovation strategy and partnerships in healthcare.",
    image: "/images/health1.png",
    email: "robert.kumar@ringer.com",
    location: "Singapore",
    linkedin: "#",
    expertise: ["Innovation Strategy", "Partnerships", "Business Development"],
  },
];

const departments = [
  { name: "Research & Development", count: 12, color: "from-blue-500 to-cyan-500" },
  { name: "Clinical Affairs", count: 8, color: "from-purple-500 to-pink-500" },
  { name: "Medical", count: 6, color: "from-green-500 to-emerald-500" },
  { name: "Innovation", count: 5, color: "from-orange-500 to-red-500" },
  { name: "Operations", count: 8, color: "from-teal-500 to-cyan-500" },
  { name: "Commercial", count: 6, color: "from-indigo-500 to-blue-500" },
];

export default function OurTeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/health1.png"
            alt="Background"
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
          className="relative z-10 text-center max-w-4xl px-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center mx-auto mb-6"
          >
            <Users className="w-8 h-8 text-white" />
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Our Team
          </h1>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Meet the brilliant minds behind our innovation - scientists,
            researchers, and healthcare professionals united by a common mission.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
            <span className="text-sm text-gray-600">Total Team Members:</span>
            <span className="text-sm font-semibold text-blue-600">{teamMembers.length}+</span>
          </div>
        </motion.div>
      </section>

      {/* Departments Overview */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Our Departments
          </h2>
          <p className="mt-2 text-gray-600">
            Diverse expertise united by a shared vision
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {departments.map((dept, index) => (
            <motion.div
              key={dept.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">{dept.name}</h3>
                  <p className="text-sm text-gray-500">{dept.count} members</p>
                </div>
                <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${dept.color} opacity-20`} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/images/health1.png"
              alt="Background"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-2">
              Want to join our team?
            </h3>
            <p className="text-blue-100 mb-4">
              We&apos;re always looking for passionate individuals to join our mission
            </p>
            <Link href="/LifeAtRinger/careers">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View Open Positions
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
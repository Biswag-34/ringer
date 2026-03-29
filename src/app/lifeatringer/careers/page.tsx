"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase, Clock, DollarSign, Users, Award, TrendingUp, Heart } from "lucide-react";
import JobCard from "@/component/life-at-ringer/JobCard";
import JoinForm from "@/component/life-at-ringer/JoinForm";

const jobOpenings = [
  {
    id: 1,
    title: "Senior Research Scientist - Microbiome",
    department: "Research & Development",
    location: "Boston, MA",
    type: "Full-time",
    experience: "5-8 years",
    salary: "$120,000 - $150,000",
    description: "Lead cutting-edge research in microbiome science and develop novel therapeutic approaches.",
    requirements: [
      "PhD in Microbiology, Molecular Biology, or related field",
      "5+ years of industry experience",
      "Strong publication record",
      "Experience with clinical trials",
    ],
    posted: "2 days ago",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Clinical Research Associate",
    department: "Clinical Affairs",
    location: "San Francisco, CA",
    type: "Full-time",
    experience: "2-4 years",
    salary: "$80,000 - $100,000",
    description: "Support clinical trial operations and ensure compliance with regulatory requirements.",
    requirements: [
      "Bachelor's degree in life sciences",
      "2+ years of clinical research experience",
      "Knowledge of GCP and ICH guidelines",
      "Strong organizational skills",
    ],
    posted: "5 days ago",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Medical Science Liaison",
    department: "Medical Affairs",
    location: "Remote (US)",
    type: "Full-time",
    experience: "3-6 years",
    salary: "$140,000 - $170,000",
    description: "Build relationships with KOLs and communicate scientific data to healthcare professionals.",
    requirements: [
      "Advanced degree (PhD, PharmD, or MD)",
      "3+ years of MSL experience",
      "Strong communication skills",
      "Ability to travel 40%",
    ],
    posted: "1 week ago",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "Regulatory Affairs Specialist",
    department: "Regulatory",
    location: "Washington, DC",
    type: "Full-time",
    experience: "3-5 years",
    salary: "$90,000 - $120,000",
    description: "Manage regulatory submissions and ensure compliance with global regulations.",
    requirements: [
      "Bachelor's degree in life sciences",
      "3+ years of regulatory affairs experience",
      "Knowledge of FDA regulations",
      "Experience with IND/NDA submissions",
    ],
    posted: "3 days ago",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "Product Development Engineer",
    department: "Innovation",
    location: "Austin, TX",
    type: "Full-time",
    experience: "2-5 years",
    salary: "$85,000 - $110,000",
    description: "Develop and optimize formulation processes for novel therapeutic products.",
    requirements: [
      "MS/PhD in Chemical Engineering or related",
      "Experience with formulation development",
      "Knowledge of GMP requirements",
      "Problem-solving skills",
    ],
    posted: "1 day ago",
    color: "from-teal-500 to-cyan-500",
  },
  {
    id: 6,
    title: "Marketing Manager - Healthcare",
    department: "Commercial",
    location: "New York, NY",
    type: "Full-time",
    experience: "5-7 years",
    salary: "$100,000 - $130,000",
    description: "Lead marketing strategy for healthcare products and brand development.",
    requirements: [
      "MBA or related degree",
      "5+ years of healthcare marketing",
      "Experience with digital marketing",
      "Strong analytical skills",
    ],
    posted: "4 days ago",
    color: "from-indigo-500 to-blue-500",
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Comprehensive Health",
    description: "Medical, dental, and vision coverage for you and your family",
  },
  {
    icon: TrendingUp,
    title: "401(k) Matching",
    description: "Competitive retirement plans with company matching",
  },
  {
    icon: Clock,
    title: "Flexible Time Off",
    description: "Unlimited PTO and flexible work arrangements",
  },
  {
    icon: Award,
    title: "Professional Development",
    description: "Learning stipends and conference opportunities",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with industry leaders and innovative thinkers",
  },
  {
    icon: DollarSign,
    title: "Competitive Compensation",
    description: "Equity packages and performance bonuses",
  },
];

export default function CareersPage() {
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
            <Briefcase className="w-8 h-8 text-white" />
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Join Our Mission
          </h1>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Be part of a team that&apos;s revolutionizing healthcare through
            innovative research and development.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
            <span className="text-sm text-gray-600">Open Positions:</span>
            <span className="text-sm font-semibold text-blue-600">{jobOpenings.length}</span>
          </div>
        </motion.div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">Why Join Ringer?</h2>
          <p className="mt-2 text-gray-600">We invest in our people and their future</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">Current Openings</h2>
          <p className="mt-2 text-gray-600">Find your next opportunity at Ringer</p>
        </motion.div>

        <div className="space-y-4">
          {jobOpenings.map((job, index) => (
            <JobCard key={job.id} job={job} index={index} />
          ))}
        </div>
      </section>

      {/* Application Form */}
      <JoinForm />
    </div>
  );
}
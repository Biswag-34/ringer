// app/LifeAtRinger/page.tsx (updated with CultureHighlight component)
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  Users, 
  Briefcase, 
  Link as LinkIcon, 
  Heart, 
  Coffee, 
  Trophy, 
  Sparkles,
  ArrowRight 
} from "lucide-react";
import CultureHighlight from "@/component/life-at-ringer/CultureHighlight";

const sections = [
  {
    title: "Our Team",
    description: "Meet the brilliant minds behind our innovation and success",
    icon: Users,
    href: "/LifeAtRinger/our-team",
    color: "from-blue-500 to-cyan-500",
    stats: "45+ Members",
    image: "/images/health1.png",
  },
  {
    title: "Careers",
    description: "Join us in shaping the future of healthcare",
    icon: Briefcase,
    href: "/LifeAtRinger/careers",
    color: "from-purple-500 to-pink-500",
    stats: "5 Open Positions",
    image: "/images/health1.png",
  },
  {
    title: "Important Links",
    description: "Resources, policies, and essential information",
    icon: LinkIcon,
    href: "/LifeAtRinger/important-links",
    color: "from-green-500 to-emerald-500",
    stats: "12 Resources",
    image: "/images/health1.png",
  },
];

const cultureHighlights = [
  {
    icon: Heart,
    title: "Collaborative Culture",
    description: "Work together, grow together. We believe in the power of teamwork.",
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Flexible hours, remote options, and a supportive environment.",
  },
  {
    icon: Trophy,
    title: "Recognition & Growth",
    description: "Regular celebrations, awards, and continuous learning opportunities.",
  },
  {
    icon: Sparkles,
    title: "Innovation First",
    description: "Encouraging creativity and out-of-the-box thinking.",
  },
];

export default function LifeAtRingerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
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
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xs font-semibold text-blue-600 tracking-wider"
          >
            LIFE AT RINGER
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-bold mt-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Where Science Meets Passion
          </h1>
          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
            Join a community of innovators, researchers, and healthcare
            professionals dedicated to transforming lives through science.
          </p>
        </motion.div>
      </section>

      {/* Sections Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <Link key={section.title} href={section.href}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
              >
                <div className="relative h-48">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${section.color} flex items-center justify-center`}>
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {section.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{section.stats}</span>
                    <span className="text-blue-600 group-hover:translate-x-2 transition-transform duration-300">
                      Explore →
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* Culture Highlights using the new component */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-semibold text-blue-600 tracking-wider">
              OUR CULTURE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
              What Makes Us Special
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              At Ringer, we&apos;ve built an environment where innovation thrives
              and people flourish.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cultureHighlights.map((highlight, index) => (
              <CultureHighlight
                key={highlight.title}
                icon={highlight.icon}
                title={highlight.title}
                description={highlight.description}
                index={index}
                variant="default"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 relative overflow-hidden"
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Make an Impact?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Join us in our mission to revolutionize healthcare through
              innovative research and development.
            </p>
            <Link href="/LifeAtRinger/careers">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-blue-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
              >
                View Open Positions
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
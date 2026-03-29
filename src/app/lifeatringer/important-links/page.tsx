"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Link as LinkIcon, 
  FileText, 
  BookOpen, 
  Users, 
  Calendar,
  HelpCircle,
  Settings,
  Download,
  ExternalLink,
  Shield,
  Award,
  Globe
} from "lucide-react";
import LinkCard from "@/component/life-at-ringer/LinkCard";

const linkCategories = [
  {
    title: "Company Resources",
    icon: FileText,
    color: "from-blue-500 to-cyan-500",
    links: [
      { name: "Employee Handbook", url: "#", description: "Complete guide to company policies", icon: BookOpen },
      { name: "Company Policies", url: "#", description: "Detailed policy documents", icon: Shield },
      { name: "Organizational Chart", url: "#", description: "Company structure and teams", icon: Users },
    ],
  },
  {
    title: "HR & Benefits",
    icon: Users,
    color: "from-purple-500 to-pink-500",
    links: [
      { name: "Benefits Portal", url: "#", description: "Manage your benefits", icon: Award },
      { name: "Payroll Information", url: "#", description: "Payroll schedules and details", icon: Download },
      { name: "Leave & Time Off", url: "#", description: "Request and track time off", icon: Calendar },
    ],
  },
  {
    title: "Learning & Development",
    icon: BookOpen,
    color: "from-green-500 to-emerald-500",
    links: [
      { name: "Training Portal", url: "#", description: "Access learning materials", icon: BookOpen },
      { name: "Certification Programs", url: "#", description: "Professional development", icon: Award },
      { name: "Conference Calendar", url: "#", description: "Upcoming events", icon: Calendar },
    ],
  },
  {
    title: "IT & Tools",
    icon: Settings,
    color: "from-orange-500 to-red-500",
    links: [
      { name: "IT Support", url: "#", description: "Technical assistance", icon: HelpCircle },
      { name: "Software Access", url: "#", description: "Company software portal", icon: Download },
      { name: "Security Guidelines", url: "#", description: "Security best practices", icon: Shield },
    ],
  },
  {
    title: "External Resources",
    icon: Globe,
    color: "from-teal-500 to-cyan-500",
    links: [
      { name: "Industry Publications", url: "#", description: "Latest research and news", icon: BookOpen },
      { name: "Professional Networks", url: "#", description: "Connect with peers", icon: Users },
      { name: "Partner Portal", url: "#", description: "Partner resources", icon: ExternalLink },
    ],
  },
];

const quickLinks = [
  { name: "IT Help Desk", url: "#", icon: HelpCircle },
  { name: "HR Support", url: "#", icon: Users },
  { name: "Facilities", url: "#", icon: Settings },
  { name: "Emergency Contacts", url: "#", icon: Shield },
];

export default function ImportantLinksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
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
            <LinkIcon className="w-8 h-8 text-white" />
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Important Links
          </h1>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Quick access to essential resources, tools, and information
            for our team members.
          </p>
        </motion.div>
      </section>

      {/* Quick Links Bar */}
      <section className="py-8 px-6 max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-sm font-semibold text-gray-700">Quick Access:</span>
            {quickLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-blue-50 rounded-lg transition-all duration-300"
              >
                <link.icon className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-gray-700">{link.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Links Categories */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {linkCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${category.color} p-4`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-white">{category.title}</h2>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {category.links.map((link, linkIndex) => (
                    <LinkCard key={link.name} link={link} index={linkIndex} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Need Help Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
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
              Can&apos;t find what you&apos;re looking for?
            </h3>
            <p className="text-blue-100 mb-6">
              Our support team is here to help you
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contact HR
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                IT Support
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
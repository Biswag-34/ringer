"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Clock, Video, User} from "lucide-react";
import EventHero from "@/component/events/EventHero";

const webinars = [
  {
    id: 1,
    title: "Gut Microbiome: The Future of Personalized Medicine",
    speaker: "Dr. Sarah Johnson",
    designation: "Chief Microbiologist",
    date: "March 10, 2025",
    time: "11:00 AM EST",
    duration: "90 mins",
    description: "Explore the latest research on gut microbiome and its role in personalized therapeutic approaches.",
    image: "/images/event/webinar.png",
    topics: ["Microbiome Science", "Personalized Medicine", "Clinical Applications"],
  },
  {
    id: 2,
    title: "Advances in Synbiotic Formulations",
    speaker: "Dr. Michael Chen",
    designation: "Senior Research Scientist",
    date: "March 18, 2025",
    time: "2:00 PM GMT",
    duration: "60 mins",
    description: "Understanding the science behind next-generation synbiotic formulations and their clinical efficacy.",
    image: "/images/event/webinar.png",
    topics: ["Synbiotics", "Formulation Science", "Clinical Trials"],
  },
  {
    id: 3,
    title: "Gut-Liver Axis in Metabolic Disorders",
    speaker: "Prof. Emily Rodriguez",
    designation: "Hepatology Specialist",
    date: "March 25, 2025",
    time: "10:00 AM PST",
    duration: "75 mins",
    description: "Examining the connection between gut health and liver function in metabolic diseases.",
    image: "/images/event/webinar.png",
    topics: ["Gut-Liver Axis", "Metabolic Health", "NAFLD"],
  },
  {
    id: 4,
    title: "Neuroinflammation & Gut-Brain Communication",
    speaker: "Dr. James Wilson",
    designation: "Neuroscience Researcher",
    date: "April 2, 2025",
    time: "1:00 PM EST",
    duration: "90 mins",
    description: "Understanding how gut health influences neurological conditions and inflammation.",
    image: "/images/event/webinar.png",
    topics: ["Neuroinflammation", "Gut-Brain Axis", "Neurology"],
  },
  {
    id: 5,
    title: "Clinical Evidence for Probiotics in Respiratory Health",
    speaker: "Dr. Lisa Thompson",
    designation: "Pulmonologist",
    date: "April 9, 2025",
    time: "3:00 PM GMT",
    duration: "60 mins",
    description: "Reviewing clinical studies on probiotics for respiratory conditions and immune support.",
    image: "/images/event/webinar.png",
    topics: ["Respiratory Health", "Probiotics", "Clinical Evidence"],
  },
  {
    id: 6,
    title: "Emerging Trends in Microbiome Research",
    speaker: "Dr. Robert Kumar",
    designation: "Research Director",
    date: "April 16, 2025",
    time: "12:00 PM EST",
    duration: "120 mins",
    description: "A comprehensive look at cutting-edge microbiome research and future directions.",
    image: "/images/event/webinar.png",
    topics: ["Microbiome", "Research Trends", "Innovation"],
  },
];

export default function WebinarsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <EventHero 
        title="Scientific Webinars"
        description="Expert-led sessions exploring the frontiers of medical science and therapeutic innovation"
        icon={Video}
        count={webinars.length}
      />

      {/* Webinars Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webinars.map((webinar, index) => (
            <motion.div
              key={webinar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-400 overflow-hidden group"
            >
              <div className="relative h-48">
                <Image
                  src={webinar.image}
                  alt={webinar.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                  Live Webinar
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {webinar.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{webinar.speaker}</p>
                    <p className="text-xs text-gray-500">{webinar.designation}</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>{webinar.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span>{webinar.time} ({webinar.duration})</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {webinar.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {webinar.topics.map((topic, i) => (
                    <span key={i} className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full">
                      {topic}
                    </span>
                  ))}
                </div>
                
                <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300">
                  Register for Webinar
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play, Calendar, Clock, User, Video } from "lucide-react";
import { useState } from "react";
import EventHero from "@/component/events/EventHero";

const doctorTalks = [
  {
    id: 1,
    title: "Understanding the Gut-Brain Connection in Modern Medicine",
    speaker: "Dr. Sarah Johnson",
    designation: "Gastroenterologist",
    duration: "45:32",
    date: "February 15, 2025",
    views: "1.2K",
    description: "An in-depth discussion on how gut health impacts mental well-being and neurological conditions.",
    topics: ["Gut-Brain Axis", "Mental Health", "Microbiome"],
    videoUrl: "#",
  },
  {
    id: 2,
    title: "Advances in Probiotic Therapy for Respiratory Conditions",
    speaker: "Dr. Michael Chen",
    designation: "Pulmonologist",
    duration: "38:15",
    date: "February 22, 2025",
    views: "892",
    description: "Exploring the role of probiotics in managing asthma, allergies, and respiratory infections.",
    topics: ["Respiratory Health", "Probiotics", "Immunology"],
    videoUrl: "#",
  },
  {
    id: 3,
    title: "Managing Liver Disease Through Microbiome Modulation",
    speaker: "Prof. Emily Rodriguez",
    designation: "Hepatology Specialist",
    duration: "52:18",
    date: "March 1, 2025",
    views: "1.5K",
    description: "Clinical approaches to leveraging gut health for liver disease management.",
    topics: ["Liver Health", "Gut-Liver Axis", "NAFLD"],
    videoUrl: "#",
  },
  {
    id: 4,
    title: "The Role of Synbiotics in Immune Modulation",
    speaker: "Dr. James Wilson",
    designation: "Immunologist",
    duration: "41:05",
    date: "March 8, 2025",
    views: "735",
    description: "Understanding how synbiotic formulations enhance immune response and reduce inflammation.",
    topics: ["Immunology", "Synbiotics", "Inflammation"],
    videoUrl: "#",
  },
  {
    id: 5,
    title: "Integrative Approaches to Metabolic Health",
    speaker: "Dr. Lisa Thompson",
    designation: "Endocrinologist",
    duration: "49:22",
    date: "March 15, 2025",
    views: "624",
    description: "Combining nutrition, microbiome science, and lifestyle interventions for metabolic disorders.",
    topics: ["Metabolic Health", "Nutrition", "Diabetes"],
    videoUrl: "#",
  },
  {
    id: 6,
    title: "Pediatric Gut Health: From Infancy to Adolescence",
    speaker: "Dr. Robert Kumar",
    designation: "Pediatric Gastroenterologist",
    duration: "56:40",
    date: "March 22, 2025",
    views: "967",
    description: "Special considerations for gut health in children and adolescents.",
    topics: ["Pediatrics", "Child Health", "Microbiome"],
    videoUrl: "#",
  },
];

export default function DoctorsCampPage() {
  const [selectedTalk, setSelectedTalk] = useState<typeof doctorTalks[0] | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <EventHero 
        title="Doctor's Camp"
        description="Expert medical talks and educational sessions to advance clinical knowledge"
        icon={User}
        count={doctorTalks.length}
      />

      {/* Featured Video Modal */}
      {selectedTalk && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedTalk(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video">
              <Image
                src="/images/health1.png"
                alt={selectedTalk.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-blue-600 ml-1" />
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedTalk.title}</h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-blue-500" />
                  <span className="text-sm text-gray-600">{selectedTalk.speaker}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span className="text-sm text-gray-600">{selectedTalk.duration}</span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{selectedTalk.description}</p>
              <button
                onClick={() => setSelectedTalk(null)}
                className="mt-6 px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Videos Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctorTalks.map((talk, index) => (
            <motion.div
              key={talk.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-400 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedTalk(talk)}
            >
              <div className="relative h-48">
                <Image
                  src="/images/health1.png"
                  alt={talk.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                    <Play className="w-6 h-6 text-blue-600 ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 text-white text-xs rounded">
                  {talk.duration}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {talk.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                    <User className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{talk.speaker}</p>
                    <p className="text-xs text-gray-500">{talk.designation}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-3 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{talk.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Video className="w-3 h-3" />
                    <span>{talk.views} views</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                  {talk.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {talk.topics.map((topic, i) => (
                    <span key={i} className="px-2 py-0.5 bg-blue-50 text-blue-600 text-xs rounded-full">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
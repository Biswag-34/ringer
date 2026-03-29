"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import EventHero from "@/component/events/EventHero";

const culturalEvents = [
  {
    id: 1,
    title: "Annual Team Building Retreat",
    date: "February 28, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "Mountain Resort, Lonavala",
    description: "A day of team bonding, outdoor activities, and strategic planning sessions to strengthen our team culture.",
    image: "/images/cultural/cultural.png",
    attendees: 45,
  },
  {
    id: 2,
    title: "Holi Celebration 2025",
    date: "March 14, 2025",
    time: "11:00 AM - 4:00 PM",
    location: "Office Campus",
    description: "Celebrate the festival of colors with music, food, and fun activities for all employees.",
    image: "/images/cultural/cultural.png",
    attendees: 120,
  },
  {
    id: 3,
    title: "Wellness Workshop",
    date: "March 20, 2025",
    time: "3:00 PM - 5:00 PM",
    location: "Conference Hall",
    description: "Interactive workshop on mental health, stress management, and work-life balance.",
    image: "/images/cultural/cultural.png",
    attendees: 35,
  },
  {
    id: 4,
    title: "Annual Awards Night",
    date: "April 5, 2025",
    time: "7:00 PM - 11:00 PM",
    location: "Grand Hotel, Mumbai",
    description: "Celebrating excellence and achievements across the organization with dinner and entertainment.",
    image: "/images/cultural/cultural.png",
    attendees: 200,
  },
];

export default function CulturalEventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <EventHero 
        title="Cultural Events"
        description="Celebrating our people, culture, and shared moments that make us who we are"
        icon={Users}
        count={culturalEvents.length}
      />

      {/* Events Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {culturalEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-400 overflow-hidden group"
            >
              <div className="relative h-64">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="w-4 h-4 text-blue-500" />
                    <span>{event.attendees} attendees</span>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {event.description}
                </p>
                
                <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300">
                  Register Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
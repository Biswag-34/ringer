// components/events/EventCard.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Clock, MapPin, Users, User } from "lucide-react";
import { EventType } from "./EventGrid";

interface EventCardProps {
  event: EventType;
  variant?: "default" | "compact" | "featured";
  onClick?: () => void;
  onRegister?: () => void;
}

export default function EventCard({ event, variant = "default", onClick, onRegister }: EventCardProps) {
  const getGradient = () => {
    switch (event.type) {
      case "cultural":
        return "from-purple-500 to-pink-500";
      case "webinar":
        return "from-blue-500 to-cyan-500";
      case "doctor":
        return "from-teal-500 to-cyan-500";
      default:
        return "from-blue-500 to-cyan-500";
    }
  };

  if (variant === "compact") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        onClick={onClick}
        className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-400 overflow-hidden cursor-pointer"
      >
        <div className="flex gap-4 p-4">
          <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="96px"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">
              {event.title}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-2 mb-2">
              {event.description}
            </p>
            <div className="flex items-center gap-3 text-xs text-gray-500">
              {event.date && (
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{event.date}</span>
                </div>
              )}
              {event.speaker && (
                <div className="flex items-center gap-1">
                  <User className="w-3 h-3" />
                  <span>{event.speaker}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  if (variant === "featured") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
        onClick={onClick}
        className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
      >
        <div className="relative h-64">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center gap-2 mb-2">
              <div className={`px-3 py-1 bg-gradient-to-r ${getGradient()} rounded-full text-white text-xs font-semibold`}>
                {event.type.toUpperCase()}
              </div>
              {event.date && (
                <div className="flex items-center gap-1 text-white text-xs bg-black/50 px-2 py-1 rounded-full">
                  <Calendar className="w-3 h-3" />
                  <span>{event.date}</span>
                </div>
              )}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
            <p className="text-white/90 text-sm line-clamp-2">{event.description}</p>
          </div>
        </div>
      </motion.div>
    );
  }

  // Default variant
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-400 overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-48">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute top-4 right-4">
          <div className={`px-3 py-1 bg-gradient-to-r ${getGradient()} rounded-full text-white text-xs font-semibold`}>
            {event.type.toUpperCase()}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {event.title}
        </h3>
        
        {/* Event Details */}
        <div className="space-y-2 mb-4">
          {event.date && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="w-4 h-4 text-blue-500" />
              <span>{event.date}</span>
            </div>
          )}
          
          {event.time && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4 text-blue-500" />
              <span>{event.time}</span>
            </div>
          )}
          
          {event.location && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4 text-blue-500" />
              <span>{event.location}</span>
            </div>
          )}
          
          {event.speaker && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <User className="w-4 h-4 text-blue-500" />
              <span>{event.speaker} {event.designation && `• ${event.designation}`}</span>
            </div>
          )}
          
          {event.attendees && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Users className="w-4 h-4 text-blue-500" />
              <span>{event.attendees} attendees</span>
            </div>
          )}
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {event.description}
        </p>
        
        {onRegister && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onRegister();
            }}
            className={`w-full px-6 py-2.5 bg-gradient-to-r ${getGradient()} text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300`}
          >
            {event.type === "webinar" ? "Register Now" : "Learn More"}
          </button>
        )}
      </div>
    </motion.div>
  );
}
// components/events/EventGrid.tsx
"use client";

import { motion } from "framer-motion";
import EventCard from "./EventCard";

// Define and export the event type interface
export interface EventType {
  id: number;
  title: string;
  date?: string;
  time?: string;
  location?: string;
  duration?: string;
  speaker?: string;
  designation?: string;
  attendees?: number;
  description: string;
  image: string;
  type: "cultural" | "webinar" | "doctor" | "blog" | "news";
}

interface EventGridProps {
  events: EventType[];
  variant?: "default" | "compact" | "featured";
  columns?: 2 | 3 | 4;
  onEventClick?: (event: EventType) => void;
  onRegister?: (event: EventType) => void;
}

export default function EventGrid({ 
  events, 
  variant = "default", 
  columns = 3,
  onEventClick,
  onRegister 
}: EventGridProps) {
  const getGridCols = () => {
    switch (columns) {
      case 2:
        return "grid-cols-1 md:grid-cols-2";
      case 4:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
      default:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
    }
  };

  if (events.length === 0) {
    return (
      <div className="text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto"
        >
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
            <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No events found</h3>
          <p className="text-gray-500">Check back later for upcoming events</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`grid ${getGridCols()} gap-6 md:gap-8`}>
      {events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          variant={variant}
          onClick={() => onEventClick?.(event)}
          onRegister={() => onRegister?.(event)}
        />
      ))}
    </div>
  );
}
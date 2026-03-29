"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, NotepadTextDashed , MapPin } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  department: string;
  bio: string;
  image: string;
  email: string;
  location: string;
  linkedin: string;
  expertise: string[];
}

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

export default function TeamCard({ member, index }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-400 overflow-hidden"
    >
      <div className="relative h-64">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
          <p className="text-white/90 text-sm">{member.position}</p>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
            {member.department}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {member.bio}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {member.expertise.map((skill, i) => (
            <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              {skill}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <MapPin className="w-4 h-4" />
            <span>{member.location}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <a
              href={`mailto:${member.email}`}
              className="p-2 hover:bg-blue-50 rounded-lg transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4 text-gray-500 hover:text-blue-600" />
            </a>
            <a
              href={member.linkedin}
              className="p-2 hover:bg-blue-50 rounded-lg transition-colors"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <NotepadTextDashed className="w-4 h-4 text-gray-500 hover:text-blue-600" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
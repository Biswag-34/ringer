"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, DollarSign, Briefcase } from "lucide-react";
import { useState } from "react";

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  description: string;
  requirements: string[];
  posted: string;
  color: string;
}

interface JobCardProps {
  job: Job;
  index: number;
}

export default function JobCard({ job, index }: JobCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
    >
      <div className="p-6 cursor-pointer" onClick={() => setExpanded(!expanded)}>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${job.color} flex items-center justify-center`}>
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                <p className="text-sm text-gray-500">{job.department}</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-3">
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <Clock className="w-4 h-4 text-blue-500" />
                <span>{job.type}</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <DollarSign className="w-4 h-4 text-blue-500" />
                <span>{job.salary}</span>
              </div>
            </div>
          </div>
          
          <div className="text-right">
            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">
              {job.posted}
            </span>
            <div className="text-sm text-gray-500 mt-2">
              {job.experience} experience
            </div>
          </div>
        </div>
        
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
            className="mt-6 pt-6 border-t border-gray-100"
          >
            <p className="text-gray-700 mb-4">{job.description}</p>
            
            <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
            <ul className="list-disc list-inside space-y-1 mb-4">
              {job.requirements.map((req, i) => (
                <li key={i} className="text-gray-600 text-sm">{req}</li>
              ))}
            </ul>
            
            <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300">
              Apply Now
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
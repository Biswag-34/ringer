"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FaFacebookF, 
  FaLinkedinIn, 
  FaTwitter, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope,
  FaArrowRight
} from "react-icons/fa";

// Define types for footer links
interface FooterLink {
  name: string;
  href: string;
  id: string;
  icon?: React.ReactElement;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export default function Footer() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const footerColumns: FooterColumn[] = [
    {
      title: "Who We Are",
      links: [
        { name: "Company Overview", href: "/about-us", id: "overview" },
        { name: "Vision", href: "/about-us", id: "vision" },
        { name: "Mission", href: "/about-us", id: "mission" },
      ]
    },
    {
      title: "Brands of Ringer",
      links: [
        { name: "Gastroenterology", href: "/Divisions/gastroenterology", id: "gastro" },
        { name: "Neuroscience", href: "/Divisions/neuroscience", id: "neuro" },
        { name: "Orthopedics & Spine", href: "/Divisions/orthopedics-spine", id: "ortho" },
        { name: "Respiratory", href: "/Divisions/respiratory", id: "respiratory" },
        { name: "Otorhinolaryngology", href: "/Divisions/ent", id: "ent" },
        { name: "Cardiometabolic", href: "/Divisions/cardio-metabolic", id: "cardio" },
      ]
    },
    {
      title: "Events",
      links: [
        { name: "Cultural", href: "/events/cultural", id: "cultural" },
        { name: "Scientific Webinar", href: "/events/webinars", id: "webinar" },
        { name: "Doctor's Area", href: "/events/Doctors-area", id: "doctor" },
        { name: "Blog", href: "/events/blogs", id: "blog" },
        { name: "News", href: "/events/news", id: "news" },
      ]
    },
    {
      title: "Life @ Ringer",
      links: [
        { name: "Our Team", href: "/lifeatringer/our-team", id: "team" },
        { name: "Careers", href: "/lifeatringer/careers", id: "careers" },
        { name: "Important Links", href: "/lifeatringer/important-links", id: "links" },
        { name: "Contact Us", href: "/contact", id: "contact-us" },
      ]
    },
    {
      title: "We are @",
      links: [
        { name: "bangalore, India", href: "#", id: "address", icon: <FaMapMarkerAlt className="w-3 h-3" /> },
        { name: "+91 99999 99999", href: "tel:+919999999999", id: "phone", icon: <FaPhone className="w-3 h-3" /> },
        { name: "info@ringer.com", href: "mailto:info@ringer.com", id: "email", icon: <FaEnvelope className="w-3 h-3" /> },
      ]
    }
  ];

  return (
    <footer className="relative overflow-hidden">

      {/* 🔥 BACKGROUND - PRESERVED ORIGINAL EFFECT */}
      <div className="absolute inset-0 -z-10">
        <div
          className="w-full h-full bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/images/footer-bg.png')",
          }}
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* MAIN FOOTER */}
      <div className="text-white py-20 px-6 md:px-10 max-w-7xl mx-auto">

        {/* GRID - 5 columns with centering */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 text-center sm:text-left">
          {footerColumns.map((column, colIndex) => (
            <motion.div 
              key={column.title} 
              className="relative flex flex-col items-center sm:items-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: colIndex * 0.1, duration: 0.5 }}
            >
              {/* Divider line between columns */}
              {colIndex > 0 && (
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block -ml-6" />
              )}
              
              {/* Column Header - Bigger and with color animation */}
              <motion.h3 
                className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {column.title}
                {/* Animated underline on header hover */}
                <motion.span
                  className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.h3>
              
              {/* Links with better spacing */}
              <ul className="space-y-4 w-full">
                {column.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (colIndex * 0.05) + (linkIndex * 0.03), duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 text-sm"
                      onMouseEnter={() => setHoveredItem(link.id)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      {link.icon && (
                        <motion.span 
                          className="text-gray-400 group-hover:text-blue-400 transition-all duration-300"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                        >
                          {link.icon}
                        </motion.span>
                      )}
                      <span className="relative">
                        {link.name}
                        {/* Hover underline animation */}
                        <motion.span
                          className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"
                          initial={{ width: 0 }}
                        />
                      </span>
                      {/* Arrow animation on hover */}
                      {hoveredItem === link.id && (
                        <motion.span
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0 }}
                          className="text-blue-400 text-xs"
                        >
                          <FaArrowRight />
                        </motion.span>
                      )}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔥 DIVIDER LINE - PRESERVED ORIGINAL */}
      <div className="border-t border-white/10" />

      {/* 🔥 BOTTOM STRIP - UPDATED WITH CENTERING */}
      <div className="bg-white text-black py-6 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          
          <p className="text-sm text-center md:text-left text-gray-600">
            © {new Date().getFullYear()} Ringer Healthcare. All Rights Reserved.
          </p>

          {/* Quick Links with hover animation */}
          <div className="flex gap-8 text-sm">
            <Link 
              href="/privacy" 
              className="relative text-gray-500 hover:text-blue-600 transition-colors duration-300 group"
            >
              Privacy
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"
              />
            </Link>
            <Link 
              href="/terms" 
              className="relative text-gray-500 hover:text-blue-600 transition-colors duration-300 group"
            >
              Terms
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"
              />
            </Link>
            <Link 
              href="/sitemap" 
              className="relative text-gray-500 hover:text-blue-600 transition-colors duration-300 group"
            >
              Sitemap
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"
              />
            </Link>
          </div>

          {/* Social Icons with animations */}
          <div className="flex gap-4">
            {[
              { icon: FaFacebookF, href: "#", color: "hover:bg-blue-600", label: "Facebook" },
              { icon: FaLinkedinIn, href: "#", color: "hover:bg-blue-700", label: "LinkedIn" },
              { icon: FaTwitter, href: "#", color: "hover:bg-sky-500", label: "Twitter" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 ${social.color} hover:text-white transition-all duration-300 shadow-md hover:shadow-lg`}
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
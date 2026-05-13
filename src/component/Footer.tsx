"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import {
  FaArrowRight,
  FaArrowUp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

interface FooterLink {
  name: string;
  href: string;
  id: string;
  icon?: ReactNode;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const footerColumns: FooterColumn[] = [
  {
    title: "Who We Are",
    links: [
      { name: "Company Overview", href: "/about-us", id: "overview" },
      { name: "Research & Development", href: "/RnD", id: "research" },
      { name: "Contact Ringer", href: "/contact-us", id: "contact-ringer" },
    ],
  },
  {
    title: "Divisions",
    links: [
      { name: "All Divisions", href: "/Divisions", id: "all-divisions" },
      { name: "Gastroenterology", href: "/Divisions/gastroenterology", id: "gastro" },
      { name: "Neuroscience", href: "/Divisions/neuroscience", id: "neuro" },
      { name: "Nutrition", href: "/Divisions/nutrition", id: "nutrition" },
      { name: "Orthopaedics & Spine", href: "/Divisions/orthopaedics-spine", id: "ortho" },
      { name: "Respiratory", href: "/Divisions/respiratory", id: "respiratory" },
      { name: "Otorhinolaryngology", href: "/Divisions/ent", id: "ent" },
      { name: "Cardiometabolic", href: "/Divisions/cardio-metabolic", id: "cardio" },
    ],
  },
  {
    title: "Events",
    links: [
      { name: "All Events", href: "/events", id: "events" },
      { name: "Scientific Webinars", href: "/events/webinars", id: "webinar" },
      { name: "Cultural", href: "/events/cultural", id: "cultural" },
      { name: "Doctor's Area", href: "/events/Doctors-area", id: "doctor" },
      { name: "Blogs", href: "/events/blogs", id: "blog" },
      { name: "News", href: "/events/news", id: "news" },
    ],
  },
  {
    title: "Life @ Ringer",
    links: [
      { name: "Life @ Ringer", href: "/lifeatringer", id: "life" },
      { name: "Our Team", href: "/lifeatringer/our-team", id: "team" },
      { name: "Careers", href: "/lifeatringer/careers", id: "careers" },
      { name: "Important Links", href: "/lifeatringer/important-links", id: "links" },
    ],
  },
  {
    title: "We Are @",
    links: [
      {
        name: "Bangalore, India",
        href: "/contact-us",
        id: "address",
        icon: <FaMapMarkerAlt className="h-3 w-3" />,
      },
      {
        name: "+91 98442 69947",
        href: "tel:+919844269947",
        id: "phone-sudhir",
        icon: <FaPhone className="h-3 w-3" />,
      },
      {
        name: "+91 90518 70032",
        href: "tel:+919051870032",
        id: "phone-sandeepan",
        icon: <FaPhone className="h-3 w-3" />,
      },
      {
        name: "info@ringer.co.in",
        href: "mailto:info@ringer.co.in",
        id: "email",
        icon: <FaEnvelope className="h-3 w-3" />,
      },
    ],
  },
];

function FooterAnchor({ link }: { link: FooterLink }) {
  const isDirectLink =
    link.href.startsWith("mailto:") || link.href.startsWith("tel:");

  const className =
    "group inline-flex items-center gap-2 text-sm text-gray-300 transition-all duration-300 hover:text-white";

  const content = (
    <>
      {link.icon && (
        <span className="text-gray-400 transition-colors duration-300 group-hover:text-blue-400">
          {link.icon}
        </span>
      )}
      <span className="relative">
        {link.name}
        <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 group-hover:w-full" />
      </span>
      <FaArrowRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
    </>
  );

  if (isDirectLink) {
    return (
      <a href={link.href} className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link href={link.href} className={className}>
      {content}
    </Link>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden" aria-label="Site footer">
      <div className="absolute inset-0 -z-10">
        <div
          className="h-full w-full bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/images/footer-bg.png')" }}
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 text-white md:px-10">
        <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-5">
          {footerColumns.map((column, colIndex) => (
            <motion.nav
              key={column.title}
              aria-label={column.title}
              className="relative flex flex-col items-center sm:items-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: colIndex * 0.08, duration: 0.5 }}
            >
              {colIndex > 0 && (
                <div className="absolute bottom-0 left-0 top-0 -ml-6 hidden w-px bg-gradient-to-b from-transparent via-white/20 to-transparent lg:block" />
              )}

              <h3 className="mb-6 inline-block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-2xl font-bold text-transparent">
                {column.title}
              </h3>

              <ul className="w-full space-y-4">
                {column.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: colIndex * 0.04 + linkIndex * 0.02,
                      duration: 0.3,
                    }}
                  >
                    <FooterAnchor link={link} />
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10" />

      <div className="bg-white px-6 py-6 text-black md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">
          <p className="text-center text-sm text-gray-600 md:text-left">
            &copy; {new Date().getFullYear()} Ringer Lifesciences Pvt Ltd. All
            Rights Reserved.
          </p>

          <nav
            aria-label="Footer quick links"
            className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm"
          >
            <Link
              href="/"
              className="relative text-gray-500 transition-colors duration-300 hover:text-blue-600"
            >
              Home
            </Link>
            <Link
              href="/Divisions"
              className="relative text-gray-500 transition-colors duration-300 hover:text-blue-600"
            >
              Divisions
            </Link>
            <Link
              href="/lifeatringer/careers"
              className="relative text-gray-500 transition-colors duration-300 hover:text-blue-600"
            >
              Careers
            </Link>
            <Link
              href="/contact-us"
              className="relative text-gray-500 transition-colors duration-300 hover:text-blue-600"
            >
              Contact
            </Link>
          </nav>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 transition-all duration-300 hover:bg-blue-600 hover:text-white"
            aria-label="Back to top"
          >
            <FaArrowUp className="h-3 w-3" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaHome, 
  FaInfoCircle, 
  FaBriefcase, 
  FaPhone, 
  FaChevronDown,
  FaFlask,
  FaMicrophone,
  FaUsers,
  FaBook,
  FaNewspaper,
  FaCalendarAlt,
  FaUserMd
} from "react-icons/fa";
import { 
  GiStomach, 
  GiBrain, 
  GiHeartOrgan, 
  GiLungs, 
  GiSpineArrow, 
 GiNoseSide,
 GiHealing
} from "react-icons/gi";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const prevPathnameRef = useRef(pathname);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes - fixed by using ref to track changes
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      // Only update state if there's an actual change
      prevPathnameRef.current = pathname;
      // Defer state updates to avoid cascading renders
      Promise.resolve().then(() => {
        setMobileMenuOpen(false);
        setOpenDropdown(null);
      });
    }
  }, [pathname]);

  const menuItems = [
    { name: "Home", href: "/", icon: <FaHome />, id: "home" },
    { name: "About Us", href: "/about-us", icon: <FaInfoCircle />, id: "about" },
    { 
      name: "Divisions", 
      href: "/Divisions",
      icon: <FaBriefcase />, 
      id: "divisions",
      dropdown: [
        { name: "Gastroenterology", href: "/Divisions/gastroenterology", icon: <GiStomach /> },
        { name: "Otorhinolaryngology", href: "/Divisions/ent", icon: <GiNoseSide/> },
        { name: "Respiratory", href: "/Divisions/respiratory", icon: <GiLungs /> },
        { name: "Neuroscience", href: "/Divisions/neuroscience", icon: <GiBrain /> },
        { name: "Orthopedics & Spine", href: "/Divisions/orthopaedics-spine", icon: <GiSpineArrow /> },
        { name: "Nutrition", href: "/Divisions/nutrition", icon: <GiHealing /> },
        { name: "Cardiometabolic", href: "/Divisions/cardio-metabolic", icon: <GiHeartOrgan /> },
      ]
    },
    { 
      name: "Events", 
      href: "/events",
      icon: <FaCalendarAlt />, 
      id: "events",
      dropdown: [
        { name: "Webinars", href: "/events/webinars", icon: <FaMicrophone /> },
        { name: "Cultural", href: "/events/cultural", icon: <FaUsers /> },
        { name: "Doctor's Area", href: "/events/Doctors-area", icon: <FaUserMd /> },
        { name: "Blogs", href: "/events/blogs", icon: <FaBook /> },
        { name: "News", href: "/events/news", icon: <FaNewspaper /> },
      ]
    },
    { name: "R&D", href: "/RnD", icon: <FaFlask />, id: "rd" },
    { 
      name: "Life @ Ringer", 
      href: "/lifeatringer",
      icon: <FaUsers />, 
      id: "life",
      dropdown: [
        { name: "Our Team", href: "/lifeatringer/our-team", icon: <FaUsers /> },
        { name: "Careers", href: "/lifeatringer/careers", icon: <FaBriefcase /> },
        { name: "Important Links", href: "/lifeatringer/important-links", icon: <FaBook /> },
      ]
    },
    { name: "Contact Us", href: "/contact-us", icon: <FaPhone />, id: "contact-us" },
  ];

  // Check if a link is active
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdown && !(event.target as Element).closest('.dropdown-container')) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [openDropdown]);

  return (
    <>
      {/* MAIN HEADER */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-35 h-10"
            >
              <Image
                src="/images/logo.png"
                alt="Ringer Logo"
                fill
                loading="eager"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain"
              />
            </motion.div>
          </Link>

          {/* DESKTOP MENU - CENTERED */}
          <nav className="hidden lg:flex items-center justify-center gap-6 flex-1 mx-8">
            {menuItems.map((item) => (
              <div key={item.id} className="relative group dropdown-container">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenDropdown(openDropdown === item.id ? null : item.id);
                      }}
                      className={`flex items-center gap-1.5 text-sm font-medium transition-all duration-300 relative py-2 ${
                        scrolled ? "text-gray-700 hover:text-blue-600" : "text-white/90 hover:text-white"
                      }`}
                    >
                      {item.name}
                      <motion.div
                        animate={{ rotate: openDropdown === item.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaChevronDown className="w-3 h-3" />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {openDropdown === item.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                        >
                          {item.dropdown.map((subItem, idx) => (
                            <motion.div
                              key={subItem.name}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.03 }}
                            >
                              <Link
                                href={subItem.href}
                                className={`flex items-center gap-3 px-5 py-3 text-sm transition-all duration-300 group ${
                                  isActive(subItem.href)
                                    ? "bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600"
                                    : "text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 hover:text-blue-600"
                                }`}
                                onClick={() => setOpenDropdown(null)}
                              >
                                <span className="text-blue-500 text-lg">{subItem.icon}</span>
                                <span className="font-medium">{subItem.name}</span>
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition-all duration-300 relative py-2 ${
                      isActive(item.href)
                        ? scrolled ? "text-blue-600" : "text-white"
                        : scrolled ? "text-gray-700 hover:text-blue-600" : "text-white/90 hover:text-white"
                    }`}
                  >
                    {item.name}
                    {isActive(item.href) && (
                      <motion.span
                        layoutId="active"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    {!isActive(item.href) && (
                      <motion.span
                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300"
                      />
                    )}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* RIGHT SIDE - Get Started Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`hidden lg:block px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              scrolled
                ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md hover:shadow-lg"
                : "bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30"
            }`}
          >
            Get Started
          </motion.button>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
              scrolled ? "bg-gray-100 text-gray-700" : "bg-white/10 backdrop-blur-sm text-white"
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </motion.header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                    <div className="w-8 h-8 relative">
                      <Image src="/logo.png" 
                      loading="lazy" alt="Logo" fill className="object-contain" />
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      Ringer
                    </span>
                  </Link>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg bg-gray-100 text-gray-700"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-1">
                  {menuItems.map((item) => (
                    <div key={item.id}>
                      {item.dropdown ? (
                        <>
                          <button
                            onClick={() => setOpenDropdown(openDropdown === item.id ? null : item.id)}
                            className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-xl transition-all duration-300"
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-blue-500">{item.icon}</span>
                              <span className="font-medium">{item.name}</span>
                            </div>
                            <motion.div
                              animate={{ rotate: openDropdown === item.id ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <FaChevronDown className="w-3 h-3 text-gray-400" />
                            </motion.div>
                          </button>
                          <AnimatePresence>
                            {openDropdown === item.id && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="ml-8 space-y-1 overflow-hidden"
                              >
                                {item.dropdown.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    onClick={() => {
                                      setMobileMenuOpen(false);
                                      setOpenDropdown(null);
                                    }}
                                    className={`flex items-center gap-3 px-4 py-2 text-sm rounded-lg transition-all duration-300 ${
                                      isActive(subItem.href)
                                        ? "text-blue-600 bg-blue-50"
                                        : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                                    }`}
                                  >
                                    <span className="text-blue-400">{subItem.icon}</span>
                                    <span>{subItem.name}</span>
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                            isActive(item.href)
                              ? "bg-blue-50 text-blue-600"
                              : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                          }`}
                        >
                          <span className="text-blue-500">{item.icon}</span>
                          <span className="font-medium">{item.name}</span>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold shadow-md">
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* MOBILE DOCK MENU (Bottom Bar) */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, type: "spring" }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 lg:hidden z-40"
      >
        <div className="flex items-center gap-4 px-5 py-3 rounded-full bg-white/95 backdrop-blur-lg shadow-2xl border border-gray-100">
          {menuItems.slice(0, 5).map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`flex flex-col items-center gap-1 group transition-all duration-300 ${
                isActive(item.href) ? "scale-110" : ""
              }`}
            >
              <div className={`text-lg transition-colors duration-300 ${
                isActive(item.href) ? "text-blue-600" : "text-gray-500 group-hover:text-blue-600"
              }`}>
                {item.icon}
              </div>
              <span className={`text-[10px] transition-colors duration-300 ${
                isActive(item.href) ? "text-blue-600 font-medium" : "text-gray-500 group-hover:text-blue-600"
              }`}>
                {item.name.split(" ")[0]}
              </span>
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  );
}

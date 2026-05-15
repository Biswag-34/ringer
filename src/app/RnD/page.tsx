"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef, useState, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import * as Icons from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// ----------------------------------------------------------------------
// Helper: map icon name to component
// ----------------------------------------------------------------------
const iconMap: Record<string, React.ElementType> = {
  Brain: Icons.Brain,
  Wind: Icons.Wind,
  Activity: Icons.Activity,
  Shield: Icons.Shield,
  Leaf: Icons.Leaf,
  Zap: Icons.Zap,
  Sparkles: Icons.Sparkles,
  Droplets: Icons.Droplets,
  Infinity: Icons.Infinity,
  TrendingUp: Icons.TrendingUp,
  Award: Icons.Award,
  Users: Icons.Users,
  BookOpen: Icons.BookOpen,
  Globe: Icons.Globe,
  Microscope: Icons.Microscope,
  ArrowRight: Icons.ArrowRight,
  ChevronDown: Icons.ChevronDown,
};

// ----------------------------------------------------------------------
// Data (content unchanged, but now uses icon names)
// ----------------------------------------------------------------------
const axisData = [
  {
    title: "Gut–Brain Axis",
    iconName: "Brain",
    gradient: "from-purple-500 to-pink-500",
    desc: "Bidirectional communication influencing mood, cognition, and neurological health through neurotransmitters like serotonin.",
    stats: "70% of serotonin produced in gut",
  },
  {
    title: "Gut–Airway Axis",
    iconName: "Wind",
    gradient: "from-cyan-500 to-blue-500",
    desc: "Gut microbiota regulate immune responses affecting respiratory infections, allergies, and pulmonary conditions.",
    stats: "80% immune cells in gut-associated tissue",
  },
  {
    title: "Gut–Liver Axis",
    iconName: "Activity",
    gradient: "from-emerald-500 to-teal-500",
    desc: "Microbiome interactions impact liver detoxification, inflammation, and diseases like NAFLD, NASH, and fibrosis.",
    stats: "Portal vein carries 70% liver blood supply",
  },
];

const clinicalOutcomes = [
  "Reduction in systemic inflammation markers",
  "Improved intestinal barrier function",
  "Decreased allergy-related immune responses",
  "Enhanced microbiome diversity",
  "Lower incidence of antibiotic-associated diarrhea",
  "Better treatment outcomes as adjunct therapy",
];

const applicationsData = [
  { title: "Respiratory Disorders", desc: "Asthma, allergic rhinitis, and infections", iconName: "Wind" },
  { title: "Gastrointestinal Health", desc: "Diarrhea, dysbiosis, gut disorders", iconName: "Leaf" },
  { title: "Liver Health", desc: "Inflammation, Fatty Liver, Fibrosis", iconName: "Activity" },
  { title: "Allergic Diseases", desc: "Reduced hypersensitivity reactions", iconName: "Shield" },
  { title: "Systemic Infections", desc: "Improved immune response", iconName: "Zap" },
  { title: "Adjunct Therapy", desc: "Enhanced treatment effectiveness", iconName: "Sparkles" },
];

const nutritionData = [
  { title: "Brain Health", desc: "Improves cognition and memory", iconName: "Brain" },
  { title: "Respiratory & Migraine", desc: "Supports asthma & reduces migraines", iconName: "Wind" },
  { title: "Energy Function", desc: "Boosts mitochondrial efficiency", iconName: "Zap" },
];

const innovationData = [
  {
    iconName: "Shield",
    title: "Advanced Microbial Engineering",
    desc: "Includes polyantibiotic-resistant strains ensuring effectiveness even during antibiotic therapy.",
  },
  {
    iconName: "Droplets",
    title: "Multi-System Impact",
    desc: "Promotes bioactive metabolites with anti-inflammatory properties supporting gut, liver, and respiratory health.",
  },
];

// ----------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------
export default function RDPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 30, stiffness: 100 });
  const heroOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(smoothProgress, [0, 0.15], [1, 0.98]);
  const progressBarWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  // Particles (unchanged)
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }).map((_, i) => ({
        left: (i * 7) % 100,
        top: (i * 13) % 100,
        width: ((i * 3) % 4) + 1,
        height: ((i * 5) % 4) + 1,
        delay: (i * 0.25) % 5,
      })),
    []
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const floatingParticles = document.querySelectorAll(".floating-particle");
    floatingParticles.forEach((particle, i) => {
      gsap.to(particle, {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.2,
      });
    });
  }, []);

  // Helper to get icon component
  const getIcon = (name: string) => iconMap[name] || Icons.HelpCircle;

  return (
    <main
      ref={containerRef}
      className="bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 overflow-hidden relative"
    >
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-difference hidden lg:block"
        animate={{
          x: cursorPosition.x - 16,
          y: cursorPosition.y - 16,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      >
        <div className="w-full h-full rounded-full bg-white/30 backdrop-blur-sm border border-white/50" />
      </motion.div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-teal-500 to-blue-600 z-50"
        style={{ width: progressBarWidth }}
      />

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="floating-particle absolute w-1 h-1 bg-teal-400/30 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6 pt-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-blue-50" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[500px] h-[500px] bg-gradient-to-r from-teal-400/20 to-blue-500/20 rounded-full blur-3xl top-1/4 -left-48"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-blue-400/20 to-teal-500/20 rounded-full blur-3xl bottom-1/4 -right-48"
        />

        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 max-w-5xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="h-[1px] bg-gradient-to-r from-transparent via-teal-500 to-transparent mx-auto mb-8"
            />

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">
              Research &{" "}
              <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Development
              </span>
            </h1>

            <p className="mt-8 text-slate-600 max-w-2xl mx-auto text-xl leading-relaxed">
              Transforming healthcare through microbiome science, clinical research,
              and integrated therapeutic innovation.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 rounded-full bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3"
              >
                <span>Discover the Science</span>
                <Icons.ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-16"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="inline-flex items-center gap-2 text-sm text-slate-500"
              >
                <span>Scroll to explore</span>
                <Icons.ChevronDown className="w-4 h-4" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* INTRODUCTION - THE QUESTION */}
      <section className="py-32 max-w-6xl mx-auto text-center px-6 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-6"
          >
            <Icons.Sparkles className="w-4 h-4" />
            <span>The Challenge</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            The Unanswered <span className="text-teal-600">Question</span>
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Modern healthcare faces complex challenges — from chronic gut disorders and liver diseases
            to neurological and respiratory conditions. Traditional approaches often treat symptoms in
            isolation, missing the deeper biological connections within the human body.
          </p>
        </motion.div>
      </section>

      {/* DISCOVERY SECTION - WITH IMAGE */}
      <section className="py-32 bg-white/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-6">
                <Icons.Zap className="w-4 h-4" />
                <span>The Discovery</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                A New Scientific <span className="text-teal-600">Perspective</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Our research is built on a fundamental principle: the human body is an interconnected system.
                The gut plays a central role in influencing brain function, immunity, and organ health.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, rotate: -2 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative h-80 rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/health1.png"
                alt="Scientific Discovery"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE AXIS - 3D CARDS */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-6">
            <Icons.Globe className="w-4 h-4" />
            <span>The Science</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            The Architecture of <span className="text-teal-600">Connection</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Three pathways, one story. How the gut speaks to the rest of the body.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {axisData.map((item, i) => {
            const IconComponent = getIcon(item.iconName);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                />
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">{item.desc}</p>
                  <div className="pt-4 border-t border-slate-100">
                    <p className="text-sm text-teal-600 font-medium">{item.stats}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SCIENTIFIC FOUNDATIONS */}
      <section className="py-32 bg-gradient-to-b from-slate-100 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-medium">
                <Icons.BookOpen className="w-4 h-4" />
                <span>Foundations</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Scientific <span className="text-teal-600">Foundations</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                The gut microbiome produces neurotransmitters, regulates immune responses,
                and communicates through the vagus nerve and hormonal pathways. Disruptions
                in this balance can lead to inflammation, oxidative stress, and systemic diseases.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Research shows that stress, lifestyle, and microbial imbalance can impact mental
                health, liver function, and immune strength — making microbiome-focused therapies
                essential for modern medicine.
              </p>
              <div className="flex items-center gap-3 text-teal-600 text-sm font-mono">
                <span>⟡</span>
                <span>MICROBIOME SCIENCE · IMMUNOMODULATION · SYSTEMS BIOLOGY</span>
                <span>⟡</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {["Gut-Brain Communication", "Immune Modulation", "Vagus Nerve", "Microbial Diversity"].map(
                (item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-3 h-3 rounded-full bg-teal-500 mb-3" />
                    <p className="font-medium text-sm">{item}</p>
                  </motion.div>
                )
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CLINICAL EVIDENCE */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-6">
            <Icons.TrendingUp className="w-4 h-4" />
            <span>Evidence</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Clinical <span className="text-teal-600">Evidence & Outcomes</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mt-4">
            Clinical findings demonstrate that targeted synbiotic interventions significantly
            reduce inflammatory biomarkers such as CRP, interleukins, and TNF.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {clinicalOutcomes.map((outcome, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-teal-500/5 to-blue-500/5 rounded-full blur-2xl" />
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icons.Award className="w-4 h-4 text-white" />
              </div>
              <p className="text-slate-700 font-medium">{outcome}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SYMBIOTIC INNOVATION */}
      <section className="py-32 bg-gradient-to-r from-teal-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-6">
              <Icons.Infinity className="w-4 h-4" />
              <span>Innovation</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Synbiotic Innovation <span className="text-teal-600">Platform</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto mt-4">
              Our proprietary synbiotic formulations combine multi-strain probiotics with
              targeted prebiotics to correct dysbiosis and enhance microbial resilience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {innovationData.map((item, i) => {
              const IconComponent = getIcon(item.iconName);
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center mb-6">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLINICAL APPLICATIONS */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-6">
            <Icons.Users className="w-4 h-4" />
            <span>Applications</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Clinical <span className="text-teal-600">Applications</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applicationsData.map((item, i) => {
            const IconComponent = getIcon(item.iconName);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* NUTRITIONAL THERAPEUTICS */}
      <section className="py-32 bg-gradient-to-t from-slate-100 to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-6">
              <Icons.Zap className="w-4 h-4" />
              <span>Nutrition</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Advanced Nutritional <span className="text-teal-600">Therapeutics</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {nutritionData.map((item, i) => {
                const IconComponent = getIcon(item.iconName);
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* EPILOGUE */}
      <section className="py-32 text-center bg-gradient-to-r from-teal-600 via-blue-600 to-teal-600 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/health1.png" alt="" fill className="object-cover" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-8"
          >
            <Icons.Infinity className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Future of Integrated Healthcare
          </h2>

          <p className="text-white/90 max-w-xl mx-auto text-lg leading-relaxed">
            We continue to push the boundaries of science — developing therapies
            that treat not just diseases, but interconnected biological systems.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 px-8 py-4 bg-white text-teal-600 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2"
          >
            Join the Revolution
            <Icons.ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </section>

      {/* FOOTER */}
      <div className="py-12 text-center text-slate-500 text-sm border-t border-slate-200">
        <p>© 2025 — The Science of Connection. Advancing healthcare through innovation.</p>
      </div>
    </main>
  );
}

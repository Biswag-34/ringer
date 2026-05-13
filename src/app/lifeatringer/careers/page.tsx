"use client";

import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
  Briefcase,
  Building2,
  CheckCircle2,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Send,
  Upload,
  X,
} from "lucide-react";

type Opening = {
  title: string;
  meta?: string;
  headquarters: string;
  eligibility: string[];
};

const openings: Opening[] = [
  {
    title: "Business Development Manager",
    meta: "2 Posts",
    headquarters: "Bangalore",
    eligibility: [
      "Graduate: BSc / B-Pharma",
      "Minimum 2 Years Experience",
      "Strong team work skills and territory knowledge essential",
    ],
  },
  {
    title: "Key Account Manager (KAM)",
    meta: "Exclusively for Corporate Hospitals & Medical Colleges",
    headquarters: "Bangalore",
    eligibility: [
      "Graduate: B.PHARM",
      "Minimum 2 Years Experience with Hospital Business Exposure",
    ],
  },
];

const strengths = [
  "Trusted Corporate by People",
  "Fast Growing Company with Focus on Gastro, Ortho, Neuro, ENT",
  "Best Salary + Incentives + Career Growth Opportunities",
];

const contacts = [
  { name: "Mr Sudhir Yadav", mobile: "9844269947" },
  { name: "Mr Sandeepan M", mobile: "9051870032" },
];

export default function CareersPage() {
  const [selectedOpening, setSelectedOpening] = useState<Opening | null>(null);
  const [resume, setResume] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const [applicant, setApplicant] = useState({
    name: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    if (!selectedOpening) {
      return;
    }

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [selectedOpening]);

  const closeApplyModal = () => {
    setSelectedOpening(null);
    setResume(null);
    setFileError("");
    setApplicant({ name: "", phone: "", email: "" });
  };

  const handleResumeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;

    if (!file) {
      setResume(null);
      setFileError("");
      return;
    }

    const isPdf =
      file.type === "application/pdf" ||
      file.name.toLowerCase().endsWith(".pdf");

    if (!isPdf) {
      setResume(null);
      setFileError("Please upload your resume as a PDF file.");
      return;
    }

    setResume(file);
    setFileError("");
  };

  const handleApply = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedOpening) {
      return;
    }

    if (!resume) {
      setFileError("Please upload your PDF resume before sending.");
      return;
    }

    const subject = encodeURIComponent(
      `Application for ${selectedOpening.title} - Ringer Lifesciences`
    );
    const body = encodeURIComponent(
      [
        "Dear Ringer Lifesciences Team,",
        "",
        `I would like to apply for ${selectedOpening.title}.`,
        "",
        `Name: ${applicant.name || "Not provided"}`,
        `Phone: ${applicant.phone || "Not provided"}`,
        `Email: ${applicant.email || "Not provided"}`,
        `Resume PDF selected: ${resume.name}`,
        "",
        "Regards,",
        applicant.name || "",
      ].join("\n")
    );

    window.location.href = `mailto:info@ringer.co.in?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <section className="relative min-h-[52vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <Image
            src="/images/health1.png"
            alt="Ringer Lifesciences careers"
            fill
            className="object-cover opacity-10"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700/10 via-white/60 to-cyan-600/10" />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl px-6 text-center"
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg shadow-blue-200">
            <Briefcase className="h-8 w-8 text-white" />
          </div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-600">
            Invitation To Join
          </p>
          <h1 className="mt-4 text-4xl font-bold text-gray-950 md:text-6xl">
            Ringer Lifesciences Pvt Ltd
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg font-medium text-gray-600">
            One of the Fastest Growing Super Specialty Pharma Indian Company
          </p>
        </motion.div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]"
          >
            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-xl shadow-blue-100/50">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                <Building2 className="h-4 w-4" />
                Bangalore openings
              </div>
              <h2 className="mt-6 text-3xl font-bold text-gray-950">
                Build the next growth chapter with Ringer
              </h2>
              <p className="mt-4 text-base leading-8 text-gray-600">
                Ringer Lifesciences Pvt Ltd invites applications from dynamic
                and result-oriented professionals for the following positions in
                Bangalore under our Gastro, Ortho, Neuro and ENT Division.
              </p>

              <div className="mt-8 space-y-4">
                {strengths.map((item) => (
                  <div key={item} className="flex gap-3 text-gray-700">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-cyan-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              {openings.map((opening, index) => (
                <motion.article
                  key={opening.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-3xl border border-gray-100 bg-white p-6 shadow-lg shadow-blue-100/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 text-lg font-bold text-white">
                          {index + 1}
                        </span>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-950">
                            {opening.title}
                          </h3>
                          {opening.meta && (
                            <p className="mt-1 text-sm font-semibold text-blue-600">
                              {opening.meta}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-3 text-sm font-medium text-gray-600">
                        <span className="inline-flex items-center gap-2 rounded-full bg-gray-50 px-4 py-2">
                          <MapPin className="h-4 w-4 text-blue-600" />
                          Headquarters: {opening.headquarters}
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full bg-gray-50 px-4 py-2">
                          <GraduationCap className="h-4 w-4 text-blue-600" />
                          Eligibility
                        </span>
                      </div>

                      <ul className="mt-5 space-y-3">
                        {opening.eligibility.map((requirement) => (
                          <li
                            key={requirement}
                            className="flex gap-3 text-sm leading-6 text-gray-600"
                          >
                            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyan-500" />
                            {requirement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedOpening(opening)}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      Apply
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 rounded-3xl border border-cyan-100 bg-gradient-to-r from-blue-600 to-cyan-600 p-8 text-white shadow-xl shadow-cyan-100"
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-2xl font-bold">Contact Details</h2>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-blue-50">
                  We welcome eligible candidates and referrals. Join us and be
                  part of our growth journey.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:min-w-[520px]">
                {contacts.map((contact) => (
                  <a
                    key={contact.mobile}
                    href={`tel:+91${contact.mobile}`}
                    className="rounded-2xl bg-white/12 p-4 text-sm backdrop-blur transition-colors duration-300 hover:bg-white/18"
                  >
                    <span className="block font-semibold">{contact.name}</span>
                    <span className="mt-2 inline-flex items-center gap-2 text-blue-50">
                      <Phone className="h-4 w-4" />
                      {contact.mobile}
                    </span>
                  </a>
                ))}
                <a
                  href="mailto:info@ringer.co.in"
                  className="rounded-2xl bg-white/12 p-4 text-sm backdrop-blur transition-colors duration-300 hover:bg-white/18 sm:col-span-2"
                >
                  <span className="block font-semibold">Email</span>
                  <span className="mt-2 inline-flex items-center gap-2 text-blue-50">
                    <Mail className="h-4 w-4" />
                    info@ringer.co.in
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedOpening && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/55 px-4 py-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeApplyModal}
          >
            <motion.form
              onSubmit={handleApply}
              onClick={(event) => event.stopPropagation()}
              initial={{ opacity: 0, y: 26, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl md:p-8"
            >
              <button
                type="button"
                onClick={closeApplyModal}
                aria-label="Close application form"
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors duration-300 hover:bg-blue-50 hover:text-blue-700"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="pr-12">
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                  <FileText className="h-4 w-4" />
                  Apply Now
                </span>
                <h2 className="mt-5 text-3xl font-bold text-gray-950">
                  {selectedOpening.title}
                </h2>
                {selectedOpening.meta && (
                  <p className="mt-2 text-sm font-semibold text-blue-600">
                    {selectedOpening.meta}
                  </p>
                )}
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-semibold text-gray-700">
                    Name
                  </span>
                  <input
                    type="text"
                    value={applicant.name}
                    onChange={(event) =>
                      setApplicant((current) => ({
                        ...current,
                        name: event.target.value,
                      }))
                    }
                    className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none transition-colors duration-300 focus:border-blue-500"
                    placeholder="Your full name"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-gray-700">
                    Phone
                  </span>
                  <input
                    type="tel"
                    value={applicant.phone}
                    onChange={(event) =>
                      setApplicant((current) => ({
                        ...current,
                        phone: event.target.value,
                      }))
                    }
                    className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none transition-colors duration-300 focus:border-blue-500"
                    placeholder="Mobile number"
                  />
                </label>

                <label className="block sm:col-span-2">
                  <span className="text-sm font-semibold text-gray-700">
                    Email
                  </span>
                  <input
                    type="email"
                    value={applicant.email}
                    onChange={(event) =>
                      setApplicant((current) => ({
                        ...current,
                        email: event.target.value,
                      }))
                    }
                    className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none transition-colors duration-300 focus:border-blue-500"
                    placeholder="Email address"
                  />
                </label>
              </div>

              <label className="mt-6 flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-blue-200 bg-blue-50/60 px-6 py-8 text-center transition-colors duration-300 hover:border-blue-400 hover:bg-blue-50">
                <Upload className="h-8 w-8 text-blue-600" />
                <span className="mt-4 text-sm font-semibold text-gray-900">
                  Upload PDF resume
                </span>
                <span className="mt-2 text-xs text-gray-500">
                  {resume ? resume.name : "PDF file only"}
                </span>
                <input
                  type="file"
                  accept="application/pdf,.pdf"
                  onChange={handleResumeChange}
                  className="sr-only"
                />
              </label>

              {fileError && (
                <p className="mt-3 text-sm font-medium text-red-600">
                  {fileError}
                </p>
              )}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={closeApplyModal}
                  className="rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors duration-300 hover:border-blue-200 hover:bg-blue-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Send Application
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

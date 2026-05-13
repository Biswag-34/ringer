    "use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Building2 } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<FormData>;

export default function ContactPage() {
  const SCRIPT_URL = "YOUR_GOOGLE_SCRIPT_URL"; // 🔥 replace this

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // ✅ VALIDATION
  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email))
      newErrors.email = "Enter a valid email";

    if (form.phone.length < 10)
      newErrors.phone = "Enter a valid phone number";

    if (!form.message.trim())
      newErrors.message = "Message is required";

    return newErrors;
  };

  // ✅ SUBMIT HANDLER
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(form),
      });

      setSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#F8FAFC] text-[#0F172A]">

      {/* HERO */}
      <section className="py-32 text-center bg-gradient-to-b from-[#E0F2FE] to-white px-6">
        <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl md:text-6xl font-bold">
            Get in Touch
          </h1>
          <p className="mt-6 text-[#64748B] max-w-xl mx-auto">
            Connect with us for partnerships, product inquiries, or collaborations.
          </p>
        </motion.div>
      </section>

      {/* CONTENT */}
      <section className="max-w-[1200px] mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">

        {/* LEFT */}
        <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-8">
          <h2 className="text-3xl font-semibold mb-6">Contact Information</h2>

          <div className="flex gap-4">
            <MapPin className="text-[#0EA5A4]" />
            <div>
              <h4 className="font-semibold">Head Office</h4>
              <p className="text-[#64748B]">
                438, E/2, HMT Main Rd, near Canara Bank <br />
                Gokula 1st Stage, HMT Layout, Mathikere <br />
                Bengaluru, Karnataka 560054
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Phone className="text-[#0EA5A4]" />
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p className="text-[#64748B]">
                +91 93416 18561
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Mail className="text-[#0EA5A4]" />
            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-[#64748B]">
                info@ringer.co.in
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Building2 className="text-[#0EA5A4]" />
            <div>
              <h4 className="font-semibold">Business Hours</h4>
              <p className="text-[#64748B]">
                Mon - Fri: 9 AM – 6 PM <br />
                Sat: 10 AM – 2 PM
              </p>
            </div>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }}>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-md border border-[#E2E8F0] space-y-6"
          >
            <h2 className="text-2xl font-semibold">Send a Message</h2>

            {(["name", "email", "phone"] as (keyof FormData)[]).map((field) => (
              <div key={field}>
                <input
                  type="text"
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={form[field]}
                  onChange={(e) =>
                    setForm({ ...form, [field]: e.target.value })
                  }
                  className="w-full p-3 border border-[#E2E8F0] rounded-lg focus:ring-2 focus:ring-[#0EA5A4]"
                />
                {errors[field] && (
                  <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
                )}
              </div>
            ))}

            <div>
              <textarea
                placeholder="Message"
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full p-3 border border-[#E2E8F0] rounded-lg h-32 focus:ring-2 focus:ring-[#0EA5A4]"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              disabled={loading}
              className="w-full bg-[#0EA5A4] text-white py-3 rounded-lg font-semibold hover:bg-[#0d9488] transition"
            >
              {loading ? "Sending..." : "Submit"}
            </motion.button>

            {success && (
              <p className="text-green-600 text-sm text-center">
                Message sent successfully!
              </p>
            )}
          </form>
        </motion.div>
      </section>

      {/* MAP */}
      <section className="px-6 pb-24">
        <div className="max-w-[1200px] mx-auto rounded-2xl overflow-hidden border border-[#E2E8F0]">
          <iframe
            src="https://www.google.com/maps?q=438%2C%20E%2F2%2C%20HMT%20Main%20Rd%2C%20near%20Canara%20Bank%2C%20Gokula%201st%20Stage%2C%20HMT%20Layout%2C%20Mathikere%2C%20Bengaluru%2C%20Karnataka%20560054&output=embed"
            className="w-full h-[400px] md:h-[500px]"
            loading="lazy"
          />
        </div>
      </section>

    </main>
  );
}
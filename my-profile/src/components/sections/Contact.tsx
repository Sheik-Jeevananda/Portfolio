import React, { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import { CONTACT_INFO } from "../../data/portfolioData";
import type { ContactFormData } from "../../types";

const INITIAL_FORM: ContactFormData = { name: "", email: "", message: "" };

const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactFormData>(INITIAL_FORM);
  const [sent, setSent]   = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm(INITIAL_FORM);
    setTimeout(() => setSent(false), 3500);
  };

  const inputClass =
    "w-full px-5 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/20 focus:outline-none focus:border-cyan-500/40 focus:bg-cyan-500/[0.03] transition-all duration-300 text-sm font-body";

  return (
    <section id="contact" className="relative z-10 py-32 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          number="05 / Contact"
          title="Let's"
          muted="Connect"
          subtitle="Have a project in mind or want to chat? I'm always open to new opportunities."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact info */}
          <div className="space-y-4">
            {CONTACT_INFO.map(({ label, value, href, emoji }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-4 rounded-2xl card-surface hover:border-cyan-500/20 hover:bg-cyan-500/[0.02] transition-all duration-300 group"
              >
                <span className="text-2xl leading-none">{emoji}</span>
                <div>
                  <div className="text-white/25 text-xs font-mono mb-0.5">{label}</div>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white/55 text-sm group-hover:text-cyan-400 transition-colors font-body"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-white/55 text-sm font-body">{value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className={inputClass}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className={inputClass}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              className={`${inputClass} resize-none`}
            />
            <button
              type="submit"
              className={`w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                sent
                  ? "bg-emerald-500 text-black cursor-default"
                  : "bg-cyan-500 text-black hover:bg-cyan-400 hover:scale-[1.02] shadow-lg shadow-cyan-500/20"
              }`}
            >
              {sent ? (
                <>
                  <CheckCircle size={16} /> Message Sent!
                </>
              ) : (
                <>
                  <Send size={15} /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

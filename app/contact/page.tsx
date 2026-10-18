"use client";

import { Mail, Phone, MapPin, Send, Sparkles, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const CONTACT_REASONS = [
  { value: "information", label: "Demande d'information" },
  { value: "partnership", label: "Partenariat" },
  { value: "quote", label: "Demande de devis" },
  { value: "job", label: "Offre d'emploi / Recrutement" },
  { value: "application", label: "Candidature spontanée" },
  { value: "support", label: "Support technique" },
  { value: "other", label: "Autre" },
];

const SERVICES = [
  { value: "", label: "-- Sélectionnez un service (optionnel) --" },
  { value: "interpretation", label: "Interpretation" },
  { value: "translation", label: "Translation & Localization" },
  { value: "bpo", label: "BPO Solutions" },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      reason: formData.get("reason") as string,
      service: formData.get("service") as string,
      message: formData.get("message") as string,
    };

    try {
      // 1. Save to our database
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to save to database");
      }

      // 2. Also send via Formspree for email notification
      await fetch("https://formspree.io/f/mkovzvrb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          source: "UCS Website Contact Form",
          _subject: `[UCS] ${CONTACT_REASONS.find(r => r.value === data.reason)?.label || data.reason} - ${data.name}`,
        }),
      });

      setIsSubmitted(true);
    } catch {
      setError("Une erreur est survenue. Veuillez réessayer ou nous contacter directement par email.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col min-h-screen">
        <section className="bg-brand-navy text-white py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 -translate-y-1/3 translate-x-1/3 w-96 h-96 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <CheckCircle2 className="w-20 h-20 text-green-400 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">Message envoyé !</h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Merci pour votre message. Notre équipe vous répondra dans les 24 heures.
            </p>
            <a href="/" className="inline-flex items-center mt-8 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-blue to-brand-blue-light text-white font-bold text-lg shadow-xl hover:scale-105 active:scale-95 transition-all duration-200">
              Retour à l&apos;accueil
            </a>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0B2545] via-[#0E356A] to-[#1B4F8F] text-white py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 -translate-y-1/3 translate-x-1/3 w-[500px] h-[500px] bg-blue-500/25 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-400/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sky-200 text-xs font-bold tracking-wider uppercase mb-6 mx-auto backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Get In Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6">Contact UCS</h1>
          <p className="text-lg sm:text-2xl text-blue-100/90 max-w-3xl mx-auto font-light leading-relaxed">
            We&apos;re here to answer your questions and discuss how our services can meet your needs.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-slate-50/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-black text-brand-navy mb-6 tracking-tight">Let&apos;s start a conversation</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Fill out the form or reach out directly using the contact information below. Our team aims to respond to all inquiries within 24 hours.
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="group flex items-start p-6 bg-white rounded-2xl border border-slate-100/80 shadow-sm hover:shadow-xl hover:border-brand-blue/40 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-brand-blue mr-5 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-navy mb-1">Email Us</h3>
                    <p className="text-slate-500 text-sm mb-2">For general inquiries and service requests:</p>
                    <a href="mailto:hiring.ucs@gmail.com" className="text-brand-blue font-semibold hover:underline m-2">
                      hiring.ucs@gmail.com
                    </a> |
                    <a href="mailto:bentz@bittonik.com" className="text-brand-blue font-semibold hover:underline m-2">
                      bentz@bittonik.com
                    </a>
                  </div>
                </div>

                <div className="group flex items-start p-6 bg-white rounded-2xl border border-slate-100/80 shadow-sm hover:shadow-xl hover:border-brand-blue/40 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-brand-blue mr-5 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-navy mb-1">Call Us</h3>
                    <p className="text-slate-500 text-sm mb-2">Mon-Fri from 8am to 5pm (EST)</p>
                    <p className="text-brand-blue font-semibold">Available upon request</p>
                  </div>
                </div>

                <div className="group flex items-start p-6 bg-white rounded-2xl border border-slate-100/80 shadow-sm hover:shadow-xl hover:border-brand-blue/40 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-brand-blue mr-5 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-navy mb-1">Headquarters</h3>
                    <p className="text-slate-600">
                      United States<br/>
                      <span className="text-sm text-slate-500">Fully remote operations globally</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-blue to-brand-blue-light"></div>
              <h3 className="text-2xl font-black text-brand-navy mb-8">Send us a Message</h3>
              
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    required 
                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      name="email" 
                      id="email" 
                      required 
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      id="phone" 
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="reason" className="block text-sm font-bold text-slate-700 mb-2">Reason for Contact *</label>
                  <select 
                    name="reason" 
                    id="reason" 
                    required
                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all appearance-none"
                  >
                    <option value="">-- Select a reason --</option>
                    {CONTACT_REASONS.map((r) => (
                      <option key={r.value} value={r.value}>{r.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-bold text-slate-700 mb-2">Service of Interest</label>
                  <select 
                    name="service" 
                    id="service" 
                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all appearance-none"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.value} value={s.value}>{s.label}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Message *</label>
                  <textarea 
                    name="message" 
                    id="message" 
                    rows={5} 
                    required 
                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all resize-y"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full inline-flex justify-center items-center px-8 py-4 rounded-xl bg-brand-navy text-white font-bold text-lg shadow-lg hover:bg-slate-800 hover:shadow-xl active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="w-5 h-5 ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

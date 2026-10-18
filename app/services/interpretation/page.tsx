import { 
  MessageSquare, Phone, Video, MapPin, Calendar, HeartPulse, Scale, 
  Briefcase, GraduationCap, HeadphonesIcon, ArrowRight, Sparkles, Globe2,
  Landmark, HeartHandshake, Users, Radio, Repeat
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Interpretation Services",
  description: "Multilingual Communication Solutions provided through qualified professionals across 150+ languages.",
};

export default function Interpretation() {
  const solutions = [
    { 
      name: "Consecutive Interpretation", 
      icon: Repeat,
      description: "Natural pauses between speaker statements, ideal for legal depositions, interviews, and medical visits."
    },
    { 
      name: "Simultaneous Interpretation", 
      icon: Radio,
      description: "Real-time, instantaneous interpretation for conferences, summits, large meetings, and webinars."
    },
    { 
      name: "Over-the-Phone (OPI)", 
      icon: Phone,
      description: "Instant 24/7 on-demand audio connections with certified interpreters within seconds."
    },
    { 
      name: "Video Remote (VRI)", 
      icon: Video,
      description: "HD video interpretation combining visual cues, facial expressions, and spoken communication."
    },
    { 
      name: "On-Site Interpretation", 
      icon: MapPin,
      description: "In-person professional linguists for trials, executive negotiations, hospital settings, and events."
    },
    { 
      name: "Scheduled Interpretation", 
      icon: Calendar,
      description: "Pre-booked certified specialists tailored specifically to rare languages and specialized technical domains."
    },
  ];

  const coreServices = [
    { name: "Government Services", icon: Landmark, description: "Municipal, state, and federal agencies ensuring equal access." },
    { name: "Social Services", icon: HeartHandshake, description: "Welfare programs, family assistance, and case worker sessions." },
    { name: "Community Services", icon: Users, description: "Outreach clinics, public hearings, and civic non-profit support." },
    { name: "Medical Interpretation", icon: HeartPulse, description: "HIPAA-compliant patient consultations, ER, and telemedicine." },
    { name: "Legal Interpretation", icon: Scale, description: "Court proceedings, arbitrations, depositions, and client consultations." },
    { name: "Business & Corporate", icon: Briefcase, description: "Executive meetings, cross-border negotiations, and global teams." },
    { name: "Educational Services", icon: GraduationCap, description: "Parent-teacher conferences, IEP evaluations, and student onboarding." },
    { name: "Customer Support", icon: HeadphonesIcon, description: "Multilingual inbound call resolution and operational workflows." },
  ];

  const coreLanguages = [
    { name: "Haitian Creole", native: "Kreyòl Ayisyen", flag: "🇭🇹", tag: "Primary Specialty" },
    { name: "English", native: "English", flag: "🇺🇸 / 🇬🇧", tag: "Core Language" },
    { name: "Spanish", native: "Español", flag: "🇪🇸 / 🇲🇽", tag: "Core Language" },
    { name: "French", native: "Français", flag: "🇫🇷 / 🇨🇦", tag: "Core Language" },
    { name: "Portuguese", native: "Português", flag: "🇧🇷 / 🇵🇹", tag: "Core Language" },
  ];

  const supportedLanguages = [
    "Spanish", "Mandarin Chinese", "Cantonese", "Vietnamese", "Tagalog", 
    "Korean", "Arabic", "Armenian", "Farsi (Persian)", "Dari", 
    "Pashto", "Russian", "Ukrainian", "French", "Portuguese", 
    "Haitian Creole", "German", "Italian", "Polish", "Greek", 
    "Turkish", "Hebrew", "Hindi", "Urdu", "Punjabi", 
    "Bengali", "Gujarati", "Tamil", "Telugu", "Nepali", 
    "Burmese", "Khmer", "Thai", "Lao", "Indonesian", 
    "Malay", "Japanese", "Somali", "Amharic", "Tigrinya", 
    "Swahili", "Chichewa (Nyanja)", "Bemba", "Yoruba", "Igbo", 
    "Hausa", "Lingala", "Kinyarwanda", "Kirundi", "Oromo", 
    "Wolof", "Afrikaans", "Zulu", "Xhosa", "Shona", 
    "Sesotho", "Akan (Twi)", "Ewe", "Fula (Fulani)", "Krio", 
    "Bosnian", "Serbian", "Croatian", "Albanian", "Romanian", 
    "Bulgarian", "Hungarian", "Czech", "Slovak", "Dutch", 
    "Swedish", "Norwegian", "Danish", "Finnish", "Lithuanian", 
    "Latvian", "Estonian", "Georgian", "Azerbaijani", "Kazakh", 
    "Uzbek", "Mongolian", "Assyrian (Syriac)", "Kurdish (Kurmanji)", "Kurdish (Sorani)", 
    "Chaldean", "Japanese Sign Language", "American Sign Language (ASL)", "British Sign Language (BSL)", "International Sign", 
    "Hmong"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0B2545] via-[#0E356A] to-[#1B4F8F] text-white py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 -translate-y-1/3 translate-x-1/3 w-[500px] h-[500px] bg-blue-500/25 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-400/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sky-200 text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Multilingual Language Services</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-amber-300 flex-shrink-0 shadow-lg backdrop-blur-sm">
              <MessageSquare className="w-8 h-8" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight">Interpretation Services</h1>
          </div>
          <p className="text-lg sm:text-2xl text-blue-100/90 max-w-3xl font-light leading-relaxed">
            Real-time, certified multilingual communication solutions across 150+ languages and dialects, available 24/7/365.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-slate-50/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Section 1: Our Interpretation Solutions */}
          <div className="mb-20">
            <div className="mb-10">
              <h2 className="text-xs font-black uppercase tracking-widest text-brand-blue mb-2">Delivery Formats</h2>
              <h3 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">Our Interpretation Solutions</h3>
              <p className="text-slate-600 mt-2 max-w-2xl">
                Tailored delivery modes engineered for flawless communication in any high-stakes scenario.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="group p-6 bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-brand-blue/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-brand-blue mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors flex-shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="font-extrabold text-xl text-brand-navy mb-2">{item.name}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 2: Core Interpretation Sectors */}
          <div className="mb-20">
            <div className="mb-10">
              <h2 className="text-xs font-black uppercase tracking-widest text-brand-blue mb-2">Specialized Fields</h2>
              <h3 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">Core Interpretation Sectors</h3>
              <p className="text-slate-600 mt-2 max-w-2xl">
                Certified linguists with deep industry terminology and strict regulatory compliance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {coreServices.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div key={idx} className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:border-brand-blue/40 hover:shadow-md transition-all">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-brand-blue mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-brand-navy text-base mb-1">{service.name}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 3: Supported Languages Showcase */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200/80 shadow-xl shadow-slate-200/40 relative overflow-hidden mb-16">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-blue via-blue-600 to-brand-gold"></div>
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10 pb-8 border-b border-slate-100">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-brand-blue text-xs font-black uppercase tracking-wider mb-3">
                  <Globe2 className="w-3.5 h-3.5" />
                  <span>Global Linguistic Coverage</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">150+ Languages Supported</h2>
                <p className="text-slate-600 mt-2 text-base max-w-2xl">
                  Universe Center Services connects your organization across more than 150 languages, sign languages, and regional dialects worldwide with qualified native-level professionals.
                </p>
              </div>
              <div className="flex items-center gap-3 bg-gradient-to-br from-[#0B2545] via-[#0E356A] to-[#1B4F8F] text-white px-7 py-5 rounded-2xl shadow-xl flex-shrink-0 border border-blue-400/20">
                <div className="text-4xl font-black text-amber-300">150+</div>
                <div className="text-xs font-bold leading-tight uppercase tracking-wider text-slate-200">
                  Languages<br/>& Dialects
                </div>
              </div>
            </div>
            
            {/* Core Languages */}
            <div className="mb-10">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-4">Core Languages</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {coreLanguages.map((lang, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center hover:border-brand-blue/50 transition-colors">
                    <div className="text-2xl mb-1">{lang.flag}</div>
                    <div className="font-extrabold text-brand-navy text-sm">{lang.name}</div>
                    <div className="text-xs text-slate-500 italic mb-2">{lang.native}</div>
                    <span className="inline-block px-2 py-0.5 rounded-full bg-blue-100/70 text-brand-blue text-[10px] font-bold">
                      {lang.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Full 91+ Languages List */}
            <div className="pt-6 border-t border-slate-100">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <h3 className="text-sm font-black uppercase tracking-widest text-brand-blue">
                  Available Languages & Sign Languages ({supportedLanguages.length} Listed)
                </h3>
                <span className="text-xs font-semibold text-slate-500">
                  + 60 more regional dialects & rare languages on-demand
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-8 max-h-[460px] overflow-y-auto p-4 bg-slate-50 rounded-2xl border border-slate-200">
                {supportedLanguages.map((lang, idx) => (
                  <span 
                    key={idx} 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 text-slate-800 rounded-lg text-xs font-semibold hover:border-brand-blue hover:text-brand-blue transition-colors cursor-default shadow-xs"
                  >
                    <span className="text-[10px] text-slate-400 font-bold">{idx + 1}.</span>
                    <span>{lang}</span>
                  </span>
                ))}
                
                {/* The "+" card to reach 150+ */}
                <span className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-brand-blue to-brand-navy text-white rounded-lg text-xs font-bold shadow-xs">
                  + 60 more regional dialects & indigenous languages (150+ total)
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🌍</span>
                  <span>
                    Need a specific language, sign language, or rare indigenous dialect not shown? We cover over <strong>150+ languages</strong> globally on-demand.
                  </span>
                </div>
                <Link 
                  href="/contact" 
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors flex-shrink-0"
                >
                  Request Language &rarr;
                </Link>
              </div>
            </div>
          </div>
          
          {/* Action CTA */}
          <div className="text-center">
             <Link 
               href="/contact" 
               className="inline-flex justify-center items-center px-9 py-4 rounded-xl bg-gradient-to-r from-brand-blue to-brand-blue-light text-white font-black text-lg shadow-xl shadow-brand-blue/20 hover:scale-105 active:scale-95 transition-all duration-200"
             >
                Request Interpretation Services
                <ArrowRight className="w-5 h-5 ml-2" />
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

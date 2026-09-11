import { Globe2, FileText, LayoutTemplate, Scale, BookOpen, Stethoscope, ArrowRight, Sparkles, Building, Briefcase } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Translation & Localization | Universe Center Services",
  description: "Professional translation and localization services for corporate, legal, and medical documents.",
};

export default function Translation() {
  const documentTypes = [
    { name: "Business Contracts & Agreements", icon: Briefcase },
    { name: "Medical Records & Forms", icon: Stethoscope },
    { name: "Legal Documentation", icon: Scale },
    { name: "Technical Manuals", icon: BookOpen },
    { name: "Website Localization", icon: Globe2 },
    { name: "Marketing Materials", icon: LayoutTemplate },
    { name: "Corporate Communications", icon: Building },
    { name: "General Documentation", icon: FileText },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-navy text-white py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 -translate-y-1/3 translate-x-1/3 w-96 h-96 bg-brand-teal/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-brand-teal text-xs font-bold tracking-wider uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Services</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-brand-teal/20 border border-brand-teal/30 flex items-center justify-center text-brand-teal flex-shrink-0">
              <Globe2 className="w-8 h-8" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight">Translation & Localization</h1>
          </div>
          <p className="text-lg sm:text-2xl text-slate-300 max-w-3xl font-light leading-relaxed">
            Accurate, culturally nuanced content solutions for all your professional documents and digital platforms.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-slate-50/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-xs font-black uppercase tracking-widest text-brand-teal mb-3">Our Expertise</h2>
                <h3 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight leading-tight mb-6">
                  Precision in Every Word
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed font-normal">
                  Our professional translation services go beyond word-for-word replacement. We ensure that the cultural context, technical terminology, and professional tone are perfectly adapted for the target audience.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                <h4 className="text-xl font-bold text-brand-navy mb-4">Quality Assurance</h4>
                <ul className="space-y-4">
                  {[
                    "Native-speaking professionals",
                    "Industry-specific terminology",
                    "Rigorous proofreading process",
                    "Strict confidentiality (HIPAA compliant)",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center text-brand-teal mr-3 flex-shrink-0 mt-0.5">
                        <Sparkles className="w-3 h-3" />
                      </div>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7">
              <h3 className="text-2xl font-bold text-brand-navy mb-8">What We Translate</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {documentTypes.map((doc, idx) => {
                  const Icon = doc.icon;
                  return (
                    <div key={idx} className="group flex items-center p-5 bg-white rounded-2xl border border-slate-100/80 shadow-sm hover:shadow-xl hover:border-brand-teal/40 hover:-translate-y-1 transition-all duration-300">
                      <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-brand-teal mr-4 group-hover:bg-brand-teal group-hover:text-brand-navy transition-colors flex-shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="font-bold text-slate-800 text-sm">{doc.name}</h4>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-12 p-8 rounded-3xl bg-brand-navy text-white relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-brand-teal/20 rounded-full blur-2xl pointer-events-none"></div>
                <h4 className="text-xl font-bold mb-4 relative z-10">Need a Quote?</h4>
                <p className="text-slate-300 mb-6 relative z-10">
                  Send us your document details, word count, and target languages, and we will provide a comprehensive estimate.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-brand-teal text-brand-navy font-bold shadow-lg hover:bg-teal-400 active:scale-95 transition-all duration-200 relative z-10"
                >
                  Request Translation Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

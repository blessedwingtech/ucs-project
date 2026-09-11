import { HeartPulse, Scale, GraduationCap, Building2, Briefcase, Globe2, Building, Zap, ArrowRight, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industries We Serve | Universe Center Services",
  description: "UCS provides language and BPO solutions across healthcare, legal, education, and corporate sectors.",
};

export default function Industries() {
  const industries = [
    {
      name: "Healthcare",
      icon: HeartPulse,
      description: "Medical interpretation and translation of patient records ensuring HIPAA-compliant, accurate care.",
      color: "from-rose-400 to-red-500",
      bg: "bg-rose-50",
      text: "text-rose-600"
    },
    {
      name: "Legal",
      icon: Scale,
      description: "Precise translation of contracts and professional interpretation for depositions and court proceedings.",
      color: "from-slate-600 to-slate-800",
      bg: "bg-slate-100",
      text: "text-slate-700"
    },
    {
      name: "Education",
      icon: GraduationCap,
      description: "Facilitating communication between schools, teachers, and diverse families.",
      color: "from-blue-400 to-blue-600",
      bg: "bg-blue-50",
      text: "text-blue-600"
    },
    {
      name: "Corporate",
      icon: Building2,
      description: "Business process outsourcing, corporate translations, and international meeting interpretation.",
      color: "from-brand-teal to-emerald-500",
      bg: "bg-teal-50",
      text: "text-brand-teal"
    },
    {
      name: "Government",
      icon: Building,
      description: "Supporting public services with accessible language solutions for all community members.",
      color: "from-indigo-400 to-indigo-600",
      bg: "bg-indigo-50",
      text: "text-indigo-600"
    },
    {
      name: "Technology",
      icon: Zap,
      description: "Software localization, technical manual translation, and remote IT helpdesk support.",
      color: "from-amber-400 to-orange-500",
      bg: "bg-amber-50",
      text: "text-amber-600"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-navy text-white py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 -translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-brand-teal/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 translate-y-1/3 translate-x-1/3 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-brand-teal text-xs font-bold tracking-wider uppercase mb-6 mx-auto">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Specialized Sectors</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6">Industries We Serve</h1>
          <p className="text-lg sm:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            Every industry has its own language. Our professionals are trained in sector-specific terminology and protocols.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-slate-50/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <div key={idx} className="group bg-white rounded-3xl p-8 border border-slate-100/80 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${ind.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                  <div className={`w-14 h-14 ${ind.bg} rounded-2xl flex items-center justify-center ${ind.text} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-4">{ind.name}</h3>
                  <p className="text-slate-600 leading-relaxed">{ind.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-20 p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-brand-navy to-[#0B2545] text-center border border-slate-800 relative overflow-hidden shadow-2xl">
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-brand-teal/20 rounded-full blur-3xl pointer-events-none"></div>
            <h2 className="text-3xl font-black text-white mb-6 relative z-10">Don&apos;t see your industry listed?</h2>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto relative z-10">
              We provide tailored solutions for specialized sectors. Contact us to discuss how we can meet your specific organizational needs.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex justify-center items-center px-8 py-4 rounded-xl bg-brand-teal text-brand-navy font-bold shadow-xl hover:bg-teal-400 active:scale-95 transition-all duration-200 relative z-10"
            >
               Get in touch
               <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

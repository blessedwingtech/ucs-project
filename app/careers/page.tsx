import { Briefcase, ArrowRight, UserPlus, FileText, CheckCircle2, Sparkles, Clock, HeadphonesIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers | Universe Center Services",
  description: "Join our global network of freelance interpreters, professional translators, and remote BPO professionals.",
};

export default function Careers() {
  const opportunities = [
    {
      title: "Freelance Interpreters",
      description: "On-demand and scheduled OPI, VRI, and on-site interpretation across 150+ languages.",
      icon: UserPlus,
    },
    {
      title: "Professional Translators",
      description: "Document translation, technical localization, proofreading, and certified adaptation.",
      icon: FileText,
    },
    {
      title: "Remote BPO Agents",
      description: "Customer service, inbound/outbound support, email handling, and administrative assistance.",
      icon: HeadphonesIcon,
    },
    {
      title: "Full-Time Remote BPO Professionals (8-Hour Shifts Across Different Time Zones)",
      description: "Dedicated operational shifts supporting enterprise clients globally with seamless workflow coverage.",
      icon: Clock,
    },
  ];

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
            <span>Join The Team</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6">Careers at UCS</h1>
          <p className="text-lg sm:text-2xl text-blue-100/90 max-w-3xl mx-auto font-light leading-relaxed">
            Join a global network of professionals dedicated to breaking language barriers and streamlining business operations.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-slate-50/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight leading-tight mb-4">
                  Work With A Global Network
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We are constantly expanding our roster of skilled interpreters, translators, and remote business support specialists. Whether you are a certified medical interpreter or an experienced BPO professional, there is a place for you at Universe Center Services.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm mt-8">
                <h3 className="text-xl font-bold text-brand-navy mb-6">Current Opportunities</h3>
                <div className="space-y-4">
                  {opportunities.map((opp, idx) => {
                    const Icon = opp.icon;
                    return (
                      <div key={idx} className="flex items-start p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-brand-blue/30 transition-all">
                        <div className="w-9 h-9 rounded-lg bg-blue-100/60 flex items-center justify-center text-brand-blue mr-4 flex-shrink-0 mt-0.5">
                          <Icon className="w-5 h-5 text-brand-blue" />
                        </div>
                        <div>
                          <h4 className="font-bold text-brand-navy text-base">
                            {idx + 1}. {opp.title}
                          </h4>
                          <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                            {opp.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* How to Apply Section */}
            <div className="bg-gradient-to-br from-[#0B2545] via-[#0E356A] to-[#1B4F8F] text-white p-10 sm:p-14 rounded-3xl shadow-2xl border border-blue-900/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-sky-200 text-xs font-bold tracking-wider uppercase mb-4 backdrop-blur-sm">
                <Briefcase className="w-3.5 h-3.5 text-amber-300" />
                <span>Application Process</span>
              </div>

              <h3 className="text-3xl font-black mb-4 relative z-10 tracking-tight">How to Apply</h3>
              <p className="text-slate-300 mb-8 leading-relaxed relative z-10 text-sm">
                We welcome motivated professionals from all linguistic and operational backgrounds. Follow our simple three-step process:
              </p>
              
              <div className="space-y-6 mb-10 relative z-10">
                <div className="flex items-start p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-950 font-black text-sm flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Submit Your Resume</h4>
                    <p className="text-slate-300 text-sm mt-1 leading-relaxed">
                      Submit your resume through our application form.
                    </p>
                  </div>
                </div>

                <div className="flex items-start p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-950 font-black text-sm flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Interview & Assessment</h4>
                    <p className="text-slate-300 text-sm mt-1 leading-relaxed">
                      Our recruitment team will review your application and schedule an interview and assessment if you meet the requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-950 font-black text-sm flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Onboarding</h4>
                    <p className="text-slate-300 text-sm mt-1 leading-relaxed">
                      Successful candidates will receive the next steps for onboarding and placement based on available opportunities.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 relative z-10">
                <Link 
                  href="/contact" 
                  className="inline-flex justify-center items-center px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black text-sm shadow-xl transition-all duration-200"
                >
                  Apply via Contact Form
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a 
                  href="mailto:hiring.ucs@gmail.com" 
                  className="inline-flex justify-center items-center px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm backdrop-blur-sm transition-all duration-200"
                >
                  Email: hiring.ucs@gmail.com
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

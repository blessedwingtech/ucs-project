import { Briefcase, ArrowRight, UserPlus, FileText, CheckCircle2, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Universe Center Services",
  description: "Join our network of professional interpreters, translators, and BPO agents.",
};

export default function Careers() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-navy text-white py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 -translate-y-1/3 translate-x-1/3 w-96 h-96 bg-brand-teal/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-brand-teal text-xs font-bold tracking-wider uppercase mb-6 mx-auto">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Join The Team</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6">Careers at UCS</h1>
          <p className="text-lg sm:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            Join a global network of professionals dedicated to breaking language barriers and streamlining business operations.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-slate-50/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight leading-tight">
                Work With A Global Network
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We are constantly expanding our roster of skilled interpreters, translators, and remote business support specialists. Whether you are a seasoned medical interpreter or a bilingual customer service expert, there is a place for you at UCS.
              </p>
              
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm mt-8">
                <h3 className="text-xl font-bold text-brand-navy mb-6">Current Opportunities</h3>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-slate-50 rounded-xl border border-slate-100/80">
                    <UserPlus className="w-6 h-6 text-brand-teal mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-brand-navy">Freelance Interpreters (OPI/VRI)</h4>
                      <p className="text-sm text-slate-500">Multiple languages</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-slate-50 rounded-xl border border-slate-100/80">
                    <FileText className="w-6 h-6 text-brand-teal mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-brand-navy">Professional Translators</h4>
                      <p className="text-sm text-slate-500">Document & Localization</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-slate-50 rounded-xl border border-slate-100/80">
                    <Briefcase className="w-6 h-6 text-brand-teal mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-brand-navy">BPO Remote Agents</h4>
                      <p className="text-sm text-slate-500">Customer Support & Admin</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-navy text-white p-10 sm:p-14 rounded-3xl shadow-2xl border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/10 rounded-full blur-3xl pointer-events-none"></div>
              
              <h3 className="text-3xl font-black mb-6 relative z-10">How to Apply</h3>
              <p className="text-slate-300 mb-10 leading-relaxed relative z-10">
                If you are passionate about communication and professional service, we would love to hear from you. Please send your resume and a cover letter detailing your language pairs and experience.
              </p>
              
              <ul className="space-y-6 mb-12 relative z-10">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-brand-teal mr-4 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white">1. Send your Resume</h4>
                    <p className="text-slate-400 text-sm mt-1">Email us at hiring.ucs@gmail.com</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-brand-teal mr-4 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white">2. Assessment</h4>
                    <p className="text-slate-400 text-sm mt-1">We will review your qualifications and contact you for testing if there is a match.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-brand-teal mr-4 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white">3. Onboarding</h4>
                    <p className="text-slate-400 text-sm mt-1">Join our platform and start receiving assignments.</p>
                  </div>
                </li>
              </ul>
              
              <a 
                href="mailto:hiring.ucs@gmail.com" 
                className="inline-flex justify-center items-center w-full sm:w-auto px-9 py-4 rounded-xl bg-gradient-to-r from-brand-teal to-emerald-400 text-brand-navy font-black text-lg shadow-xl shadow-brand-teal/20 hover:scale-105 active:scale-95 transition-all duration-200 relative z-10"
              >
                Email your Resume
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

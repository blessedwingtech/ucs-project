import { HeadphonesIcon, PhoneCall, CalendarCheck, FileSpreadsheet, Users, Mail, ArrowRight, Sparkles, ServerCog } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BPO Solutions | Universe Center Services",
  description: "Remote business support, call center agents, and workflow solutions to help your organization scale.",
};

export default function BpoSolutions() {
  const bpoServices = [
    { name: "Customer Support Agents", icon: Users },
    { name: "Inbound/Outbound Call Handling", icon: PhoneCall },
    { name: "Appointment Scheduling", icon: CalendarCheck },
    { name: "Data Entry & Processing", icon: FileSpreadsheet },
    { name: "Email & Chat Support", icon: Mail },
    { name: "Dedicated Virtual Assistants", icon: HeadphonesIcon },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-navy text-white py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 -translate-y-1/3 translate-x-1/3 w-96 h-96 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-brand-gold text-xs font-bold tracking-wider uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Services</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-brand-gold/20 border border-brand-gold/30 flex items-center justify-center text-brand-gold flex-shrink-0">
              <ServerCog className="w-8 h-8" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight">BPO Solutions</h1>
          </div>
          <p className="text-lg sm:text-2xl text-slate-300 max-w-3xl font-light leading-relaxed">
            Remote business support specialists designed to help organizations streamline workflows and elevate customer engagement.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-slate-50/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-black uppercase tracking-widest text-brand-teal mb-3">Workflow Optimization</h2>
            <h3 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight mb-6">Scale Your Operations Efficiently</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Business Process Outsourcing (BPO) allows your team to focus on core organizational goals while our trained remote specialists handle day-to-day operational tasks with professionalism and care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {bpoServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="group flex flex-col p-8 bg-white rounded-2xl border border-slate-100/80 shadow-sm hover:shadow-xl hover:border-brand-gold/40 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 mb-5 group-hover:bg-brand-gold group-hover:text-white transition-colors flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-brand-navy text-lg">{service.name}</h3>
                </div>
              );
            })}
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-16 border border-slate-100 shadow-xl shadow-slate-200/40 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-gold to-amber-400"></div>
            <h2 className="text-3xl font-black text-brand-navy mb-6">Ready to expand your capabilities?</h2>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
              Contact us to discuss how our remote teams can integrate with your current systems to provide seamless support.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex justify-center items-center px-9 py-4 rounded-xl bg-gradient-to-r from-brand-gold to-amber-500 text-brand-navy font-black text-lg shadow-xl shadow-brand-gold/20 hover:scale-105 active:scale-95 transition-all duration-200"
            >
               Discuss BPO Solutions
               <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import { ArrowRight, Globe2, MessageSquare, HeadphonesIcon, Building2, CheckCircle2, ShieldCheck, Zap, Award, Sparkles, Users, Languages } from "lucide-react";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  let latestAnnouncements = [];
  try {
    latestAnnouncements = await prisma.announcement.findMany({
      where: { published: true },
      orderBy: { publishedAt: 'desc' },
      take: 3,
    });
  } catch (error) {
    console.error("Could not fetch announcements (DB might not be initialized yet)", error);
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0B2545] via-[#0E356A] to-[#1B4F8F] text-white py-24 lg:py-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated ambient lighting glows */}
        <div className="absolute top-0 right-1/4 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-blue-500/25 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 translate-y-1/3 w-[450px] h-[450px] bg-amber-400/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sky-200 text-sm font-semibold mb-8 backdrop-blur-md shadow-lg shadow-blue-950/20">
              <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
              <span>Next-Generation Language & Business Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-none">
              Breaking Language Barriers.<br/>
              <span className="bg-gradient-to-r from-sky-300 via-blue-200 to-amber-300 bg-clip-text text-transparent">
                Powering Business Success.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100/90 mb-10 leading-relaxed max-w-2xl font-light">
              Universe Center Services (UCS) provides professional language solutions and business support services designed to help organizations communicate effectively, improve customer experiences, and operate more efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <Link 
                href="/services/interpretation" 
                className="inline-flex justify-center items-center px-8 py-4 rounded-xl bg-gradient-to-r from-brand-blue via-blue-600 to-brand-blue-light text-white font-black text-lg shadow-xl shadow-blue-950/50 hover:shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all duration-200 border border-blue-400/30"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex justify-center items-center px-8 py-4 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white font-bold text-lg backdrop-blur-sm transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-slate-50/70 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-black uppercase tracking-widest text-brand-blue mb-3">Our Core Solutions</h2>
            <h3 className="text-3xl sm:text-4xl font-black text-brand-navy mb-4 tracking-tight">How We Support Your Organization</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              We connect organizations with professional language experts and remote business support specialists, ensuring exceptional communication and workflow execution.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:shadow-slate-200/60 border border-slate-100/80 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-blue to-brand-blue-light opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div>
                <div className="w-14 h-14 bg-blue-50/80 rounded-2xl flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 shadow-sm">
                  <MessageSquare className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-bold text-brand-navy mb-3">Interpretation</h4>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Over-the-Phone (OPI), Video Remote (VRI), and On-Site interpretation across healthcare, legal, education, and corporate environments.
                </p>
              </div>
              <Link href="/services/interpretation" className="inline-flex items-center font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Service 2 */}
            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:shadow-slate-200/60 border border-slate-100/80 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-blue to-brand-blue-light opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div>
                <div className="w-14 h-14 bg-blue-50/80 rounded-2xl flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 shadow-sm">
                  <Globe2 className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-bold text-brand-navy mb-3">Translation & Localization</h4>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Accurate, professional content solutions including business contracts, medical forms, legal documents, manuals, and digital platform localization.
                </p>
              </div>
              <Link href="/services/translation" className="inline-flex items-center font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Service 3 */}
            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:shadow-slate-200/60 border border-slate-100/80 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-gold to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div>
                <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mb-6 group-hover:bg-brand-gold group-hover:text-white transition-all duration-300 shadow-sm">
                  <HeadphonesIcon className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-bold text-brand-navy mb-3">BPO Solutions</h4>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Remote business support specialists designed to help organizations streamline workflows, improve productivity, and elevate customer engagement.
                </p>
              </div>
              <Link href="/services/bpo" className="inline-flex items-center font-bold text-brand-navy group-hover:text-amber-600 transition-colors">
                Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 150+ Supported Languages Section */}
      <section className="py-24 bg-gradient-to-b from-white via-blue-50/40 to-white px-4 sm:px-6 lg:px-8 relative overflow-hidden border-y border-slate-100">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 border border-brand-blue/20 text-brand-blue text-xs font-bold tracking-wider uppercase mb-4">
              <Languages className="w-4 h-4 text-brand-blue" />
              <span>Global Linguistic Reach</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-navy tracking-tight mb-4">
              150+ Languages Supported Worldwide
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We connect your business with certified interpreters and native linguists across more than 150 languages and regional dialects, available 24/7/365 for on-demand or scheduled support.
            </p>
          </div>

          {/* Core Languages */}
          <div className="mb-12">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-6 text-center">
              Core Languages
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { name: "Haitian Creole", native: "Kreyòl Ayisyen", flag: "🇭🇹", tag: "Primary Specialty" },
                { name: "English", native: "English", flag: "🇺🇸 / 🇬🇧", tag: "Core Language" },
                { name: "Spanish", native: "Español", flag: "🇪🇸 / 🇲🇽", tag: "Core Language" },
                { name: "French", native: "Français", flag: "🇫🇷 / 🇨🇦", tag: "Core Language" },
                { name: "Portuguese", native: "Português", flag: "🇧🇷 / 🇵🇹", tag: "Core Language" },
              ].map((lang, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl p-5 border-2 border-brand-blue/15 hover:border-brand-blue shadow-sm hover:shadow-lg transition-all duration-300 text-center group"
                >
                  <div className="text-2xl mb-2">{lang.flag}</div>
                  <div className="font-extrabold text-brand-navy text-base group-hover:text-brand-blue transition-colors">{lang.name}</div>
                  <div className="text-xs text-slate-500 font-medium mb-3 italic">{lang.native}</div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-50 text-brand-blue text-[11px] font-bold">
                    {lang.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Global Languages Grid */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-md mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-6 border-b border-slate-100">
              <div>
                <h4 className="text-xl font-black text-brand-navy">Worldwide Language Capabilities</h4>
                <p className="text-sm text-slate-500">Available across Healthcare, Legal, Government, Education, and Corporate sectors</p>
              </div>
              <span className="px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300/60 text-amber-900 text-xs font-bold">
                150+ Languages Covered
              </span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {[
                "Arabic (العربية)",
                "Mandarin Chinese (中文)",
                "Cantonese (粵語)",
                "Japanese (日本語)",
                "Korean (한국어)",
                "German (Deutsch)",
                "Italian (Italiano)",
                "Dutch (Nederlands)",
                "Russian (Русский)",
                "Turkish (Türkçe)",
                "Hindi (हिन्दी)",
                "Vietnamese (Tiếng Việt)",
                "Tagalog (Filipino)",
                "Polish (Polski)",
                "Romanian (Română)",
                "Greek (Ελληνικά)",
                "Ukrainian (Українська)",
                "Bengali (বাংলা)",
                "Hebrew (עברית)",
                "Swahili (Kiswahili)",
                "Urdu (اردو)",
                "Persian / Farsi (فارسی)",
                "Amharic (አማርኛ)",
                "Thai (ไทย)",
                "Indonesian (Bahasa)",
                "Punjabi (ਪੰਜਾਬੀ)",
                "+ 125 more regional dialects & rare languages"
              ].map((language, i) => (
                <span 
                  key={i}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                    i === 26 
                      ? 'bg-gradient-to-r from-brand-blue to-brand-navy text-white font-bold shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-brand-blue'
                  }`}
                >
                  {language}
                </span>
              ))}
            </div>
          </div>

          {/* Callout Action */}
          <div className="bg-gradient-to-r from-brand-navy via-[#0B2545] to-brand-navy text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>On-Demand & Scheduled Availability</span>
              </div>
              <h4 className="text-2xl sm:text-3xl font-black">Need a specific language or rare dialect?</h4>
              <p className="text-slate-300 text-sm max-w-2xl">
                Whether you require phone interpretation (OPI), video interpretation (VRI), certified document translation, or multilingual customer care in any of our 150+ supported languages, we have you covered.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-shrink-0">
              <Link 
                href="/services/interpretation" 
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white text-brand-navy font-bold text-sm hover:bg-slate-100 transition-all shadow-md"
              >
                View Interpretation Services
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-brand-gold hover:bg-amber-500 text-slate-950 font-bold text-sm transition-all shadow-md"
              >
                Request a Language
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why UCS */}
      <section className="py-24 bg-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-xs font-black uppercase tracking-widest text-brand-blue mb-3">Why Work With Us</h2>
            <h3 className="text-3xl sm:text-4xl font-black text-brand-navy mb-6 tracking-tight">
              Built on Professional Excellence & Human Expertise
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our goal is to create long-term value for clients by combining deep domain understanding, rigorous cultural nuances, and modern technology.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { text: "Professional communication", icon: Users },
                { text: "Cultural understanding", icon: Globe2 },
                { text: "Strict confidentiality", icon: ShieldCheck },
                { text: "Flexible scalable solutions", icon: Zap },
                { text: "Quality-focused processes", icon: Award },
                { text: "Reliable long-term partnerships", icon: CheckCircle2 }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center p-3 rounded-xl bg-slate-50 border border-slate-100/80 hover:border-brand-blue/40 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-blue-100/60 flex items-center justify-center text-brand-blue mr-3 flex-shrink-0">
                      <Icon className="w-4 h-4 text-blue-700" />
                    </div>
                    <span className="font-semibold text-slate-800 text-sm">{item.text}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-10">
              <Link 
                href="/why-ucs" 
                className="inline-flex items-center px-6 py-3.5 rounded-xl bg-brand-navy text-white font-bold hover:bg-slate-800 shadow-md hover:shadow-lg transition-all"
              >
                Discover our commitment <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>

          {/* Right Visual Graphic Card */}
          <div className="lg:w-1/2 w-full">
            <div className="relative bg-gradient-to-br from-brand-navy to-slate-900 rounded-3xl p-8 sm:p-12 overflow-hidden shadow-2xl border border-slate-800">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-blue/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-gold/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center text-brand-blue">
                  <Building2 className="w-8 h-8" />
                </div>
                
                <h4 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  Connecting organizations globally with seamless reliability.
                </h4>
                
                <p className="text-slate-300 leading-relaxed">
                  We empower educational institutions, healthcare networks, legal teams, and fast-growing businesses with professional human talent across the globe.
                </p>

                <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-3xl font-extrabold text-brand-blue mb-1">100%</div>
                    <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Quality Focused</div>
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold text-white mb-1">24/7</div>
                    <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Dedicated Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Announcements */}
      <section className="py-24 bg-slate-50 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
            <div>
              <h2 className="text-xs font-black uppercase tracking-widest text-brand-blue mb-2">Company Updates</h2>
              <h3 className="text-3xl font-black text-brand-navy tracking-tight">Latest News & Announcements</h3>
              <p className="text-slate-600 mt-1">Stay informed on our newest initiatives and company insights.</p>
            </div>
            <Link href="/announcements" className="hidden sm:inline-flex items-center text-brand-navy hover:text-brand-blue font-bold transition-colors">
              View all articles <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {latestAnnouncements.length > 0 ? (
              latestAnnouncements.map((announcement) => (
                <Link 
                  href={`/announcements/${announcement.slug}`} 
                  key={announcement.id} 
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100/80 hover:shadow-xl hover:border-brand-blue/40 transition-all duration-300 hover:-translate-y-1"
                >
                  {announcement.coverImageUrl ? (
                    <div className="h-48 w-full overflow-hidden bg-slate-100">
                      <img 
                        src={announcement.coverImageUrl} 
                        alt={announcement.title} 
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                  ) : (
                    <div className="h-48 w-full bg-gradient-to-tr from-brand-navy via-slate-800 to-blue-900/40 flex items-center justify-center relative overflow-hidden">
                      <span className="text-white/20 font-black text-5xl select-none">UCS</span>
                    </div>
                  )}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-blue mb-2">
                        {announcement.publishedAt ? new Date(announcement.publishedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }) : 'News'}
                      </p>
                      <h4 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-blue transition-colors line-clamp-2">
                        {announcement.title}
                      </h4>
                      <p className="text-slate-600 text-sm line-clamp-3 mb-6 leading-relaxed">
                        {announcement.excerpt || announcement.content.substring(0, 140) + "..."}
                      </p>
                    </div>
                    <div className="text-xs font-bold text-slate-800 flex items-center group-hover:text-brand-blue transition-colors pt-4 border-t border-slate-50">
                      Read announcement <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-3 text-center py-16 bg-white rounded-2xl border border-slate-100/80 shadow-sm">
                <Sparkles className="w-12 h-12 text-slate-300 mx-auto mb-3 animate-pulse" />
                <p className="text-slate-500 font-medium">No announcements published yet. Check back soon!</p>
              </div>
            )}
          </div>
          
          <div className="mt-10 sm:hidden text-center">
            <Link href="/announcements" className="inline-flex items-center justify-center w-full py-3.5 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors">
              View all announcements <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="bg-gradient-to-br from-[#0B2545] via-[#0E356A] to-[#1B4F8F] text-white py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden border-t border-blue-900/40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-400/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-5xl font-black mb-6 tracking-tight">Ready to break communication barriers?</h2>
          <p className="text-lg sm:text-xl text-blue-100/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Partner with Universe Center Services today to build tailored solutions that connect people and businesses across languages and borders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex justify-center items-center px-9 py-4 rounded-xl bg-gradient-to-r from-brand-blue via-blue-600 to-brand-blue-light text-white font-black text-lg shadow-xl shadow-blue-950/50 hover:shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all duration-200 border border-blue-400/30"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="/partner" 
              className="inline-flex justify-center items-center px-9 py-4 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white font-bold text-lg backdrop-blur-sm transition-colors"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

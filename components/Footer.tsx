import Link from "next/link";
import { Sparkles, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0B2545] to-[#051324] text-white relative overflow-hidden border-t border-blue-900/30">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-1 pr-4">
            <Link href="/" className="group inline-flex items-center gap-3 mb-6">
              <img src="/icon.svg" alt="UCS Logo" className="h-12 w-12 rounded-xl shadow-md group-hover:scale-105 transition-transform" />
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-white group-hover:text-amber-300 transition-colors leading-none">UCS</span>
                <span className="text-[10px] font-bold tracking-wider text-slate-300 uppercase mt-0.5">Universe Center Services</span>
              </div>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
              Breaking Language Barriers. Powering Business Success. A premier provider of language and operational workflows across the globe.
            </p>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 border border-white/15 text-sky-200 text-xs font-semibold backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Available 24/7 Globally</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-white tracking-tight">Solutions</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link href="/services/interpretation" className="hover:text-amber-300 hover:translate-x-1 transition-all inline-block">Interpretation</Link></li>
              <li><Link href="/services/translation" className="hover:text-amber-300 hover:translate-x-1 transition-all inline-block">Translation & Localization</Link></li>
              <li><Link href="/services/bpo" className="hover:text-amber-300 hover:translate-x-1 transition-all inline-block">BPO Solutions</Link></li>
              <li><Link href="/industries" className="hover:text-amber-300 hover:translate-x-1 transition-all inline-block">Industries We Serve</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-white tracking-tight">Company</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link href="/about" className="hover:text-amber-300 hover:translate-x-1 transition-all inline-block">About Us</Link></li>
              <li><Link href="/why-ucs" className="hover:text-amber-300 hover:translate-x-1 transition-all inline-block">Why Work With UCS</Link></li>
              <li><Link href="/partner" className="hover:text-amber-300 hover:translate-x-1 transition-all inline-block">Partner With Us</Link></li>
              <li><Link href="/announcements" className="hover:text-amber-300 hover:translate-x-1 transition-all inline-block">News & Announcements</Link></li>
              <li><Link href="/careers" className="hover:text-amber-300 hover:translate-x-1 transition-all inline-block">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white tracking-tight">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li>
                <a href="mailto:info@universecenterservices.com" className="group flex items-center hover:text-amber-300 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center mr-3 group-hover:bg-amber-400 group-hover:text-slate-900 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="truncate">info@universecenterservices.com</span>
                </a>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-between w-full mt-2 px-5 py-3 rounded-xl bg-white/10 border border-white/15 hover:border-amber-400/50 text-white hover:text-amber-300 transition-all group backdrop-blur-sm"
                >
                  <span className="font-bold">Contact Support</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-400">
          <p>&copy; {new Date().getFullYear()} Universe Center Services (UCS). All rights reserved.</p>
          <div className="flex gap-6 items-center">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/admin" className="hover:text-white transition-colors">Admin</Link>
            <a title="Blessed Wing Technology" href="https://bwt.bittonik.com" className="hover:text-amber-300 transition-colors">Powered by BWT</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

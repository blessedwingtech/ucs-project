import Link from "next/link";
import { Sparkles, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-1 pr-4">
            <Link href="/" className="group inline-flex items-center gap-2 text-2xl font-black tracking-tight text-white hover:text-brand-teal transition-colors mb-6">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-teal to-emerald-400 flex items-center justify-center text-brand-navy font-black text-xl shadow-lg group-hover:scale-105 transition-transform">
                U
              </span>
              <span>UCS</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Breaking Language Barriers. Powering Business Success. A premier provider of language and operational workflows across the globe.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
              <span>Available 24/7</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-white tracking-tight">Solutions</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/services/interpretation" className="hover:text-brand-teal hover:translate-x-1 transition-all inline-block">Interpretation</Link></li>
              <li><Link href="/services/translation" className="hover:text-brand-teal hover:translate-x-1 transition-all inline-block">Translation & Localization</Link></li>
              <li><Link href="/services/bpo" className="hover:text-brand-teal hover:translate-x-1 transition-all inline-block">BPO Solutions</Link></li>
              <li><Link href="/industries" className="hover:text-brand-teal hover:translate-x-1 transition-all inline-block">Industries We Serve</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-white tracking-tight">Company</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/about" className="hover:text-brand-teal hover:translate-x-1 transition-all inline-block">About Us</Link></li>
              <li><Link href="/why-ucs" className="hover:text-brand-teal hover:translate-x-1 transition-all inline-block">Why Work With UCS</Link></li>
              <li><Link href="/partner" className="hover:text-brand-teal hover:translate-x-1 transition-all inline-block">Partner With Us</Link></li>
              <li><Link href="/announcements" className="hover:text-brand-teal hover:translate-x-1 transition-all inline-block">News & Announcements</Link></li>
              <li><Link href="/careers" className="hover:text-brand-teal hover:translate-x-1 transition-all inline-block">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white tracking-tight">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <a href="mailto:info@universecenterservices.com" className="group flex items-center hover:text-brand-teal transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center mr-3 group-hover:bg-brand-teal group-hover:text-brand-navy transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="truncate">info@universecenterservices.com</span>
                </a>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-between w-full mt-2 px-5 py-3 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-brand-teal text-white hover:text-brand-teal transition-all group"
                >
                  <span className="font-bold">Contact Support</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500">
          <p>&copy; {new Date().getFullYear()} Universe Center Services (UCS). All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <a title="Blessed Wing Technology" href="https://bwt.bittonik.com" className="hover:text-brand-teal transition-colors">Powered by BWT</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

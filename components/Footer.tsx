import Link from "next/link";
import { Sparkles, Mail, ArrowRight, Phone } from "lucide-react";

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
              <div className="bg-white rounded-xl px-3 py-1.5 shadow-md group-hover:scale-105 transition-all">
                <img src="/logo-ucs.png" alt="Universe Center Services" className="h-12 w-auto object-contain" />
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
            <ul className="space-y-3.5 text-sm text-slate-300">
              <li>
                <a href="mailto:hiring.ucs@gmail.com" className="group flex items-center hover:text-amber-300 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center mr-3 group-hover:bg-amber-400 group-hover:text-slate-900 transition-colors flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="truncate">hiring.ucs@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+50943871821" className="group flex items-center hover:text-amber-300 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center mr-3 group-hover:bg-amber-400 group-hover:text-slate-900 transition-colors flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>+509 4387 1821</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://whatsapp.com/channel/0029Vb95nuPIiRowxiGKKd2C" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mr-3 group-hover:bg-[#25D366] group-hover:text-white transition-colors flex-shrink-0">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  </div>
                  <span className="font-semibold text-xs">WhatsApp Channel &rarr;</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.facebook.com/share/1EFQSJHnUH/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mr-3 group-hover:bg-[#1877F2] group-hover:text-white transition-colors flex-shrink-0">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <span className="font-semibold text-xs">Follow on Facebook &rarr;</span>
                </a>
              </li>
              <li>
                <div className="pt-2 text-xs text-slate-400">
                  <span className="text-slate-300 font-bold">Headquarters:</span> Haiti<br/>
                  <span className="text-slate-300 font-bold">Coverage:</span> US, Canada & Global
                </div>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-between w-full mt-1 px-5 py-2.5 rounded-xl bg-white/10 border border-white/15 hover:border-amber-400/50 text-white hover:text-amber-300 transition-all group backdrop-blur-sm"
                >
                  <span className="font-bold text-xs">Contact Support</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-400">
          <p>&copy; {new Date().getFullYear()} Universe Center Services (UCS). All rights reserved.</p>
          <div className="flex gap-6 items-center">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/admin" className="hover:text-white transition-colors">Admin</Link>
            <a title="Blessed Wing Technology" href="https://bwt.bittonik.com" className="hover:text-amber-300 transition-colors">Powered by BWT</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

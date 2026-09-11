"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, MessageSquare, Globe2, HeadphonesIcon, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 glass-header border-b border-slate-800/60 shadow-lg transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="group flex items-center gap-2 text-2xl font-black tracking-tight text-white hover:text-brand-teal transition-colors">
              <span className="w-9 h-9 rounded-lg bg-gradient-to-tr from-brand-teal to-emerald-400 flex items-center justify-center text-brand-navy font-black text-lg shadow-md group-hover:scale-105 transition-transform">
                U
              </span>
              <span>UCS</span>
            </Link>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex space-x-8 items-center text-sm font-semibold">
            <Link href="/" className="text-slate-200 hover:text-brand-teal transition-colors py-2">Home</Link>
            <Link href="/about" className="text-slate-200 hover:text-brand-teal transition-colors py-2">About</Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-slate-200 hover:text-brand-teal transition-colors py-2 focus:outline-none"
                onMouseEnter={() => setServicesOpen(true)}
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <span>Services</span>
                <ChevronDown className="ml-1 h-4 w-4 text-slate-400 group-hover:text-brand-teal transition-transform duration-200 group-hover:rotate-180" />
              </button>
              
              <div 
                className={`absolute left-0 mt-2 w-64 rounded-xl shadow-2xl bg-white border border-slate-100 p-2 transition-all duration-200 z-50 ${
                  servicesOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
                }`}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <div className="space-y-1">
                  <Link 
                    href="/services/interpretation" 
                    onClick={() => setServicesOpen(false)}
                    className="flex items-center px-3 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-navy transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-brand-teal mr-3 group-hover/item:bg-brand-teal group-hover/item:text-brand-navy transition-colors">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold">Interpretation</div>
                      <div className="text-xs text-slate-400 font-normal">OPI, VRI & On-Site</div>
                    </div>
                  </Link>

                  <Link 
                    href="/services/translation" 
                    onClick={() => setServicesOpen(false)}
                    className="flex items-center px-3 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-navy transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-brand-teal mr-3 group-hover/item:bg-brand-teal group-hover/item:text-brand-navy transition-colors">
                      <Globe2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold">Translation</div>
                      <div className="text-xs text-slate-400 font-normal">Documents & Localization</div>
                    </div>
                  </Link>

                  <Link 
                    href="/services/bpo" 
                    onClick={() => setServicesOpen(false)}
                    className="flex items-center px-3 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-navy transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-brand-teal mr-3 group-hover/item:bg-brand-teal group-hover/item:text-brand-navy transition-colors">
                      <HeadphonesIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold">BPO Solutions</div>
                      <div className="text-xs text-slate-400 font-normal">Remote Business Support</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/industries" className="text-slate-200 hover:text-brand-teal transition-colors py-2">Industries</Link>
            <Link href="/why-ucs" className="text-slate-200 hover:text-brand-teal transition-colors py-2">Why UCS</Link>
            <Link href="/partner" className="text-slate-200 hover:text-brand-teal transition-colors py-2">Partner</Link>
            <Link href="/careers" className="text-slate-200 hover:text-brand-teal transition-colors py-2">Careers</Link>
          </div>

          <div className="hidden lg:flex items-center">
            <Link 
              href="/contact" 
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-brand-teal to-teal-400 text-brand-navy font-bold text-sm shadow-md hover:shadow-lg hover:shadow-brand-teal/25 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={toggleMenu} 
              aria-label="Toggle Menu"
              className="p-2 rounded-lg text-white hover:text-brand-teal hover:bg-slate-800/50 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-brand-navy/98 backdrop-blur-xl border-t border-slate-800 animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-3 pb-6 space-y-2 max-h-[80vh] overflow-y-auto">
            <Link 
              href="/" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/60 transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/60 transition-colors"
            >
              About
            </Link>

            <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-brand-teal border-t border-slate-800/80 pt-4 mt-2">
              Services
            </div>
            
            <div className="grid grid-cols-1 gap-1 pl-2">
              <Link 
                href="/services/interpretation" 
                onClick={() => setIsOpen(false)}
                className="flex items-center px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-brand-teal mr-3 flex-shrink-0" />
                <span>Interpretation</span>
              </Link>
              <Link 
                href="/services/translation" 
                onClick={() => setIsOpen(false)}
                className="flex items-center px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              >
                <Globe2 className="w-4 h-4 text-brand-teal mr-3 flex-shrink-0" />
                <span>Translation & Localization</span>
              </Link>
              <Link 
                href="/services/bpo" 
                onClick={() => setIsOpen(false)}
                className="flex items-center px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              >
                <HeadphonesIcon className="w-4 h-4 text-brand-teal mr-3 flex-shrink-0" />
                <span>BPO Solutions</span>
              </Link>
            </div>

            <div className="border-t border-slate-800/80 my-2 pt-2 space-y-1">
              <Link 
                href="/industries" 
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/60 transition-colors"
              >
                Industries
              </Link>
              <Link 
                href="/why-ucs" 
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/60 transition-colors"
              >
                Why UCS
              </Link>
              <Link 
                href="/partner" 
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/60 transition-colors"
              >
                Partner
              </Link>
              <Link 
                href="/careers" 
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/60 transition-colors"
              >
                Careers
              </Link>
            </div>

            <div className="pt-4 px-1">
              <Link 
                href="/contact" 
                onClick={() => setIsOpen(false)}
                className="flex justify-center items-center w-full py-3 px-4 rounded-xl bg-gradient-to-r from-brand-teal to-teal-400 text-brand-navy font-bold text-base shadow-lg active:scale-95 transition-transform"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Universe Center Services",
  description: "Get in touch with UCS for your language and business support needs.",
};

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-navy text-white py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 -translate-y-1/3 translate-x-1/3 w-96 h-96 bg-brand-teal/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-brand-teal text-xs font-bold tracking-wider uppercase mb-6 mx-auto">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6">Contact UCS</h1>
          <p className="text-lg sm:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            We&apos;re here to answer your questions and discuss how our services can meet your needs.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-slate-50/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-black text-brand-navy mb-6 tracking-tight">Let&apos;s start a conversation</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Fill out the form or reach out directly using the contact information below. Our team aims to respond to all inquiries within 24 hours.
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="group flex items-start p-6 bg-white rounded-2xl border border-slate-100/80 shadow-sm hover:shadow-xl hover:border-brand-teal/40 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-brand-teal mr-5 group-hover:scale-110 group-hover:bg-brand-teal group-hover:text-brand-navy transition-all duration-300 flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-navy mb-1">Email Us</h3>
                    <p className="text-slate-500 text-sm mb-2">For general inquiries and service requests:</p>
                    <a href="mailto:info@universecenterservices.com" className="text-brand-teal font-semibold hover:underline">
                      info@universecenterservices.com
                    </a>
                  </div>
                </div>

                <div className="group flex items-start p-6 bg-white rounded-2xl border border-slate-100/80 shadow-sm hover:shadow-xl hover:border-brand-teal/40 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-brand-teal mr-5 group-hover:scale-110 group-hover:bg-brand-teal group-hover:text-brand-navy transition-all duration-300 flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-navy mb-1">Call Us</h3>
                    <p className="text-slate-500 text-sm mb-2">Mon-Fri from 8am to 5pm (EST)</p>
                    <p className="text-brand-teal font-semibold">Available upon request</p>
                  </div>
                </div>

                <div className="group flex items-start p-6 bg-white rounded-2xl border border-slate-100/80 shadow-sm hover:shadow-xl hover:border-brand-teal/40 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-brand-teal mr-5 group-hover:scale-110 group-hover:bg-brand-teal group-hover:text-brand-navy transition-all duration-300 flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-navy mb-1">Headquarters</h3>
                    <p className="text-slate-600">
                      United States<br/>
                      <span className="text-sm text-slate-500">Fully remote operations globally</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Formspree Contact Form */}
            <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-teal to-emerald-400"></div>
              <h3 className="text-2xl font-black text-brand-navy mb-8">Send us a Message</h3>
              
              <form action="https://formspree.io/f/mkovzvrb" method="POST" className="space-y-6">
                <input type="hidden" name="source" value="UCS Website Contact Form" />
                
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    required 
                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      id="email" 
                      required 
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      id="phone" 
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-bold text-slate-700 mb-2">Service of Interest</label>
                  <select 
                    name="service" 
                    id="service" 
                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all appearance-none"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="interpretation">Interpretation</option>
                    <option value="translation">Translation & Localization</option>
                    <option value="bpo">BPO Solutions</option>
                    <option value="partnership">Partnership Opportunity</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                  <textarea 
                    name="message" 
                    id="message" 
                    rows={5} 
                    required 
                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all resize-y"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full inline-flex justify-center items-center px-8 py-4 rounded-xl bg-brand-navy text-white font-bold text-lg shadow-lg hover:bg-slate-800 hover:shadow-xl active:scale-95 transition-all duration-200"
                >
                  Send Message
                  <Send className="w-5 h-5 ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

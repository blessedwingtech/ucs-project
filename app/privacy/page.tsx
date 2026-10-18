import { ShieldCheck, Lock, Eye, FileText, Mail, Sparkles } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Universe Center Services (UCS) collects, uses, protects, and handles your personal information and language workflow data.",
};

export default function PrivacyPage() {
  const lastUpdated = "October 18, 2026";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-[#0B2545] via-[#0E356A] to-[#1B4F8F] text-white py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-sky-200 text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-sm">
            <ShieldCheck className="w-4 h-4 text-brand-gold" />
            <span>Data Protection & Confidentiality</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-lg text-blue-100/90 max-w-2xl mx-auto font-light leading-relaxed">
            Your privacy and confidentiality are central to everything we do at Universe Center Services (UCS).
          </p>
          <div className="mt-4 text-xs text-sky-200/80">
            Last Updated: {lastUpdated}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-slate-50/60 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-14 border border-slate-200/80 shadow-sm space-y-12">
          
          {/* Section 1 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-brand-blue">
                <Eye className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-brand-navy">1. Information We Collect</h2>
            </div>
            <div className="text-slate-600 leading-relaxed space-y-3 pl-1 sm:pl-13">
              <p>
                Universe Center Services collects information strictly necessary to provide multilingual interpretation, certified translation, and business process outsourcing (BPO) solutions.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-slate-800">Inquiry & Contact Data:</strong> When you complete our contact form, request a quote, or apply for recruitment, we collect your name, email address, phone number, reason for contact, target service, and the content of your message.
                </li>
                <li>
                  <strong className="text-slate-800">Operational & Project Materials:</strong> Documents, audio files, or text submitted to us for translation, localization, or interpretation review.
                </li>
                <li>
                  <strong className="text-slate-800">Technical Logs & Cookies:</strong> For administrative staff accessing the portal, secure HTTP-only session cookies are used to maintain authenticated sessions via NextAuth. We do not use third-party behavioral advertising trackers.
                </li>
              </ul>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-brand-blue">
                <FileText className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-brand-navy">2. How We Use Your Information</h2>
            </div>
            <div className="text-slate-600 leading-relaxed space-y-3 pl-1 sm:pl-13">
              <p>We use your information exclusively for legitimate business purposes:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>To evaluate, fulfill, and deliver requested interpretation, translation, and BPO contracts.</li>
                <li>To respond promptly to inquiries, quote requests, and partnership proposals.</li>
                <li>To route your contact submissions securely through our database and Formspree notification system to our customer support team.</li>
                <li>To process interpreter and translator applications for career opportunities.</li>
                <li>To maintain system reliability, security, and prevent spam or malicious activity.</li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-brand-blue">
                <Lock className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-brand-navy">3. Strict Confidentiality & Non-Disclosure (NDAs)</h2>
            </div>
            <div className="text-slate-600 leading-relaxed space-y-3 pl-1 sm:pl-13">
              <p>
                In the language services industry, confidentiality is paramount. UCS operates under stringent non-disclosure standards:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Linguist & Staff NDAs:</strong> All UCS certified interpreters, translators, and operational agents are legally bound by comprehensive Non-Disclosure Agreements prior to accessing any client data.
                </li>
                <li>
                  <strong>Healthcare & Legal Protocols:</strong> Our interpreters adhere to strict industry privacy frameworks (including HIPAA standards for healthcare interpretation and legal ethics for judicial proceedings).
                </li>
                <li>
                  <strong>No Commercial Resale:</strong> We never sell, rent, monetize, or license your personal information or submitted documents to any third party.
                </li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-brand-blue">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-brand-navy">4. Data Storage & Security Measures</h2>
            </div>
            <div className="text-slate-600 leading-relaxed space-y-3 pl-1 sm:pl-13">
              <p>
                We employ industry-standard technical and operational safeguards:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>All website traffic is encrypted in transit using Transport Layer Security (TLS/HTTPS).</li>
                <li>Inquiries stored in our database are protected by server-side firewall configurations, secure containerization, and access controls.</li>
                <li>Administrative access requires cryptographic password hashing (bcrypt) and session authentication.</li>
              </ul>
            </div>
          </div>

          {/* Section 5 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-brand-blue">
                <Sparkles className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-brand-navy">5. Your Rights & Data Retention</h2>
            </div>
            <div className="text-slate-600 leading-relaxed space-y-3 pl-1 sm:pl-13">
              <p>
                You retain the right to request access to the personal data we hold about you, request corrections, or ask for complete deletion of your contact records from our active systems, subject to applicable legal and regulatory record-keeping obligations.
              </p>
              <p>
                To exercise any of these rights, simply email us at{" "}
                <a href="mailto:hiring.ucs@gmail.com" className="text-brand-blue font-bold hover:underline">
                  hiring.ucs@gmail.com
                </a>.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-brand-blue">
                <Mail className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-brand-navy">6. Contact Our Privacy Team</h2>
            </div>
            <div className="text-slate-600 leading-relaxed space-y-3 pl-1 sm:pl-13">
              <p>
                For questions, concerns, or inquiries regarding this Privacy Policy or our data handling practices, please contact:
              </p>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-sm space-y-1">
                <div className="font-extrabold text-brand-navy">Universe Center Services (UCS)</div>
                <div>Attention: Privacy & Compliance</div>
                <div>
                  Email:{" "}
                  <a href="mailto:hiring.ucs@gmail.com" className="text-brand-blue font-semibold hover:underline">
                    hiring.ucs@gmail.com
                  </a>
                </div>
                <div>Website: <a href="https://ucs.bittonik.com" className="text-brand-blue font-semibold hover:underline">https://ucs.bittonik.com</a></div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
            <Link href="/terms" className="text-brand-blue font-semibold hover:underline">
              View Terms of Service &rarr;
            </Link>
            <Link href="/contact" className="inline-flex items-center px-6 py-2.5 rounded-xl bg-brand-blue text-white font-bold hover:bg-brand-blue-light transition-all">
              Contact Support
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}

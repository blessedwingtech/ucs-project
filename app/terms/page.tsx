import { Scale, FileCheck, CheckCircle2, AlertCircle, Building, Mail, Sparkles } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions governing the multilingual interpretation, translation, and BPO solutions provided by Universe Center Services (UCS).",
};

export default function TermsPage() {
  const lastUpdated = "October 18, 2026";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-[#0B2545] via-[#0E356A] to-[#1B4F8F] text-white py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-sky-200 text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-sm">
            <Scale className="w-4 h-4 text-brand-gold" />
            <span>Service Agreements & Standards</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">Terms of Service</h1>
          <p className="text-lg text-blue-100/90 max-w-2xl mx-auto font-light leading-relaxed">
            Transparent, professional terms governing our language solutions, BPO workflows, and client partnerships.
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
                <Building className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-brand-navy">1. Agreement & Acceptance</h2>
            </div>
            <div className="text-slate-600 leading-relaxed space-y-3 pl-1 sm:pl-13">
              <p>
                These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the website located at{" "}
                <strong className="text-slate-800">ucs.bittonik.com</strong> and the language and business services provided by{" "}
                <strong className="text-slate-800">Universe Center Services (UCS)</strong>.
              </p>
              <p>
                By requesting services, submitting contact inquiries, or engaging UCS for interpretation, translation, or BPO operations, you acknowledge and agree to be bound by these Terms and any accompanying Service Level Agreements (SLA) or Statements of Work (SOW).
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-brand-blue">
                <FileCheck className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-brand-navy">2. Description of Services</h2>
            </div>
            <div className="text-slate-600 leading-relaxed space-y-3 pl-1 sm:pl-13">
              <p>UCS delivers professional services across three core verticals:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-slate-800">Interpretation Services:</strong> Over-the-Phone (OPI), Video Remote (VRI), and On-site spoken interpretation across 150+ languages, including our core specialty in Haitian Creole, English, Spanish, French, and Portuguese.
                </li>
                <li>
                  <strong className="text-slate-800">Translation & Localization:</strong> Certified document translation, technical manual localization, digital and web content adaptation, and proofreading.
                </li>
                <li>
                  <strong className="text-slate-800">Business Process Outsourcing (BPO):</strong> Multilingual customer support, virtual assistants, back-office administration, and dedicated remote operational teams.
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-brand-blue">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-brand-navy">3. Quality Standards & Client Responsibilities</h2>
            </div>
            <div className="text-slate-600 leading-relaxed space-y-3 pl-1 sm:pl-13">
              <p>
                UCS commits to deploying vetted, certified linguists and skilled operational specialists. To maintain optimal service delivery, clients agree to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Provide legible, complete source documentation and necessary contextual glossaries or reference materials.</li>
                <li>Ensure stable high-speed internet and audio/video equipment when utilizing Video Remote Interpretation (VRI) or remote BPO services.</li>
                <li>Promptly review deliverables within the inspection period specified in your project agreement.</li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-brand-blue">
                <Sparkles className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-brand-navy">4. Intellectual Property & Deliverable Ownership</h2>
            </div>
            <div className="text-slate-600 leading-relaxed space-y-3 pl-1 sm:pl-13">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-slate-800">Client Materials:</strong> The client retains all right, title, and interest in and to all source documents, trademarks, and proprietary data submitted to UCS.
                </li>
                <li>
                  <strong className="text-slate-800">Translated Deliverables:</strong> Upon full payment of all applicable fees, all rights and ownership of the final translated materials transfer entirely to the client.
                </li>
                <li>
                  <strong className="text-slate-800">UCS Proprietary Technology:</strong> UCS retains all rights to its website, branding, trade dress, internal glossaries, and proprietary workflow infrastructure.
                </li>
              </ul>
            </div>
          </div>

          {/* Section 5 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-brand-blue">
                <AlertCircle className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-brand-navy">5. Limitation of Liability</h2>
            </div>
            <div className="text-slate-600 leading-relaxed space-y-3 pl-1 sm:pl-13">
              <p>
                UCS strives for the highest degree of accuracy in all interpretations and translations. However, language translation and live interpretation involve subjective linguistic and cultural nuances.
              </p>
              <p>
                To the maximum extent permitted by applicable law, UCS shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of the use or inability to use our services. In all circumstances, UCS&apos;s aggregate liability shall be limited to the total fees actually paid by the client for the specific service engagement giving rise to the claim.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-brand-blue">
                <Mail className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-brand-navy">6. Inquiries & Notices</h2>
            </div>
            <div className="text-slate-600 leading-relaxed space-y-3 pl-1 sm:pl-13">
              <p>
                For questions regarding these Terms or to request an individual Service Level Agreement (SLA), please contact our legal and partnerships desk:
              </p>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-sm space-y-1">
                <div className="font-extrabold text-brand-navy">Universe Center Services (UCS)</div>
                <div>Legal & Operations Desk</div>
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
            <Link href="/privacy" className="text-brand-blue font-semibold hover:underline">
              &larr; View Privacy Policy
            </Link>
            <Link href="/contact" className="inline-flex items-center px-6 py-2.5 rounded-xl bg-brand-blue text-white font-bold hover:bg-brand-blue-light transition-all">
              Contact Us
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}

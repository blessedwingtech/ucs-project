import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";

export const dynamic = 'force-dynamic';

export default async function AnnouncementsList() {
  let announcements = [];
  try {
    announcements = await prisma.announcement.findMany({
      where: { published: true },
      orderBy: { publishedAt: 'desc' },
    });
  } catch (error) {
    console.error("Could not fetch announcements", error);
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-navy text-white py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 -translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-brand-teal/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-brand-teal text-xs font-bold tracking-wider uppercase mb-6 mx-auto">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Updates</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6">News & Announcements</h1>
          <p className="text-lg sm:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            Stay updated with the latest company news, industry insights, and platform updates from UCS.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-slate-50/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {announcements.length === 0 ? (
            <div className="text-center py-24 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <Sparkles className="w-16 h-16 text-slate-200 mx-auto mb-6 animate-pulse" />
              <h2 className="text-2xl font-bold text-brand-navy mb-2">No announcements yet</h2>
              <p className="text-slate-500">Check back later for the latest news and updates.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {announcements.map((post) => (
                <Link 
                  key={post.id} 
                  href={`/announcements/${post.slug}`} 
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100/80 hover:shadow-xl hover:border-brand-teal/40 transition-all duration-300 hover:-translate-y-1"
                >
                  {post.coverImageUrl ? (
                    <div className="h-56 w-full overflow-hidden bg-slate-100 relative">
                      <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors z-10"></div>
                      <img 
                        src={post.coverImageUrl} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                  ) : (
                    <div className="h-56 w-full bg-gradient-to-tr from-brand-navy via-slate-800 to-teal-900/40 flex items-center justify-center relative overflow-hidden">
                      <span className="text-white/20 font-black text-6xl select-none">UCS</span>
                    </div>
                  )}
                  
                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center text-xs font-bold uppercase tracking-wider text-brand-teal mb-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' }) : 'News'}
                      </div>
                      <h2 className="text-2xl font-black text-brand-navy mb-4 group-hover:text-brand-teal transition-colors line-clamp-2 leading-tight">
                        {post.title}
                      </h2>
                      <p className="text-slate-600 mb-8 line-clamp-3 leading-relaxed">
                        {post.excerpt || post.content.substring(0, 160) + "..."}
                      </p>
                    </div>
                    <div className="text-sm font-bold text-slate-800 flex items-center group-hover:text-brand-teal transition-colors pt-5 border-t border-slate-100">
                      Read full article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

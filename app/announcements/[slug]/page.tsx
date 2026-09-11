import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  try {
    const slug = (await params).slug;
    const post = await prisma.announcement.findUnique({
      where: { slug }
    });

    if (!post) {
      return { title: 'Not Found' };
    }

    return {
      title: post.title,
      description: post.excerpt || post.title,
      openGraph: {
        title: post.title,
        description: post.excerpt || post.title,
        images: post.coverImageUrl ? [{ url: post.coverImageUrl }] : [],
      }
    };
  } catch (error) {
    return { title: 'Announcement' };
  }
}

export default async function AnnouncementDetail({ params }: { params: Promise<{ slug: string }> }) {
  let post = null;
  try {
    const slug = (await params).slug;
    post = await prisma.announcement.findUnique({
      where: { slug }
    });
  } catch (error) {
    console.error(error);
  }

  if (!post || (!post.published && process.env.NODE_ENV === 'production')) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {post.coverImageUrl && (
        <div className="w-full h-[40vh] md:h-[50vh] bg-slate-100 relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={post.coverImageUrl} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${post.coverImageUrl ? '-mt-24 relative z-10' : 'pt-16'}`}>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 mb-16">
          <Link href="/announcements" className="inline-flex items-center text-brand-teal hover:text-teal-600 mb-8 font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Announcements
          </Link>
          
          <div className="flex items-center text-sm text-slate-500 mb-6">
            <Calendar className="w-4 h-4 mr-2" />
            {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Draft'}
            {!post.published && (
              <span className="ml-4 px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold rounded">
                DRAFT
              </span>
            )}
          </div>
          
          <h1 className="text-3xl md:text-5xl font-extrabold text-brand-navy mb-8 leading-tight">
            {post.title}
          </h1>
          
          <div className="prose prose-slate prose-lg max-w-none prose-headings:text-brand-navy prose-a:text-brand-teal">
            {/* simple markdown renderer, in a real app might use react-markdown */}
            {post.content.split('\n').map((paragraph, idx) => (
              paragraph.trim() === '' ? <br key={idx} /> : <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

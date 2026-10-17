import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Mail, FileText, CheckCircle2, Clock, Plus, ArrowRight, Eye, MessageSquare, AlertCircle } from "lucide-react";

export const dynamic = 'force-dynamic';

const REASON_LABELS: Record<string, string> = {
  information: "Information",
  partnership: "Partenariat",
  quote: "Demande de devis",
  job: "Emploi / Recrutement",
  application: "Candidature",
  support: "Support technique",
  other: "Autre",
};

export default async function AdminDashboardPage() {
  let announcementsCount = 0;
  let publishedAnnouncementsCount = 0;
  let messagesCount = 0;
  let unreadMessagesCount = 0;
  let recentMessages: any[] = [];
  let recentAnnouncements: any[] = [];

  try {
    const [totalAnnouncements, publishedCount, totalMessages, unreadCount, messages, announcements] = await Promise.all([
      prisma.announcement.count(),
      prisma.announcement.count({ where: { published: true } }),
      prisma.contactSubmission.count(),
      prisma.contactSubmission.count({ where: { read: false } }),
      prisma.contactSubmission.findMany({
        orderBy: { createdAt: 'desc' },
        take: 5,
      }),
      prisma.announcement.findMany({
        orderBy: { createdAt: 'desc' },
        take: 5,
      }),
    ]);

    announcementsCount = totalAnnouncements;
    publishedAnnouncementsCount = publishedCount;
    messagesCount = totalMessages;
    unreadMessagesCount = unreadCount;
    recentMessages = messages;
    recentAnnouncements = announcements;
  } catch (error) {
    console.error("Dashboard data fetch error:", error);
  }

  return (
    <div className="space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-brand-navy tracking-tight">Tableau de bord</h1>
          <p className="text-slate-500 mt-1">Vue d&apos;ensemble et gestion de votre plateforme Universe Center Services.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/admin/announcements/new"
            className="inline-flex items-center px-4 py-2.5 rounded-xl bg-brand-blue text-white font-bold text-sm shadow hover:bg-brand-blue-light transition-all"
          >
            <Plus className="w-4 h-4 mr-2" />
            Nouvelle annonce
          </Link>
          <Link
            href="/"
            target="_blank"
            className="inline-flex items-center px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold text-sm shadow-sm hover:bg-slate-50 transition-all"
          >
            Voir le site public
          </Link>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Messages non lus */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Messages non lus</p>
              <h3 className="text-3xl font-black text-brand-navy mt-2">{unreadMessagesCount}</h3>
            </div>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${unreadMessagesCount > 0 ? 'bg-red-50 text-red-600' : 'bg-slate-50 text-slate-400'}`}>
              <AlertCircle className="w-6 h-6" />
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-4 flex items-center">
            Sur un total de <span className="font-bold ml-1">{messagesCount}</span> messages reçus
          </p>
        </div>

        {/* Total Messages */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Demandes</p>
              <h3 className="text-3xl font-black text-brand-navy mt-2">{messagesCount}</h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
          </div>
          <Link href="/admin/messages" className="text-xs text-brand-blue hover:underline font-semibold mt-4 inline-flex items-center">
            Consulter les messages <ArrowRight className="w-3 h-3 ml-1" />
          </Link>
        </div>

        {/* Total Annonces */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Articles / Annonces</p>
              <h3 className="text-3xl font-black text-brand-navy mt-2">{announcementsCount}</h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-4 flex items-center">
            <span className="font-bold mr-1">{publishedAnnouncementsCount}</span> en ligne actuellement
          </p>
        </div>

        {/* Taux de publication */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">En ligne</p>
              <h3 className="text-3xl font-black text-brand-navy mt-2">{publishedAnnouncementsCount}</h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
          </div>
          <Link href="/admin/announcements" className="text-xs text-brand-blue hover:underline font-semibold mt-4 inline-flex items-center">
            Gérer les annonces <ArrowRight className="w-3 h-3 ml-1" />
          </Link>
        </div>
      </div>

      {/* Main Grid: Messages récents & Annonces récentes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Derniers Messages */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-brand-blue" />
              <h2 className="text-lg font-bold text-brand-navy">Derniers messages reçus</h2>
            </div>
            <Link href="/admin/messages" className="text-xs font-semibold text-brand-blue hover:underline">
              Tout voir ({messagesCount})
            </Link>
          </div>

          {recentMessages.length === 0 ? (
            <p className="text-slate-400 text-sm text-center py-8">Aucun message pour le moment.</p>
          ) : (
            <div className="divide-y divide-slate-100">
              {recentMessages.map((msg) => (
                <div key={msg.id} className="py-4 first:pt-0 last:pb-0">
                  <div className="flex justify-between items-start gap-2">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        {!msg.read && (
                          <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" title="Non lu" />
                        )}
                        <span className="font-bold text-slate-800 text-sm truncate">{msg.name}</span>
                        <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded-full">
                          {REASON_LABELS[msg.reason] || msg.reason}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 truncate">{msg.email}</p>
                      <p className="text-sm text-slate-600 line-clamp-1 mt-1">{msg.message}</p>
                    </div>
                    <span className="text-xs text-slate-400 flex-shrink-0 whitespace-nowrap">
                      {new Date(msg.createdAt).toLocaleDateString("fr-FR", { day: "numeric", month: "short" })}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Dernières Annonces */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-brand-blue" />
              <h2 className="text-lg font-bold text-brand-navy">Dernières annonces</h2>
            </div>
            <Link href="/admin/announcements" className="text-xs font-semibold text-brand-blue hover:underline">
              Tout voir ({announcementsCount})
            </Link>
          </div>

          {recentAnnouncements.length === 0 ? (
            <p className="text-slate-400 text-sm text-center py-8">Aucune annonce créée.</p>
          ) : (
            <div className="divide-y divide-slate-100">
              {recentAnnouncements.map((post) => (
                <div key={post.id} className="py-4 first:pt-0 last:pb-0">
                  <div className="flex justify-between items-start gap-4">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`px-2 py-0.5 text-xs font-bold rounded-full ${post.published ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>
                          {post.published ? "Publié" : "Brouillon"}
                        </span>
                        <h3 className="font-bold text-slate-800 text-sm truncate">{post.title}</h3>
                      </div>
                      <p className="text-xs text-slate-400">
                        {post.publishedAt ? `Publié le ${new Date(post.publishedAt).toLocaleDateString("fr-FR")}` : "Non publié"}
                      </p>
                    </div>
                    <Link
                      href={`/admin/announcements/${post.id}/edit`}
                      className="text-xs text-brand-blue hover:underline font-semibold flex-shrink-0"
                    >
                      Modifier
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

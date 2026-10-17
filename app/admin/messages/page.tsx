import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Mail, Eye, Trash2, ArrowLeft } from "lucide-react";
import { revalidatePath } from "next/cache";

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

export default async function AdminMessages() {
  let messages: {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    reason: string;
    service: string | null;
    message: string;
    read: boolean;
    createdAt: Date;
  }[] = [];
  
  try {
    messages = await prisma.contactSubmission.findMany({
      orderBy: { createdAt: 'desc' },
    });
  } catch (error) {
    console.error("Could not fetch messages:", error);
  }

  const unreadCount = messages.filter(m => !m.read).length;

  async function markAsRead(formData: FormData) {
    "use server";
    const id = formData.get("id") as string;
    await prisma.contactSubmission.update({
      where: { id },
      data: { read: true },
    });
    revalidatePath("/admin/messages");
  }

  async function deleteMessage(formData: FormData) {
    "use server";
    const id = formData.get("id") as string;
    await prisma.contactSubmission.delete({
      where: { id },
    });
    revalidatePath("/admin/messages");
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-black text-brand-navy tracking-tight">Messages</h1>
          <p className="text-slate-500 mt-1">
            {messages.length} message{messages.length !== 1 ? 's' : ''} total
            {unreadCount > 0 && (
              <span className="ml-2 px-2 py-0.5 bg-red-100 text-red-700 text-xs font-bold rounded-full">
                {unreadCount} non lu{unreadCount !== 1 ? 's' : ''}
              </span>
            )}
          </p>
        </div>
        <Link
          href="/admin"
          className="inline-flex items-center text-sm text-slate-600 hover:text-brand-blue font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Dashboard
        </Link>
      </div>

      {messages.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-slate-100 shadow-sm">
          <Mail className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <p className="text-slate-500 font-medium text-lg">Aucun message reçu pour le moment.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`bg-white rounded-2xl border shadow-sm p-6 transition-all ${
                msg.read 
                  ? 'border-slate-100 opacity-75' 
                  : 'border-brand-blue/30 shadow-md ring-1 ring-brand-blue/10'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    {!msg.read && (
                      <span className="px-2 py-0.5 bg-brand-blue text-white text-xs font-bold rounded-full">
                        Nouveau
                      </span>
                    )}
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">
                      {REASON_LABELS[msg.reason] || msg.reason}
                    </span>
                    {msg.service && (
                      <span className="px-2 py-0.5 bg-blue-50 text-brand-blue text-xs font-bold rounded-full">
                        {msg.service}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-bold text-brand-navy">{msg.name}</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500 mt-1">
                    <a href={`mailto:${msg.email}`} className="hover:text-brand-blue transition-colors">
                      {msg.email}
                    </a>
                    {msg.phone && (
                      <a href={`tel:${msg.phone}`} className="hover:text-brand-blue transition-colors">
                        {msg.phone}
                      </a>
                    )}
                  </div>
                  
                  <p className="mt-3 text-slate-700 leading-relaxed whitespace-pre-wrap">
                    {msg.message}
                  </p>
                  
                  <p className="mt-3 text-xs text-slate-400">
                    {new Date(msg.createdAt).toLocaleDateString('fr-FR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  {!msg.read && (
                    <form action={markAsRead}>
                      <input type="hidden" name="id" value={msg.id} />
                      <button
                        type="submit"
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-blue-50 text-brand-blue text-sm font-semibold hover:bg-brand-blue hover:text-white transition-colors"
                        title="Marquer comme lu"
                      >
                        <Eye className="w-4 h-4" />
                        <span className="hidden sm:inline">Lu</span>
                      </button>
                    </form>
                  )}
                  <form action={deleteMessage}>
                    <input type="hidden" name="id" value={msg.id} />
                    <button
                      type="submit"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-red-50 text-red-600 text-sm font-semibold hover:bg-red-600 hover:text-white transition-colors"
                      title="Supprimer"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span className="hidden sm:inline">Supprimer</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

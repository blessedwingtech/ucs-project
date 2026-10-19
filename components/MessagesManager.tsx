"use client";

import { useState } from "react";
import { Mail, CheckCircle2, Trash2, Phone, Calendar, User, Tag, HeadphonesIcon, ChevronDown, ChevronUp } from "lucide-react";

type Message = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  reason: string;
  service: string | null;
  message: string;
  read: boolean;
  createdAt: string | Date;
};

const REASON_LABELS: Record<string, string> = {
  information: "Information Request",
  partnership: "Partnership / Business Inquiry",
  quote: "Request a Quote",
  job: "Job Opportunity / Recruitment",
  application: "General Application",
  support: "Technical Support",
  other: "Other",
};

export default function MessagesManager({ 
  initialMessages,
  onMarkRead,
  onToggleRead,
  onDelete
}: {
  initialMessages: Message[];
  onMarkRead: (id: string) => Promise<void>;
  onToggleRead: (id: string, currentRead: boolean) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleOpenMessage = async (msg: Message) => {
    const isOpening = expandedId !== msg.id;
    setExpandedId(isOpening ? msg.id : null);

    // Si on ouvre un message qui n'a pas encore été lu, on le marque automatiquement comme lu
    if (isOpening && !msg.read) {
      setMessages((prev) =>
        prev.map((m) => (m.id === msg.id ? { ...m, read: true } : m))
      );
      await onMarkRead(msg.id);
    }
  };

  const handleToggle = async (e: React.MouseEvent, id: string, currentRead: boolean) => {
    e.stopPropagation();
    setMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, read: !currentRead } : m))
    );
    await onToggleRead(id, currentRead);
  };

  const handleDelete = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (!confirm("Voulez-vous vraiment supprimer ce message ?")) return;
    setMessages((prev) => prev.filter((m) => m.id !== id));
    await onDelete(id);
  };

  const unreadCount = messages.filter((m) => !m.read).length;

  if (messages.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-2xl border border-slate-100 shadow-sm">
        <Mail className="w-16 h-16 text-slate-300 mx-auto mb-4" />
        <p className="text-slate-500 font-medium text-lg">Aucun message reçu pour le moment.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center px-1 text-sm text-slate-500">
        <span>{messages.length} message{messages.length > 1 ? 's' : ''} reçu{messages.length > 1 ? 's' : ''}</span>
        {unreadCount > 0 && (
          <span className="px-2.5 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full">
            {unreadCount} non lu{unreadCount > 1 ? 's' : ''}
          </span>
        )}
      </div>

      <div className="space-y-3">
        {messages.map((msg) => {
          const isExpanded = expandedId === msg.id;

          return (
            <div
              key={msg.id}
              onClick={() => handleOpenMessage(msg)}
              className={`bg-white rounded-2xl border transition-all cursor-pointer overflow-hidden ${
                msg.read
                  ? 'border-slate-200/80 hover:border-slate-300 shadow-sm'
                  : 'border-brand-blue/50 shadow-md ring-2 ring-brand-blue/15 bg-blue-50/20'
              }`}
            >
              {/* En-tête / Ligne résumée */}
              <div className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start md:items-center gap-3 min-w-0">
                  <div
                    className={`w-3 h-3 rounded-full flex-shrink-0 mt-1 md:mt-0 ${
                      msg.read ? 'bg-slate-300' : 'bg-brand-blue animate-pulse'
                    }`}
                    title={msg.read ? "Message lu" : "Nouveau message non lu"}
                  />

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-bold text-slate-900 text-base">{msg.name}</span>
                      <span className="px-2.5 py-0.5 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">
                        {REASON_LABELS[msg.reason] || msg.reason}
                      </span>
                      {msg.service && (
                        <span className="px-2.5 py-0.5 bg-blue-100 text-brand-blue text-xs font-semibold rounded-full">
                          {msg.service}
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-slate-500 mt-1 flex flex-wrap items-center gap-x-4 gap-y-0.5">
                      <span>{msg.email}</span>
                      {msg.phone && <span>Tél: {msg.phone}</span>}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-3 flex-shrink-0 border-t md:border-t-0 pt-3 md:pt-0">
                  <span className="text-xs text-slate-400">
                    {new Date(msg.createdAt).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>

                  <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={(e) => handleToggle(e, msg.id, msg.read)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                        msg.read
                          ? 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          : 'bg-blue-100 text-brand-blue hover:bg-brand-blue hover:text-white'
                      }`}
                      title={msg.read ? "Marquer comme non lu" : "Marquer comme lu"}
                    >
                      {msg.read ? "Marquer non lu" : "Marquer lu"}
                    </button>

                    <button
                      onClick={(e) => handleDelete(e, msg.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                      title="Supprimer le message"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="text-slate-400">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </div>
              </div>

              {/* Corps du message développé */}
              {isExpanded && (
                <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/60 animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 p-4 bg-white rounded-xl border border-slate-200 text-xs">
                    <div>
                      <span className="text-slate-400 font-medium">Expéditeur :</span>
                      <p className="font-bold text-slate-800 text-sm mt-0.5">{msg.name}</p>
                    </div>
                    <div>
                      <span className="text-slate-400 font-medium">Email :</span>
                      <p className="font-semibold text-brand-blue text-sm mt-0.5">
                        <a href={`mailto:${msg.email}?subject=RE: Votre demande UCS (${REASON_LABELS[msg.reason] || msg.reason})`} className="hover:underline">
                          {msg.email}
                        </a>
                      </p>
                    </div>
                    {msg.phone && (
                      <div>
                        <span className="text-slate-400 font-medium">Téléphone :</span>
                        <p className="font-semibold text-slate-800 text-sm mt-0.5">
                          <a href={`tel:${msg.phone}`} className="hover:underline">{msg.phone}</a>
                        </p>
                      </div>
                    )}
                    <div>
                      <span className="text-slate-400 font-medium">Raison du contact :</span>
                      <p className="font-semibold text-slate-800 text-sm mt-0.5">{REASON_LABELS[msg.reason] || msg.reason}</p>
                    </div>
                  </div>

                  <div className="p-5 bg-white rounded-xl border border-slate-200">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Message complet :</span>
                    <p className="text-slate-800 text-sm sm:text-base leading-relaxed whitespace-pre-wrap">
                      {msg.message}
                    </p>
                  </div>

                  <div className="mt-4 flex justify-between items-center">
                    <a
                      href={`mailto:${msg.email}?subject=RE: Votre demande auprès de Universe Center Services`}
                      className="inline-flex items-center px-4 py-2 rounded-xl bg-brand-blue text-white font-bold text-sm shadow hover:bg-brand-blue-light transition-all"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Répondre par email
                    </a>

                    <span className="text-xs text-green-700 font-semibold flex items-center">
                      <CheckCircle2 className="w-4 h-4 mr-1 text-green-600" />
                      Message marqué comme lu
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

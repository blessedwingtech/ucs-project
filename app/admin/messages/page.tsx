import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { revalidatePath } from "next/cache";
import MessagesManager from "@/components/MessagesManager";

export const dynamic = 'force-dynamic';

export default async function AdminMessages() {
  let messages: any[] = [];
  
  try {
    messages = await prisma.contactSubmission.findMany({
      orderBy: { createdAt: 'desc' },
    });
  } catch (error) {
    console.error("Could not fetch messages:", error);
  }

  // Server Action pour marquer automatiquement comme lu quand le message est ouvert
  async function markAsRead(id: string) {
    "use server";
    await prisma.contactSubmission.update({
      where: { id },
      data: { read: true },
    });
    revalidatePath("/admin/messages");
    revalidatePath("/admin");
  }

  // Server Action pour basculer lu/non-lu manuellement
  async function toggleRead(id: string, currentRead: boolean) {
    "use server";
    await prisma.contactSubmission.update({
      where: { id },
      data: { read: !currentRead },
    });
    revalidatePath("/admin/messages");
    revalidatePath("/admin");
  }

  // Server Action pour supprimer
  async function deleteMessage(id: string) {
    "use server";
    await prisma.contactSubmission.delete({
      where: { id },
    });
    revalidatePath("/admin/messages");
    revalidatePath("/admin");
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-brand-navy tracking-tight">Messages reçus</h1>
          <p className="text-slate-500 mt-1">
            Consultez les demandes de contact. Cliquez sur un message pour l&apos;ouvrir et le marquer automatiquement comme lu.
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

      <MessagesManager
        initialMessages={messages}
        onMarkRead={markAsRead}
        onToggleRead={toggleRead}
        onDelete={deleteMessage}
      />
    </div>
  );
}

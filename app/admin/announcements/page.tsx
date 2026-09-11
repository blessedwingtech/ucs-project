import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Plus, Edit, Trash2, CheckCircle, XCircle } from "lucide-react";
import { revalidatePath } from "next/cache";

export const dynamic = 'force-dynamic';

export default async function AdminAnnouncements() {
  const announcements = await prisma.announcement.findMany({
    orderBy: { createdAt: 'desc' }
  });

  async function deleteAnnouncement(formData: FormData) {
    "use server";
    const id = formData.get("id") as string;
    if (id) {
      await prisma.announcement.delete({ where: { id } });
      revalidatePath("/admin/announcements");
      revalidatePath("/announcements");
      revalidatePath("/");
    }
  }

  async function togglePublish(formData: FormData) {
    "use server";
    const id = formData.get("id") as string;
    const published = formData.get("published") === "true";
    
    if (id) {
      await prisma.announcement.update({
        where: { id },
        data: { 
          published: !published,
          publishedAt: !published ? new Date() : null
        }
      });
      revalidatePath("/admin/announcements");
      revalidatePath("/announcements");
      revalidatePath("/");
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
      <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-100">
        <h1 className="text-2xl font-bold text-brand-navy">Announcements</h1>
        <Link 
          href="/admin/announcements/new" 
          className="inline-flex items-center px-4 py-2 bg-brand-teal text-brand-navy font-bold rounded-lg hover:bg-teal-400 transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" />
          New Post
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-500 text-sm uppercase tracking-wider">
              <th className="p-4 font-semibold rounded-tl-lg">Title</th>
              <th className="p-4 font-semibold">Status</th>
              <th className="p-4 font-semibold">Created</th>
              <th className="p-4 font-semibold rounded-tr-lg text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {announcements.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-8 text-center text-slate-500">
                  No announcements found. Create one!
                </td>
              </tr>
            ) : (
              announcements.map((post) => (
                <tr key={post.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4">
                    <div className="font-semibold text-brand-navy">{post.title}</div>
                    <div className="text-xs text-slate-400 mt-1">{post.slug}</div>
                  </td>
                  <td className="p-4">
                    {post.published ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <CheckCircle className="w-3 h-3 mr-1" /> Published
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        <XCircle className="w-3 h-3 mr-1" /> Draft
                      </span>
                    )}
                  </td>
                  <td className="p-4 text-sm text-slate-500">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <form action={togglePublish}>
                        <input type="hidden" name="id" value={post.id} />
                        <input type="hidden" name="published" value={post.published.toString()} />
                        <button 
                          type="submit" 
                          className={`p-2 rounded-lg transition-colors ${post.published ? 'text-orange-500 hover:bg-orange-50' : 'text-green-600 hover:bg-green-50'}`}
                          title={post.published ? "Unpublish" : "Publish"}
                        >
                          {post.published ? <XCircle className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
                        </button>
                      </form>
                      
                      <Link 
                        href={`/admin/announcements/${post.id}/edit`}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </Link>
                      
                      <form action={deleteAnnouncement}>
                        <input type="hidden" name="id" value={post.id} />
                        <button 
                          type="submit"
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

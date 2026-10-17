"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save } from "lucide-react";
import Link from "next/link";

type Announcement = {
  id?: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  coverImageUrl: string | null;
  published: boolean;
};

export default function AnnouncementForm({ 
  initialData, 
  action 
}: { 
  initialData?: Announcement;
  action: (data: FormData) => Promise<{ success?: boolean; error?: string }>;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const [title, setTitle] = useState(initialData?.title || "");
  const [slug, setSlug] = useState(initialData?.slug || "");
  const [excerpt, setExcerpt] = useState(initialData?.excerpt || "");
  const [content, setContent] = useState(initialData?.content || "");
  const [coverImageUrl, setCoverImageUrl] = useState(initialData?.coverImageUrl || "");
  const [published, setPublished] = useState(initialData?.published || false);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    if (!initialData) {
      setSlug(newTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    const formData = new FormData();
    if (initialData?.id) formData.append("id", initialData.id);
    formData.append("title", title);
    formData.append("slug", slug);
    formData.append("excerpt", excerpt);
    formData.append("content", content);
    formData.append("coverImageUrl", coverImageUrl);
    formData.append("published", published.toString());

    try {
      const res = await action(formData);
      if (res?.error) {
        setError(res.error);
      } else {
        router.push("/admin/announcements");
        router.refresh();
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8 max-w-4xl mx-auto">
      <div className="mb-8 flex items-center justify-between">
        <Link href="/admin/announcements" className="inline-flex items-center text-slate-500 hover:text-brand-blue transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Link>
        <h1 className="text-2xl font-bold text-brand-navy">
          {initialData ? "Edit Announcement" : "New Announcement"}
        </h1>
      </div>

      {error && (
        <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Title *</label>
            <input 
              type="text" 
              required 
              value={title}
              onChange={handleTitleChange}
              className="w-full px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              placeholder="Post title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Slug *</label>
            <input 
              type="text" 
              required 
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              placeholder="post-slug-url"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Cover Image URL</label>
          <p className="text-xs text-slate-500 mb-2">
            URL directe de l&apos;image (ex: .jpg, .png) ou lien de partage cloud (MemoTonik, Google Drive, Dropbox, etc.).
          </p>
          <input 
            type="url" 
            value={coverImageUrl}
            onChange={(e) => setCoverImageUrl(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            placeholder="https://example.com/image.jpg ou https://memo.bittonik.com/share/photo/..."
          />
          {coverImageUrl && (
            <div className="mt-3 p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Aperçu :</span>
              <div className="relative h-44 w-full rounded-lg overflow-hidden bg-slate-100 flex items-center justify-center border">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={coverImageUrl} 
                  alt="Aperçu couverture" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Si l'URL est un lien de partage (ex: MemoTonik), Next.js la résoudra lors de la sauvegarde
                    (e.target as HTMLElement).style.display = 'none';
                    const parent = (e.target as HTMLElement).parentElement;
                    if (parent && !parent.querySelector('.preview-error')) {
                      const div = document.createElement('div');
                      div.className = 'preview-error text-center p-4 text-xs text-slate-500';
                      div.innerHTML = '<span>Lien de partage détecté. L&apos;image sera automatiquement convertie et affichée lors de la publication.</span>';
                      parent.appendChild(div);
                    }
                  }}
                />
              </div>
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Excerpt (Optional short summary)</label>
          <textarea 
            rows={2}
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            placeholder="Brief summary for the list view..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Content (Markdown supported) *</label>
          <textarea 
            required
            rows={12}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue font-mono text-sm"
            placeholder="Write your announcement content here..."
          />
        </div>

        <div className="flex items-center">
          <input
            id="published"
            type="checkbox"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
            className="h-4 w-4 text-brand-blue focus:ring-brand-blue border-slate-300 rounded"
          />
          <label htmlFor="published" className="ml-2 block text-sm text-slate-700">
            Publish immediately (will be visible to public)
          </label>
        </div>

        <div className="pt-4 border-t border-slate-100 flex justify-end">
          <button 
            type="submit" 
            disabled={loading}
            className={`inline-flex items-center px-6 py-3 bg-brand-navy text-white font-bold rounded-lg hover:bg-slate-800 transition-colors ${loading ? 'opacity-70' : ''}`}
          >
            <Save className="w-5 h-5 mr-2" />
            {loading ? 'Saving...' : 'Save Post'}
          </button>
        </div>
      </form>
    </div>
  );
}

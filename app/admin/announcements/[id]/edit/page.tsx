import AnnouncementForm from "@/components/AnnouncementForm";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";

export default async function EditAnnouncement({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  
  const post = await prisma.announcement.findUnique({
    where: { id }
  });

  if (!post) {
    notFound();
  }

  async function updateAnnouncement(formData: FormData) {
    "use server";
    
    const id = formData.get("id") as string;
    const title = formData.get("title") as string;
    const slug = formData.get("slug") as string;
    const excerpt = formData.get("excerpt") as string;
    const content = formData.get("content") as string;
    const coverImageUrl = formData.get("coverImageUrl") as string;
    const published = formData.get("published") === "true";

    try {
      const existing = await prisma.announcement.findUnique({ where: { id } });
      
      let publishedAt = existing?.publishedAt;
      if (published && !existing?.published) {
        publishedAt = new Date();
      } else if (!published) {
        publishedAt = null;
      }

      await prisma.announcement.update({
        where: { id },
        data: {
          title,
          slug,
          excerpt: excerpt || null,
          content,
          coverImageUrl: coverImageUrl || null,
          published,
          publishedAt,
        }
      });
      revalidatePath("/admin/announcements");
      revalidatePath("/announcements");
      revalidatePath("/");
      return { success: true };
    } catch (err) {
      const error = err as { code?: string };
      if (error.code === 'P2002') {
        return { error: "An announcement with this slug already exists." };
      }
      return { error: "Failed to update announcement." };
    }
  }

  return <AnnouncementForm initialData={post} action={updateAnnouncement} />;
}

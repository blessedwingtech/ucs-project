import AnnouncementForm from "@/components/AnnouncementForm";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export default function NewAnnouncement() {
  
  async function createAnnouncement(formData: FormData) {
    "use server";
    
    const title = formData.get("title") as string;
    const slug = formData.get("slug") as string;
    const excerpt = formData.get("excerpt") as string;
    const content = formData.get("content") as string;
    const coverImageUrl = formData.get("coverImageUrl") as string;
    const published = formData.get("published") === "true";

    try {
      await prisma.announcement.create({
        data: {
          title,
          slug,
          excerpt: excerpt || null,
          content,
          coverImageUrl: coverImageUrl || null,
          published,
          publishedAt: published ? new Date() : null,
        }
      });
      revalidatePath("/admin/announcements");
      revalidatePath("/announcements");
      revalidatePath("/");
      return { success: true };
    } catch (error: any) {
      if (error.code === 'P2002') {
        return { error: "An announcement with this slug already exists." };
      }
      return { error: "Failed to create announcement." };
    }
  }

  return <AnnouncementForm action={createAnnouncement} />;
}

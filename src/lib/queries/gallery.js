import { db } from "../db/index.js";
import { galleryImages } from "../db/schema.js";
import { asc } from "drizzle-orm";

export async function getGalleryImages() {
  try {
    const images = await db
      .select()
      .from(galleryImages)
      .orderBy(asc(galleryImages.displayOrder));

    return images.map((img) => ({
      id: img.id,
      title: img.title,
      image: img.imageUrl,
      category: img.category,
      aspect: img.aspect,
    }));
  } catch (error) {
    console.error("Error in getGalleryImages query:", error);
    return [];
  }
}

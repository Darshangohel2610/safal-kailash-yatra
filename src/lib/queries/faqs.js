import { db } from "../db/index.js";
import { faqs } from "../db/schema.js";
import { eq, asc } from "drizzle-orm";

export async function getFAQs() {
  try {
    const list = await db
      .select()
      .from(faqs)
      .where(eq(faqs.published, true))
      .orderBy(asc(faqs.displayOrder));

    return list.map((f) => ({
      id: f.id,
      question: f.question,
      answer: f.answer,
    }));
  } catch (error) {
    console.error("Error in getFAQs query:", error);
    return [];
  }
}

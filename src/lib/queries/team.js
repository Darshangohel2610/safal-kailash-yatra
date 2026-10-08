import { db } from "../db/index.js";
import { teamMembers } from "../db/schema.js";
import { eq, asc } from "drizzle-orm";

export async function getTeamData() {
  try {
    const members = await db
      .select()
      .from(teamMembers)
      .where(eq(teamMembers.published, true))
      .orderBy(asc(teamMembers.displayOrder));

    const leadership = members
      .filter((m) => m.isLeadership)
      .map((m) => ({
        id: m.id,
        name: m.name,
        position: m.position,
        roleBadge: m.roleBadge || m.position,
        image: m.imageUrl,
        description: m.description,
      }));

    const coreMembers = members
      .filter((m) => !m.isLeadership)
      .map((m) => ({
        id: m.id,
        name: m.name,
        position: m.position,
        category: m.category,
        image: m.imageUrl,
      }));

    return {
      leadership,
      categories: ["All", "Core Team", "Office Team", "Volunteers", "Yatra Guides"],
      members: coreMembers,
    };
  } catch (error) {
    console.error("Error in getTeamData query:", error);
    return { leadership: [], categories: ["All"], members: [] };
  }
}

import { db } from "../db/index.js";
import { adminUsers } from "../db/schema.js";
import { eq, and } from "drizzle-orm";

export async function verifyAdminCredentials(username, password) {
  try {
    const [user] = await db
      .select()
      .from(adminUsers)
      .where(and(eq(adminUsers.username, username), eq(adminUsers.active, true)))
      .limit(1);

    if (!user) return null;

    // Simple plain text comparison
    if (user.password !== password) return null;

    // Update last login timestamp
    await db
      .update(adminUsers)
      .set({ lastLoginAt: new Date() })
      .where(eq(adminUsers.id, user.id));

    return { id: user.id, username: user.username, name: user.name };
  } catch (error) {
    console.error("Error verifying admin credentials:", error);
    return null;
  }
}

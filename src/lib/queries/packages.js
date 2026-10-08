import { db } from "../db/index.js";
import {
  packages,
  categories,
  packageImages,
  packageDepartures,
  packageItineraryDays,
  packagePickupLocations,
  packageStayOptions,
  packageTravelOptions,
  packagePlaces,
} from "../db/schema.js";
import { eq, and, ilike, or, asc, desc } from "drizzle-orm";

export async function getPackages(opts = {}) {
  try {
    const { category, featured, search, includeAll = false } = opts || {};
    const conditions = [];

    if (!includeAll && packages?.status) {
      conditions.push(eq(packages.status, "PUBLISHED"));
    }

    if (featured) {
      conditions.push(eq(packages.featured, true));
    }

    if (search) {
      conditions.push(
        or(
          ilike(packages.title, `%${search}%`),
          ilike(packages.shortDescription, `%${search}%`),
          ilike(packages.startingPoint, `%${search}%`)
        )
      );
    }

    const whereClause = conditions.length > 0 ? and(...conditions) : undefined;

    const rows = await db
      .select({
        package: packages,
        categoryName: categories.name,
      })
      .from(packages)
      .leftJoin(categories, eq(packages.categoryId, categories.id))
      .where(whereClause)
      .orderBy(desc(packages.createdAt));

    // Map rows to application structure
    const result = await Promise.all(
      rows.map(async ({ package: pkg, categoryName }) => {
        const images = await db
          .select({ imageUrl: packageImages.imageUrl })
          .from(packageImages)
          .where(eq(packageImages.packageId, pkg.id))
          .orderBy(asc(packageImages.displayOrder));

        return {
          id: pkg.id,
          slug: pkg.slug,
          title: pkg.title,
          shortDescription: pkg.shortDescription,
          about: pkg.about,
          startingPrice: Number(pkg.startingPrice),
          startingPoint: pkg.startingPoint,
          endPoint: pkg.endPoint,
          duration: {
            days: pkg.durationDays,
            nights: pkg.durationNights,
          },
          durationDays: pkg.durationDays,
          durationNights: pkg.durationNights,
          featured: pkg.featured,
          status: pkg.status,
          category: categoryName || "Sacred Yatra",
          images: images.map((i) => i.imageUrl),
          highlights: pkg.highlights || [],
          createdAt: pkg.createdAt,
        };
      })
    );

    if (category && category !== "All") {
      return result.filter((p) => p.category === category);
    }

    return result;
  } catch (error) {
    console.error("Error in getPackages query:", error);
    return [];
  }
}

export async function getPackageBySlug(slug) {
  try {
    const pkgRows = await db
      .select({
        package: packages,
        categoryName: categories.name,
      })
      .from(packages)
      .leftJoin(categories, eq(packages.categoryId, categories.id))
      .where(eq(packages.slug, slug))
      .limit(1);

    if (!pkgRows.length) return null;

    return await formatFullPackage(pkgRows[0].package, pkgRows[0].categoryName);
  } catch (error) {
    console.error("Error in getPackageBySlug query:", error);
    return null;
  }
}

export async function getPackageById(id) {
  try {
    const pkgRows = await db
      .select({
        package: packages,
        categoryName: categories.name,
      })
      .from(packages)
      .leftJoin(categories, eq(packages.categoryId, categories.id))
      .where(eq(packages.id, id))
      .limit(1);

    if (!pkgRows.length) return null;

    return await formatFullPackage(pkgRows[0].package, pkgRows[0].categoryName);
  } catch (error) {
    console.error("Error in getPackageById query:", error);
    return null;
  }
}

async function formatFullPackage(pkg, categoryName) {
  // Fetch all gallery images from packageImages table
  const images = await db
    .select()
    .from(packageImages)
    .where(eq(packageImages.packageId, pkg.id))
    .orderBy(asc(packageImages.displayOrder));

  return {
    id: pkg.id,
    slug: pkg.slug,
    title: pkg.title,
    shortDescription: pkg.shortDescription,
    startingPrice: Number(pkg.startingPrice),
    startingPoint: pkg.startingPoint,
    endPoint: pkg.endPoint,
    duration: {
      days: pkg.durationDays,
      nights: pkg.durationNights,
    },
    durationDays: pkg.durationDays,
    durationNights: pkg.durationNights,
    featured: pkg.featured,
    status: pkg.status,
    category: categoryName || "Sacred Yatra",
    images: images.map((i) => i.imageUrl),
    highlights: pkg.highlights || [],
    about: pkg.about,
    trekInformation: pkg.trekInformation || {},
    inclusions: pkg.inclusions || [],
    exclusions: pkg.exclusions || [],
    policies: pkg.policies || {},
    itineraryPdf: pkg.itineraryPdf,
    joinFrom: pkg.joinFrom || [],
    stayOptions: pkg.stayOptionsData || [],
    travelling: pkg.travelOptionsData || [],
    itinerary: pkg.itinerary || [],
    placesToVisit: pkg.placesToVisit || [],
    departureDates: pkg.departureDatesData || {},
  };
}

// Helper: safely parse JSON strings coming from form
function safeJsonParse(val, fallback) {
  if (val === undefined || val === null) return fallback;
  if (typeof val === "object") return val;
  if (typeof val === "string") {
    const trimmed = val.trim();
    if (trimmed === "") return fallback;
    try { return JSON.parse(trimmed); } catch { return fallback; }
  }
  return fallback;
}

export async function createPackage(data) {
  try {
    const slug = data.slug || data.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

    const [inserted] = await db
      .insert(packages)
      .values({
        slug: slug,
        title: data.title,
        shortDescription: data.shortDescription || data.title,
        about: data.about || "",
        startingPrice: (data.startingPrice || 0).toString(),
        startingPoint: data.startingPoint || "Kathgodam",
        endPoint: data.endPoint || "Kathgodam",
        durationDays: Number(data.durationDays || 8),
        durationNights: Number(data.durationNights || 7),
        featured: Boolean(data.featured),
        status: data.status || "PUBLISHED",
        highlights: safeJsonParse(data.highlights, []),
        trekInformation: safeJsonParse(data.trekInformation, {}),
        inclusions: safeJsonParse(data.inclusions, []),
        exclusions: safeJsonParse(data.exclusions, []),
        policies: safeJsonParse(data.policies, {}),
        itineraryPdf: data.itineraryPdf || "",
        itinerary: safeJsonParse(data.itinerary, []),
        joinFrom: safeJsonParse(data.joinFrom, []),
        stayOptionsData: safeJsonParse(data.stayOptions, []),
        travelOptionsData: safeJsonParse(data.travelOptions, []),
        placesToVisit: safeJsonParse(data.placesToVisit, []),
        departureDatesData: safeJsonParse(data.departureDates, {}),
      })
      .returning();

    // Handle Gallery Images & Cover Image
    const galleryList = Array.isArray(data.images)
      ? data.images.filter(Boolean)
      : data.imageUrl
      ? [data.imageUrl]
      : [];

    if (galleryList.length > 0) {
      await db.insert(packageImages).values(
        galleryList.map((url, idx) => ({
          packageId: inserted.id,
          imageUrl: url,
          altText: inserted.title,
          displayOrder: idx + 1,
          isCover: idx === 0,
        }))
      );
    }

    return inserted;
  } catch (error) {
    console.error("Error creating package:", error);
    throw error;
  }
}

export async function updatePackage(id, data) {
  try {
    const updatePayload = {
      updatedAt: new Date(),
    };

    if (data.title !== undefined) updatePayload.title = data.title;
    if (data.slug !== undefined) updatePayload.slug = data.slug;
    if (data.shortDescription !== undefined) updatePayload.shortDescription = data.shortDescription;
    if (data.about !== undefined) updatePayload.about = data.about;
    if (data.startingPrice !== undefined) updatePayload.startingPrice = data.startingPrice.toString();
    if (data.startingPoint !== undefined) updatePayload.startingPoint = data.startingPoint;
    if (data.endPoint !== undefined) updatePayload.endPoint = data.endPoint;
    if (data.durationDays !== undefined) updatePayload.durationDays = Number(data.durationDays);
    if (data.durationNights !== undefined) updatePayload.durationNights = Number(data.durationNights);
    if (data.featured !== undefined) updatePayload.featured = Boolean(data.featured);
    if (data.status !== undefined) updatePayload.status = data.status;
    if (data.itineraryPdf !== undefined) updatePayload.itineraryPdf = data.itineraryPdf;

    // JSON fields
    if (data.highlights !== undefined) updatePayload.highlights = safeJsonParse(data.highlights, []);
    if (data.trekInformation !== undefined) updatePayload.trekInformation = safeJsonParse(data.trekInformation, {});
    if (data.inclusions !== undefined) updatePayload.inclusions = safeJsonParse(data.inclusions, []);
    if (data.exclusions !== undefined) updatePayload.exclusions = safeJsonParse(data.exclusions, []);
    if (data.policies !== undefined) updatePayload.policies = safeJsonParse(data.policies, {});
    if (data.itinerary !== undefined) updatePayload.itinerary = safeJsonParse(data.itinerary, []);
    if (data.joinFrom !== undefined) updatePayload.joinFrom = safeJsonParse(data.joinFrom, []);
    if (data.stayOptions !== undefined) updatePayload.stayOptionsData = safeJsonParse(data.stayOptions, []);
    if (data.travelOptions !== undefined) updatePayload.travelOptionsData = safeJsonParse(data.travelOptions, []);
    if (data.placesToVisit !== undefined) updatePayload.placesToVisit = safeJsonParse(data.placesToVisit, []);
    if (data.departureDates !== undefined) updatePayload.departureDatesData = safeJsonParse(data.departureDates, {});

    const [updated] = await db
      .update(packages)
      .set(updatePayload)
      .where(eq(packages.id, id))
      .returning();

    // Update gallery images if images array or imageUrl is provided
    let galleryList = null;
    if (Array.isArray(data.images)) {
      galleryList = data.images.filter(Boolean);
    } else if (data.imageUrl) {
      galleryList = [data.imageUrl];
    }

    if (galleryList !== null) {
      await db.delete(packageImages).where(eq(packageImages.packageId, id));
      if (galleryList.length > 0) {
        await db.insert(packageImages).values(
          galleryList.map((url, idx) => ({
            packageId: id,
            imageUrl: url,
            altText: updated.title,
            displayOrder: idx + 1,
            isCover: idx === 0,
          }))
        );
      }
    }

    return updated;
  } catch (error) {
    console.error("Error updating package:", error);
    throw error;
  }
}

export async function deletePackage(id) {
  try {
    const [deleted] = await db
      .delete(packages)
      .where(eq(packages.id, id))
      .returning();

    return deleted;
  } catch (error) {
    console.error("Error deleting package:", error);
    throw error;
  }
}

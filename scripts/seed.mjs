import * as dotenv from "dotenv";
dotenv.config();

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "../src/lib/db/schema.js";

import { packages } from "../src/data/packages.js";
import { packageData } from "../src/data/packageData.js";
import { teamData } from "../src/data/teamData.js";

const sql = neon(process.env.DATABASE_URL);
const db = drizzle(sql, { schema });

async function seed() {
  console.log("🌱 Starting Neon PostgreSQL database seeding...");

  try {
    // 1. Seed Categories
    console.log("📦 Seeding Categories...");
    const categoryMap = new Map();
    const categoriesList = [
      {
        name: "Standard Yatra",
        slug: "standard-yatra",
        description: "Standard 4x4 yatra packages with homestay accommodation.",
      },
      {
        name: "Express Yatra",
        slug: "express-yatra",
        description: "Short duration 4x4 yatra packages.",
      },
      {
        name: "VIP & Deluxe Yatra",
        slug: "vip-deluxe-yatra",
        description: "Upgraded accommodation and customized yatra options.",
      },
      {
        name: "Adi Kailash Yatra",
        slug: "adi-kailash-yatra",
        description: "Sacred Adi Kailash pilgrimage packages.",
      },
      {
        name: "Mount Kailash Yatra",
        slug: "mount-kailash-yatra",
        description: "Mount Kailash & Mansarovar pilgrimage packages.",
      },
    ];

    for (const cat of categoriesList) {
      const [inserted] = await db
        .insert(schema.categories)
        .values(cat)
        .onConflictDoUpdate({
          target: schema.categories.name,
          set: { description: cat.description },
        })
        .returning();
      categoryMap.set(inserted.name, inserted.id);
    }

    // 2. Seed Packages & Related Tables
    console.log("🏔️ Seeding Packages & Related Tables...");
    for (const pkg of packages) {
      const categoryId =
        categoryMap.get(pkg.category) || categoryMap.get("Standard Yatra");

      const [insertedPkg] = await db
        .insert(schema.packages)
        .values({
          slug: pkg.slug,
          title: pkg.title,
          shortDescription: pkg.shortDescription,
          about: pkg.about,
          startingPrice: pkg.startingPrice.toString(),
          startingPoint: pkg.startingPoint,
          endPoint: pkg.endPoint,
          durationDays: pkg.duration.days,
          durationNights: pkg.duration.nights,
          featured: pkg.featured || false,
          status: "PUBLISHED",
          categoryId: categoryId,
          highlights: pkg.highlights || [],
          trekInformation: pkg.trekInformation || {},
          inclusions: pkg.inclusions || [],
          exclusions: pkg.exclusions || [],
          policies: pkg.policies || {},
          itineraryPdf:
            pkg.itineraryPdf || "/itinerary/panch-kailash-yatra-itinerary.pdf",
        })
        .onConflictDoUpdate({
          target: schema.packages.slug,
          set: {
            title: pkg.title,
            startingPrice: pkg.startingPrice.toString(),
            shortDescription: pkg.shortDescription,
            updatedAt: new Date(),
          },
        })
        .returning();

      const packageId = insertedPkg.id;

      // Seed Package Images
      if (pkg.images && pkg.images.length > 0) {
        for (let i = 0; i < pkg.images.length; i++) {
          await db.insert(schema.packageImages).values({
            packageId: packageId,
            imageUrl: pkg.images[i],
            altText: `${pkg.title} photo ${i + 1}`,
            displayOrder: i + 1,
            isCover: i === 0,
          });
        }
      }

      // Seed Package Departures
      if (pkg.departureDates) {
        for (const [month, datesList] of Object.entries(pkg.departureDates)) {
          for (const dItem of datesList) {
            const statusMap = {
              available: "OPEN",
              limited: "OPEN",
              soldout: "FULL",
            };
            await db.insert(schema.packageDepartures).values({
              packageId: packageId,
              departureDate: new Date(dItem.date),
              price: pkg.startingPrice.toString(),
              status: statusMap[dItem.status] || "OPEN",
            });
          }
        }
      }

      // Seed Itinerary Days
      if (pkg.itinerary && pkg.itinerary.length > 0) {
        for (const dayItem of pkg.itinerary) {
          await db.insert(schema.packageItineraryDays).values({
            packageId: packageId,
            dayNumber: dayItem.day,
            title: dayItem.title,
            description: dayItem.description,
            activities: dayItem.activities || [],
            overnight: dayItem.overnight || "",
            displayOrder: dayItem.day,
          });
        }
      }

      // Seed Join From Locations
      if (pkg.joinFrom && pkg.joinFrom.length > 0) {
        for (let i = 0; i < pkg.joinFrom.length; i++) {
          const loc = pkg.joinFrom[i];
          await db.insert(schema.packagePickupLocations).values({
            packageId: packageId,
            city: loc.city,
            pickupPoint: loc.pickupPoint,
            departureTime: loc.departureTime,
            priceAdjustment: (
              loc.pricePerPerson - pkg.startingPrice
            ).toString(),
            displayOrder: i + 1,
          });
        }
      }

      // Seed Stay Options
      if (pkg.stayOptions && pkg.stayOptions.length > 0) {
        for (let i = 0; i < pkg.stayOptions.length; i++) {
          const stay = pkg.stayOptions[i];
          await db.insert(schema.packageStayOptions).values({
            packageId: packageId,
            title: stay.title,
            description: stay.description,
            priceAdjustment: (stay.priceAdjustment || 0).toString(),
            displayOrder: i + 1,
          });
        }
      }

      // Seed Travel Options
      if (pkg.travelling && pkg.travelling.length > 0) {
        for (let i = 0; i < pkg.travelling.length; i++) {
          const trv = pkg.travelling[i];
          await db.insert(schema.packageTravelOptions).values({
            packageId: packageId,
            type: trv.type,
            description: trv.description,
            displayOrder: i + 1,
          });
        }
      }

      // Seed Places to Visit
      if (pkg.placesToVisit && pkg.placesToVisit.length > 0) {
        for (let i = 0; i < pkg.placesToVisit.length; i++) {
          const plc = pkg.placesToVisit[i];
          await db.insert(schema.packagePlaces).values({
            packageId: packageId,
            name: plc.name,
            description: plc.description,
            imageUrl: plc.image,
            displayOrder: i + 1,
          });
        }
      }
    }

    // 3. Seed Global Gallery
    console.log("📸 Seeding Gallery Images...");
    if (packageData.galleryImages) {
      for (let i = 0; i < packageData.galleryImages.length; i++) {
        const gImg = packageData.galleryImages[i];
        await db.insert(schema.galleryImages).values({
          title: gImg.title,
          imageUrl: gImg.image,
          category: gImg.category,
          aspect: gImg.aspect || "normal",
          displayOrder: i + 1,
        });
      }
    }

    // 4. Seed Team Members
    console.log("👥 Seeding Team Members...");
    if (teamData.leadership) {
      for (let i = 0; i < teamData.leadership.length; i++) {
        const l = teamData.leadership[i];
        await db.insert(schema.teamMembers).values({
          name: l.name,
          position: l.position,
          imageUrl: l.image,
          category: "Leadership",
          roleBadge: l.roleBadge,
          description: l.description,
          isLeadership: true,
          displayOrder: i + 1,
        });
      }
    }

    if (teamData.members) {
      for (let i = 0; i < teamData.members.length; i++) {
        const m = teamData.members[i];
        await db.insert(schema.teamMembers).values({
          name: m.name,
          position: m.position,
          imageUrl: m.image,
          category: m.category,
          isLeadership: false,
          displayOrder: i + 1,
        });
      }
    }

    // 5. Seed FAQs
    console.log("❓ Seeding FAQs...");
    if (packageData.faqs) {
      for (let i = 0; i < packageData.faqs.length; i++) {
        const faq = packageData.faqs[i];
        await db.insert(schema.faqs).values({
          question: faq.question,
          answer: faq.answer,
          category: "General",
          displayOrder: i + 1,
        });
      }
    }

    console.log("✅ Neon PostgreSQL Database Seeding Completed Successfully!");
  } catch (error) {
    console.error("❌ Error during database seeding:", error);
    process.exit(1);
  }
}

seed();

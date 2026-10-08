import {
  pgTable,
  uuid,
  varchar,
  text,
  integer,
  decimal,
  boolean,
  timestamp,
  jsonb,
} from "drizzle-orm/pg-core";

// 1. Categories Table
export const categories = pgTable("categories", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 100 }).notNull().unique(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
  description: text("description"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

// 2. Packages Table
export const packages = pgTable("packages", {
  id: uuid("id").defaultRandom().primaryKey(),
  slug: varchar("slug", { length: 150 }).notNull().unique(),
  title: varchar("title", { length: 255 }).notNull(),
  shortDescription: text("short_description").notNull(),
  about: text("about"),
  startingPrice: decimal("starting_price", { precision: 10, scale: 2 }).notNull(),
  currency: varchar("currency", { length: 10 }).default("INR"),
  startingPoint: varchar("starting_point", { length: 100 }).notNull(),
  endPoint: varchar("end_point", { length: 100 }).notNull(),
  durationDays: integer("duration_days").notNull(),
  durationNights: integer("duration_nights").notNull(),
  featured: boolean("featured").default(false),
  status: varchar("status", { length: 50 }).default("PUBLISHED"), // DRAFT, PUBLISHED, ARCHIVED
  categoryId: uuid("category_id").references(() => categories.id, { onDelete: "set null" }),
  
  highlights: jsonb("highlights").default([]),
  trekInformation: jsonb("trek_information").default({}),
  inclusions: jsonb("inclusions").default([]),
  exclusions: jsonb("exclusions").default([]),
  policies: jsonb("policies").default({}),
  itineraryPdf: varchar("itinerary_pdf", { length: 500 }),
  
  // Inline JSON data columns (avoids separate table queries)
  itinerary: jsonb("itinerary").default([]),
  joinFrom: jsonb("join_from").default([]),
  stayOptionsData: jsonb("stay_options_data").default([]),
  travelOptionsData: jsonb("travel_options_data").default([]),
  placesToVisit: jsonb("places_to_visit").default([]),
  departureDatesData: jsonb("departure_dates_data").default({}),
  
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

// 3. Package Departures Table
export const packageDepartures = pgTable("package_departures", {
  id: uuid("id").defaultRandom().primaryKey(),
  packageId: uuid("package_id").references(() => packages.id, { onDelete: "cascade" }),
  departureDate: timestamp("departure_date", { withTimezone: true }).notNull(),
  returnDate: timestamp("return_date", { withTimezone: true }),
  price: decimal("price", { precision: 10, scale: 2 }),
  currency: varchar("currency", { length: 10 }).default("INR"),
  status: varchar("status", { length: 50 }).default("OPEN"), // OPEN, FULL, CANCELLED
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

// 4. Package Itinerary Days Table
export const packageItineraryDays = pgTable("package_itinerary_days", {
  id: uuid("id").defaultRandom().primaryKey(),
  packageId: uuid("package_id").references(() => packages.id, { onDelete: "cascade" }),
  dayNumber: integer("day_number").notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  activities: jsonb("activities").default([]),
  overnight: varchar("overnight", { length: 150 }),
  displayOrder: integer("display_order").default(0),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

// 5. Package Images Table
export const packageImages = pgTable("package_images", {
  id: uuid("id").defaultRandom().primaryKey(),
  packageId: uuid("package_id").references(() => packages.id, { onDelete: "cascade" }),
  imageUrl: varchar("image_url", { length: 500 }).notNull(),
  altText: varchar("alt_text", { length: 255 }),
  displayOrder: integer("display_order").default(0),
  isCover: boolean("is_cover").default(false),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

// 6. Package Pickup / Join From Locations Table
export const packagePickupLocations = pgTable("package_pickup_locations", {
  id: uuid("id").defaultRandom().primaryKey(),
  packageId: uuid("package_id").references(() => packages.id, { onDelete: "cascade" }),
  city: varchar("city", { length: 100 }).notNull(),
  pickupPoint: varchar("pickup_point", { length: 150 }),
  departureTime: varchar("departure_time", { length: 100 }),
  priceAdjustment: decimal("price_adjustment", { precision: 10, scale: 2 }).default("0"),
  currency: varchar("currency", { length: 10 }).default("INR"),
  displayOrder: integer("display_order").default(0),
  active: boolean("active").default(true),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

// 7. Stay Options Table
export const packageStayOptions = pgTable("package_stay_options", {
  id: uuid("id").defaultRandom().primaryKey(),
  packageId: uuid("package_id").references(() => packages.id, { onDelete: "cascade" }),
  title: varchar("title", { length: 150 }).notNull(),
  description: text("description"),
  priceAdjustment: decimal("price_adjustment", { precision: 10, scale: 2 }).default("0"),
  currency: varchar("currency", { length: 10 }).default("INR"),
  displayOrder: integer("display_order").default(0),
  active: boolean("active").default(true),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

// 8. Travel Options Table
export const packageTravelOptions = pgTable("package_travel_options", {
  id: uuid("id").defaultRandom().primaryKey(),
  packageId: uuid("package_id").references(() => packages.id, { onDelete: "cascade" }),
  type: varchar("type", { length: 150 }).notNull(),
  description: text("description"),
  priceAdjustment: decimal("price_adjustment", { precision: 10, scale: 2 }).default("0"),
  displayOrder: integer("display_order").default(0),
  active: boolean("active").default(true),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

// 9. Places to Visit Table
export const packagePlaces = pgTable("package_places", {
  id: uuid("id").defaultRandom().primaryKey(),
  packageId: uuid("package_id").references(() => packages.id, { onDelete: "cascade" }),
  name: varchar("name", { length: 150 }).notNull(),
  description: text("description"),
  imageUrl: varchar("image_url", { length: 500 }),
  displayOrder: integer("display_order").default(0),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

// 10. Global Gallery Table
export const galleryImages = pgTable("gallery_images", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: varchar("title", { length: 200 }).notNull(),
  imageUrl: varchar("image_url", { length: 500 }).notNull(),
  altText: varchar("alt_text", { length: 255 }),
  category: varchar("category", { length: 100 }).notNull(), // PEAK, LAKE, DARSHAN, CULTURE, ROUTE
  aspect: varchar("aspect", { length: 20 }).default("normal"), // normal, large
  displayOrder: integer("display_order").default(0),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

// 11. Team Members Table
export const teamMembers = pgTable("team_members", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 150 }).notNull(),
  position: varchar("position", { length: 150 }).notNull(),
  imageUrl: varchar("image_url", { length: 500 }).notNull(),
  category: varchar("category", { length: 100 }).notNull(), // Leadership, Guiding Team, Operations, Volunteers
  roleBadge: varchar("role_badge", { length: 100 }),
  description: text("description"),
  isLeadership: boolean("is_leadership").default(false),
  displayOrder: integer("display_order").default(0),
  published: boolean("published").default(true),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

// 12. FAQs Table
export const faqs = pgTable("faqs", {
  id: uuid("id").defaultRandom().primaryKey(),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
  category: varchar("category", { length: 100 }).default("General"),
  displayOrder: integer("display_order").default(0),
  published: boolean("published").default(true),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

// 13. Admin Users Table
export const adminUsers = pgTable("admin_users", {
  id: uuid("id").defaultRandom().primaryKey(),
  username: varchar("username", { length: 100 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  name: varchar("name", { length: 150 }),
  active: boolean("active").default(true),
  lastLoginAt: timestamp("last_login_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

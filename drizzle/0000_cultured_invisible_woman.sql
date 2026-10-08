CREATE TABLE "admin_users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"username" varchar(100) NOT NULL,
	"password" varchar(255) NOT NULL,
	"name" varchar(150),
	"active" boolean DEFAULT true,
	"last_login_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "admin_users_username_unique" UNIQUE("username")
);
--> statement-breakpoint
CREATE TABLE "categories" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(100) NOT NULL,
	"slug" varchar(100) NOT NULL,
	"description" text,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "categories_name_unique" UNIQUE("name"),
	CONSTRAINT "categories_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "faqs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"question" text NOT NULL,
	"answer" text NOT NULL,
	"category" varchar(100) DEFAULT 'General',
	"display_order" integer DEFAULT 0,
	"published" boolean DEFAULT true,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "gallery_images" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(200) NOT NULL,
	"image_url" varchar(500) NOT NULL,
	"alt_text" varchar(255),
	"category" varchar(100) NOT NULL,
	"aspect" varchar(20) DEFAULT 'normal',
	"display_order" integer DEFAULT 0,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "package_departures" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"package_id" uuid,
	"departure_date" timestamp with time zone NOT NULL,
	"return_date" timestamp with time zone,
	"price" numeric(10, 2),
	"currency" varchar(10) DEFAULT 'INR',
	"status" varchar(50) DEFAULT 'OPEN',
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "package_images" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"package_id" uuid,
	"image_url" varchar(500) NOT NULL,
	"alt_text" varchar(255),
	"display_order" integer DEFAULT 0,
	"is_cover" boolean DEFAULT false,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "package_itinerary_days" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"package_id" uuid,
	"day_number" integer NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" text,
	"activities" jsonb DEFAULT '[]'::jsonb,
	"overnight" varchar(150),
	"display_order" integer DEFAULT 0,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "package_pickup_locations" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"package_id" uuid,
	"city" varchar(100) NOT NULL,
	"pickup_point" varchar(150),
	"departure_time" varchar(100),
	"price_adjustment" numeric(10, 2) DEFAULT '0',
	"currency" varchar(10) DEFAULT 'INR',
	"display_order" integer DEFAULT 0,
	"active" boolean DEFAULT true,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "package_places" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"package_id" uuid,
	"name" varchar(150) NOT NULL,
	"description" text,
	"image_url" varchar(500),
	"display_order" integer DEFAULT 0,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "package_stay_options" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"package_id" uuid,
	"title" varchar(150) NOT NULL,
	"description" text,
	"price_adjustment" numeric(10, 2) DEFAULT '0',
	"currency" varchar(10) DEFAULT 'INR',
	"display_order" integer DEFAULT 0,
	"active" boolean DEFAULT true,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "package_travel_options" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"package_id" uuid,
	"type" varchar(150) NOT NULL,
	"description" text,
	"price_adjustment" numeric(10, 2) DEFAULT '0',
	"display_order" integer DEFAULT 0,
	"active" boolean DEFAULT true,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "packages" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" varchar(150) NOT NULL,
	"title" varchar(255) NOT NULL,
	"short_description" text NOT NULL,
	"about" text,
	"starting_price" numeric(10, 2) NOT NULL,
	"currency" varchar(10) DEFAULT 'INR',
	"starting_point" varchar(100) NOT NULL,
	"end_point" varchar(100) NOT NULL,
	"duration_days" integer NOT NULL,
	"duration_nights" integer NOT NULL,
	"featured" boolean DEFAULT false,
	"status" varchar(50) DEFAULT 'PUBLISHED',
	"category_id" uuid,
	"highlights" jsonb DEFAULT '[]'::jsonb,
	"trek_information" jsonb DEFAULT '{}'::jsonb,
	"inclusions" jsonb DEFAULT '[]'::jsonb,
	"exclusions" jsonb DEFAULT '[]'::jsonb,
	"policies" jsonb DEFAULT '{}'::jsonb,
	"itinerary_pdf" varchar(500),
	"itinerary" jsonb DEFAULT '[]'::jsonb,
	"join_from" jsonb DEFAULT '[]'::jsonb,
	"stay_options_data" jsonb DEFAULT '[]'::jsonb,
	"travel_options_data" jsonb DEFAULT '[]'::jsonb,
	"places_to_visit" jsonb DEFAULT '[]'::jsonb,
	"departure_dates_data" jsonb DEFAULT '{}'::jsonb,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "packages_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "team_members" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(150) NOT NULL,
	"position" varchar(150) NOT NULL,
	"image_url" varchar(500) NOT NULL,
	"category" varchar(100) NOT NULL,
	"role_badge" varchar(100),
	"description" text,
	"is_leadership" boolean DEFAULT false,
	"display_order" integer DEFAULT 0,
	"published" boolean DEFAULT true,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "package_departures" ADD CONSTRAINT "package_departures_package_id_packages_id_fk" FOREIGN KEY ("package_id") REFERENCES "public"."packages"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "package_images" ADD CONSTRAINT "package_images_package_id_packages_id_fk" FOREIGN KEY ("package_id") REFERENCES "public"."packages"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "package_itinerary_days" ADD CONSTRAINT "package_itinerary_days_package_id_packages_id_fk" FOREIGN KEY ("package_id") REFERENCES "public"."packages"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "package_pickup_locations" ADD CONSTRAINT "package_pickup_locations_package_id_packages_id_fk" FOREIGN KEY ("package_id") REFERENCES "public"."packages"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "package_places" ADD CONSTRAINT "package_places_package_id_packages_id_fk" FOREIGN KEY ("package_id") REFERENCES "public"."packages"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "package_stay_options" ADD CONSTRAINT "package_stay_options_package_id_packages_id_fk" FOREIGN KEY ("package_id") REFERENCES "public"."packages"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "package_travel_options" ADD CONSTRAINT "package_travel_options_package_id_packages_id_fk" FOREIGN KEY ("package_id") REFERENCES "public"."packages"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "packages" ADD CONSTRAINT "packages_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
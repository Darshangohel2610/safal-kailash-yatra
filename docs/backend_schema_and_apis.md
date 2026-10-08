# Safal Kailash Yatra --- Current Backend Plan

## 1. Scope

This backend is only for the current website requirements.

### Current requirements

-   Package listing
-   Package detail pages
-   Package categories
-   Package departure dates
-   Package itinerary
-   Package images/gallery
-   Package inclusions/exclusions
-   Package stay/travel options
-   Places to visit
-   Trek information
-   FAQs
-   Team members
-   Website gallery
-   Small inquiry/booking form
-   Store inquiry submissions in Google Sheets

### Not required right now

Do NOT build:

-   Customer accounts
-   Online booking management
-   Payment system
-   Seat reservation system
-   Admin dashboard
-   CMS
-   Customer database
-   Booking database
-   Complex authentication
-   Microservices

The architecture should remain easy to extend later, but those features
should not be implemented now.

------------------------------------------------------------------------

# 2. Technology Stack

``` text
Next.js
   |
   +-- Server Components
   +-- API Routes
   |
Drizzle ORM
   |
Neon PostgreSQL
```

For media:

``` text
Cloudinary
   |
   +-- Package images
   +-- Gallery images
   +-- Team images
```

Inquiry flow:

``` text
Website Form
     |
     v
POST /api/inquiries
     |
Validation + Spam Protection
     |
     v
Google Sheets
```

------------------------------------------------------------------------

# 3. Database Design

Use PostgreSQL with a **relational structure**.

Do not put the entire package into one large JSON object.

Use JSONB only for small flexible structures where a separate table is
unnecessary.

------------------------------------------------------------------------

# 4. Categories

``` text
categories
-------------------------
id
name
slug
description
created_at
updated_at
```

Constraints:

-   `id` primary key
-   `name` unique
-   `slug` unique

Examples:

``` text
Standard Yatra
Express Yatra
VIP & Deluxe Yatra
```

------------------------------------------------------------------------

# 5. Packages

``` text
packages
-------------------------
id
category_id

slug
title
short_description
about

starting_price
currency

starting_point
end_point

duration_days
duration_nights

featured
status

highlights JSONB
trek_information JSONB
inclusions JSONB
exclusions JSONB
policies JSONB

itinerary_pdf

created_at
updated_at
```

### Status

``` text
DRAFT
PUBLISHED
ARCHIVED
```

Only `PUBLISHED` packages should be returned by public APIs.

### Recommended indexes

``` text
slug
category_id
status
featured
```

------------------------------------------------------------------------

# 6. Package Departures

Departure dates should be a separate table.

``` text
package_departures
-------------------------
id
package_id

departure_date
return_date

price
currency

status

created_at
updated_at
```

Status:

``` text
OPEN
FULL
CANCELLED
```

At the current stage, there is no need for complicated seat inventory.

If the frontend only needs:

``` text
Available
Few Seats
Full
```

store that as the departure status.

### Indexes

``` text
package_id
departure_date
status
(package_id, departure_date)
```

------------------------------------------------------------------------

# 7. Package Itinerary

``` text
package_itinerary_days
-------------------------
id
package_id

day_number
title
description

activities JSONB
overnight

display_order

created_at
updated_at
```

Example activities:

``` json
[
  "Breakfast",
  "Drive to Gunji",
  "Permit verification",
  "Evening briefing"
]
```

Keep itinerary days relational because they need ordering and package
relationships.

------------------------------------------------------------------------

# 8. Package Images

``` text
package_images
-------------------------
id
package_id

image_url
alt_text

display_order
is_cover

created_at
updated_at
```

Images themselves should remain in Cloudinary.

The database stores URLs and metadata.

------------------------------------------------------------------------

# 9. Package Pickup / Join From

``` text
package_pickup_locations
-------------------------
id
package_id

city
pickup_point
departure_time

price_adjustment
currency

display_order
active

created_at
updated_at
```

Example:

``` text
Ahmedabad
Vadodara
Surat
Delhi
Mumbai
```

------------------------------------------------------------------------

# 10. Stay Options

``` text
package_stay_options
-------------------------
id
package_id

title
description
price_adjustment
currency

display_order
active

created_at
updated_at
```

------------------------------------------------------------------------

# 11. Travel Options

``` text
package_travel_options
-------------------------
id
package_id

type
description
price_adjustment

display_order
active

created_at
updated_at
```

------------------------------------------------------------------------

# 12. Places to Visit

``` text
package_places
-------------------------
id
package_id

name
description
image_url

display_order

created_at
updated_at
```

------------------------------------------------------------------------

# 13. Global Gallery

``` text
gallery_images
-------------------------
id

title
image_url
alt_text

category
display_order

created_at
updated_at
```

Possible categories:

``` text
PEAK
LAKE
DARSHAN
CULTURE
ROUTE
LANDSCAPE
```

------------------------------------------------------------------------

# 14. Team Members

``` text
team_members
-------------------------
id

name
position
image_url

category
role_badge
description

is_leadership
display_order
published

created_at
updated_at
```

------------------------------------------------------------------------

# 15. FAQs

``` text
faqs
-------------------------
id

question
answer

category
display_order
published

created_at
updated_at
```

Only published FAQs should be returned publicly.

------------------------------------------------------------------------

# 16. Inquiry Form

The current website does NOT need a booking database.

The form only collects an inquiry and sends/stores it in Google Sheets.

Recommended API:

``` http
POST /api/inquiries
```

Request:

``` json
{
  "name": "Customer Name",
  "phone": "9876543210",
  "email": "customer@example.com",
  "pilgrimsCount": 2,
  "message": "Interested in June departure",
  "packageSlug": "adi-kailash-yatra-8-days",
  "departureId": "optional"
}
```

The API should:

``` text
Receive request
      |
      v
Validate request
      |
      v
Check package/departure if provided
      |
      v
Rate-limit / spam protection
      |
      v
Send data to Google Sheets
      |
      v
Return success response
```

There is no need to store the inquiry in PostgreSQL at this stage unless
there is a future requirement.

------------------------------------------------------------------------

# 17. API Endpoints

## Public APIs

``` http
GET /api/packages
GET /api/packages/[slug]

GET /api/gallery
GET /api/team
GET /api/faqs

POST /api/inquiries
```

### Package listing

``` http
GET /api/packages
```

Supported filters:

``` text
?category=standard
?featured=true
?search=adi
```

Only published packages should be returned.

### Package detail

``` http
GET /api/packages/[slug]
```

Return the package with its related:

-   departures
-   itinerary
-   images
-   pickup locations
-   stay options
-   travel options
-   places to visit

------------------------------------------------------------------------

# 18. Server Components vs API Routes

For Next.js pages, do not unnecessarily call your own API.

Preferred:

``` text
Package Page
    |
    v
getPackageBySlug()
    |
    v
Drizzle
    |
    v
Neon
```

Use API routes when an actual HTTP endpoint is required.

For example:

``` text
Inquiry Form
    |
    v
POST /api/inquiries
    |
    v
Google Sheets
```

This keeps the application fast and avoids unnecessary internal HTTP
requests.

------------------------------------------------------------------------

# 19. Data Access Layer

Keep database queries separate from page components.

Recommended:

``` text
lib/
├── db/
│   ├── index.js
│   └── schema/
│
├── queries/
│   ├── packages.js
│   ├── gallery.js
│   ├── team.js
│   ├── faqs.js
│   └── departures.js
│
└── validations/
    └── inquiry.js
```

Example:

``` js
getPackages()
getPackageBySlug(slug)
getGalleryImages()
getTeamMembers()
getFAQs()
getUpcomingDepartures()
```

Components should not contain raw database queries.

------------------------------------------------------------------------

# 20. Validation

Use **Zod** for all API input.

Client-side validation is for user experience.

Server-side validation is mandatory.

Validate:

-   required fields
-   string lengths
-   phone format
-   email format
-   number ranges
-   UUIDs
-   allowed enum values
-   optional fields

Example:

``` js
const inquirySchema = z.object({
  name: z.string().trim().min(2).max(150),

  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s()]{10,20}$/),

  email: z
    .string()
    .trim()
    .email()
    .max(255)
    .optional()
    .or(z.literal("")),

  pilgrimsCount: z
    .number()
    .int()
    .min(1)
    .max(100),

  message: z
    .string()
    .trim()
    .max(2000)
    .optional(),

  packageSlug: z
    .string()
    .trim()
    .min(1)
    .max(150),

  departureId: z
    .string()
    .uuid()
    .optional()
});
```

The exact phone validation can be adjusted if international customers
need to be supported.

------------------------------------------------------------------------

# 21. Business Validation

After Zod validation, perform server-side business validation.

For example:

``` text
packageSlug
    |
    v
Does package exist?
    |
    v
Is package published?
    |
    v
If departureId exists:
does departure belong to this package?
    |
    v
Submit inquiry
```

Never trust IDs or relationships sent by the browser.

------------------------------------------------------------------------

# 22. Inquiry Spam Protection

`POST /api/inquiries` is public and will eventually attract bots.

Use layered protection:

``` text
Client validation
       |
Server Zod validation
       |
Rate limiting
       |
Basic spam/bot protection
       |
Business validation
       |
Google Sheets
```

At minimum:

-   IP/request rate limiting
-   request body size limits
-   maximum field lengths
-   optional honeypot field
-   optional CAPTCHA/Turnstile if spam becomes significant

Do not rely only on client-side throttling.

------------------------------------------------------------------------

# 23. API Error Handling

Never expose raw database, Google API, or server errors to users.

Bad:

``` json
{
  "error": "Google API error: ..."
}
```

Good:

``` json
{
  "success": false,
  "error": {
    "code": "INQUIRY_SUBMISSION_FAILED",
    "message": "Unable to submit your inquiry. Please try again."
  }
}
```

Use appropriate HTTP status codes:

``` text
400 → invalid request
404 → resource not found
422 → validation error
429 → too many requests
500 → server error
```

Log technical details server-side.

------------------------------------------------------------------------

# 24. Security Rules

## Never expose

``` text
DATABASE_URL
Google Sheets credentials
Google service account credentials
Cloudinary API secret
private API keys
```

to the browser.

Never use:

``` text
NEXT_PUBLIC_
```

for secrets.

------------------------------------------------------------------------

# 25. Environment Variables

Use:

``` text
.env.local
```

Example:

``` env
DATABASE_URL="..."
GOOGLE_SHEETS_ID="..."
GOOGLE_SERVICE_ACCOUNT_EMAIL="..."
GOOGLE_PRIVATE_KEY="..."
CLOUDINARY_API_SECRET="..."
```

Only values intentionally required by the browser may use
`NEXT_PUBLIC_`.

Ensure environment files are ignored by Git.

------------------------------------------------------------------------

# 26. Google Sheets Security

The Google Sheets integration must run server-side.

Do NOT send Google credentials from the frontend.

Preferred:

``` text
Browser
   |
POST /api/inquiries
   |
Next.js Server
   |
Google Sheets API
```

The Google Sheet itself should be accessible only to the required
business/admin accounts.

Do not make the sheet publicly editable.

------------------------------------------------------------------------

# 27. SQL Injection Protection

Never construct SQL using user input.

Do not:

``` js
`SELECT * FROM packages WHERE slug = '${slug}'`
```

Use Drizzle's query builder or parameterized queries.

------------------------------------------------------------------------

# 28. XSS Protection

Do not render inquiry/user content using raw HTML.

Avoid unnecessary:

``` jsx
dangerouslySetInnerHTML
```

If rich HTML is ever required for admin-managed content, sanitize it
server-side using an allowlist.

------------------------------------------------------------------------

# 29. CORS

The website does not need a wide-open CORS policy.

Do not use:

``` text
Access-Control-Allow-Origin: *
```

for future authenticated/admin endpoints.

For the current same-site Next.js application, keep APIs same-origin
unless external access is actually required.

------------------------------------------------------------------------

# 30. HTTPS

Production must use HTTPS.

Customer form data must never be sent over plain HTTP.

------------------------------------------------------------------------

# 31. Database Constraints

Important rules should be enforced both in application validation and
PostgreSQL where appropriate.

Examples:

``` text
packages.slug UNIQUE

starting_price >= 0

duration_days > 0

duration_nights >= 0

departure_date valid

price >= 0
```

This provides defense in depth.

------------------------------------------------------------------------

# 32. Indexing

Add indexes only for fields that are commonly searched, filtered,
sorted, or joined.

Important indexes:

``` text
packages.slug
packages.category_id
packages.status
packages.featured

package_departures.package_id
package_departures.departure_date
package_departures.status

package_itinerary_days.package_id
(package_id, day_number)

package_images.package_id
package_images.display_order

package_pickup_locations.package_id

package_stay_options.package_id

package_travel_options.package_id

package_places.package_id

gallery_images.category
gallery_images.display_order

faqs.category
faqs.display_order
```

Do not index every column.

------------------------------------------------------------------------

# 33. Caching and Performance

Package information changes relatively infrequently.

Use Next.js caching/revalidation for public content.

Recommended concept:

``` text
Package content
    ↓
Cached / revalidated
    ↓
Many visitors
    ↓
Fewer database queries
```

Suggested starting point:

``` text
Packages:
revalidate periodically

Gallery:
longer revalidation

FAQs:
longer revalidation

Team:
longer revalidation

Inquiry POST:
always process immediately
```

The exact revalidation period can be adjusted based on how often the
business updates content.

------------------------------------------------------------------------

# 34. Database Connection

Use a single reusable database client/module.

Example structure:

``` text
lib/db/index.js
```

Do not create a new database setup in every component.

Use:

``` text
Drizzle
+
@neondatabase/serverless
```

------------------------------------------------------------------------

# 35. Seed Existing Data

The current static data should be migrated automatically.

Existing:

``` text
data/
├── packages.js
├── packageData.js
└── teamData.js
```

Create:

``` text
scripts/seed.js
```

The seed script should:

``` text
Read existing static data
        |
        v
Transform to database structure
        |
        v
Insert categories
        |
        v
Insert packages
        |
        v
Insert related data
```

Run with:

``` bash
npm run db:seed
```

The seed should avoid creating duplicate packages when run multiple
times.

Use package slugs as stable identifiers for upserts.

------------------------------------------------------------------------

# 36. Drizzle Migration Workflow

Schema changes should be version controlled.

Typical workflow:

``` bash
npm run db:generate
npm run db:migrate
```

Keep migration files in:

``` text
drizzle/migrations/
```

Do not manually modify production tables unless necessary.

------------------------------------------------------------------------

# 37. Recommended Package Response

A package detail response can contain:

``` json
{
  "id": "...",
  "slug": "adi-kailash-yatra-8-days",
  "title": "Adi Kailash & Om Parvat Yatra",
  "shortDescription": "...",
  "startingPrice": 24999,
  "durationDays": 8,
  "durationNights": 7,

  "highlights": [],
  "trekInformation": {},
  "inclusions": [],
  "exclusions": [],
  "policies": {},

  "departures": [],
  "itinerary": [],
  "images": [],
  "pickupLocations": [],
  "stayOptions": [],
  "travelOptions": [],
  "placesToVisit": []
}
```

Do not expose internal database fields unnecessarily.

------------------------------------------------------------------------

# 38. Public Data Rules

Public APIs should return only public content.

For example:

``` text
GET /api/packages
```

should never expose:

-   internal notes
-   unpublished content
-   private credentials
-   database metadata
-   customer information

Explicitly select/transform the fields returned by APIs.

Do not blindly serialize database rows.

------------------------------------------------------------------------

# 39. Current Project Structure

Recommended final structure:

``` text
app/
├── page.jsx
├── not-found.jsx
│
├── packages/
│   ├── page.jsx
│   └── [slug]/
│       └── page.jsx
│
├── team/
│   └── page.jsx
│
└── api/
    ├── packages/
    │   ├── route.js
    │   └── [slug]/
    │       └── route.js
    │
    ├── gallery/
    │   └── route.js
    │
    ├── team/
    │   └── route.js
    │
    ├── faqs/
    │   └── route.js
    │
    └── inquiries/
        └── route.js

components/

lib/
├── db/
│   ├── index.js
│   └── schema/
│
├── queries/
│
└── validations/
    └── inquiry.js

scripts/
└── seed.js

drizzle/
└── migrations/

public/

.env.local
drizzle.config.js
package.json
```

------------------------------------------------------------------------

# 40. Implementation Order

Implement in this order.

## Phase 1 --- Database

``` text
Neon
   ↓
Drizzle
   ↓
Schema
   ↓
Migrations
```

## Phase 2 --- Data Migration

``` text
Existing JS data
   ↓
Seed script
   ↓
Neon
```

## Phase 3 --- Read Queries

Implement:

``` text
getPackages()
getPackageBySlug()
getUpcomingDepartures()
getGalleryImages()
getTeamMembers()
getFAQs()
```

## Phase 4 --- Connect Existing Pages

Replace static imports with database queries:

``` text
Homepage
Packages
Package Details
Team
Gallery
FAQ
```

## Phase 5 --- Inquiry API

``` text
Form
 ↓
POST /api/inquiries
 ↓
Zod
 ↓
Rate limit
 ↓
Google Sheets
```

## Phase 6 --- Performance & Security

Add:

``` text
Caching
Indexes
Rate limiting
Secure environment variables
Safe API responses
Security headers
Error handling
```

------------------------------------------------------------------------

# 41. Final Current Architecture

``` text
                         USER
                           |
                           v
                    +-------------+
                    |   Next.js   |
                    +------+------+
                           |
             +-------------+-------------+
             |                           |
             v                           v
      Server Components              API Routes
             |                           |
             v                           v
        Data Queries               Inquiry API
             |                           |
             v                           v
         Drizzle                  Validation
             |                     + Rate Limit
             v                           |
      Neon PostgreSQL                    v
                                   Google Sheets


                     Cloudinary
                         |
                         v
                 Website Images
```

------------------------------------------------------------------------

# 42. Current Scope Summary

### Build now

-   PostgreSQL database
-   Drizzle ORM
-   Categories
-   Packages
-   Package departures
-   Package itinerary
-   Package images
-   Pickup locations
-   Stay options
-   Travel options
-   Places to visit
-   Gallery
-   Team
-   FAQs
-   Package APIs
-   Public content queries
-   Inquiry API
-   Zod validation
-   Rate limiting/spam protection
-   Google Sheets integration
-   Caching
-   Database indexes
-   Secure environment variables
-   Safe error handling
-   Seed script

### Do not build now

-   Customer accounts
-   Booking management
-   Online payments
-   Seat locking
-   Customer database
-   Admin dashboard
-   CMS
-   Complex RBAC
-   Microservices
-   Redis
-   Elasticsearch
-   GraphQL

The backend should be **small, secure, fast, and easy to extend**, while
solving exactly the requirements the website has today.

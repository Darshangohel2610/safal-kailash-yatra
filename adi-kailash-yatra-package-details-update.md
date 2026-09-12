# Adi Kailash Yatra Website — Package Listing & Package Details Update

## Goal
Update the React website so users can:
1. View all available Yatra packages.
2. Click a package to open its dedicated Package Details page.
3. Browse complete package information in a clean travel-booking style layout.
4. See the main package content on the left (~70%) and a sticky booking/price summary on the right (~30%).
5. Keep the existing Adi Kailash brand identity: purple + saffron, premium Himalayan/spiritual feel.

## Pages & Navigation

### Packages
Navbar **Packages** opens:
```text
/packages
```

Show reusable package cards containing:
- Main image
- Package title
- Short description
- Days / nights
- Starting price
- Starting location
- Key highlights
- `View Details` CTA

Clicking a card opens:
```text
/packages/:slug
```

Example:
```text
/packages/adi-kailash-yatra-8-days
```

Use one reusable details layout driven by package data.

---

# Package Details Page

Desktop structure:

```text
---------------------------------------------------------
|                    GALLERY / HERO                     |
---------------------------------------------------------
|                 TITLE + DAYS / NIGHTS                 |
---------------------------------------------------------
|                         |                             |
|      MAIN CONTENT       |      PACKAGE SUMMARY       |
|          ~70%           |           ~30%              |
|                         |                             |
| About Trek              | Price / Person             |
| Trek Information        | Starting Location           |
| Join From Us            | Transport                   |
| Travelling              | Stay                        |
| Stay Options            | First Aid / Support         |
| Departure Dates         | CTA                         |
| Itinerary               |                             |
| Places to Visit         |                             |
| Inclusions/Exclusions   |                             |
| Policies                |                             |
---------------------------------------------------------
|                  SIMILAR PACKAGES                    |
---------------------------------------------------------
```

On mobile, use one column and move the package summary below the main content. Optionally use a sticky bottom `Enquire Now` CTA.

---

# 1. Gallery

At the top of the details page.

Include:
- Large main image
- Multiple images
- Thumbnail navigation or indicators
- Previous/next controls
- Mobile swipe
- Smooth transitions
- Proper alt text
- `object-cover`
- Reserved image dimensions to prevent layout shift

Possible photography:
- Adi Kailash
- Om Parvat
- Parvati Kund
- Himalayan roads
- Valleys
- Group photos
- Accommodation
- Vehicles
- Landscapes

Use real assets only. Do not invent final photography.

---

# 2. Package Header

Show:
- Package title
- Days / nights
- Optional compact metadata such as starting point and package category

Example:
```text
Adi Kailash Yatra
8 Days / 7 Nights
```

Keep this visually strong but not oversized.

---

# 3. About Trek

Heading:
```text
About Trek
```

Include a concise overview explaining:
- What the journey is
- Spiritual significance
- Main destinations
- Overall travel experience
- Type of traveller it suits
- General Himalayan experience

Detailed day-by-day information belongs in the itinerary section.

---

# 4. Trek Information

Heading:
```text
Trek Information
```

Use a responsive information grid.

Possible fields:
- Age Group
- Trek / Journey Distance
- Difficulty
- Maximum Altitude
- Duration
- Best Season
- Starting Point
- Ending Point

Example:
```text
Age Group       12+ years
Distance        XX km
Difficulty      Moderate
Max Altitude    XXXX m
Duration        8 Days
Best Season     May – October
```

Only show verified values.

---

# 5. Join From Us

Heading:
```text
Join From Us
```

Show available joining cities with pricing.

Example:
```text
Ahmedabad
₹XX,XXX / Person

Surat
₹XX,XXX / Person
```

Each option may contain:
- City
- Price per person
- Pickup point
- Departure information

Prices must come from package data, not from the UI component.

---

# 6. Travelling

Heading:
```text
Travelling
```

Show transportation options using compact cards/icons.

Examples:
- AC Bus
- Non-AC Bus
- 2x2 AC Bus
- Tempo Traveller
- Train
- Flight
- Local Himalayan transport

Only display modes actually included in the package.

---

# 7. Stay Options

Heading:
```text
Stay Options
```

Examples:
- 2 Sharing Luxury Room
- 3 Sharing Room
- Dormitory
- Swiss Tent — 2 Sharing
- Standard Room
- Premium Room

Each option can show:
- Occupancy
- Accommodation type
- Additional price if applicable
- Short description

Keep options data-driven.

---

# 8. Departure Dates

Heading:
```text
Departure Dates
```

First show month pills:

```text
[ May ] [ June ] [ July ] [ August ] [ September ] [ October ]
```

On selecting a month, show dates below:

```text
September

[ 05 Sep ] [ 12 Sep ] [ 19 Sep ] [ 26 Sep ]
```

Optional date statuses:
- Available
- Limited Seats
- Sold Out

Example:
```text
12 Sep — Available
19 Sep — Limited Seats
26 Sep — Sold Out
```

Do not invent availability.

If no departures:
```text
No departures available for this month.
```

---

# 9. Itinerary

Heading:
```text
Itinerary
```

The itinerary section has two parts.

## A. Complete on-page itinerary

Design the full day-by-day itinerary.

Each day should contain:
- Day number
- Day title
- Route
- Description
- Major activities
- Meals if verified
- Overnight location if verified

Example:
```text
DAY 01
Kathgodam → Pithoragarh

Short description...

• Travel
• Sightseeing
• Overnight stay
```

Use a timeline or accordion if needed.

## B. PDF

Add a prominent button:
```text
Get Detailed Itinerary PDF
```

Open the PDF in a new tab:

```jsx
<a
  href={packageData.itineraryPdf}
  target="_blank"
  rel="noopener noreferrer"
>
  Get Detailed Itinerary PDF
</a>
```

PDF URL must come from package data.

---

# 10. Places to Visit

Heading:
```text
Places to Visit
```

Use image + short description cards.

Each card:
- Image
- Place name
- Short description

Possible places may include:
- Adi Kailash
- Parvati Kund
- Om Parvat
- Jageshwar Dham
- Patal Bhuvaneshwar
- Chitai Golu Devta Temple
- Neem Karoli Ashram

Only include locations actually present in the selected package itinerary.

---

# 11. Inclusions & Exclusions

Desktop: two columns side by side.

```text
INCLUSIONS                  EXCLUSIONS

✓ Accommodation             ✕ Personal expenses
✓ Transportation            ✕ Additional meals
✓ Support                   ✕ Medical expenses
✓ First aid support         ✕ Anything not mentioned
```

Use check and X icons.

Mobile: stack vertically.

Only show verified information.

---

# 12. Quick Information & Policies

Heading:
```text
Quick Information & Policies
```

Use accordions/cards for:

### Things to Carry
Examples:
- Warm clothing
- Comfortable shoes
- Personal medicines
- ID documents
- Water bottle
- Sunglasses
- Sunscreen
- Personal essentials

Use the operator's actual recommendations for production.

### Cancellation Policy
Display the official cancellation/refund policy.

Do not invent percentages or refund rules.

### Terms & Conditions
Expandable section or `Read Terms & Conditions` action.

---

# 13. Right-Side Package Summary

Desktop width: ~30%.

Make it sticky where practical.

Example:

```text
--------------------------------
Starting From

₹XX,XXX
Per Person

Ahmedabad

--------------------------------

AC Bus
Accommodation
First Aid Support
Travel Assistance

--------------------------------

Departure Dates
05 Sep • 12 Sep • 19 Sep

--------------------------------

[ Enquire Now ]
--------------------------------
```

Possible information:
- Starting price per person
- Starting city
- Transport
- Stay
- First aid support
- Travel assistance
- Duration
- Next available departure
- CTA

CTA can be:
```text
Enquire Now
```
or:
```text
Book Your Yatra
```

Connect it to the existing inquiry form.

---

# 14. Similar Packages

Heading:
```text
Similar Packages
```

Reuse the exact same `PackageCard` design used on the Packages listing page.

Show 3–4 relevant packages on desktop.

On mobile:
- horizontal carousel, or
- stacked cards

Do not duplicate package-card markup.

---

# React Component Structure

Suggested structure:

```text
src/
├── components/
│   └── packages/
│       ├── PackageCard.jsx
│       ├── PackageGallery.jsx
│       ├── PackageHeader.jsx
│       ├── TrekInformation.jsx
│       ├── JoinFromUs.jsx
│       ├── TravelOptions.jsx
│       ├── StayOptions.jsx
│       ├── DepartureDates.jsx
│       ├── Itinerary.jsx
│       ├── PlacesToVisit.jsx
│       ├── InclusionsExclusions.jsx
│       ├── Policies.jsx
│       ├── PackageSummary.jsx
│       └── SimilarPackages.jsx
│
├── pages/
│   ├── Packages.jsx
│   └── PackageDetails.jsx
│
└── data/
    └── packages.js
```

Keep the existing project architecture if it is already organized differently.

---

# Package Data Model

Use a single data source for package information.

```js
export const packages = [
  {
    id: "adi-kailash-8-days",
    slug: "adi-kailash-yatra-8-days",

    title: "Adi Kailash Yatra",

    duration: {
      days: 8,
      nights: 7,
    },

    images: [
      "/images/adi-kailash-1.jpg",
      "/images/adi-kailash-2.jpg",
    ],

    shortDescription:
      "A spiritual journey through the sacred Himalayan landscapes of Adi Kailash and Om Parvat.",

    about: "...",

    trekInformation: {
      ageGroup: "...",
      distance: "...",
      difficulty: "...",
      altitude: "...",
      bestSeason: "...",
      startPoint: "...",
      endPoint: "...",
    },

    joinFrom: [
      {
        city: "Ahmedabad",
        pricePerPerson: 0,
      },
      {
        city: "Surat",
        pricePerPerson: 0,
      },
    ],

    travelling: [
      {
        type: "AC Bus",
        description: "...",
      },
    ],

    stayOptions: [
      {
        title: "2 Sharing Luxury",
        description: "...",
        priceAdjustment: 0,
      },
      {
        title: "Dormitory",
        description: "...",
        priceAdjustment: 0,
      },
    ],

    departureDates: {
      September: [
        {
          date: "2026-09-05",
          status: "available",
        },
      ],
      October: [],
    },

    itinerary: [
      {
        day: 1,
        title: "Kathgodam → Pithoragarh",
        description: "...",
        activities: [],
        overnight: "...",
      },
    ],

    itineraryPdf: "/pdfs/adi-kailash-itinerary.pdf",

    placesToVisit: [
      {
        name: "Adi Kailash",
        image: "/images/adi-kailash.jpg",
        description: "...",
      },
    ],

    inclusions: [],
    exclusions: [],

    policies: {
      thingsToCarry: [],
      cancellation: "...",
      termsAndConditions: "...",
    },

    summary: {
      pricePerPerson: 0,
      transport: "AC Bus",
      stay: "2 Sharing",
      firstAid: true,
      travelSupport: true,
    },

    featured: true,
  },
];
```

Use placeholders during development only. Replace with verified production data.

---

# Routing

If using React Router:

```jsx
<Route
  path="/packages"
  element={<Packages />}
/>

<Route
  path="/packages/:slug"
  element={<PackageDetails />}
/>
```

In `PackageDetails`:

```js
const { slug } = useParams();

const packageData = packages.find(
  (pkg) => pkg.slug === slug
);
```

If no package exists, show:

```text
Package Not Found
```

with a button back to Packages.

---

# UX & Responsive Behavior

## Desktop
- Main content: ~70%
- Summary: ~30%
- Summary sticky where practical
- Clear section spacing
- Strong visual hierarchy

## Mobile
- Single-column layout
- Full-width sections
- Month pills should scroll horizontally if necessary
- Date pills should wrap or scroll without causing page overflow
- Summary moves below content
- Optional sticky bottom CTA

Required responsive testing:
- 320px
- 375px
- 425px
- 768px
- 1024px
- 1280px+

No horizontal page overflow.

---

# Visual Design

Feel:
- Premium
- Spiritual
- Himalayan
- Trustworthy
- Modern
- Clean

Avoid:
- Excessive gradients
- Excessive animation
- Overly dark UI
- Too many colors
- Giant text blocks
- Generic corporate styling

Use:
- Purple as primary
- Saffron as accent
- White/warm backgrounds
- Strong Himalayan photography
- Light purple surfaces
- Subtle shadows and borders

Existing palette:
```text
Primary Purple   #32108F
Dark Purple      #24105F
Bright Purple    #4B20B8
Saffron          #F56600
Light Orange     #FF8A2A
White            #FFFFFF
Warm Background  #FAF9F6
Light Purple     #F3F0FA
Dark Text        #17151C
Muted Text       #6F6A78
Border           #E8E4ED
Footer           #17102F
```

---

# Animation

Use subtle motion only:
- Gallery transitions
- Section reveal
- Card hover
- Button hover
- Month pill transitions
- Accordion open/close
- Navbar transition

Respect:
```css
@media (prefers-reduced-motion: reduce)
```

Do not animate everything.

---

# Accessibility

Required:
- Semantic headings
- Proper button labels
- Image alt text
- Keyboard-accessible gallery
- Keyboard-accessible accordions
- Visible focus states
- Good color contrast
- Do not rely on color alone for availability or selection

---

# SEO

Each package page should have package-specific:
- Page title
- Meta description
- Open Graph title/description/image where practical

Example:
```text
Adi Kailash Yatra — 8 Days / 7 Nights | Trip India Trekking & Holidays
```

Use readable slugs.

---

# Performance

- Lazy-load below-the-fold images.
- Use appropriately sized images.
- Avoid loading all gallery images at maximum resolution.
- Reserve image dimensions.
- Keep animations lightweight.
- Avoid unnecessary dependencies.

---

# Existing Inquiry System

The website already uses:

```text
React
  ↓
Google Apps Script Web App
  ↓
Google Sheet
```

The package page's `Enquire Now` / `Book Your Yatra` CTA should connect to the existing inquiry form.

Existing inquiry fields:
```text
name
phone
travellers
message
```

Do not add another backend unless required.

---

# Implementation Priority

1. Package data model
2. Packages listing page
3. Reusable `PackageCard`
4. Dynamic Package Details route
5. Gallery + package header
6. About + Trek Information
7. Join From Us + Travelling + Stay Options
8. Departure Dates
9. Full on-page itinerary + PDF button
10. Places to Visit
11. Inclusions / Exclusions
12. Quick Information & Policies
13. Sticky Package Summary / CTA
14. Similar Packages
15. Responsive + accessibility + SEO + performance polish

---

# Core Principle

The Package Details page should feel like a complete travel product page, not just an itinerary document.

A visitor should be able to answer:

- What is this package?
- How long is it?
- Is it suitable for me?
- What does it cost?
- Where can I join?
- How will I travel?
- Where will I stay?
- When can I go?
- What will I do each day?
- What places will I see?
- What is included?
- What is excluded?
- What are the policies?
- How do I enquire/book?

All of this should be available on one well-structured page while remaining visually clean and easy to scan.

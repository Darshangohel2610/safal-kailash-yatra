# Adi Kailash Yatra Website — React Build Specification

## 1. Project Goal

Build a modern, premium, fully responsive customer-facing website for an **Adi Kailash Yatra** tour package.

The website should feel trustworthy, adventurous, spiritual, and premium without looking old-fashioned or overly decorative.

Use the reference website:

- https://pavitrakailashyatra.com/

Use it as a **visual and UX reference only**. Do not copy its text, branding, layout pixel-for-pixel, or assets.

The visual direction for this project is:

- Dark/black typography
- White/light backgrounds for content sections
- Blue as the primary accent color
- Clean, modern travel aesthetic
- Large Himalayan imagery
- Strong typography
- Generous spacing
- Subtle borders, shadows, and transitions
- Excellent mobile experience

---

# 2. Technology

Use:

- React
- Vite
- JavaScript/JSX
- Tailwind CSS
- Lucide React
- Swiper
- Framer Motion

Use a small global stylesheet only where Tailwind cannot reasonably cover the requirement.

Do not introduce additional libraries without a clear reason.

The site should be component-based and easy to maintain.

Recommended structure:

```text
src/
├── assets/
│   ├── images/
│   └── pdf/
│       └── adi-kailash-itinerary.pdf
│
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── TrustFeatures.jsx
│   ├── WhyAdiKailash.jsx
│   ├── Gallery.jsx
│   ├── Footer.jsx
│   └── ...
│
├── data/
│   └── packageData.js
│
├── App.jsx
├── main.jsx
└── index.css
```

Keep `App.jsx` responsible mainly for composing sections.

---


# 2A. Libraries & Packages

Use a small, purposeful dependency set.

## Core

- **React**
- **Vite**

## Styling

Use **Tailwind CSS** as the primary styling system.

Tailwind should handle:

- Layout
- Responsive breakpoints
- Spacing
- Typography
- Colors
- Borders
- Shadows
- Hover states
- Responsive visibility
- Most component styling

Avoid creating large amounts of custom CSS when the same result can be expressed cleanly with Tailwind.

Use a small global stylesheet only for:

- CSS variables/theme values where useful
- Base/reset styles
- Global font setup
- Custom scrollbar if needed
- Accessibility/reduced-motion rules
- A few genuinely reusable custom effects

Keep the styling consistent rather than mixing arbitrary inline styles with Tailwind everywhere.

## Icons

Use **Lucide React**:

```bash
npm install lucide-react
```

Use icons for:

- Navigation
- Location
- Calendar
- Transport
- Hotel
- Meals
- Support
- Arrow controls
- FAQ
- Contact
- Other small UI elements

Do not use emojis as the primary visual language of the website.

## Carousel

Use **Swiper** for the hero carousel:

```bash
npm install swiper
```

Swiper provides:

- Autoplay
- Touch/swipe support
- Navigation
- Pagination
- Responsive behavior
- Smooth transitions

Use it primarily for the full-screen hero carousel and only where a carousel genuinely improves the experience.

## Animations

Use **Framer Motion** for light UI animations:

```bash
npm install framer-motion
```

Use it for:

- Section reveal/fade-in
- Small slide-up animations
- Navbar transitions where useful
- Button/card hover interactions
- Image entrance effects
- Mobile menu animation

Animations must remain subtle and fast.

Do NOT animate every element independently.

Recommended animation philosophy:

```text
Scroll into view
      ↓
small fade + translate
      ↓
settle naturally
```

Avoid excessive parallax, bouncing, spinning, or dramatic page transitions.

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

and reduce/disable non-essential motion for users who request reduced motion.

## Routing

Do **not** add React Router unless the project actually needs multiple React pages.

For the initial landing page, normal anchor navigation is enough:

```text
Home       → /
About Us   → #about
Packages   → #packages
Contact Us → #contact
```

If separate About, Packages, or Contact pages are later required, then add:

```bash
npm install react-router-dom
```

Only introduce it when needed.

## Recommended Installation

Initial setup should be approximately:

```bash
npm create vite@latest adi-kailash-yatra -- --template react

cd adi-kailash-yatra

npm install

npm install tailwindcss @tailwindcss/vite

npm install lucide-react swiper framer-motion
```

Configure Tailwind using the current Vite integration rather than relying on an outdated Tailwind setup.

---

# 2B. Animation & Scroll Experience

The page should feel slightly alive while scrolling, but never distracting.

## Section Reveal

Sections can reveal themselves as they enter the viewport.

Example concept:

```text
Initial:
opacity: 0
translateY: 20px

Visible:
opacity: 1
translateY: 0
```

Use Framer Motion's viewport features rather than manually attaching scroll listeners to every section.

Recommended duration:

```text
0.4s – 0.7s
```

Use a natural easing curve.

## Hero

The hero should have subtle movement:

- Carousel image transition
- Text fade/slide on slide change
- Very subtle image scaling if appropriate

Do not make the hero continuously zoom aggressively.

## Cards

Cards can have a small hover effect:

```text
normal
  ↓
slightly elevated
  ↓
small translateY / shadow change
```

Keep it subtle.

## Navbar

The navbar transition should be smooth:

```text
transparent
    ↓
scroll
    ↓
white + shadow
```

Avoid an abrupt style change.

## Scroll Indicator

A subtle scroll indicator may be placed near the bottom of the hero:

```text
Scroll to explore
      ↓
```

It should not interfere with the hero CTA.

---

# 2C. Tailwind Theme Direction

Configure the Tailwind theme around the project's visual identity.

Primary colors:

```text
Black / Near Black
#05070A

Dark Surface
#0B0F14

White
#FFFFFF

Primary Blue
#2563EB

Blue Hover
#1D4ED8

Muted Text
#6B7280

Light Background
#F8FAFC

Border
#E5E7EB
```

The site should use a **light content experience with dark/photographic hero areas**, rather than making the entire page black.

Blue should be an accent.

Example:

```text
WHITE / LIGHT SECTIONS
        +
BLACK TYPOGRAPHY
        +
BLUE CTA / ACCENTS
        +
DARK HERO
        +
HIMALAYAN PHOTOGRAPHY
```

Do not overuse gradients or blue backgrounds.

---

# 2D. Image & Visual Treatment

Photography is one of the most important parts of the website.

Use high-quality images of:

- Adi Kailash
- Om Parvat
- Parvati Kund
- Himalayan valleys
- Mountain roads
- Gunji
- Kalapani
- Nabhidhang
- Accommodation
- Yatra groups where appropriate

Hero images should have strong composition and enough negative space for text.

Use dark overlays where necessary:

```text
Image
  +
subtle dark gradient
  +
white text
```

Do not place important text over a visually busy part of an image.

Use `object-cover` for hero imagery and define consistent aspect ratios for gallery images.


# 3. Overall Page Structure

The home page should follow this order:

1. Navbar
2. Full-screen Hero Image Carousel
3. Trust / Value Features
4. Why Adi Kailash
5. Optional supporting/gallery section
6. Final Call To Action
7. Footer

The page should remain relatively concise.

Do **not** place a long, detailed day-by-day itinerary directly on the homepage.

Instead, provide a clear button linking to the detailed itinerary PDF.

---

# 4. Navbar

## Desktop

The navbar should contain:

### Left

- Website logo

### Right

- About Us
- Home
- Contact Us
- Packages

Optionally include a prominent CTA such as:

- Book Now
- Enquire Now

The main navigation should be right-aligned.

Suggested structure:

```text
[ LOGO ]                              About Us   Home   Contact Us   Packages
```

## Initial State

When the user is at the top of the page:

- Navbar background should be transparent
- Navbar sits over the hero section
- Text should be white
- Logo should remain clearly visible
- Add a subtle dark overlay/gradient behind the navbar if required for readability

## Scrolled State

When the user scrolls down:

- Navbar becomes white
- Text becomes dark/black
- Add a subtle bottom shadow or border
- Navbar should remain fixed/sticky at the top

The transition between transparent and white should be smooth.

Example behavior:

```text
TOP:
transparent navbar
white text
        ↓ scroll
WHITE:
white background
dark text
```

Use a small React state based on `window.scrollY`.

Do not make the navbar excessively tall.

## Mobile Navbar

On mobile:

- Keep logo on the left
- Hamburger menu on the right
- Navigation links should open in a clean mobile menu
- Menu should close after selecting a navigation item
- Ensure the menu does not cover important content unnecessarily
- Keep the navbar accessible and easy to tap

Minimum recommended mobile touch target: approximately 44px.

---

# 5. Hero Section

The hero should be the visual centerpiece of the website.

## Design

Use a **full-width / full-screen image carousel** featuring high-quality Himalayan and Adi Kailash imagery.

The hero should occupy approximately:

```text
Desktop: 85–100vh
Mobile: 75–90vh
```

Do not distort images.

Use:

```css
object-fit: cover;
```

## Hero Content

Place content over the images with strong contrast.

Suggested content:

### Small label

`A SACRED JOURNEY INTO THE HIMALAYAS`

### Main heading

`Adi Kailash Yatra`

### Supporting text

`Experience the spiritual beauty of Adi Kailash, Parvati Kund and the majestic Himalayan landscape on a journey designed for comfort, safety and unforgettable memories.`

### CTA buttons

Primary:

`Book Your Yatra`

Secondary:

`View Detailed Itinerary`

The itinerary button should open the detailed PDF in a new browser tab.

## Image Overlay

Use a dark gradient overlay so text remains readable regardless of the image.

Example concept:

```css
background:
    linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.70),
        rgba(0, 0, 0, 0.20)
    );
```

Do not use an excessively dark overlay that hides the photographs.

## Carousel Behavior

The carousel should:

- Automatically change slides
- Have smooth transitions
- Include previous/next controls
- Include indicators/dots
- Pause or reduce motion where appropriate
- Support swipe gestures on mobile
- Never create horizontal overflow
- Maintain good image cropping on all screen sizes

If using an external carousel library is unnecessary, implement a simple React carousel.

---

# 6. Trust / Value Features Section

Immediately after the hero, add a section inspired by the reference screenshot.

Use **three feature blocks**.

The purpose is to quickly communicate why customers should trust the tour provider.

## Feature 1

### Heading

`All the Options`

### Description

`Explore carefully planned Adi Kailash Yatra packages and choose the journey that best suits your schedule, comfort and travel preferences.`

Use an appropriate travel/route icon.

## Feature 2

### Heading

`Best Price in the Industry`

### Description

`Enjoy competitive package pricing with thoughtfully arranged travel, accommodation and essential yatra facilities.`

Use a price/value icon.

## Feature 3

### Heading

`Great Customer Support`

### Description

`Our support team is available to assist you before and during your journey, helping make your yatra smooth and worry-free.`

Use a customer-support/headset icon.

## Visual Style

Desktop:

```text
┌────────────────┐  ┌────────────────┐  ┌────────────────┐
│      ICON      │  │      ICON      │  │      ICON      │
│                │  │                │  │                │
│ All the        │  │ Best Price     │  │ Great Customer │
│ Options        │  │ in the Industry│  │ Support        │
│                │  │                │  │                │
│ Description    │  │ Description    │  │ Description    │
└────────────────┘  └────────────────┘  └────────────────┘
```

Mobile:

```text
ICON
Heading
Description

ICON
Heading
Description

ICON
Heading
Description
```

Use consistent icon sizing, spacing, and typography.

Avoid copying the orange circle style from the reference. Use the project's blue/white visual language.

---

# 7. Why Adi Kailash Section

Create a dedicated section titled:

## `Why Adi Kailash?`

Supporting text:

`More than a journey, Adi Kailash is an experience of spirituality, silence and the raw beauty of the Himalayas.`

Add several visually distinct points.

## Point 1 — Spiritual Significance

### Heading

`A Sacred Himalayan Destination`

### Content

`Adi Kailash is revered as one of the sacred Himalayan destinations and holds deep spiritual significance for devotees and travellers seeking a meaningful mountain journey.`

## Point 2 — Parvati Kund

### Heading

`Experience Parvati Kund`

### Content

`Visit the serene Parvati Kund and experience the powerful landscape surrounding Adi Kailash.`

## Point 3 — Om Parvat

### Heading

`Om Parvat Darshan`

### Content

`Witness the remarkable natural formation of Om Parvat from the designated viewing area and take in one of the most memorable sights of the yatra.`

Important: do not claim that visitors climb Om Parvat unless the actual package explicitly includes such an activity.

## Point 4 — Himalayan Experience

### Heading

`Journey Through the High Himalayas`

### Content

`Travel through remote Himalayan landscapes, traditional villages, valleys and mountain routes while experiencing the unique atmosphere of the Kumaon Himalayas.`

## Point 5 — Guided & Supported Journey

### Heading

`Travel With Dedicated Support`

### Content

`From transportation and accommodation to local coordination and yatra assistance, the journey is planned to make the experience more comfortable and organized.`

---

# 8. Why Adi Kailash Layout

Use a modern two-column layout on desktop.

Example:

```text
┌─────────────────────────┬──────────────────────────────┐
│                         │ WHY ADI KAILASH?             │
│                         │                              │
│   LARGE MOUNTAIN IMAGE  │ Sacred Himalayan Destination│
│                         │                              │
│                         │ Parvati Kund                 │
│                         │                              │
│                         │ Om Parvat Darshan            │
│                         │                              │
│                         │ Himalayan Experience          │
└─────────────────────────┴──────────────────────────────┘
```

On mobile:

```text
IMAGE

WHY ADI KAILASH?

Point 1
Point 2
Point 3
Point 4
```

Use subtle animations when the section enters the viewport, but do not overuse animation.

---

# 9. Journey Summary

Do not show a complete day-by-day itinerary.

Instead, provide a simple high-level route summary.

Example:

`Dharchula → Gunji → Kalapani → Adi Kailash & Parvati Kund → Nabhidhang / Om Parvat Darshan → Gunji → Dharchula`

Present this as either:

- A horizontal route timeline on desktop
- A vertical timeline on mobile

The route should be easy to understand at a glance.

Add a CTA:

`View Detailed Itinerary`

This should open the PDF.

---

# 10. Detailed Itinerary PDF

The website should NOT reproduce the full itinerary.

Store the PDF under something like:

```text
public/
└── itinerary/
    └── adi-kailash-itinerary.pdf
```

Use:

```jsx
<a
  href="/itinerary/adi-kailash-itinerary.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  View Detailed Itinerary
</a>
```

The PDF should contain the complete day-by-day journey, accommodation, transportation and other detailed package information.

Make the PDF CTA visually prominent.

Suggested copy:

### `Plan Every Step of Your Journey`

`View the complete day-by-day itinerary, travel routes, accommodation details and important yatra information.`

Button:

`View Detailed Itinerary PDF`

---

# 11. Gallery Section

Add a visual gallery containing:

- Adi Kailash
- Om Parvat
- Parvati Kund
- Himalayan landscapes
- Roads/routes
- Accommodation
- Group/travel photographs where available

Use responsive image grids.

Desktop example:

```text
┌───────────────┬───────┬───────┐
│               │       │       │
│   LARGE IMG   │ IMG   │ IMG   │
│               │       │       │
├───────┬───────┴───────┴───────┤
│ IMG   │       LARGE IMAGE      │
└───────┴────────────────────────┘
```

On mobile, use a simple 1-column or 2-column grid.

Images must:

- Use `loading="lazy"` where appropriate
- Have meaningful `alt` text
- Preserve aspect ratio
- Avoid layout shift by defining dimensions/aspect ratios

---

# 12. Final CTA

Near the bottom of the page, create a strong conversion section.

Heading:

`Begin Your Journey to Adi Kailash`

Supporting text:

`A sacred Himalayan experience awaits. Plan your journey with a trusted team and take the first step toward Adi Kailash.`

Buttons:

`Book Your Yatra`

`Contact Us`

The section can use a large background mountain image with a dark overlay.

---

# 13. Footer

Create a clean, professional footer.

## Column 1

### Logo / Brand

Short description:

`Your trusted travel partner for thoughtfully planned Himalayan and pilgrimage journeys.`

## Column 2 — Quick Links

- Home
- About Us
- Packages
- Contact Us

## Column 3 — Yatra

- Adi Kailash Yatra
- Detailed Itinerary
- Important Information
- FAQs

## Column 4 — Contact

- Phone
- WhatsApp
- Email
- Office/location if available

Do not invent actual phone numbers, email addresses or company details. Use placeholders until the real business information is provided.

Footer bottom:

`© 2026 [Brand Name]. All rights reserved.`

---

# 14. Global Design System

Use CSS variables.

Example:

```css
:root {
  --color-primary: #2563eb;
  --color-primary-hover: #1d4ed8;

  --color-black: #080b10;
  --color-text: #111827;
  --color-text-muted: #6b7280;

  --color-white: #ffffff;
  --color-background: #f8fafc;
  --color-surface: #ffffff;

  --color-border: #e5e7eb;

  --container-width: 1200px;

  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 22px;

  --shadow-sm: 0 4px 15px rgba(0, 0, 0, 0.06);
  --shadow-md: 0 10px 30px rgba(0, 0, 0, 0.10);
}
```

The exact colors can be refined during implementation.

---

# 15. Typography

Use a modern sans-serif font.

Preferred options:

- Inter
- Manrope
- Plus Jakarta Sans

Recommended hierarchy:

```text
Hero heading:
clamp(2.5rem, 6vw, 5.5rem)

Section heading:
clamp(2rem, 4vw, 3.5rem)

Card heading:
1.2rem – 1.5rem

Body:
1rem – 1.1rem

Small text:
0.85rem – 0.95rem
```

Use `clamp()` instead of hardcoded desktop/mobile font sizes wherever practical.

Headings should have strong visual hierarchy without excessive font weight everywhere.

---

# 16. Global Layout

Use a consistent container:

```css
.container {
  width: min(100% - 32px, var(--container-width));
  margin-inline: auto;
}
```

For larger desktop screens, use a maximum content width around 1200–1280px.

Sections should generally have:

```css
padding-block: 80px;
```

Reduce this on smaller devices:

```css
@media (max-width: 768px) {
  section {
    padding-block: 56px;
  }
}
```

Avoid sections touching the screen edges on mobile.

---

# 17. Responsive Requirements

The website must be designed mobile-first.

Required breakpoints can be approximately:

```text
Mobile: < 640px
Tablet: 640px – 1024px
Desktop: > 1024px
```

Do not build desktop first and simply shrink everything.

## Mobile requirements

- No horizontal scrolling
- Navbar becomes hamburger menu
- Hero content remains readable
- Carousel controls remain accessible
- Buttons should be easy to tap
- Two-column sections become one column
- Route timeline becomes vertical
- Gallery adapts to narrow screens
- Cards stack vertically
- Text remains comfortably readable
- Images must crop correctly
- Avoid extremely large empty spaces
- Maintain consistent horizontal padding
- Sticky/fixed elements must not cover content

Recommended mobile side padding:

```css
padding-inline: 16px;
```

Tablet:

```css
padding-inline: 24px;
```

Desktop:

Use the central max-width container.

---

# 18. Accessibility

Implement basic accessibility throughout.

Requirements:

- Semantic HTML
- Proper `header`, `nav`, `main`, `section`, `footer`
- Meaningful heading hierarchy
- `alt` attributes on images
- Buttons must be keyboard accessible
- Links should have clear labels
- Good color contrast
- Visible focus states
- Hamburger menu should have an accessible label
- Carousel controls should have accessible labels
- Do not rely only on color to communicate information

Example:

```jsx
<button
  aria-label="Open navigation menu"
>
  ...
</button>
```

---

# 19. Performance

The site is image-heavy, so performance matters.

Implement:

- Optimized image formats where possible (`webp`, `avif`)
- Lazy loading for below-the-fold images
- Explicit image dimensions/aspect ratios
- Avoid huge uncompressed hero images
- Avoid loading unnecessary libraries
- Use CSS transitions instead of expensive animations
- Keep the initial JavaScript bundle small
- Preload only the most important hero image if needed

The first hero image should load quickly because it is above the fold.

---

# 20. Animations

Use subtle animations only.

Good examples:

- Navbar background transition
- Button hover
- Image hover
- Fade/slide-in when sections appear
- Carousel transitions

Avoid:

- Excessive bouncing
- Constant movement
- Large parallax effects
- Slow animations that delay content
- Animation on every element

Respect reduced-motion preferences:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

# 21. Content Tone

The copy should feel:

- Trustworthy
- Clear
- Premium
- Warm
- Spiritual without being overly religious
- Adventure-oriented
- Customer-friendly

Avoid exaggerated claims such as:

- "World's No. 1"
- "Guaranteed best price"
- "100% safest"
- "Once in a lifetime guaranteed"
- Unverified spiritual or geographical claims

Use genuine, informative language.

---

# 22. Important Content Accuracy

Do not invent package information.

Until actual package data is supplied, use placeholders for:

- Price
- Duration
- Dates
- Contact information
- Hotel names
- Vehicle details
- Permit information
- Group size
- Exact inclusions
- Exact route timings

Example:

```text
Starting from ₹XX,XXX
7 Days / 6 Nights
Available Batches: XX
```

Replace placeholders only when verified information is available.

---

# 23. Navigation Behavior

Navbar links should use smooth scrolling for sections on the homepage.

Example:

```text
Home       → /
About Us   → #about
Packages   → #packages
Contact Us → #contact
```

If About Us, Packages or Contact Us are intended to be separate pages, use React Router only when those pages are actually required.

Do not add routing complexity unnecessarily.

---

# 24. SEO Basics

Add:

- Meaningful `<title>`
- Meta description
- Proper heading hierarchy
- Descriptive image alt text
- Open Graph metadata if appropriate

Suggested title:

`Adi Kailash Yatra | Sacred Himalayan Journey`

Suggested description:

`Explore the Adi Kailash Yatra with a thoughtfully planned Himalayan journey covering Adi Kailash, Parvati Kund, Om Parvat Darshan and other important destinations.`

Do not keyword-stuff the page.

---

# 25. Suggested Component Responsibilities

## `Navbar.jsx`

Responsible for:

- Navigation
- Transparent/white scroll state
- Mobile menu
- CTA
- Sticky behavior

## `Hero.jsx`

Responsible for:

- Image carousel
- Hero heading
- Supporting text
- CTA buttons
- Slide controls

## `TrustFeatures.jsx`

Responsible for:

- Three trust/value feature cards

## `WhyAdiKailash.jsx`

Responsible for:

- Section heading
- Supporting copy
- Why-Adi-Kailash points
- Supporting image

## `JourneySummary.jsx`

Responsible for:

- High-level route
- Timeline
- PDF CTA

## `Gallery.jsx`

Responsible for:

- Responsive image gallery

## `Footer.jsx`

Responsible for:

- Brand
- Navigation
- Contact
- Copyright

---

# 26. Data-Driven Content

Keep reusable content in:

```text
src/data/packageData.js
```

Example:

```js
export const packageData = {
  title: "Adi Kailash Yatra",

  heroDescription:
    "Experience the spiritual beauty of Adi Kailash and the majestic Himalayas.",

  highlights: [
    "Adi Kailash Darshan",
    "Parvati Kund",
    "Om Parvat Darshan",
    "Kalapani",
    "Gunji",
    "Nabhidhang",
  ],

  route: [
    "Dharchula",
    "Gunji",
    "Kalapani",
    "Adi Kailash",
    "Parvati Kund",
    "Nabhidhang",
    "Om Parvat",
    "Dharchula",
  ],

  itineraryPdf:
    "/itinerary/adi-kailash-itinerary.pdf",
};
```

Components should map over this data rather than duplicate markup.

---

# 27. Final Visual Direction

The final website should communicate:

```text
PREMIUM
     +
TRUSTWORTHY
     +
HIMALAYAN
     +
SPIRITUAL
     +
MODERN
```

The design should not look like a generic travel-template website.

Use:

- Large photography
- Clean white sections
- Dark text
- Blue accents
- Strong typography
- Rounded cards where appropriate
- Subtle shadows
- Generous whitespace
- Smooth transitions

Blue should be an accent rather than covering the entire website.

The overall experience should feel calm and premium.

---

# 28. Implementation Priority

Build in this order:

### Phase 1 — Foundation

1. Vite + React setup
2. Global CSS
3. CSS variables
4. Typography
5. Container system
6. Responsive breakpoints

### Phase 2 — Core UI

7. Navbar
8. Hero carousel
9. Trust features
10. Why Adi Kailash
11. Journey summary
12. Footer

### Phase 3 — Supporting UI

13. Gallery
14. CTA
15. PDF itinerary integration
16. Mobile navigation refinement
17. Responsive refinements

### Phase 4 — Polish

18. Animations
19. Accessibility
20. SEO
21. Image optimization
22. Performance testing
23. Cross-device testing

---

# 29. Final Instruction to the Implementing AI

Build the website as a **production-quality React landing page**, not as a quick prototype.

Prioritize:

1. Clean component architecture
2. Responsive behavior
3. Premium visual design
4. Accurate content
5. Accessibility
6. Performance
7. Maintainability

Do not over-engineer the project.

Do not create a huge single `App.jsx`.

Do not add libraries unless they solve a real problem.

Do not invent business/package details.

Use placeholders where information has not yet been provided.

The detailed itinerary should remain in a PDF and should be linked prominently from the hero and journey-summary sections.

The final result should look excellent on both desktop and mobile, with mobile treated as a first-class design rather than an afterthought.

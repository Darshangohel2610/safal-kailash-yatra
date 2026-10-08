// JSON format templates for the admin form Copy Format buttons

export const ITINERARY_SAMPLE = [
  {
    day: 1,
    title: "Kathgodam to Chaukori",
    description: "Drive through scenic Kumaon hills...",
    activities: ["Scenic drive", "Visit Patal Bhuvaneshwar"],
    overnight: "Hotel in Chaukori",
  },
  {
    day: 2,
    title: "Chaukori to Dharchula",
    description: "Continue journey towards the Indo-Tibet border...",
    activities: ["River valley views", "Local market visit"],
    overnight: "Guest House in Dharchula",
  },
];

export const JOIN_FROM_SAMPLE = [
  {
    city: "Kathgodam",
    pricePerPerson: 32500,
    pickupPoint: "Kathgodam Railway Station",
    departureTime: "6:00 AM",
  },
  {
    city: "Haldwani",
    pricePerPerson: 32500,
    pickupPoint: "Haldwani Bus Stand",
    departureTime: "5:30 AM",
  },
];

export const STAY_OPTIONS_SAMPLE = [
  {
    title: "Standard Stay",
    description: "Comfortable hotel rooms with basic amenities",
    priceAdjustment: 0,
  },
  {
    title: "Deluxe Stay",
    description: "Upgraded rooms with better views and amenities",
    priceAdjustment: 5000,
  },
];

export const TRAVEL_OPTIONS_SAMPLE = [
  {
    type: "By Road (Shared Tempo Traveller)",
    description: "Comfortable tempo traveller for the entire journey",
  },
  {
    type: "By Road (Private Vehicle)",
    description: "Dedicated SUV for your group",
  },
];

export const PLACES_SAMPLE = [
  {
    name: "Adi Kailash",
    description: "The sacred abode of Lord Shiva at 5945m...",
    image: "https://images.unsplash.com/photo-example",
  },
  {
    name: "Om Parvat",
    description: "Mountain with natural Om symbol formed by snow...",
    image: "https://images.unsplash.com/photo-example",
  },
];

export const DEPARTURE_DATES_SAMPLE = {
  June: [
    { date: "2025-06-15", status: "available" },
    { date: "2025-06-22", status: "soldout" },
  ],
  July: [
    { date: "2025-07-01", status: "available" },
    { date: "2025-07-15", status: "available" },
  ],
};

export const HIGHLIGHTS_SAMPLE = [
  "Sacred darshan of Adi Kailash",
  "Om Parvat view point",
  "Parvati Sarovar visit",
  "Inner Line Permit assistance",
  "Experienced local guides",
];

export const TREK_INFO_SAMPLE = {
  ageGroup: "12-60 years",
  distance: "~120 km total drive + 35 km trek",
  difficulty: "Moderate",
  altitude: "5500m (Adi Kailash)",
  bestSeason: "May - October",
  startPoint: "Kathgodam",
  endPoint: "Kathgodam",
};

export const INCLUSIONS_SAMPLE = [
  "Transport from Kathgodam to Kathgodam",
  "All meals during the trek (Veg)",
  "Accommodation in hotels and guest houses",
  "Guide and support staff",
  "Inner Line Permit charges",
  "First aid medical kit",
];

export const EXCLUSIONS_SAMPLE = [
  "Personal expenses and tips",
  "Travel insurance",
  "Anything not mentioned in inclusions",
  "Pony/Porter charges (available on request)",
  "GST (5%)",
];

export const POLICIES_SAMPLE = {
  thingsToCarry: [
    "Warm layered clothing (down jacket, thermals)",
    "Rain jacket / poncho",
    "Sturdy trekking shoes",
    "Sunscreen (SPF 50+), sunglasses, hat/cap",
    "Personal medications & basic first-aid",
    "Valid Government photo ID (Aadhaar / Passport)",
    "Water bottle, dry snacks, torch"
  ],
  terms: [
    "Standard check-in 12:00 PM and check-out 11:00 AM",
    "Government ID proof required for Inner Line Permit",
    "Transportation provided as per itinerary (not at disposal)",
    "AC will not operate in hilly regions",
    "Force Majeure clause applies for delays/rescheduling due to weather/landslides"
  ],
  cancellation: [
    "30 days or more before travel date: 10% deduction of total booking amount",
    "15 - 29 days before travel date: 25% deduction of total booking amount",
    "7 - 14 days before travel date: 50% deduction of total booking amount",
    "Less than 7 days before travel date: 100% cancellation charges (No refund)"
  ]
};

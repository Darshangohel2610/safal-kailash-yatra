import dotenv from "dotenv";
dotenv.config();

import { db } from "../src/lib/db/index.js";
import { packages, packageImages } from "../src/lib/db/schema.js";

async function seedAdiKailashPackage() {
  const packageData = {
    slug: "adi-kailash-om-parvat-yatra-6-days",
    title: "Adi Kailash & Om Parvat Yatra (6 Days / 5 Nights)",
    shortDescription: "Kathgodam to Kathgodam spiritual Himalayan journey covering Adi Kailash, Om Parvat, Parvati Sarovar, and Patal Bhuvneshwar.",
    about: "Embark on a sacred Himalayan journey from Kathgodam to Kathgodam covering Adi Kailash (Chhota Kailash) and Om Parvat. Experience divine darshan of Parvati Sarovar, Pandav Kutir, Bhim Ki Kheti, Gauri Kund, Vyas Gufa, and the mystical underground Patal Bhuvneshwar Cave Temple.",
    startingPrice: "23500",
    currency: "INR",
    startingPoint: "Kathgodam",
    endPoint: "Kathgodam",
    durationDays: 6,
    durationNights: 5,
    featured: true,
    status: "PUBLISHED",
    highlights: [
      "Sacred Darshan of Adi Kailash & Om Parvat",
      "Visit Parvati Sarovar, Pandav Kutir & Gauri Kund",
      "Explore Vyas Gufa & Kalapani in Vyas Valley",
      "Underground spiritual darshan at Patal Bhuvneshwar Cave",
      "Spiritual stops at Kainchi Dham & Golu Devta Temple",
      "Inner Line Permit assistance & Mountain expert guide included"
    ],
    trekInformation: {
      maxAltitude: "4750m",
      difficulty: "Moderate",
      bestSeason: "May to October",
      groupSize: "10-20 Persons",
      fitnessLevel: "Moderate Fitness Required"
    },
    inclusions: [
      "Accommodation in hotel Pithoragarh / Dharchula / Patal Bhuvneshwar on twin sharing basis",
      "Accommodation in Nabi / Gunji / Napalchu homestay on sharing basis",
      "Transport Ex Kathgodam",
      "Daily Breakfast and Dinner",
      "Mountain Expert guide ex Kathgodam",
      "Innerline permit assistance",
      "Proper first aid kit",
      "Traditional welcome",
      "High Altitude management and Safety consciousness"
    ],
    exclusions: [
      "Any flight and train tickets",
      "Travel Insurance",
      "5% GST",
      "Lunch during the Yatra",
      "Any kind of drinks like Mineral water, soft drinks etc",
      "Extra nights stay due to landslide or political crisis (Extra cost borne by guests directly)",
      "Anything not mentioned in the itinerary or inclusions"
    ],
    policies: {
      cancellation: [
        "30 days or more before travel date: 10% deduction of total booking amount",
        "15 - 29 days before travel date: 25% deduction of total booking amount",
        "7 - 14 days before travel date: 50% deduction of total booking amount",
        "Less than 7 days before travel date: 100% cancellation charges (No refund)"
      ],
      terms: [
        "Standard check-in 12:00 PM and check-out 11:00 AM",
        "Government ID proof required for Inner Line Permit",
        "Transportation provided as per itinerary (not at disposal)",
        "AC will not operate in hilly regions",
        "Force Majeure clause applies for delays/rescheduling due to weather/landslides"
      ]
    },
    itineraryPdf: "",
    itinerary: [
      {
        day: 1,
        title: "Kathgodam → Pithoragarh",
        description: "Meet representative at Kathgodam Railway Station. En route visit Kainchi Dham (Neem Karoli Baba Ashram), Golu Devta Temple (Ghorakhal), and Jageshwar Dham Shiva temple complex amid deodar forests. Arrive Pithoragarh in evening.",
        activities: ["Meet & Greet at Kathgodam", "Kainchi Dham Darshan", "Golu Devta Temple", "Jageshwar Dham"],
        overnight: "Hotel in Pithoragarh (Meals: Dinner)"
      },
      {
        day: 2,
        title: "Pithoragarh → Vyas Valley → Nabi / Napalchu",
        description: "Scenic drive along Kali River along Indo-Nepal border towards high Himalayan Vyas Valley. Pass mountain villages, Himalayan ranges, and reach traditional homestay in Nabi/Napalchu.",
        activities: ["Scenic Vyas Valley drive", "Indo-Nepal Border view", "Homestay check-in & acclimatization"],
        overnight: "Traditional Homestay in Nabi/Napalchu (Meals: Breakfast, Lunch & Dinner)"
      },
      {
        day: 3,
        title: "Adi Kailash Darshan & Charan Sparsh",
        description: "Early morning drive/excursion to sacred Adi Kailash (Chhota Kailash). Perform prayers and meditation. Visit Parvati Sarovar, Pandav Kutir, Bhim Ki Kheti, and Gauri Kund.",
        activities: ["Adi Kailash Darshan", "Parvati Sarovar", "Pandav Kutir", "Gauri Kund"],
        overnight: "Traditional Homestay in Nabi/Napalchu (Meals: Breakfast, Lunch & Dinner)"
      },
      {
        day: 4,
        title: "Om Parvat Darshan → Dharchula",
        description: "Visit Kalapani, Vyas Gufa, and Nag Parvat. Experience spectacular Om Parvat Darshan where snow naturally forms the sacred ॐ symbol. Return drive to Dharchula.",
        activities: ["Om Parvat Darshan", "Vyas Gufa", "Kalapani", "Drive to Dharchula"],
        overnight: "Hotel in Dharchula (Meals: Breakfast, Lunch & Dinner)"
      },
      {
        day: 5,
        title: "Dharchula → Patal Bhuvneshwar",
        description: "Drive through Kumaon landscapes to Patal Bhuvneshwar. Descend into the underground limestone cave temple dedicated to Lord Shiva featuring natural rock formations of Hindu deities.",
        activities: ["Drive to Patal Bhuvneshwar", "Patal Bhuvneshwar Cave Darshan"],
        overnight: "Hotel/Homestay in Patal Bhuvneshwar (Meals: Breakfast, Lunch & Dinner)"
      },
      {
        day: 6,
        title: "Patal Bhuvneshwar → Kathgodam",
        description: "After breakfast, check out and drive back towards Kathgodam plains. Drop at Kathgodam Railway Station with sacred memories of Lord Shiva, Adi Kailash, and Om Parvat.",
        activities: ["Return drive to Kathgodam", "Drop at Railway Station"],
        overnight: "Tour Ends (Meals: Breakfast)"
      }
    ],
    joinFrom: [
      {
        city: "Kathgodam",
        pricePerPerson: 23500,
        pickupPoint: "Kathgodam Railway Station",
        departureTime: "6:00 AM"
      },
      {
        city: "Delhi",
        pricePerPerson: 25500,
        pickupPoint: "Delhi (Volvo / Train Connect)",
        departureTime: "10:00 PM (Previous Night)"
      }
    ],
    stayOptionsData: [
      {
        title: "Standard Yatra Package",
        description: "Hotel accommodation in Pithoragarh, Dharchula, Patal Bhuvneshwar + Traditional Village Homestay in Nabi/Napalchu",
        priceAdjustment: 0
      }
    ],
    travelOptionsData: [
      {
        type: "Shared Vehicle (Kathgodam to Kathgodam)",
        description: "Bolero / Tempo Traveller / SUV suited for Himalayan terrain"
      }
    ],
    placesToVisit: [
      {
        name: "Adi Kailash",
        description: "Sacred Himalayan peak dedicated to Lord Shiva at Vyas Valley.",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1000"
      },
      {
        name: "Om Parvat",
        description: "Miraculous mountain featuring a natural ॐ snow pattern.",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1000"
      },
      {
        name: "Patal Bhuvneshwar",
        description: "Mystical underground cave temple with natural limestone deity formations.",
        image: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=1000"
      }
    ],
    departureDatesData: {
      May: [
        { date: "2026-05-15", status: "available" },
        { date: "2026-05-22", status: "available" }
      ],
      June: [
        { date: "2026-06-05", status: "available" },
        { date: "2026-06-12", status: "available" },
        { date: "2026-06-20", status: "available" }
      ],
      September: [
        { date: "2026-09-10", status: "available" },
        { date: "2026-09-20", status: "available" }
      ]
    }
  };

  try {
    const [inserted] = await db.insert(packages).values(packageData).returning();
    console.log("Successfully seeded package:", inserted.id, inserted.title);

    await db.insert(packageImages).values({
      packageId: inserted.id,
      imageUrl: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1000",
      altText: inserted.title,
      displayOrder: 1,
      isCover: true,
    });
    console.log("Successfully inserted package cover image");
    process.exit(0);
  } catch (err) {
    console.error("Error seeding package:", err);
    process.exit(1);
  }
}

seedAdiKailashPackage();

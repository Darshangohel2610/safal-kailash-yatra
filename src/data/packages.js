export const packages = [
  {
    id: "adi-kailash-8-days",
    slug: "adi-kailash-yatra-8-days",
    title: "Adi Kailash Yatra - Standard 8 Days",
    shortDescription:
      "A thoughtfully planned pilgrimage to sacred Adi Kailash, Parvati Kund, and Om Parvat with comfortable mountain travel, accommodation, meals, and yatra support.",
    startingPrice: 32500,
    startingPoint: "Kathgodam / Haldwani",
    endPoint: "Kathgodam / Haldwani",
    duration: {
      days: 8,
      nights: 7,
    },
    featured: true,
    category: "Adi Kailash Yatra",
    images: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=1200&auto=format&fit=crop",
    ],
    highlights: [
      "Sacred Adi Kailash Darshan",
      "Visit to Parvati Kund",
      "Om Parvat Darshan from Nabhidhang",
      "Inner Line Permit assistance",
      "4x4 mountain vehicle travel",
      "Local Himalayan homestay experience",
    ],
    about:
      "The Adi Kailash Yatra is a sacred Himalayan pilgrimage through the remote landscapes of Kumaon, Uttarakhand. The journey takes pilgrims towards the revered Adi Kailash region while offering spiritual experiences at Parvati Kund, Om Parvat, Kalapani, and other important places along the route. With carefully planned transportation, accommodation, meals, and local assistance, this package is designed to provide a comfortable and meaningful pilgrimage experience.",
    trekInformation: {
      ageGroup: "10 – 70 Years",
      distance: "Approx. 650 km total (Drive + minimal walking)",
      difficulty: "Moderate",
      altitude: "Approx. 4,450 m / 14,600 ft",
      bestSeason: "May – June & September – October",
      startPoint: "Kathgodam",
      endPoint: "Kathgodam",
    },

    joinFrom: [
      {
        city: "Kathgodam / Haldwani",
        pricePerPerson: 32500,
        pickupPoint: "Kathgodam Railway Station",
        departureTime: "06:00 AM",
      },
      {
        city: "Delhi",
        pricePerPerson: 35500,
        pickupPoint: "Kashmere Gate / New Delhi Railway Station",
        departureTime: "As per travel schedule",
      },
      {
        city: "Ahmedabad",
        pricePerPerson: 42500,
        pickupPoint: "Ahmedabad",
        departureTime: "As per train / flight schedule",
      },
      {
        city: "Surat",
        pricePerPerson: 43500,
        pickupPoint: "Surat",
        departureTime: "As per train / flight schedule",
      },
    ],

    travelling: [
      {
        type: "4x4 Mountain Vehicle",
        description:
          "Bolero / Camper / Maxx vehicles for high-altitude and mountain sectors.",
      },
      {
        type: "AC Tempo / Bus",
        description:
          "Comfortable highway transportation for suitable lower-altitude sectors.",
      },
    ],

    stayOptions: [
      {
        title: "Quad / Multi Sharing Homestay",
        description:
          "Clean local homestays with basic facilities, warm bedding, and vegetarian meals.",
        priceAdjustment: 0,
      },
      {
        title: "Twin / Triple Sharing",
        description:
          "Standard hotel rooms and upgraded homestay accommodation where available.",
        priceAdjustment: 3500,
      },
    ],

    departureDates: {
      May: [
        { date: "2026-05-10", status: "available" },
        { date: "2026-05-18", status: "limited" },
        { date: "2026-05-25", status: "available" },
      ],
      June: [
        { date: "2026-06-02", status: "available" },
        { date: "2026-06-10", status: "available" },
        { date: "2026-06-20", status: "limited" },
      ],
      September: [
        { date: "2026-09-05", status: "available" },
        { date: "2026-09-12", status: "available" },
        { date: "2026-09-19", status: "limited" },
        { date: "2026-09-26", status: "soldout" },
      ],
      October: [
        { date: "2026-10-03", status: "available" },
        { date: "2026-10-10", status: "available" },
        { date: "2026-10-18", status: "limited" },
      ],
    },

    itinerary: [
      {
        day: 1,
        title: "Kathgodam to Pithoragarh / Dharchula",
        description:
          "Pick up from Kathgodam and begin the scenic journey through the Kumaon hills towards Pithoragarh and Dharchula.",
        activities: [
          "Scenic Kumaon mountain drive",
          "Visit Kainchi Dham",
          "Hotel check-in",
        ],
        overnight: "Dharchula / Pithoragarh",
      },
      {
        day: 2,
        title: "Dharchula to Gunji / Nabi",
        description:
          "Complete required documentation and continue towards the high-altitude region through the Kali River valley and remote Himalayan villages.",
        activities: [
          "Permit formalities",
          "4x4 mountain drive",
          "Nabi / Gunji village experience",
        ],
        overnight: "Nabi / Gunji",
      },
      {
        day: 3,
        title: "Adi Kailash & Parvati Kund",
        description:
          "Excursion towards the Adi Kailash region for Darshan of the sacred peak and a visit to Parvati Kund.",
        activities: [
          "Adi Kailash Darshan",
          "Parvati Kund visit",
          "Sacred site exploration",
        ],
        overnight: "Nabi / Gunji",
      },
      {
        day: 4,
        title: "Om Parvat & Nabhidhang",
        description:
          "Travel towards Nabhidhang for Darshan of Om Parvat and visit important spiritual sites in the surrounding region.",
        activities: [
          "Om Parvat Darshan",
          "Kalapani Temple visit",
          "Vyas Gufa Darshan",
        ],
        overnight: "Nabi / Gunji",
      },
      {
        day: 5,
        title: "Nabi / Gunji to Dharchula",
        description:
          "Begin the return journey from the high-altitude region and travel back towards Dharchula.",
        activities: [
          "Scenic return drive",
          "Dharchula local market",
          "Rest and relaxation",
        ],
        overnight: "Dharchula",
      },
      {
        day: 6,
        title: "Dharchula to Chaukori / Patal Bhuvaneshwar",
        description:
          "Continue towards the Kumaon hills with a visit to the sacred Patal Bhuvaneshwar cave temple.",
        activities: [
          "Patal Bhuvaneshwar visit",
          "Scenic Kumaon drive",
          "Chaukori sightseeing",
        ],
        overnight: "Chaukori / Gangolihat",
      },
      {
        day: 7,
        title: "Chaukori to Jageshwar Dham & Bhimtal",
        description:
          "Visit the historic Jageshwar temple complex before continuing towards Bhimtal.",
        activities: [
          "Jageshwar Dham Darshan",
          "Kumaon sightseeing",
          "Bhimtal Lake visit",
        ],
        overnight: "Bhimtal / Kathgodam",
      },
      {
        day: 8,
        title: "Kathgodam Departure",
        description:
          "After breakfast, complete the final transfer to Kathgodam Railway Station and conclude your pilgrimage.",
        activities: ["Breakfast", "Transfer to Kathgodam", "Yatra conclusion"],
        overnight: "Departure",
      },
    ],

    itineraryPdf: "#",

    placesToVisit: [
      {
        name: "Adi Kailash",
        image:
          "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop",
        description:
          "A sacred Himalayan peak and the spiritual centerpiece of the yatra.",
      },
      {
        name: "Parvati Kund",
        image:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
        description:
          "A sacred high-altitude water body associated with the Adi Kailash pilgrimage.",
      },
      {
        name: "Om Parvat",
        image:
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
        description:
          "A sacred Himalayan mountain known for its naturally occurring Om-shaped snow formation.",
      },
      {
        name: "Nabi Village",
        image:
          "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop",
        description:
          "A remote Himalayan village offering an authentic local stay experience.",
      },
      {
        name: "Jageshwar Dham",
        image:
          "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=800&auto=format&fit=crop",
        description:
          "A historic Shiva temple complex surrounded by the forests of Kumaon.",
      },
    ],

    inclusions: [
      "Hotel and homestay accommodation as per the selected plan",
      "Vegetarian meals as mentioned in the package",
      "Transportation by AC vehicle and 4x4 mountain vehicles as applicable",
      "Permit and documentation assistance",
      "Yatra coordinator and local support",
      "First-aid and basic emergency support",
      "Applicable toll, parking, and driver charges",
    ],

    exclusions: [
      "Personal expenses",
      "Laundry, telephone calls, shopping, and extra snacks",
      "Porter, mule, or pony charges for personal luggage",
      "Travel insurance and emergency evacuation costs",
      "GST / applicable taxes",
      "Anything not specifically mentioned under inclusions",
    ],

    policies: {
      thingsToCarry: [
        "Warm clothes, thermal innerwear, jacket, gloves, and woolen cap",
        "Sturdy waterproof shoes with good grip",
        "Original Government Photo ID",
        "Required medical / fitness certificate",
        "Personal medicines and basic toiletries",
        "Sunscreen, lip balm, sunglasses, and water bottle",
        "Power bank and personal electronic equipment",
      ],

      cancellation:
        "Cancellation terms depend on the booking date and advance arrangements made for permits, transportation, accommodation, and other yatra services. Final cancellation and refund terms will be communicated at the time of booking.",

      termsAndConditions:
        "The yatra is subject to weather, road conditions, local administration, permit approvals, and security clearances. Pilgrims must follow the instructions of the yatra coordinator and local authorities throughout the journey.",
    },

    summary: {
      pricePerPerson: 32500,
      transport: "AC Vehicle + 4x4 Mountain Vehicle",
      stay: "Hotel & Himalayan Homestay",
      firstAid: true,
      travelSupport: true,
    },
  },  
  {
    id: "shrikhand-mahadev-7-days",
    slug: "shrikhand-mahadev-yatra-7-days",
    title: "Shrikhand Mahadev Yatra - 7 Days",
    shortDescription:
      "A thrilling and sacred high-altitude pilgrimage trek to the 72-foot natural Shiva Lingam in Himachal Pradesh.",
    startingPrice: 18500,
    startingPoint: "Shimla / Jaon",
    endPoint: "Shimla / Jaon",
    duration: {
      days: 7,
      nights: 6,
    },
    featured: true,
    category: "Shrikhand Mahadev Yatra",
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
    ],
    highlights: [
      "Darshan of the 72 ft Shrikhand Mahadev Rock Shivling",
      "Challenging trek through alpine meadows and glacier tracks",
      "Visit Parvati Gupha, Nain Sarovar, and Bhim Dwar",
      "Experienced mountain guides & medical support",
      "Permit registration and Yatra administration support",
    ],
    about:
      "Shrikhand Mahadev is considered one of the toughest pilgrimages in India. Located in the Kullu district of Himachal Pradesh, pilgrims trek through dense devdar forests, alpine bugyals, steep rock pitches, and snow fields to reach the majestic 72-foot rock Shivling at an altitude of 18,570 ft.",
    trekInformation: {
      ageGroup: "18 – 55 Years",
      distance: "Approx. 64 km total trek (Round Trip)",
      difficulty: "Challenging / Strenuous",
      altitude: "Approx. 5,227 m / 17,150 ft",
      bestSeason: "July – August",
      startPoint: "Shimla / Jaon Village",
      endPoint: "Shimla / Jaon Village",
    },
    joinFrom: [
      {
        city: "Shimla",
        pricePerPerson: 18500,
        pickupPoint: "Shimla Bus Stand / Railway Station",
        departureTime: "06:00 AM",
      },
      {
        city: "Chandigarh",
        pricePerPerson: 21500,
        pickupPoint: "Chandigarh ISBT Sector 43",
        departureTime: "04:00 AM",
      },
      {
        city: "Delhi",
        pricePerPerson: 23500,
        pickupPoint: "Kashmere Gate ISBT",
        departureTime: "10:00 PM (Previous Night)",
      },
    ],
    travelling: [
      {
        type: "Tempo Traveller / Bus",
        description: "Standard road transport from Shimla to Jaon base village.",
      },
      {
        type: "Trekking",
        description: "On-foot mountain trekking with qualified guides.",
      },
    ],
    stayOptions: [
      {
        title: "Dome Tents / Base Camp Homestays",
        description: "Alpine high-altitude tents with sleeping bags and matting.",
        priceAdjustment: 0,
      },
    ],
    departureDates: {
      July: [
        { date: "2026-07-15", status: "available" },
        { date: "2026-07-22", status: "limited" },
        { date: "2026-07-28", status: "available" },
      ],
      August: [
        { date: "2026-08-04", status: "available" },
        { date: "2026-08-10", status: "limited" },
      ],
    },
    itinerary: [
      {
        day: 1,
        title: "Shimla to Jaon Village via Rampur",
        description: "Drive through the scenic Sutlej valley to reach Jaon, the base village for the trek.",
        activities: ["Scenic valley drive", "Registration & briefing", "Rest at Jaon"],
        overnight: "Jaon Homestay",
      },
      {
        day: 2,
        title: "Jaon to Singhad & Trek to Thachru",
        description: "Start the trek from Jaon to Singhad base camp, followed by the steep climb of Danda Dhar to Thachru.",
        activities: ["Trek through dense forests", "Steep ascent of Danda Dhar"],
        overnight: "Thachru Campsite",
      },
      {
        day: 3,
        title: "Thachru to Kali Ghati & Bhim Dwar",
        description: "Ascend to Kali Ghati peak, cross alpine flower meadows, and descent to Bhim Dwar camp.",
        activities: ["Darshan at Kali Ghati", "High altitude meadow trek", "Bhim Dwar waterfall view"],
        overnight: "Bhim Dwar Campsite",
      },
      {
        day: 4,
        title: "Bhim Dwar to Shrikhand Mahadev Peak & back to Bhim Dwar",
        description: "Early morning start towards Nain Sarovar Lake, cross snow patches and steep glaciers to reach the sacred Shrikhand Shivling summit.",
        activities: ["Nain Sarovar Darshan", "Glacier crossing", "Shrikhand Mahadev Darshan"],
        overnight: "Bhim Dwar Campsite",
      },
      {
        day: 5,
        title: "Bhim Dwar to Thachru",
        description: "Descend safely back through Kali Ghati down to Thachru base camp.",
        activities: ["Descent trekking", "Rest & mountain views"],
        overnight: "Thachru Campsite",
      },
      {
        day: 6,
        title: "Thachru to Jaon Village",
        description: "Final steep descent down to Jaon village. Celebrate the completion of the yatra.",
        activities: ["Return trek", "Certificate distribution"],
        overnight: "Jaon / Nirmand",
      },
      {
        day: 7,
        title: "Jaon to Shimla Departure",
        description: "Board the vehicle for the return drive to Shimla/Chandigarh.",
        activities: ["Breakfast", "Scenic return drive", "Departure"],
        overnight: "Departure",
      },
    ],
    itineraryPdf: "#",
    placesToVisit: [
      {
        name: "Shrikhand Mahadev Peak",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
        description: "72-foot iconic rock monolith worshiped as Lord Shiva.",
      },
      {
        name: "Nain Sarovar",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
        description: "Sacred high-altitude lake formed by the tears of Goddess Parvati.",
      },
      {
        name: "Bhim Dwar",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop",
        description: "Scenic alpine valley believed to be inhabited by the Pandavas.",
      },
    ],
    inclusions: [
      "Accommodations in tents/homestays during the trek",
      "Nutritious vegetarian meals and hot water",
      "Experienced trek leader, guide, and support staff",
      "Medical kit, oxygen cylinder, and pulse oximeter",
      "Yatra registration and entry fees",
    ],
    exclusions: [
      "Personal porter / mule charges for backpack",
      "Personal insurance and medical emergency rescue",
      "Taxes and personal purchases",
    ],
    policies: {
      thingsToCarry: [
        "Waterproof high-ankle trekking boots",
        "Puffer jacket, rain poncho, and warm thermals",
        "Trekking pole and headlamp",
        "Medical fitness certificate signed by an MBBS doctor",
      ],
      cancellation: "Cancellation policies strictly governed by local yatra administration rules and mountain safety delays.",
      termsAndConditions: "Mandatory medical screening at Singhad base camp. Yatra depends entirely on weather and administrative permits.",
    },
    summary: {
      pricePerPerson: 18500,
      transport: "Tempo Traveller + Trekking",
      stay: "Alpine Camps & Homestay",
      firstAid: true,
      travelSupport: true,
    },
  },

  {
    id: "mount-kailash-14-days",
    slug: "mount-kailash-mansarovar-yatra-14-days",
    title: "Mount Kailash & Lake Mansarovar Yatra - 14 Days",
    shortDescription:
      "The ultimate divine pilgrimage to Mount Kailash and Holy Lake Mansarovar via the Overland Nepal/Tibet route.",
    startingPrice: 185000,
    startingPoint: "Kathmandu",
    endPoint: "Kathmandu",
    duration: {
      days: 14,
      nights: 13,
    },
    featured: true,
    category: "Mount Kailash Yatra",
    images: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    ],
    highlights: [
      "Holy Mansarovar Lake Parikrama and Holy Dip",
      "3-Day Outer Parikrama (Kora) of Mount Kailash",
      "Cross high-altitude Dolma La Pass (5,630m)",
      "Darshan of Gauri Kund and Yam Dwar",
      "Complete Tibet Visa and Travel Permit processing included",
      "Professional Sherpa team & Indian vegetarian chef team",
    ],
    about:
      "Mount Kailash is revered as the eternal abode of Lord Shiva. Located in the Autonomous Region of Tibet, China, this yatra takes pilgrims through Kathmandu, Kyirong border, and the vast Tibetan plateau to complete the holy Parikrama around Mount Kailash and offer prayers at Lake Mansarovar.",
    trekInformation: {
      ageGroup: "18 – 68 Years",
      distance: "52 km Kailash Parikrama + Overland Drive",
      difficulty: "Challenging",
      altitude: "Max altitude 5,630 m / 18,470 ft (Dolma La)",
      bestSeason: "May – September",
      startPoint: "Kathmandu",
      endPoint: "Kathmandu",
    },
    joinFrom: [
      {
        city: "Kathmandu",
        pricePerPerson: 185000,
        pickupPoint: "Tribhuvan International Airport (KTM)",
        departureTime: "As per flight arrival",
      },
      {
        city: "Delhi (Flight + Yatra)",
        pricePerPerson: 198000,
        pickupPoint: "Delhi IGI Airport",
        departureTime: "As per flight schedule",
      },
    ],
    travelling: [
      {
        type: "AC Tourist Coach (Tibet Side)",
        description: "Comfortable Tibetan long-distance coaches.",
      },
      {
        type: "Private Bus / Van (Nepal Side)",
        description: "Kathmandu local sightseeing and border transfer.",
      },
    ],
    stayOptions: [
      {
        title: "Hotel & Guest House Combo",
        description: "3-Star Deluxe Hotels in Kathmandu; basic Tibetan guest houses during Parikrama.",
        priceAdjustment: 0,
      },
    ],
    departureDates: {
      May: [
        { date: "2026-05-18", status: "available" },
        { date: "2026-05-28", status: "limited" },
      ],
      June: [
        { date: "2026-06-12", status: "available" },
        { date: "2026-06-24", status: "available" },
      ],
      July: [
        { date: "2026-07-10", status: "available" },
      ],
      August: [
        { date: "2026-08-15", status: "available" },
      ],
      September: [
        { date: "2026-09-02", status: "limited" },
      ],
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kathmandu",
        description: "Pick up at Kathmandu airport, transfer to hotel, yatra orientation and document collection.",
        activities: ["Airport transfer", "Yatra briefing", "Welcome dinner"],
        overnight: "Kathmandu Hotel",
      },
      {
        day: 2,
        title: "Kathmandu Sightseeing & Temple Visits",
        description: "Visit Pashupatinath Temple and Jal Narayan (Budhanilkantha) Temple.",
        activities: ["Pashupatinath Temple Darshan", "Jal Narayan visit", "Preparation check"],
        overnight: "Kathmandu Hotel",
      },
      {
        day: 3,
        title: "Kathmandu to Syabrubesi / Timure (Nepal Border)",
        description: "Drive towards the Nepal-China border through mountain roads.",
        activities: ["Scenic drive through Langtang valley"],
        overnight: "Syabrubesi Guest House",
      },
      {
        day: 4,
        title: "Syabrubesi to Kyirong (Tibet)",
        description: "Cross Rasuwagadhi border customs, complete immigration formalities and drive to Kyirong.",
        activities: ["Border crossing", "Immigration procedures", "Acclimatization"],
        overnight: "Kyirong Guest House",
      },
      {
        day: 5,
        title: "Acclimatization Day in Kyirong",
        description: "Full day rest for body acclimatization to high Tibetan altitudes.",
        activities: ["Short altitude walks", "Health checks"],
        overnight: "Kyirong Guest House",
      },
      {
        day: 6,
        title: "Kyirong to Saga",
        description: "Drive across the Tibetan Plateau crossing Brahmaputra River (Yarlung Tsangpo).",
        activities: ["Plateau drive", "Brahmaputra River view"],
        overnight: "Saga Hotel",
      },
      {
        day: 7,
        title: "Saga to Lake Mansarovar",
        description: "Drive towards Lake Mansarovar. First holy Darshan of Mount Kailash and Lake Mansarovar.",
        activities: ["Lake Mansarovar Parikrama by bus", "Holy Pooja & Dip"],
        overnight: "Mansarovar Guest House",
      },
      {
        day: 8,
        title: "Mansarovar to Darchen",
        description: "Morning Hawan/Pooja at Lake Mansarovar lake side. Drive to Darchen base village.",
        activities: ["Morning Pooja", "Transfer to Darchen base town"],
        overnight: "Darchen Hotel",
      },
      {
        day: 9,
        title: "Kailash Parikrama Day 1: Darchen to Yam Dwar & Trek to Dirapuk",
        description: "Drive to Yam Dwar, begin 12 km trek along the Lha Chu river towards Dirapuk facing North Face of Kailash.",
        activities: ["Yam Dwar Darshan", "12 km Trek", "North Face Kailash Darshan"],
        overnight: "Dirapuk Guest House",
      },
      {
        day: 10,
        title: "Kailash Parikrama Day 2: Dirapuk to Dolma La Pass & Zuthulpuk",
        description: "Challenging trek crossing steep Dolma La Pass (5,630m), view Gauri Kund, and descend down to Zuthulpuk.",
        activities: ["Dolma La Pass crossing", "Gauri Kund View", "22 km Trek"],
        overnight: "Zuthulpuk Guest House",
      },
      {
        day: 11,
        title: "Kailash Parikrama Day 3: Zuthulpuk to Darchen & Drive to Saga",
        description: "Finish remaining 8 km trek to complete Kailash Parikrama. Drive back to Saga.",
        activities: ["Final 8km trek", "Parikrama completion", "Drive to Saga"],
        overnight: "Saga Hotel",
      },
      {
        day: 12,
        title: "Saga to Kyirong",
        description: "Return scenic drive back to Kyirong town.",
        activities: ["Scenic drive through Tibetan hills"],
        overnight: "Kyirong Guest House",
      },
      {
        day: 13,
        title: "Kyirong to Kathmandu",
        description: "Cross back through border immigration and drive back to Kathmandu.",
        activities: ["Immigration clearance", "Return drive to Nepal capital"],
        overnight: "Kathmandu Hotel",
      },
      {
        day: 14,
        title: "Kathmandu Departure",
        description: "Transfer to Tribhuvan International Airport for final departure.",
        activities: ["Breakfast", "Airport Transfer", "Yatra concludes"],
        overnight: "Departure",
      },
    ],
    itineraryPdf: "#",
    placesToVisit: [
      {
        name: "Mount Kailash (Holy Peak)",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop",
        description: "Sacred abode of Lord Shiva, unclimbed and divine.",
      },
      {
        name: "Lake Mansarovar",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
        description: "Pristine high-altitude freshwater lake created in the mind of Lord Brahma.",
      },
      {
        name: "Gauri Kund",
        image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=800&auto=format&fit=crop",
        description: "Lake of Compassion associated with Goddess Parvati near Dolma La Pass.",
      },
    ],
    inclusions: [
      "Group Visa and Tibet Travel Permit charges",
      "Accommodation in Kathmandu & Tibet as per itinerary",
      "Pure vegetarian meals cooked by accompanying Indian chefs",
      "Transportation in Nepal and Tibet",
      "Experienced English/Hindi speaking Tibetan guide and Sherpa team",
      "Oxygen cylinders & down jackets provided for duration of Yatra",
    ],
    exclusions: [
      "Personal Horse / Yak / Porter charges during 3-day Kailash Parikrama",
      "International flights to Kathmandu",
      "Nepal visa fee for foreign national passport holders",
      "Personal insurance and emergency rescue/evacuation costs",
      "GST & TCS as applicable",
    ],
    policies: {
      thingsToCarry: [
        "Valid Indian Passport with minimum 6 months validity",
        "Medical fitness clearance certificate from registered practitioner",
        "Thermals, heavy feather down jackets, windproof trousers",
        "UV protection sunglasses and extreme cold gear",
      ],
      cancellation: "Tibet Autonomous Region permit cancellation rules apply once visa processes are initiated.",
      termsAndConditions: "Subject to Chinese Embassy visa approval and diplomatic border clearance policies.",
    },
    summary: {
      pricePerPerson: 185000,
      transport: "Coach + Trekking",
      stay: "3-Star Hotels & Tibetan Guest Houses",
      firstAid: true,
      travelSupport: true,
    },
  },

  {
    id: "kinnaur-kailash-8-days",
    slug: "kinnaur-kailash-yatra-8-days",
    title: "Kinnaur Kailash Yatra - 8 Days",
    shortDescription:
      "A thrilling trekking expedition to the sacred 79-foot natural rock Shivling of Kinnaur Kailash in Himachal Pradesh.",
    startingPrice: 24500,
    startingPoint: "Shimla / Tangling",
    endPoint: "Shimla / Tangling",
    duration: {
      days: 8,
      nights: 7,
    },
    featured: false,
    category: "Kinnaur Kailash Yatra",
    images: [
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    ],
    highlights: [
      "Darshan of 79 ft vertical Shivling monolith that changes color throughout the day",
      "Trek along the sacred Kinner Kailash trail via Tangling & Ganesh Park",
      "Visit Parvati Kund alpine lake",
      "Experience tribal Kinnauri culture and apple orchards of Powari/Reckong Peo",
      "Professional trek marshals and mountain safety staff",
    ],
    about:
      "The Kinnaur Kailash Yatra takes devotees to the sacred rock monolith in Kinnaur, Himachal Pradesh. Revered by both Hindus and Buddhists, the Shivling rock stands vertically at 6,050 meters altitude. The trek involves crossing high ridge paths, boulder fields, and icy streams to reach Parvati Kund and witness the sacred peak.",
    trekInformation: {
      ageGroup: "18 – 50 Years",
      distance: "Approx. 40 km total trek",
      difficulty: "Challenging",
      altitude: "Approx. 4,800 m / 15,748 ft",
      bestSeason: "July – August",
      startPoint: "Shimla / Tangling Village",
      endPoint: "Shimla / Tangling Village",
    },
    joinFrom: [
      {
        city: "Shimla",
        pricePerPerson: 24500,
        pickupPoint: "Shimla Old Bus Stand",
        departureTime: "06:30 AM",
      },
      {
        city: "Chandigarh",
        pricePerPerson: 27500,
        pickupPoint: "Chandigarh ISBT 43",
        departureTime: "03:30 AM",
      },
    ],
    travelling: [
      {
        type: "Non-AC / AC Tempo Traveller",
        description: "Mountain road transfer between Shimla and Tangling.",
      },
      {
        type: "Mountain Trekking",
        description: "Steep trail trekking with guides.",
      },
    ],
    stayOptions: [
      {
        title: "Tents & High Altitude Campsites",
        description: "Triple sharing dome tents with warm sleeping bags.",
        priceAdjustment: 0,
      },
    ],
    departureDates: {
      July: [
        { date: "2026-07-20", status: "available" },
        { date: "2026-07-28", status: "limited" },
      ],
      August: [
        { date: "2026-08-05", status: "available" },
        { date: "2026-08-12", status: "limited" },
      ],
    },
    itinerary: [
      {
        day: 1,
        title: "Shimla to Powari / Tangling Village",
        description: "Drive along Hindustan-Tibet Highway (NH-05) alongside Sutlej river to reach Tangling village base camp.",
        activities: ["Scenic drive through Kinnaur", "Briefing at Tangling"],
        overnight: "Tangling Homestay",
      },
      {
        day: 2,
        title: "Tangling to Ashiq Park",
        description: "Begin steep uphill trek through Kinnauri orchards and pine forests to reach Ashiq Park campsite.",
        activities: ["Initial steep ascent", "Stream crossing", "Campsite setup"],
        overnight: "Ashiq Park Tents",
      },
      {
        day: 3,
        title: "Ashiq Park to Bheem Dwar / Killa Camp",
        description: "Trek through high rocky terrain and alpine meadows to reach Bheem Dwar.",
        activities: ["High altitude trekking", "Acclimatization walk"],
        overnight: "Bheem Dwar Tents",
      },
      {
        day: 4,
        title: "Bheem Dwar to Parvati Kund & Kinnaur Kailash Summit View",
        description: "Early morning steep climb over boulder zones to Parvati Kund for Darshan of the giant 79ft Kinnaur Kailash Shivling.",
        activities: ["Parvati Kund Pooja", "Kinnaur Kailash Darshan", "Photos and prayers"],
        overnight: "Bheem Dwar Tents",
      },
      {
        day: 5,
        title: "Buffer / Contingency Day",
        description: "Kept for bad weather or acclimatization adjustments.",
        activities: ["Rest or contingency usage"],
        overnight: "Bheem Dwar / Ashiq Park",
      },
      {
        day: 6,
        title: "Bheem Dwar to Tangling Village",
        description: "Descend all the way back down to Tangling village.",
        activities: ["Descent trek", "Village homestay celebration"],
        overnight: "Tangling Homestay",
      },
      {
        day: 7,
        title: "Tangling to Kalpa / Reckong Peo",
        description: "Short drive to Kalpa to view Kinnaur Kailash range from distance and explore local monasteries.",
        activities: ["Kalpa sightseeing", "Suicide Point visit"],
        overnight: "Kalpa Hotel",
      },
      {
        day: 8,
        title: "Kalpa to Shimla Departure",
        description: "Board transport for return trip to Shimla/Chandigarh.",
        activities: ["Breakfast", "Return journey"],
        overnight: "Departure",
      },
    ],
    itineraryPdf: "#",
    placesToVisit: [
      {
        name: "Kinnaur Kailash Shivling",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop",
        description: "79 ft vertical monolith sacred rock pillar.",
      },
      {
        name: "Parvati Kund",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
        description: "High altitude sacred tarn right below the Shivling.",
      },
      {
        name: "Kalpa Village",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
        description: "Scenic Kinnauri village with panoramic views of Mount Kinner Kailash.",
      },
    ],
    inclusions: [
      "Accommodations in high altitude tents & homestays",
      "Nutritious vegetarian meals during trek",
      "Certified mountain guides, cook, and porters for camp setup",
      "Forest permits and yatra clearance fees",
      "Emergency oxygen cylinders and medical kit",
    ],
    exclusions: [
      "Personal porter to carry personal backpack",
      "Personal travel or medical insurance",
      "GST / taxes",
    ],
    policies: {
      thingsToCarry: [
        "Rigid high-ankle trek shoes",
        "Waterproof jacket and heavy fleece",
        "Headlamp with spare batteries",
        "Official medical fitness certificate",
      ],
      cancellation: "Subject to District Magistrate Kinnaur weather advisory notices.",
      termsAndConditions: "Yatra dates are regulated strictly by Himachal Pradesh state government authorities.",
    },
    summary: {
      pricePerPerson: 24500,
      transport: "Tempo Traveller + Trekking",
      stay: "Alpine Tents & Hotel",
      firstAid: true,
      travelSupport: true,
    },
  },

  {
    id: "manimahesh-kailash-7-days",
    slug: "manimahesh-kailash-yatra-7-days",
    title: "Manimahesh Kailash Yatra - 7 Days",
    shortDescription:
      "A revered pilgrimage trek to Manimahesh Lake at the foot of the sacred, unclimbed Manimahesh Kailash Peak in Chamba.",
    startingPrice: 16500,
    startingPoint: "Pathankot / Bharmour",
    endPoint: "Pathankot / Bharmour",
    duration: {
      days: 7,
      nights: 6,
    },
    featured: true,
    category: "Manimahesh Kailash Yatra",
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
    ],
    highlights: [
      "Holy dip in sacred Manimahesh Lake (4,080m)",
      "Darshan of majestic Manimahesh Kailash Peak (5,653m)",
      "Visit Chaurasi Temple Complex in historic Bharmour town",
      "Trek from Hadsar via Dhancho and Gauri Kund",
      "Helicopter booking assistance option (Subject to availability)",
    ],
    about:
      "The Manimahesh Yatra takes place in the Budhil valley of Chamba district, Himachal Pradesh. Pilgrims trek from Hadsar to Manimahesh Lake to take a holy dip on Krishna Janmashtami or Radhashtami, under the shadow of the soaring Manimahesh Kailash Peak.",
    trekInformation: {
      ageGroup: "10 – 65 Years",
      distance: "Approx. 26 km total trek (Hadsar - Lake - Hadsar)",
      difficulty: "Moderate",
      altitude: "Approx. 4,080 m / 13,385 ft",
      bestSeason: "August – September",
      startPoint: "Pathankot / Bharmour",
      endPoint: "Pathankot / Bharmour",
    },
    joinFrom: [
      {
        city: "Pathankot",
        pricePerPerson: 16500,
        pickupPoint: "Pathankot Cantt Railway Station",
        departureTime: "07:00 AM",
      },
      {
        city: "Chandigarh",
        pricePerPerson: 19500,
        pickupPoint: "Chandigarh ISBT 43",
        departureTime: "04:00 AM",
      },
      {
        city: "Delhi",
        pricePerPerson: 21500,
        pickupPoint: "Kashmere Gate ISBT",
        departureTime: "09:00 PM (Previous Night)",
      },
    ],
    travelling: [
      {
        type: "AC Tempo Traveller / Bus",
        description: "Road transportation from Pathankot to Bharmour & Hadsar.",
      },
      {
        type: "Trekking",
        description: "13 km up-gradient trek path from Hadsar.",
      },
    ],
    stayOptions: [
      {
        title: "Standard Guest House & Yatra Tents",
        description: "Clean hotel in Bharmour; alpine tents/dharamshala near Manimahesh Lake.",
        priceAdjustment: 0,
      },
    ],
    departureDates: {
      August: [
        { date: "2026-08-18", status: "available" },
        { date: "2026-08-25", status: "available" },
      ],
      September: [
        { date: "2026-09-02", status: "available" },
        { date: "2026-09-08", status: "limited" },
      ],
    },
    itinerary: [
      {
        day: 1,
        title: "Pathankot to Bharmour",
        description: "Pick up from Pathankot and scenic drive alongside Ravi River to historic Bharmour.",
        activities: ["Scenic drive", "Hotel check-in at Bharmour"],
        overnight: "Bharmour Hotel",
      },
      {
        day: 2,
        title: "Bharmour Local Darshan & Preparation",
        description: "Visit the historic Chaurasi Temple complex housing 84 ancient temples.",
        activities: ["Chaurasi Temple Darshan", "Yatra medical/registration check"],
        overnight: "Bharmour Hotel",
      },
      {
        day: 3,
        title: "Bharmour to Hadsar & Trek to Dhancho",
        description: "Drive to Hadsar (17 km) and begin 6 km trek along Budhil stream to Dhancho waterfall campsite.",
        activities: ["Short drive", "6 km uphill trek", "Dhancho waterfall view"],
        overnight: "Dhancho Campsite / Tents",
      },
      {
        day: 4,
        title: "Dhancho to Gauri Kund & Manimahesh Lake",
        description: "Trek uphill via Sundarsi and Gauri Kund to arrive at the holy Manimahesh Lake.",
        activities: ["Gauri Kund Darshan", "Trek to Manimahesh Lake", "View of Kailash Peak"],
        overnight: "Manimahesh Lake Campsite Tents",
      },
      {
        day: 5,
        title: "Holy Dip at Manimahesh Lake & Trek down to Bharmour",
        description: "Early morning sacred bath in Manimahesh Lake and special Pooja. Descend back down to Hadsar and drive to Bharmour.",
        activities: ["Holy Bath & Pooja", "13 km descent trek", "Return drive to Bharmour"],
        overnight: "Bharmour Hotel",
      },
      {
        day: 6,
        title: "Bharmour to Chamba & Khajjiar",
        description: "Drive towards Chamba with a excursion stop at Khajjiar (Mini Switzerland of India).",
        activities: ["Khajjiar sightseeing", "Chamba Laxmi Narayan Temple visit"],
        overnight: "Chamba / Dalhousie",
      },
      {
        day: 7,
        title: "Chamba / Dalhousie to Pathankot Departure",
        description: "After breakfast, transfer back to Pathankot Railway Station for departure.",
        activities: ["Breakfast", "Transfer to Pathankot", "Yatra concludes"],
        overnight: "Departure",
      },
    ],
    itineraryPdf: "#",
    placesToVisit: [
      {
        name: "Manimahesh Lake & Peak",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
        description: "Sacred lake mirroring the majestic peak of Lord Shiva.",
      },
      {
        name: "Chaurasi Temple Bharmour",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop",
        description: "1400-year-old historic temple complex built during the King Sahil Varman era.",
      },
      {
        name: "Gauri Kund",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
        description: "Sacred lake exclusively reserved for female devotees taking a holy dip.",
      },
    ],
    inclusions: [
      "Hotels in Bharmour/Chamba and quality alpine tented stay at lake",
      "Nutritious vegetarian meals",
      "Comfortable transportation in AC Tempo Traveller/Bus",
      "Experienced mountain guides and yatra coordinator",
      "First aid and basic emergency support",
    ],
    exclusions: [
      "Helicopter tickets (if chosen)",
      "Pony / Porter charges for personal bags",
      "Personal expenses and insurance",
      "GST / local taxes",
    ],
    policies: {
      thingsToCarry: [
        "Good trekking shoes with rain protection",
        "Heavy woolen cap, gloves, and thermals",
        "Raincoat / Poncho",
        "Valid Government ID",
      ],
      cancellation: "Cancellation fees apply according to yatra authority guidelines.",
      termsAndConditions: "Subject to weather conditions in the Budhil valley and local administration guidelines.",
    },
    summary: {
      pricePerPerson: 16500,
      transport: "Tempo Traveller + Trekking",
      stay: "Hotel & Alpine Camps",
      firstAid: true,
      travelSupport: true,
    },
  },
];
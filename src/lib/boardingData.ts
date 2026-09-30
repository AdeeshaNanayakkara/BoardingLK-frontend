import {
  Landlord,
  BoardingHouse,
  Room,
  RoomImage,
  Category,
  RentalPlan,
  RoomRentalPlan,
  Review,
  BoardingListing,
} from "@/types/boarding";

// 1. Categories (category_id, name, description, status)
export const CATEGORIES: Category[] = [
  {
    category_id: "cat_1",
    name: "Single Rooms",
    description: "Private single study rooms with dedicated workspace",
    status: "active",
  },
  {
    category_id: "cat_2",
    name: "Shared Rooms",
    description: "Twin and triple shared rooms with individual study spaces",
    status: "active",
  },
  {
    category_id: "cat_3",
    name: "Studio Apartments",
    description: "Self-contained studios with attached private washrooms",
    status: "active",
  },
  {
    category_id: "cat_4",
    name: "Master Suites",
    description: "Premium suites with attached balcony and modern furniture",
    status: "active",
  },
];

// 2. Rental Plans (plan_id, category_id, plan_name, duration_type, duration_value, description, status)
export const RENTAL_PLANS: RentalPlan[] = [
  {
    plan_id: "plan_daily",
    category_id: "cat_1",
    plan_name: "Daily Rental Plan",
    duration_type: "daily",
    duration_value: 1,
    description: "Flexible day-by-day accommodation for short visits and exams",
    status: "active",
  },
  {
    plan_id: "plan_weekly",
    category_id: "cat_1",
    plan_name: "Weekly Rental Plan",
    duration_type: "weekly",
    duration_value: 1,
    description: "Convenient weekly packages for internships and short projects",
    status: "active",
  },
  {
    plan_id: "plan_monthly",
    category_id: "cat_1",
    plan_name: "Monthly Rental Plan",
    duration_type: "monthly",
    duration_value: 1,
    description: "Long-term stays for students and working professionals",
    status: "active",
  },
];

// 3. Landlords (owner_id, user_id, nic, full_name, phone, description)
export const LANDLORDS: Landlord[] = [
  {
    owner_id: "owner_1",
    user_id: "user_owner_1",
    nic: "196854210982",
    full_name: "Mrs. Sujatha Wickramasinghe",
    phone: "+94 77 452 8991",
    description: "Experienced boarding provider in Colombo for over 10 years.",
  },
  {
    owner_id: "owner_2",
    user_id: "user_owner_2",
    nic: "197214589201",
    full_name: "Mr. Ranjith Bandara",
    phone: "+94 71 832 1445",
    description: "Retired lecturer offering quiet study accommodations in Moratuwa.",
  },
  {
    owner_id: "owner_3",
    user_id: "user_owner_3",
    nic: "198054981240",
    full_name: "Dr. & Mrs. Fernando",
    phone: "+94 77 912 3004",
    description: "Safe family-managed girls boarding residence in Malabe.",
  },
  {
    owner_id: "owner_4",
    user_id: "user_owner_4",
    nic: "197654210984",
    full_name: "Mr. Kanchana Senanayake",
    phone: "+94 76 544 3219",
    description: "Modern apartment manager in Nugegoda.",
  },
  {
    owner_id: "owner_5",
    user_id: "user_owner_5",
    nic: "196954210981",
    full_name: "Prof. Anura Jayaratne",
    phone: "+94 77 334 9012",
    description: "Hilltop boarding residence provider in Kandy.",
  },
];

// 4. Boarding Houses (boarding_id, owner_id, name, description, address, city, contact_no, status)
export const BOARDING_HOUSES: BoardingHouse[] = [
  {
    boarding_id: "bh_1",
    owner_id: "owner_1",
    name: "Royal Palm Residence",
    description: "Modern executive boarding residence located in the heart of Colombo.",
    address: "No. 42, Galle Road, Kollupitiya",
    city: "Colombo",
    contact_no: "+94 77 452 8991",
    status: "active",
  },
  {
    boarding_id: "bh_2",
    owner_id: "owner_2",
    name: "Lagoon Haven Moratuwa",
    description: "Quiet, study-oriented boarding house with reliable utilities.",
    address: "No. 18/4, Molpe Road, Katubedda",
    city: "Moratuwa",
    contact_no: "+94 71 832 1445",
    status: "active",
  },
  {
    boarding_id: "bh_3",
    owner_id: "owner_3",
    name: "Orchid Villa Residence",
    description: "Secure, impeccably maintained boarding house with CCTV security.",
    address: "No. 95, Pittugala Junction, Kaduwela Road",
    city: "Malabe",
    contact_no: "+94 77 912 3004",
    status: "active",
  },
  {
    boarding_id: "bh_4",
    owner_id: "owner_4",
    name: "Greenwood Suite Nugegoda",
    description: "Bright and breezy twin-sharing accommodation in Nugegoda.",
    address: "No. 12, High Level Road, Gangodawila",
    city: "Nugegoda",
    contact_no: "+94 76 544 3219",
    status: "active",
  },
  {
    boarding_id: "bh_5",
    owner_id: "owner_5",
    name: "Hilltop Heritage Residence",
    description: "Serene hilltop boarding residence located in a picturesque setting in Kandy.",
    address: "No. 74, Galaha Road, Peradeniya",
    city: "Kandy",
    contact_no: "+94 77 334 9012",
    status: "active",
  },
];

// 5. Rooms (room_id, boarding_id, room_number, room_type, capacity, description, status)
export const ROOMS: Room[] = [
  {
    room_id: "rm_101",
    boarding_id: "bh_1",
    room_number: "Suite 101",
    room_type: "Studio Apartment",
    capacity: 1,
    description: "Deluxe studio suite with air conditioning, attached washroom, and teak work desk.",
    status: "available",
  },
  {
    room_id: "rm_201",
    boarding_id: "bh_2",
    room_number: "Room 201",
    room_type: "Single Room",
    capacity: 1,
    description: "Private study room with high-speed fiber internet and large windows.",
    status: "available",
  },
  {
    room_id: "rm_301",
    boarding_id: "bh_3",
    room_number: "Room 301",
    room_type: "Master Suite",
    capacity: 2,
    description: "Spacious master suite with attached bathroom and hot water.",
    status: "available",
  },
  {
    room_id: "rm_401",
    boarding_id: "bh_4",
    room_number: "Room 401",
    room_type: "Shared Room",
    capacity: 2,
    description: "Twin-sharing bedroom with individual study tables and wardrobes.",
    status: "available",
  },
  {
    room_id: "rm_501",
    boarding_id: "bh_5",
    room_number: "Room 501",
    room_type: "Master Suite",
    capacity: 1,
    description: "Scenic mountain view room with attached private bath and study desk.",
    status: "available",
  },
];

// 6. Room Images (image_id, room_id, image_url, caption)
export const ROOM_IMAGES: RoomImage[] = [
  {
    image_id: "img_1",
    room_id: "rm_101",
    image_url: "/images/hero-boarding.jpg",
    caption: "Suite 101 Interior & Study Desk",
  },
  {
    image_id: "img_2",
    room_id: "rm_101",
    image_url: "/images/daily-stay.jpg",
    caption: "Attached Bathroom & Bedroom View",
  },
  {
    image_id: "img_3",
    room_id: "rm_201",
    image_url: "/images/daily-stay.jpg",
    caption: "Single Study Room Workspace",
  },
  {
    image_id: "img_4",
    room_id: "rm_301",
    image_url: "/images/weekly-stay.jpg",
    caption: "Master Suite Bed & Living Area",
  },
  {
    image_id: "img_5",
    room_id: "rm_401",
    image_url: "/images/monthly-stay.jpg",
    caption: "Shared Bedroom Twin Beds",
  },
  {
    image_id: "img_6",
    room_id: "rm_501",
    image_url: "/images/hero-scenic-resort.jpg",
    caption: "Hilltop Suite Mountain View",
  },
];

// 7. Room Rental Plans (room_rental_plan_id, room_id, plan_id, price, status)
export const ROOM_RENTAL_PLANS: RoomRentalPlan[] = [
  // rm_101
  { room_rental_plan_id: "rrp_1", room_id: "rm_101", plan_id: "plan_daily", price: 2500, status: "active" },
  { room_rental_plan_id: "rrp_2", room_id: "rm_101", plan_id: "plan_weekly", price: 14000, status: "active" },
  { room_rental_plan_id: "rrp_3", room_id: "rm_101", plan_id: "plan_monthly", price: 35000, status: "active" },

  // rm_201
  { room_rental_plan_id: "rrp_4", room_id: "rm_201", plan_id: "plan_daily", price: 1200, status: "active" },
  { room_rental_plan_id: "rrp_5", room_id: "rm_201", plan_id: "plan_weekly", price: 7500, status: "active" },
  { room_rental_plan_id: "rrp_6", room_id: "rm_201", plan_id: "plan_monthly", price: 19500, status: "active" },

  // rm_301
  { room_rental_plan_id: "rrp_7", room_id: "rm_301", plan_id: "plan_daily", price: 1500, status: "active" },
  { room_rental_plan_id: "rrp_8", room_id: "rm_301", plan_id: "plan_weekly", price: 8500, status: "active" },
  { room_rental_plan_id: "rrp_9", room_id: "rm_301", plan_id: "plan_monthly", price: 22000, status: "active" },

  // rm_401
  { room_rental_plan_id: "rrp_10", room_id: "rm_401", plan_id: "plan_daily", price: 1800, status: "active" },
  { room_rental_plan_id: "rrp_11", room_id: "rm_401", plan_id: "plan_weekly", price: 9500, status: "active" },
  { room_rental_plan_id: "rrp_12", room_id: "rm_401", plan_id: "plan_monthly", price: 24000, status: "active" },

  // rm_501
  { room_rental_plan_id: "rrp_13", room_id: "rm_501", plan_id: "plan_daily", price: 2200, status: "active" },
  { room_rental_plan_id: "rrp_14", room_id: "rm_501", plan_id: "plan_weekly", price: 11000, status: "active" },
  { room_rental_plan_id: "rrp_15", room_id: "rm_501", plan_id: "plan_monthly", price: 28000, status: "active" },
];

// 8. Reviews (review_id, customer_id, boarding_id, booking_id, rating, review_text, review_date, status)
export const REVIEWS: Review[] = [
  {
    review_id: "rev_1",
    customer_id: "cust_1",
    boarding_id: "bh_1",
    booking_id: "bk_101",
    rating: 5,
    review_text: "Very clean studio apartment with excellent high-speed internet and quiet surroundings.",
    review_date: "2026-08-15",
    status: "approved",
  },
  {
    review_id: "rev_2",
    customer_id: "cust_2",
    boarding_id: "bh_2",
    booking_id: "bk_102",
    rating: 5,
    review_text: "Ideal study room with reliable utilities. The landlord Mr. Bandara was very helpful.",
    review_date: "2026-09-02",
    status: "approved",
  },
];

// 9. Joined Boarding Listings for UI
export const BOARDING_LISTINGS: BoardingListing[] = [
  {
    id: "rm_101",
    boarding_id: "bh_1",
    room_id: "rm_101",
    title: "Royal Palm Residence — Suite 101",
    boardingName: "Royal Palm Residence",
    roomNumber: "Suite 101",
    roomType: "Studio Apartment",
    capacity: 1,
    location: "Kollupitiya, Colombo",
    address: "No. 42, Galle Road, Kollupitiya",
    city: "Colombo",
    contactNo: "+94 77 452 8991",
    rating: 4.95,
    reviewsCount: 36,
    images: [
      "/images/hero-boarding.jpg",
      "/images/daily-stay.jpg",
      "/images/weekly-stay.jpg",
    ],
    pricing: {
      daily: 2500,
      weekly: 14000,
      monthly: 35000,
    },
    roomRentalPlans: [
      { room_rental_plan_id: "rrp_1", plan_id: "plan_daily", plan_name: "Daily Plan", duration_type: "daily", price: 2500 },
      { room_rental_plan_id: "rrp_2", plan_id: "plan_weekly", plan_name: "Weekly Plan", duration_type: "weekly", price: 14000 },
      { room_rental_plan_id: "rrp_3", plan_id: "plan_monthly", plan_name: "Monthly Plan", duration_type: "monthly", price: 35000 },
    ],
    description: "A premium studio suite with air conditioning, attached bathroom, and work desk.",
    landlord: {
      owner_id: "owner_1",
      name: "Mrs. Sujatha Wickramasinghe",
      phone: "+94 77 452 8991",
      description: "Experienced boarding provider in Colombo for over 10 years.",
    },
    status: "available",
  },
  {
    id: "rm_201",
    boarding_id: "bh_2",
    room_id: "rm_201",
    title: "Lagoon Haven — Single Study Room",
    boardingName: "Lagoon Haven Moratuwa",
    roomNumber: "Room 201",
    roomType: "Single Room",
    capacity: 1,
    location: "Katubedda, Moratuwa",
    address: "No. 18/4, Molpe Road, Katubedda",
    city: "Moratuwa",
    contactNo: "+94 71 832 1445",
    rating: 4.88,
    reviewsCount: 42,
    images: [
      "/images/daily-stay.jpg",
      "/images/hero-boarding.jpg",
      "/images/monthly-stay.jpg",
    ],
    pricing: {
      daily: 1200,
      weekly: 7500,
      monthly: 19500,
    },
    roomRentalPlans: [
      { room_rental_plan_id: "rrp_4", plan_id: "plan_daily", plan_name: "Daily Plan", duration_type: "daily", price: 1200 },
      { room_rental_plan_id: "rrp_5", plan_id: "plan_weekly", plan_name: "Weekly Plan", duration_type: "weekly", price: 7500 },
      { room_rental_plan_id: "rrp_6", plan_id: "plan_monthly", plan_name: "Monthly Plan", duration_type: "monthly", price: 19500 },
    ],
    description: "Clean single study room with high-speed internet and teak study table.",
    landlord: {
      owner_id: "owner_2",
      name: "Mr. Ranjith Bandara",
      phone: "+94 71 832 1445",
      description: "Retired lecturer offering quiet study accommodations in Moratuwa.",
    },
    status: "available",
  },
  {
    id: "rm_301",
    boarding_id: "bh_3",
    room_id: "rm_301",
    title: "Orchid Villa — Master Suite",
    boardingName: "Orchid Villa Residence",
    roomNumber: "Room 301",
    roomType: "Master Suite",
    capacity: 2,
    location: "Pittugala, Malabe",
    address: "No. 95, Pittugala Junction, Kaduwela Road",
    city: "Malabe",
    contactNo: "+94 77 912 3004",
    rating: 4.92,
    reviewsCount: 29,
    images: [
      "/images/weekly-stay.jpg",
      "/images/hero-boarding.jpg",
      "/images/monthly-stay.jpg",
    ],
    pricing: {
      daily: 1500,
      weekly: 8500,
      monthly: 22000,
    },
    roomRentalPlans: [
      { room_rental_plan_id: "rrp_7", plan_id: "plan_daily", plan_name: "Daily Plan", duration_type: "daily", price: 1500 },
      { room_rental_plan_id: "rrp_8", plan_id: "plan_weekly", plan_name: "Weekly Plan", duration_type: "weekly", price: 8500 },
      { room_rental_plan_id: "rrp_9", plan_id: "plan_monthly", plan_name: "Monthly Plan", duration_type: "monthly", price: 22000 },
    ],
    description: "Safe, secure, and impeccably maintained residence with 24/7 security.",
    landlord: {
      owner_id: "owner_3",
      name: "Dr. & Mrs. Fernando",
      phone: "+94 77 912 3004",
      description: "Safe family-managed girls boarding residence in Malabe.",
    },
    status: "available",
  },
  {
    id: "rm_401",
    boarding_id: "bh_4",
    room_id: "rm_401",
    title: "Greenwood Suite — Shared Twin Room",
    boardingName: "Greenwood Suite Nugegoda",
    roomNumber: "Room 401",
    roomType: "Shared Room",
    capacity: 2,
    location: "Gangodawila, Nugegoda",
    address: "No. 12, High Level Road, Gangodawila",
    city: "Nugegoda",
    contactNo: "+94 76 544 3219",
    rating: 4.82,
    reviewsCount: 19,
    images: [
      "/images/monthly-stay.jpg",
      "/images/weekly-stay.jpg",
      "/images/daily-stay.jpg",
    ],
    pricing: {
      daily: 1800,
      weekly: 9500,
      monthly: 24000,
    },
    roomRentalPlans: [
      { room_rental_plan_id: "rrp_10", plan_id: "plan_daily", plan_name: "Daily Plan", duration_type: "daily", price: 1800 },
      { room_rental_plan_id: "rrp_11", plan_id: "plan_weekly", plan_name: "Weekly Plan", duration_type: "weekly", price: 9500 },
      { room_rental_plan_id: "rrp_12", plan_id: "plan_monthly", plan_name: "Monthly Plan", duration_type: "monthly", price: 24000 },
    ],
    description: "Twin-sharing bedroom with individual study tables and weekly housekeeping.",
    landlord: {
      owner_id: "owner_4",
      name: "Mr. Kanchana Senanayake",
      phone: "+94 76 544 3219",
      description: "Modern apartment manager in Nugegoda.",
    },
    status: "available",
  },
  {
    id: "rm_501",
    boarding_id: "bh_5",
    room_id: "rm_501",
    title: "Hilltop Heritage Suite",
    boardingName: "Hilltop Heritage Residence",
    roomNumber: "Room 501",
    roomType: "Master Suite",
    capacity: 1,
    location: "Peradeniya, Kandy",
    address: "No. 74, Galaha Road, Peradeniya",
    city: "Kandy",
    contactNo: "+94 77 334 9012",
    rating: 4.96,
    reviewsCount: 27,
    images: [
      "/images/hero-scenic-resort.jpg",
      "/images/hero-boarding.jpg",
      "/images/weekly-stay.jpg",
    ],
    pricing: {
      daily: 2200,
      weekly: 11000,
      monthly: 28000,
    },
    roomRentalPlans: [
      { room_rental_plan_id: "rrp_13", plan_id: "plan_daily", plan_name: "Daily Plan", duration_type: "daily", price: 2200 },
      { room_rental_plan_id: "rrp_14", plan_id: "plan_weekly", plan_name: "Weekly Plan", duration_type: "weekly", price: 11000 },
      { room_rental_plan_id: "rrp_15", plan_id: "plan_monthly", plan_name: "Monthly Plan", duration_type: "monthly", price: 28000 },
    ],
    description: "Serene hilltop boarding residence located in a picturesque setting in Kandy.",
    landlord: {
      owner_id: "owner_5",
      name: "Prof. Anura Jayaratne",
      phone: "+94 77 334 9012",
      description: "Hilltop boarding residence provider in Kandy.",
    },
    status: "available",
  },
];

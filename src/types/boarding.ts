// ==========================================
// EXACT DATABASE SCHEMA TYPES (12 Tables)
// ==========================================

// 1. User (user_id, email, password_hash, role, status)
export interface User {
  user_id: string;
  email: string;
  password_hash?: string;
  role: "customer" | "landlord" | "admin";
  status: "active" | "inactive" | "suspended";
}

// 2. Customer (customer_id, user_id, nic, full_name, phone, date_of_birth, gender, address)
export interface Customer {
  customer_id: string;
  user_id: string;
  nic: string;
  full_name: string;
  phone: string;
  date_of_birth?: string;
  gender?: "male" | "female" | "other";
  address?: string;
}

// 3. Landlord (owner_id, user_id, nic, full_name, phone, description)
export interface Landlord {
  owner_id: string;
  user_id: string;
  nic: string;
  full_name: string;
  phone: string;
  description?: string;
}

// 4. BoardingHouse (boarding_id, owner_id, name, description, address, city, contact_no, status)
export interface BoardingHouse {
  boarding_id: string;
  owner_id: string;
  name: string;
  description: string;
  address: string;
  city: string;
  contact_no: string;
  status: "active" | "inactive" | "pending";
}

// 5. Room (room_id, boarding_id, room_number, room_type, capacity, description, status)
export interface Room {
  room_id: string;
  boarding_id: string;
  room_number: string;
  room_type: string;
  capacity: number;
  description: string;
  status: "available" | "occupied" | "maintenance";
}

// 6. RoomImage (image_id, room_id, image_url, caption)
export interface RoomImage {
  image_id: string;
  room_id: string;
  image_url: string;
  caption?: string;
}

// 7. Category (category_id, name, description, status)
export interface Category {
  category_id: string;
  name: string;
  description: string;
  status: "active" | "inactive";
}

// 8. RentalPlan (plan_id, category_id, plan_name, duration_type, duration_value, description, status)
export interface RentalPlan {
  plan_id: string;
  category_id: string;
  plan_name: string;
  duration_type: "daily" | "weekly" | "monthly";
  duration_value: number;
  description: string;
  status: "active" | "inactive";
}

// 9. RoomRentalPlan (room_rental_plan_id, room_id, plan_id, price, status)
export interface RoomRentalPlan {
  room_rental_plan_id: string;
  room_id: string;
  plan_id: string;
  price: number;
  status: "active" | "inactive";
}

// 10. Booking (booking_id, customer_id, room_rental_plan_id, booking_date, check_in_date, check_out_date, total_amount, status)
export interface Booking {
  booking_id: string;
  customer_id: string;
  room_rental_plan_id: string;
  booking_date: string;
  check_in_date: string;
  check_out_date: string;
  total_amount: number;
  status: "pending" | "confirmed" | "cancelled" | "completed";
}

// 11. Invoice (invoice_id, booking_id, amount, payment_method, payment_date, payment_status)
export interface Invoice {
  invoice_id: string;
  booking_id: string;
  amount: number;
  payment_method: "cash" | "card" | "bank_transfer" | "online";
  payment_date: string;
  payment_status: "paid" | "unpaid" | "refunded";
}

// 12. Review (review_id, customer_id, boarding_id, booking_id, rating, review_text, review_date, status)
export interface Review {
  review_id: string;
  customer_id: string;
  boarding_id: string;
  booking_id: string;
  rating: number;
  review_text: string;
  review_date: string;
  status: "approved" | "pending" | "hidden";
}

// ==========================================
// UI COMPOSITE MODEL (For Listing Display)
// ==========================================
export interface BoardingListing {
  id: string;
  boarding_id: string;
  room_id: string;
  title: string;
  boardingName: string;
  roomNumber: string;
  roomType: string;
  capacity: number;
  location: string;
  address: string;
  city: string;
  contactNo: string;
  rating: number;
  reviewsCount: number;
  images: string[];
  pricing: {
    daily?: number;
    weekly?: number;
    monthly?: number;
  };
  roomRentalPlans: {
    room_rental_plan_id: string;
    plan_id: string;
    plan_name: string;
    duration_type: "daily" | "weekly" | "monthly";
    price: number;
  }[];
  description: string;
  landlord: {
    owner_id: string;
    name: string;
    phone: string;
    description?: string;
  };
  status: string;
}

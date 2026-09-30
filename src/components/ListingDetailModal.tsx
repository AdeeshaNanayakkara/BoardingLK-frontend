"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  X,
  MapPin,
  ShieldCheck,
  Calendar,
  Phone,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  User,
  Building,
  Receipt,
  Star,
} from "lucide-react";
import { BoardingListing } from "@/types/boarding";

interface ListingDetailModalProps {
  listing: BoardingListing | null;
  onClose: () => void;
  onOpenAuth?: (tab: "login" | "register") => void;
}

export default function ListingDetailModal({
  listing,
  onClose,
}: ListingDetailModalProps) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [selectedPlanType, setSelectedPlanType] = useState<"daily" | "weekly" | "monthly">("monthly");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [durationUnits, setDurationUnits] = useState(1);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerNic, setCustomerNic] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "card" | "bank_transfer" | "online">("cash");
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingId, setBookingId] = useState("");
  const [invoiceId, setInvoiceId] = useState("");

  if (!listing) return null;

  // Selected rental plan from RoomRentalPlans
  const matchedPlan = listing.roomRentalPlans.find(
    (p) => p.duration_type === selectedPlanType
  ) || listing.roomRentalPlans[0];

  const unitPrice = matchedPlan?.price || (
    selectedPlanType === "daily" ? 1500 : selectedPlanType === "weekly" ? 8500 : 22000
  );

  const totalAmount = unitPrice * durationUnits;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const bId = `bk_${Math.floor(1000 + Math.random() * 9000)}`;
    const invId = `inv_${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingId(bId);
    setInvoiceId(invId);
    setBookingSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-3 sm:p-6 animate-fadeIn overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full shadow-2xl relative border border-[#e5e8ef] my-6 max-h-[92vh] flex flex-col overflow-hidden">
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-[#e5e8ef] flex items-center justify-between bg-[#fbfcfd]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-montserrat font-bold uppercase tracking-wider text-[#162b83]">
              Boarding & Room Details
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-[#818181] hover:text-[#162b83] p-1.5 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto flex-1 p-6 sm:p-8 space-y-8">
          {/* 1. Image Gallery */}
          <div className="space-y-3">
            <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-xl overflow-hidden bg-gray-100 group">
              <Image
                src={listing.images[activeImageIdx] || listing.images[0]}
                alt={listing.title}
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

              {/* Verified badge */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-[#162b83] text-white text-xs font-montserrat font-bold uppercase tracking-wider shadow-md">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-white/95 backdrop-blur-md text-[#393a47] text-xs font-montserrat font-bold uppercase tracking-wider shadow-md">
                  {listing.roomType}
                </span>
              </div>

              {/* Navigation arrows */}
              {listing.images.length > 1 && (
                <div className="absolute inset-y-0 inset-x-2 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImageIdx((prev) =>
                        prev === 0 ? listing.images.length - 1 : prev - 1
                      );
                    }}
                    className="w-9 h-9 rounded-full bg-white/90 text-[#162b83] flex items-center justify-center shadow-md hover:bg-white"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImageIdx((prev) =>
                        prev === listing.images.length - 1 ? 0 : prev + 1
                      );
                    }}
                    className="w-9 h-9 rounded-full bg-white/90 text-[#162b83] flex items-center justify-center shadow-md hover:bg-white"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {listing.images.length > 1 && (
              <div className="flex gap-2">
                {listing.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                      activeImageIdx === idx
                        ? "border-[#162b83] shadow-md scale-105"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 2. Title, Boarding House & Ratings Bar */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-[#e5e8ef] pb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-montserrat font-bold uppercase tracking-wider text-[#162b83] bg-[#f0f3ff] px-2.5 py-0.5 rounded">
                  {listing.roomType}
                </span>
                <span className="text-xs font-montserrat font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded">
                  Capacity: {listing.capacity} {listing.capacity === 1 ? "Person" : "Persons"}
                </span>
              </div>
              <h2 className="font-montserrat font-extrabold text-2xl sm:text-3xl text-[#3d3234] mb-2">
                {listing.title}
              </h2>
              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-lato text-[#626262]">
                <span className="flex items-center gap-1.5 text-[#162b83] font-semibold">
                  <MapPin className="w-4 h-4 text-[#162b83]" />
                  {listing.city}
                </span>
                <span>•</span>
                <span className="text-[#393a47] font-medium">
                  {listing.address}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-[#f8f9fc] p-3 rounded-xl border border-[#e5e8ef] shrink-0">
              <div className="w-10 h-10 rounded-lg bg-[#162b83] text-white flex items-center justify-center font-montserrat font-extrabold text-sm">
                <Star className="w-4 h-4 fill-white" />
              </div>
              <div>
                <div className="text-xs font-montserrat font-bold text-[#393a47] uppercase">
                  {listing.rating} / 5.0
                </div>
                <div className="text-xs font-lato text-[#818181]">
                  {listing.reviewsCount} reviews
                </div>
              </div>
            </div>
          </div>

          {/* 3. Description, Boarding House Details & Booking Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Boarding House Info */}
              <div className="p-5 rounded-2xl bg-[#f8f9fc] border border-[#e5e8ef] space-y-3">
                <div className="flex items-center gap-2 text-xs font-montserrat font-bold uppercase tracking-wider text-[#162b83]">
                  <Building className="w-4 h-4" />
                  Boarding House Information
                </div>
                <h4 className="font-montserrat font-bold text-base text-[#3d3234]">
                  {listing.boardingName}
                </h4>
                <p className="font-lato text-xs sm:text-sm text-[#626262] leading-relaxed">
                  {listing.description}
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs font-lato text-[#393a47] pt-2 border-t border-[#e5e8ef]">
                  <div><strong>Room Number:</strong> {listing.roomNumber}</div>
                  <div><strong>Room Type:</strong> {listing.roomType}</div>
                  <div><strong>City:</strong> {listing.city}</div>
                  <div><strong>Status:</strong> <span className="text-emerald-700 font-semibold uppercase">{listing.status}</span></div>
                </div>
              </div>

              {/* Landlord Card */}
              <div className="p-5 rounded-2xl bg-[#f0f3ff]/80 border border-[#162b83]/15 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#162b83] text-white flex items-center justify-center font-montserrat font-bold text-base shadow-sm">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-sm text-[#393a47]">
                      {listing.landlord.name}
                    </h4>
                    <p className="text-xs font-lato text-[#626262]">
                      {listing.landlord.description || "Verified Boarding House Owner"}
                    </p>
                    <p className="text-xs font-montserrat font-bold text-[#162b83] mt-0.5">
                      {listing.contactNo}
                    </p>
                  </div>
                </div>

                <a
                  href={`tel:${listing.contactNo}`}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-[#162b83]/20 text-xs font-montserrat font-bold text-[#162b83] hover:bg-[#162b83] hover:text-white transition-all shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Contact Owner
                </a>
              </div>

              {/* Room Rental Plans Available */}
              <div>
                <h3 className="font-montserrat font-bold text-sm uppercase tracking-wider text-[#3d3234] mb-3">
                  Available Room Rental Plans
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {listing.roomRentalPlans.map((plan) => (
                    <div
                      key={plan.room_rental_plan_id}
                      onClick={() => setSelectedPlanType(plan.duration_type)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all ${
                        selectedPlanType === plan.duration_type
                          ? "border-[#162b83] bg-[#f0f3ff]"
                          : "border-[#e5e8ef] bg-white hover:border-[#162b83]/40"
                      }`}
                    >
                      <div className="text-[10px] font-montserrat font-bold uppercase tracking-wider text-[#162b83]">
                        {plan.plan_name}
                      </div>
                      <div className="font-montserrat font-extrabold text-base text-[#3d3234] mt-1">
                        Rs. {plan.price.toLocaleString()}
                      </div>
                      <div className="text-[10px] font-lato text-[#818181] capitalize">
                        Per {plan.duration_type === "daily" ? "day" : plan.duration_type === "weekly" ? "week" : "month"}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Booking Form */}
            <div className="lg:col-span-5">
              <div className="bg-[#f8f9fc] rounded-2xl p-5 sm:p-6 border border-[#e5e8ef] shadow-sm sticky top-4">
                {bookingSuccess ? (
                  <div className="text-center py-6">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-montserrat font-bold text-lg text-[#393a47] mb-2">
                      Booking Confirmed!
                    </h4>
                    <p className="font-lato text-xs text-[#626262] mb-4">
                      Customer <strong>{customerName}</strong> reserved <strong>{listing.title}</strong>.
                    </p>
                    <div className="p-3 bg-white rounded-lg border border-[#e5e8ef] text-xs font-lato text-[#393a47] mb-4 space-y-1.5 text-left">
                      <div className="flex items-center justify-between">
                        <span>Booking ID:</span> <strong>{bookingId}</strong>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Invoice ID:</span> <strong>{invoiceId}</strong>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Total Amount:</span> <strong>Rs. {totalAmount.toLocaleString()}</strong>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Payment Method:</span> <strong className="capitalize">{paymentMethod}</strong>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Payment Status:</span> <strong className="text-emerald-700">Pending Host Confirmation</strong>
                      </div>
                    </div>
                    <button
                      onClick={() => setBookingSuccess(false)}
                      className="btn-mountain-primary w-full py-2.5 rounded-lg text-xs"
                    >
                      Make Another Reservation
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-4">
                    <div className="border-b border-[#e5e8ef] pb-3">
                      <span className="text-[11px] font-montserrat font-bold uppercase tracking-wider text-[#818181]">
                        Select Rental Plan
                      </span>
                      <div className="grid grid-cols-3 gap-1.5 mt-2">
                        {(["daily", "weekly", "monthly"] as const).map((plan) => (
                          <button
                            key={plan}
                            type="button"
                            onClick={() => setSelectedPlanType(plan)}
                            className={`py-2 px-1 text-center rounded-lg text-xs font-montserrat font-bold uppercase transition-all ${
                              selectedPlanType === plan
                                ? "bg-[#162b83] text-white shadow-sm"
                                : "bg-white text-[#393a47] border border-[#e5e8ef] hover:bg-gray-50"
                            }`}
                          >
                            {plan}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Price display */}
                    <div className="flex items-baseline justify-between bg-white p-3 rounded-lg border border-[#e5e8ef]">
                      <span className="text-xs font-lato text-[#626262]">Rate:</span>
                      <div>
                        <span className="font-montserrat font-extrabold text-xl text-[#162b83]">
                          Rs. {unitPrice.toLocaleString()}
                        </span>
                        <span className="text-xs font-lato text-[#818181]">
                          {" "}
                          / {selectedPlanType === "daily" ? "day" : selectedPlanType === "weekly" ? "week" : "month"}
                        </span>
                      </div>
                    </div>

                    {/* Duration & Check-in / Check-out */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-montserrat font-bold uppercase tracking-wider text-[#393a47] mb-1">
                          Check-in Date
                        </label>
                        <input
                          type="date"
                          required
                          value={checkInDate}
                          onChange={(e) => setCheckInDate(e.target.value)}
                          className="w-full bg-white border border-[#e5e8ef] rounded-lg px-3 py-2 text-xs font-lato focus:outline-none focus:border-[#162b83]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-montserrat font-bold uppercase tracking-wider text-[#393a47] mb-1">
                          Check-out Date
                        </label>
                        <input
                          type="date"
                          required
                          value={checkOutDate}
                          onChange={(e) => setCheckOutDate(e.target.value)}
                          className="w-full bg-white border border-[#e5e8ef] rounded-lg px-3 py-2 text-xs font-lato focus:outline-none focus:border-[#162b83]"
                        />
                      </div>
                    </div>

                    {/* Customer Information (Customer table) */}
                    <div>
                      <label className="block text-[11px] font-montserrat font-bold uppercase tracking-wider text-[#393a47] mb-1">
                        Full Name (Customer)
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Kasun Fernando"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full bg-white border border-[#e5e8ef] rounded-lg px-3 py-2 text-xs font-lato focus:outline-none focus:border-[#162b83]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-montserrat font-bold uppercase tracking-wider text-[#393a47] mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="077 123 4567"
                          value={customerPhone}
                          onChange={(e) => setCustomerPhone(e.target.value)}
                          className="w-full bg-white border border-[#e5e8ef] rounded-lg px-3 py-2 text-xs font-lato focus:outline-none focus:border-[#162b83]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-montserrat font-bold uppercase tracking-wider text-[#393a47] mb-1">
                          NIC Number
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="199912345678"
                          value={customerNic}
                          onChange={(e) => setCustomerNic(e.target.value)}
                          className="w-full bg-white border border-[#e5e8ef] rounded-lg px-3 py-2 text-xs font-lato focus:outline-none focus:border-[#162b83]"
                        />
                      </div>
                    </div>

                    {/* Payment Method (Invoice table) */}
                    <div>
                      <label className="block text-[11px] font-montserrat font-bold uppercase tracking-wider text-[#393a47] mb-1">
                        Payment Method (Invoice)
                      </label>
                      <select
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value as any)}
                        className="w-full bg-white border border-[#e5e8ef] rounded-lg px-3 py-2 text-xs font-lato focus:outline-none focus:border-[#162b83]"
                      >
                        <option value="cash">Cash on Arrival</option>
                        <option value="bank_transfer">Bank Transfer</option>
                        <option value="card">Credit / Debit Card</option>
                        <option value="online">Online Payment Gateway</option>
                      </select>
                    </div>

                    {/* Total calculation */}
                    <div className="bg-white rounded-lg p-3 border border-[#e5e8ef] space-y-1.5 text-xs font-lato">
                      <div className="flex justify-between text-[#626262]">
                        <span>Room Rental ({selectedPlanType}):</span>
                        <span>Rs. {unitPrice.toLocaleString()}</span>
                      </div>
                      <div className="border-t border-[#f0f2f7] pt-1.5 flex justify-between font-montserrat font-bold text-sm text-[#162b83]">
                        <span>Total Invoice Amount:</span>
                        <span>Rs. {totalAmount.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Submit CTA */}
                    <button
                      type="submit"
                      className="w-full btn-mountain-primary py-3 rounded-lg text-xs flex items-center justify-center gap-2 shadow-md"
                    >
                      <Receipt className="w-3.5 h-3.5" />
                      Submit Booking & Generate Invoice
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Search,
  PlusCircle,
  X,
  Building,
} from "lucide-react";

interface HeroSectionProps {
  onSearch: (criteria: {
    location: string;
    moveInDate: string;
    rentalType: string;
    genderPreference?: string;
    maxBudget?: string;
  }) => void;
  onOpenListBoarding: () => void;
}

export default function HeroSection({
  onSearch,
  onOpenListBoarding,
}: HeroSectionProps) {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [selectedPlanTab, setSelectedPlanTab] = useState<
    "all" | "monthly" | "weekly" | "daily"
  >("all");
  const [location, setLocation] = useState("");
  const [moveInDate, setMoveInDate] = useState("");
  const [roomType, setRoomType] = useState("all");
  const [maxBudget, setMaxBudget] = useState("all");

  // Cities matching BoardingHouse table
  const popularCities = [
    "Colombo",
    "Moratuwa",
    "Malabe",
    "Nugegoda",
    "Kelaniya",
    "Kandy",
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSearchModal(false);
    onSearch({
      location: location.trim(),
      moveInDate,
      rentalType: selectedPlanTab,
      genderPreference: roomType,
      maxBudget,
    });
  };

  const handleQuickCity = (city: string) => {
    setLocation(city);
    setShowSearchModal(false);
    onSearch({
      location: city,
      moveInDate,
      rentalType: selectedPlanTab,
      genderPreference: roomType,
      maxBudget,
    });
  };

  const scrollToStays = () => {
    const el = document.getElementById("featured-listings");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="search-section" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#1f2230]">
      {/* 1. IMMERSIVE PANORAMIC BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/hero-boutique-villa.jpg"
          alt="Boutique Boarding House & Residence Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 animate-ken-burns"
        />

        {/* Dark Vignette Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/40 to-black/85" />
      </div>

      {/* 2. HERO CENTER CONTENT (Exact Alpine Template Layout & Typography) */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 text-center flex flex-col items-center justify-center">
        {/* Main Big Headline */}
        <h1 className="font-montserrat text-4xl sm:text-6xl lg:text-[70px] font-extrabold text-white uppercase tracking-tight leading-[1.12] drop-shadow-md max-w-5xl animate-fade-in-up">
          FIND A PLACE <span className="italic font-light">YOU&apos;LL</span> <br className="hidden sm:inline" />
          FEEL AT HOME!
        </h1>

        {/* Centered Thin Divider Line */}
        <div className="w-14 h-[2px] bg-white/75 my-6 animate-fade-in-scale delay-100" />

        {/* Subtitle */}
        <p className="font-lato italic text-base sm:text-xl text-white/95 max-w-3xl leading-relaxed drop-shadow-sm mb-10 animate-fade-in-up delay-200">
          Discover comfortable and affordable boarding houses, student accommodations, and study suites across Sri Lanka with zero broker fees.
        </p>

        {/* Centered Action Buttons (Video Tour removed) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto animate-fade-in-up delay-300">
          {/* FIND BOARDING Button (Solid Navy Blue #162b83) */}
          <button
            type="button"
            onClick={scrollToStays}
            className="w-full sm:w-auto bg-[#162b83] hover:bg-[#0f1e5c] text-white px-9 py-4 text-xs font-montserrat font-bold uppercase tracking-[0.14em] border border-[#162b83] transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] cursor-pointer"
          >
            FIND BOARDING
          </button>

          {/* LIST YOUR BOARDING Button (Transparent with White Outline, Inactive on click) */}
          <button
            type="button"
            onClick={() => {}}
            className="w-full sm:w-auto bg-transparent hover:bg-white hover:text-[#162b83] text-white border border-white/80 px-8 py-4 text-xs font-montserrat font-bold uppercase tracking-[0.14em] transition-all flex items-center justify-center gap-2.5 cursor-pointer hover:scale-[1.02]"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>LIST YOUR BOARDING</span>
          </button>
        </div>
      </div>

      {/* 3. BOTTOM FLOATING SEARCH BAR STRIP (City-based) */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-black/50 backdrop-blur-md border-t border-white/15 py-3.5 px-4 hidden md:block animate-fade-in delay-400">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 text-white text-xs">
          <div className="flex items-center gap-2">
            <span className="font-montserrat font-bold uppercase tracking-wider text-white/90 flex items-center gap-1.5">
              <Building className="w-4 h-4 text-[#187dee]" />
              Popular Cities:
            </span>
            {popularCities.map((city) => (
              <button
                key={city}
                type="button"
                onClick={() => {}}
                className="px-2.5 py-1 rounded bg-white/10 hover:bg-white hover:text-[#162b83] border border-white/20 transition-all font-lato text-xs"
              >
                {city}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => {}}
            className="font-montserrat font-bold uppercase tracking-wider text-[#187dee] hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Search Filter</span>
          </button>
        </div>
      </div>

      {/* 4. MODAL: SMART SEARCH & BOOKING FILTERS */}
      {showSearchModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#e5e8ef] relative">
            <button
              type="button"
              onClick={() => setShowSearchModal(false)}
              className="absolute top-4 right-4 p-2 text-[#818181] hover:text-[#3d3234]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="ui-small text-[#162b83] block mb-1">
                Accommodation Filter
              </span>
              <h3 className="ui-block-title text-2xl text-[#3d3234]">
                Search Verified Boarding
              </h3>
            </div>

            {/* Rental Plan Filter */}
            <div className="flex items-center gap-1.5 p-1 bg-[#f5f6f9] rounded border border-[#e5e8ef] mb-5">
              {(["all", "monthly", "weekly", "daily"] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setSelectedPlanTab(tab)}
                  className={`flex-1 py-2 text-xs font-montserrat font-bold uppercase transition-all rounded ${
                    selectedPlanTab === tab
                      ? "bg-[#162b83] text-white"
                      : "text-[#393a47] hover:bg-white"
                  }`}
                >
                  {tab === "all" ? "All Stays" : `${tab} Plan`}
                </button>
              ))}
            </div>

            <form onSubmit={handleSearchSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* City / Location (BoardingHouse.city) */}
                <div>
                  <label className="text-xs font-montserrat font-bold uppercase tracking-wider text-[#3d3234] block mb-1.5">
                    City / Address
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Colombo, Moratuwa, Malabe, Kandy"
                    className="w-full bg-[#f5f6f9] border border-[#e5e8ef] rounded px-3 py-2.5 text-xs text-[#393a47] focus:outline-none focus:border-[#162b83]"
                  />
                </div>

                {/* Move-in Date (Booking.check_in_date) */}
                <div>
                  <label className="text-xs font-montserrat font-bold uppercase tracking-wider text-[#3d3234] block mb-1.5">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    value={moveInDate}
                    onChange={(e) => setMoveInDate(e.target.value)}
                    className="w-full bg-[#f5f6f9] border border-[#e5e8ef] rounded px-3 py-2 text-xs text-[#393a47] focus:outline-none focus:border-[#162b83]"
                  />
                </div>

                {/* Room Type (Room.room_type) */}
                <div>
                  <label className="text-xs font-montserrat font-bold uppercase tracking-wider text-[#3d3234] block mb-1.5">
                    Room Type
                  </label>
                  <select
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                    className="w-full bg-[#f5f6f9] border border-[#e5e8ef] rounded px-3 py-2.5 text-xs text-[#393a47] focus:outline-none focus:border-[#162b83]"
                  >
                    <option value="all">All Room Types</option>
                    <option value="Single Room">Single Room</option>
                    <option value="Shared Room">Shared Room</option>
                    <option value="Studio Apartment">Studio Apartment</option>
                    <option value="Master Suite">Master Suite</option>
                  </select>
                </div>

                {/* Budget (RoomRentalPlan.price) */}
                <div>
                  <label className="text-xs font-montserrat font-bold uppercase tracking-wider text-[#3d3234] block mb-1.5">
                    Max Price (LKR)
                  </label>
                  <select
                    value={maxBudget}
                    onChange={(e) => setMaxBudget(e.target.value)}
                    className="w-full bg-[#f5f6f9] border border-[#e5e8ef] rounded px-3 py-2.5 text-xs text-[#393a47] focus:outline-none focus:border-[#162b83]"
                  >
                    <option value="all">Any Budget</option>
                    <option value="15000">Under Rs. 15,000</option>
                    <option value="25000">Rs. 15,000 – 25,000</option>
                    <option value="35000">Rs. 25,000 – 35,000</option>
                    <option value="50000">Premium Rs. 35,000+</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowSearchModal(false)}
                  className="px-4 py-2.5 text-xs font-montserrat font-bold uppercase text-[#818181] hover:text-[#3d3234]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-mountain-primary px-6 py-3 text-xs"
                >
                  Apply Filters & Search
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

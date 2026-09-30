"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Star,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  SlidersHorizontal,
  Eye,
  User,
  Phone,
} from "lucide-react";
import { BoardingListing } from "@/types/boarding";
import { BOARDING_LISTINGS } from "@/lib/boardingData";

interface FeaturedListingsSectionProps {
  onSelectListing: (listing: BoardingListing) => void;
  onExploreAll: () => void;
}

export default function FeaturedListingsSection({
  onSelectListing,
  onExploreAll,
}: FeaturedListingsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [priceViewMode, setPriceViewMode] = useState<"monthly" | "weekly" | "daily">("monthly");

  const filterTabs = [
    { id: "all", label: "All Stays" },
    { id: "colombo", label: "Colombo" },
    { id: "moratuwa", label: "Moratuwa" },
    { id: "malabe", label: "Malabe" },
    { id: "nugegoda", label: "Nugegoda" },
    { id: "kandy", label: "Kandy" },
  ];

  const filteredListings = BOARDING_LISTINGS.filter((item) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "colombo") return item.city.toLowerCase() === "colombo";
    if (activeFilter === "moratuwa") return item.city.toLowerCase() === "moratuwa";
    if (activeFilter === "malabe") return item.city.toLowerCase() === "malabe";
    if (activeFilter === "nugegoda") return item.city.toLowerCase() === "nugegoda";
    if (activeFilter === "kandy") return item.city.toLowerCase() === "kandy";
    return true;
  });

  return (
    <section id="featured-listings" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#162b83]/8 border border-[#162b83]/15 text-xs font-montserrat font-bold uppercase tracking-[0.14em] text-[#162b83] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Verified Accommodations
            </div>
            <h2 className="font-montserrat text-3xl sm:text-4xl font-extrabold text-[#3d3234] uppercase tracking-tight">
              Featured Boarding Houses & Rooms
            </h2>
            <p className="font-lato text-base text-[#626262] mt-2 max-w-2xl">
              Browse verified rooms, suites, and boarding houses with transparent rental plans.
            </p>
          </div>

          {/* Pricing Switcher (Monthly / Weekly / Daily) */}
          <div className="flex items-center gap-2 bg-[#f5f6f9] p-1.5 rounded-xl border border-[#e5e8ef] self-start md:self-auto">
            <span className="text-[11px] font-montserrat font-bold uppercase tracking-wider text-[#818181] px-2 hidden sm:inline">
              Rate:
            </span>
            {(["monthly", "weekly", "daily"] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setPriceViewMode(mode)}
                className={`px-3 py-1.5 rounded-lg text-xs font-montserrat font-bold uppercase tracking-wide transition-all ${
                  priceViewMode === mode
                    ? "bg-[#162b83] text-white shadow-sm"
                    : "text-[#4a4c5d] hover:text-[#162b83]"
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        {/* Filter Tabs Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <SlidersHorizontal className="w-4 h-4 text-[#818181] shrink-0 mr-1 hidden sm:block" />
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-montserrat font-bold uppercase tracking-wider whitespace-nowrap transition-all border ${
                activeFilter === tab.id
                  ? "bg-[#162b83] text-white border-[#162b83] shadow-sm"
                  : "bg-white text-[#4a4c5d] border-[#e5e8ef] hover:border-[#162b83] hover:text-[#162b83]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid of Boarding Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredListings.map((listing) => {
            const displayPrice =
              priceViewMode === "daily"
                ? `Rs. ${(listing.pricing.daily || 1500).toLocaleString()}`
                : priceViewMode === "weekly"
                ? `Rs. ${(listing.pricing.weekly || 8500).toLocaleString()}`
                : `Rs. ${(listing.pricing.monthly || 22000).toLocaleString()}`;

            const periodLabel =
              priceViewMode === "daily" ? "/ day" : priceViewMode === "weekly" ? "/ week" : "/ mo";

            return (
              <div
                key={listing.id}
                onClick={() => {}}
                className="bg-white rounded-2xl border border-[#e5e8ef] shadow-sm hover-lift-subtle card-mountain-hover overflow-hidden flex flex-col cursor-pointer group transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={listing.images[0]}
                    alt={listing.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md text-[#162b83] text-[11px] font-montserrat font-extrabold uppercase tracking-wider shadow-sm animate-pulse-badge">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Verified
                    </span>
                  </div>

                  {/* Room Type & Capacity Badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="px-2.5 py-0.5 rounded bg-[#162b83]/85 backdrop-blur-md text-[10px] font-montserrat font-bold uppercase tracking-wider">
                      {listing.roomType}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[10px] font-montserrat font-semibold flex items-center gap-1">
                      <User className="w-3 h-3" />
                      Capacity: {listing.capacity} {listing.capacity === 1 ? "Person" : "Persons"}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Location and Ratings */}
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <p className="flex items-center gap-1 text-xs font-lato font-semibold text-[#162b83]">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        {listing.city}
                      </p>
                      <div className="flex items-center gap-1 text-xs font-montserrat font-bold text-[#162b83]">
                        <Star className="w-3.5 h-3.5 fill-[#162b83] text-[#162b83]" />
                        <span>{listing.rating}</span>
                        <span className="text-[#818181] font-normal text-[11px]">
                          ({listing.reviewsCount})
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-montserrat font-bold text-base text-[#3d3234] leading-snug group-hover:text-[#162b83] transition-colors mb-2 line-clamp-1">
                      {listing.title}
                    </h3>

                    {/* Address & Boarding House details */}
                    <div className="p-2.5 rounded-lg bg-[#f8f9fc] border border-[#e5e8ef] text-[11px] font-lato text-[#626262] mb-3 space-y-1">
                      <div>
                        <strong>Address:</strong> {listing.address}
                      </div>
                      <div>
                        <strong>Boarding House:</strong> {listing.boardingName} ({listing.roomNumber})
                      </div>
                    </div>

                    {/* Landlord details snippet */}
                    <div className="flex items-center justify-between text-[11px] font-lato text-[#4a4c5d] mb-4 px-1">
                      <span className="flex items-center gap-1 font-semibold text-[#3d3234]">
                        <User className="w-3.5 h-3.5 text-[#162b83]" />
                        {listing.landlord.name}
                      </span>
                      <span className="flex items-center gap-1 text-[#162b83]">
                        <Phone className="w-3 h-3" />
                        {listing.contactNo}
                      </span>
                    </div>
                  </div>

                  {/* Pricing and Action Footer */}
                  <div className="pt-4 border-t border-[#f0f2f7] flex items-center justify-between gap-3">
                    <div>
                      <div className="font-montserrat font-extrabold text-lg text-[#162b83]">
                        {displayPrice}
                        <span className="text-xs font-lato font-normal text-[#818181]">
                          {" "}
                          {periodLabel}
                        </span>
                      </div>
                      <span className="text-[10px] font-lato text-[#626262] font-semibold block">
                        Status: <span className="text-emerald-700 capitalize">{listing.status}</span>
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className="btn-mountain-primary py-2 px-3.5 rounded-lg text-xs flex items-center gap-1.5 shadow-sm"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      View
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All CTAs */}
        <div className="mt-14 text-center">
          <button
            type="button"
            onClick={() => {}}
            className="btn-mountain-secondary px-8 py-3.5 rounded-xl text-xs font-montserrat font-bold inline-flex items-center gap-2 shadow-sm"
          >
            <span>Explore All Boarding Accommodations</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

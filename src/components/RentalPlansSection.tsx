"use client";

import React from "react";
import Image from "next/image";
import { Clock, CalendarDays, Home, ArrowRight, Check } from "lucide-react";

interface RentalPlansSectionProps {
  onExplorePlan: (planType: "daily" | "weekly" | "monthly") => void;
}

export default function RentalPlansSection({ onExplorePlan }: RentalPlansSectionProps) {
  const plans = [
    {
      id: "daily" as const,
      name: "DAILY",
      term: "SHORT TERM",
      tagline: "Short Visits & Quick Stays",
      description: "Flexible stays for short visits.",
      icon: Clock,
      image: "/images/daily-stay.jpg",
      priceGuide: "From Rs. 1,500 / day",
      features: [
        "Flexible day-by-day booking",
        "Instant check-in available",
        "Furnished room & fresh linens",
        "High-speed Wi-Fi included",
      ],
      badgeColor: "bg-[#eef2ff] text-[#162b83] border-[#162b83]/20",
    },
    {
      id: "weekly" as const,
      name: "WEEKLY",
      term: "SHORT TERM",
      tagline: "Temporary & Business Visits",
      description: "Convenient accommodation for weekly stays.",
      icon: CalendarDays,
      image: "/images/weekly-stay.jpg",
      priceGuide: "From Rs. 8,500 / week",
      features: [
        "Discounted weekly packages",
        "Dedicated work / study desk",
        "Utility bills & electricity included",
        "Weekly cleaning service",
      ],
      badgeColor: "bg-[#eef2ff] text-[#162b83] border-[#162b83]/20",
      featured: true,
    },
    {
      id: "monthly" as const,
      name: "MONTHLY",
      term: "LONG TERM",
      tagline: "Students & Working Professionals",
      description: "Comfortable long-term accommodation.",
      icon: Home,
      image: "/images/monthly-stay.jpg",
      priceGuide: "From Rs. 22,000 / month",
      features: [
        "Maximum long-term savings",
        "Verified landlord contracts",
        "Private or shared room options",
        "Access to kitchen & laundry",
      ],
      badgeColor: "bg-[#f0f9ff] text-[#0369a1] border-[#0284c7]/20",
    },
  ];

  return (
    <section id="rental-plans" className="py-20 lg:py-28 bg-[#f5f6f9] border-t border-b border-[#e5e8ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#e5e8ef] text-xs font-montserrat font-bold uppercase tracking-[0.14em] text-[#162b83] mb-4 shadow-sm">
            Tailored Accommodation Plans
          </div>
          <h2 className="font-montserrat text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#3d3234] uppercase tracking-tight mb-4">
            Flexible Rental Plans
          </h2>
          <p className="font-lato text-base sm:text-lg text-[#626262] leading-relaxed">
            Choose a rental option that works for your stay.
          </p>
        </div>

        {/* Categorization Legend */}
        <div className="flex justify-center items-center gap-6 mb-10 text-xs font-montserrat font-bold uppercase tracking-wider text-[#818181]">
          <span className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#162b83]" />
            Short Term (Daily & Weekly)
          </span>
          <span className="text-[#c5cbd8]">|</span>
          <span className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0284c7]" />
            Long Term (Monthly)
          </span>
        </div>

        {/* 3 Rental Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.id}
                className={`bg-white rounded-2xl border ${
                  plan.featured
                    ? "border-[#162b83] shadow-xl shadow-[#162b83]/12 relative ring-2 ring-[#162b83]/20"
                    : "border-[#e5e8ef] shadow-md shadow-black/3"
                } card-mountain-hover hover-lift-subtle flex flex-col overflow-hidden group transition-all duration-300`}
              >
                {/* Visual Image Header */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={plan.image}
                    alt={`${plan.name} Boarding Rental Plan`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Term Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-md text-[10px] font-montserrat font-extrabold uppercase tracking-wider bg-white/95 backdrop-blur-md text-[#162b83] shadow-sm">
                      {plan.term}
                    </span>
                  </div>

                  {/* Plan Name & Icon overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-montserrat font-extrabold text-xl tracking-tight text-white uppercase">
                          {plan.name}
                        </h3>
                        <p className="text-[11px] font-lato text-white/90">
                          {plan.tagline}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Short Description */}
                    <p className="font-lato text-sm text-[#626262] font-medium leading-relaxed mb-5">
                      “{plan.description}”
                    </p>

                    {/* Price Guide Indicator */}
                    <div className="py-2.5 px-3.5 rounded-lg bg-[#f8f9fc] border border-[#e5e8ef] text-xs font-montserrat font-bold text-[#162b83] mb-5">
                      {plan.priceGuide}
                    </div>

                    {/* Feature bullet list */}
                    <ul className="space-y-2.5 mb-6">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs font-lato text-[#393a47]">
                          <Check className="w-3.5 h-3.5 text-[#162b83] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Explore Button (Inactive on click) */}
                  <button
                    type="button"
                    onClick={() => {}}
                    className={`w-full py-3 px-4 rounded-lg font-montserrat text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                      plan.featured
                        ? "btn-mountain-primary shadow-sm"
                        : "btn-mountain-secondary"
                    }`}
                  >
                    <span>Explore {plan.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

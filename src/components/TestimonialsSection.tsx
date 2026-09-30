"use client";

import React from "react";
import { Star, Quote, Building, MapPin, Users } from "lucide-react";

export default function TestimonialsSection() {
  const stats = [
    { label: "Verified Rooms & Suites", value: "1,450+", icon: Building },
    { label: "Tenants Housed", value: "6,200+", icon: Users },
    { label: "Cities & Towns Covered", value: "25+", icon: MapPin },
    { label: "Average Rating", value: "4.92 / 5", icon: Star },
  ];

  const testimonials = [
    {
      name: "Sandun Wickramatunga",
      role: "Software Engineer",
      institution: "Moratuwa",
      imageText: "SW",
      rating: 5,
      comment:
        "Finding a safe boarding place with uninterrupted electricity and high-speed Wi-Fi in Moratuwa used to be difficult with street brokers. With BoardingLK, I booked directly with Mr. Bandara in just 10 minutes. The photos were 100% accurate!",
      planUsed: "Monthly Stay • Moratuwa",
    },
    {
      name: "Dilini Jayasinghe",
      role: "Student",
      institution: "Malabe",
      imageText: "DJ",
      rating: 5,
      comment:
        "Safety was my parents’ number one concern when I moved from Kandy to Malabe. The verified landlord badge and physical room details on BoardingLK gave my family complete peace of mind. Highly recommended!",
      planUsed: "Monthly Stay • Malabe",
    },
    {
      name: "Kavinda Alwis",
      role: "Management Trainee",
      institution: "Colombo 03",
      imageText: "KA",
      rating: 5,
      comment:
        "I needed a clean, air-conditioned studio in Colombo 03 for a 2-month training program. The weekly plan was so convenient and much more affordable than booking a hotel. The digital receipts made corporate reimbursement effortless.",
      planUsed: "Weekly Stay • Colombo 03",
    },
    {
      name: "Mrs. Pushpalatha Samarasekara",
      role: "Boarding House Owner",
      institution: "Moratuwa (5 Rooms)",
      imageText: "PS",
      rating: 5,
      comment:
        "I have rented rooms for over 15 years. Since listing on BoardingLK, my vacancies get filled in less than 48 hours with polite, verified tenants. The platform is straightforward and effective.",
      planUsed: "Boarding Host Since 2024",
    },
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#f5f6f9] border-t border-b border-[#e5e8ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Live Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#e5e8ef] shadow-sm flex flex-col items-center text-center hover-lift-subtle transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#f0f3ff] text-[#162b83] flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-[#162b83] group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6 stroke-[1.75]" />
                </div>
                <span className="font-montserrat font-extrabold text-2xl sm:text-3xl text-[#162b83] mb-1">
                  {stat.value}
                </span>
                <span className="font-lato text-xs text-[#626262] uppercase tracking-wider font-semibold">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#e5e8ef] text-xs font-montserrat font-bold uppercase tracking-[0.14em] text-[#162b83] mb-4 shadow-sm animate-pulse-badge">
            <Star className="w-3.5 h-3.5 fill-[#162b83]" />
            Tenant & Host Experiences
          </div>
          <h2 className="font-montserrat text-3xl sm:text-4xl font-extrabold text-[#3d3234] uppercase tracking-tight mb-4">
            Trusted by Tenants & Landlords
          </h2>
          <p className="font-lato text-base sm:text-lg text-[#626262] leading-relaxed">
            Read how BoardingLK is making accommodation simple, safe, and stress-free across Sri Lanka.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-[#e5e8ef] shadow-sm hover:shadow-xl hover-lift-subtle transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#162b83]/10 group-hover:scale-120 group-hover:text-[#162b83]/20 transition-all duration-300" />

              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="font-lato text-sm text-[#4a4c5d] leading-relaxed mb-6 italic">
                  “{item.comment}”
                </p>
              </div>

              <div className="pt-4 border-t border-[#f0f2f7] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#162b83] text-white flex items-center justify-center font-montserrat font-bold text-xs shadow-sm">
                    {item.imageText}
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-sm text-[#3d3234]">
                      {item.name}
                    </h4>
                    <p className="text-xs font-lato text-[#818181]">
                      {item.role} • {item.institution}
                    </p>
                  </div>
                </div>

                <span className="hidden sm:inline-block text-[11px] font-montserrat font-semibold text-[#162b83] bg-[#f0f3ff] px-2.5 py-1 rounded border border-[#162b83]/15">
                  {item.planUsed}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import {
  ShieldCheck,
  Ban,
  Clock,
  ReceiptText,
  Headset,
  CheckCircle2,
  Lock,
} from "lucide-react";

export default function WhyChooseUsSection() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "100% In-Person Verification",
      description:
        "Every single boarding house, studio, and room listed on BoardingLK is physically inspected by our verification team to ensure photos, facilities, and hygiene are authentic.",
      badge: "Zero Fake Photos",
    },
    {
      icon: Ban,
      title: "Zero Broker Commissions",
      description:
        "Skip informal street brokers and avoid paying 50% first-month commission fees. Connect and book directly with genuine, vetted boarding owners.",
      badge: "Save Rs. 15,000+",
    },
    {
      icon: Clock,
      title: "Flexible Stay Durations",
      description:
        "Whether you need a room for 2 days for short travel, 3 weeks for an internship, or 12 months for long-term living, find tailored rental plans instantly.",
      badge: "Daily, Weekly & Monthly",
    },
    {
      icon: Lock,
      title: "Student & Female Safety First",
      description:
        "We prioritize tenant security with verified owner identification, clearly listed curfew rules, CCTV monitoring notices, and warden contact credentials.",
      badge: "Strict Safety Protocols",
    },
    {
      icon: ReceiptText,
      title: "Digital Invoices & Receipts",
      description:
        "Keep a clear, undisputed record of all rental payments, security deposits, and move-in checklists directly accessible through your BoardingLK tenant dashboard.",
      badge: "Transparent Records",
    },
    {
      icon: Headset,
      title: "Dedicated Local Support",
      description:
        "Our Colombo-based customer care team is available 7 days a week in Sinhala, English, and Tamil to assist you with move-in queries or landlord communications.",
      badge: "7 Days a Week",
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#f0f3ff] rounded-full blur-3xl -translate-y-1/2 -z-0" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#f0f3ff] rounded-full blur-3xl -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#162b83]/8 border border-[#162b83]/15 text-xs font-montserrat font-bold uppercase tracking-[0.14em] text-[#162b83] mb-4">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Sri Lanka’s Trusted Accommodation Standard
          </div>
          <h2 className="font-montserrat text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#3d3234] uppercase tracking-tight mb-4">
            Why Book With Boarding<span className="text-[#162b83]">LK</span>?
          </h2>
          <p className="font-lato text-base sm:text-lg text-[#626262] leading-relaxed">
            We are solving the challenges of finding boarding in Sri Lanka with transparency, security, and peace of mind.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#f8f9fc] rounded-2xl p-7 border border-[#e5e8ef] hover:border-[#162b83] hover:bg-white hover:shadow-xl hover-lift-subtle transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#e5e8ef] text-[#162b83] flex items-center justify-center shadow-sm group-hover:bg-[#162b83] group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <span className="text-[10px] font-montserrat font-extrabold uppercase tracking-wider text-[#162b83] bg-[#eef2ff] px-2.5 py-1 rounded-full border border-[#162b83]/15">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="font-montserrat font-bold text-lg text-[#3d3234] mb-3 group-hover:text-[#162b83] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="font-lato text-sm text-[#626262] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-[#e5e8ef] flex items-center gap-1.5 text-xs font-montserrat font-bold text-[#162b83]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Guarantee</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

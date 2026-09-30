"use client";

import React from "react";
import { PlusCircle, CheckCircle2, TrendingUp } from "lucide-react";

interface OwnerBannerSectionProps {
  onOpenListBoarding: () => void;
}

export default function OwnerBannerSection({
  onOpenListBoarding,
}: OwnerBannerSectionProps) {
  return (
    <section id="owner-banner" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#162b83] via-[#102166] to-[#0a1647] rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
          {/* Subtle background glow & geometric accent with breathing animation */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-[#187dee]/25 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
          <div className="absolute bottom-0 left-1/3 -mb-16 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none animate-pulse-glow delay-300" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-montserrat font-bold uppercase tracking-wider text-white">
                <TrendingUp className="w-3.5 h-3.5 text-[#90b8ff]" />
                For Boarding House & Annex Landlords
              </div>

              <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-[42px] leading-[1.2] uppercase tracking-tight text-white">
                Rent Your Rooms Faster to <br className="hidden sm:inline" />
                <span className="text-[#90b8ff]">Verified Tenants</span>
              </h2>

              <p className="font-lato text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
                Join hundreds of trusted boarding owners across Colombo, Moratuwa, Malabe, Kelaniya, and Kandy. Fill your room vacancies with zero broker cuts.
              </p>

              {/* Owner benefits checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-lato text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-[#90b8ff] shrink-0" />
                  <span>100% Free property listing</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-lato text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-[#90b8ff] shrink-0" />
                  <span>Verified tenant screening</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-lato text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-[#90b8ff] shrink-0" />
                  <span>Direct phone & WhatsApp inquiries</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-lato text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-[#90b8ff] shrink-0" />
                  <span>Average 48-hour room occupancy</span>
                </div>
              </div>
            </div>

            {/* Right Action Button Box */}
            <div className="lg:col-span-4 flex flex-col items-start lg:items-center justify-center">
              <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/20 w-full text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-white text-[#162b83] flex items-center justify-center mx-auto shadow-lg">
                  <PlusCircle className="w-7 h-7" />
                </div>
                <h3 className="font-montserrat font-bold text-lg text-white">
                  Got a Vacant Room?
                </h3>
                <p className="text-xs font-lato text-white/80">
                  Takes less than 2 minutes to publish your boarding details.
                </p>
                <button
                  type="button"
                  onClick={() => {}}
                  className="w-full py-3.5 px-6 rounded-xl bg-white text-[#162b83] hover:bg-[#f0f3ff] font-montserrat font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <PlusCircle className="w-4 h-4" />
                  List Your Property Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

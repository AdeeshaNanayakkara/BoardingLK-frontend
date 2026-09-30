"use client";

import React from "react";
import Image from "next/image";
import {
  Smartphone,
  Receipt,
  KeyRound,
  ArrowRight,
} from "lucide-react";

interface HowItWorksSectionProps {
  onOpenListBoarding?: () => void;
}

export default function HowItWorksSection({
  onOpenListBoarding,
}: HowItWorksSectionProps) {
  const steps = [
    {
      stepNumber: "01",
      icon: Smartphone,
      title: "CHOOSE YOUR PLAN",
      description:
        "Select your ideal Daily, Weekly, or Monthly rental plan tailored to your duration and budget.",
      actionLabel: "EXPLORE PLANS",
      actionHref: "#rental-plans",
    },
    {
      stepNumber: "02",
      icon: Receipt,
      title: "BOOK & GET INVOICE",
      description:
        "Reserve directly with verified landlords and generate your instant digital invoice with zero broker fees.",
      actionLabel: "FIND BOARDINGS",
      actionHref: "#featured-listings",
    },
    {
      stepNumber: "03",
      icon: KeyRound,
      title: "MOVE IN & ENJOY",
      description:
        "Hassle-free key handover, inspected facilities, and direct host contact to make you feel right at home.",
      actionLabel: "LIST PROPERTY",
      isOwnerTrigger: true,
    },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="how-it-works"
      className="relative py-24 lg:py-32 overflow-hidden bg-[#1f2230] text-white"
    >
      {/* 1. PHOTOGRAPHIC BACKGROUND WITH AMBIENT BLUR & VIGNETTE */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/hero-modern-apartment.jpg"
          alt="BoardingLK Accommodation Background"
          fill
          sizes="100vw"
          className="object-cover object-center scale-105 filter blur-[1px] animate-ken-burns"
          priority={false}
        />
        {/* Dark Cinematic Vignette Gradient Overlay matching the reference */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/85" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* 2. SECTION CONTENT CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Stacked Bold Title & Subtext */}
          <div className="lg:col-span-4 flex flex-col justify-center text-center lg:text-left">
            <h2 className="font-montserrat text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase leading-[1.02] tracking-tight drop-shadow-md">
              HOW<br />
              IT<br />
              WORKS
            </h2>
            <p className="font-lato text-sm sm:text-base text-white/80 leading-relaxed mt-5 max-w-sm mx-auto lg:mx-0">
              Discover, book, and move into verified boarding accommodations across Sri Lanka with transparent rental plans and zero broker fees.
            </p>
          </div>

          {/* Right Column: 3 Frosted Glassmorphism Step Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;

              return (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-white/15 hover:bg-white/15 hover:border-white/30 hover:scale-[1.03] transition-all duration-300 text-center flex flex-col items-center justify-between shadow-2xl group min-h-[300px] hover-lift-subtle"
                >
                  <div className="flex flex-col items-center w-full">
                    {/* Top Center: Vibrant Emerald Circular Badge with Line Icon */}
                    <div className="w-16 h-16 rounded-full bg-[#10b981] text-white flex items-center justify-center mb-5 shadow-lg shadow-[#10b981]/40 group-hover:scale-115 group-hover:bg-[#059669] transition-all duration-300 animate-pulse-badge">
                      <Icon className="w-8 h-8 stroke-[2.2]" />
                    </div>

                    {/* Step Card Title */}
                    <h3 className="font-montserrat font-extrabold text-base sm:text-lg text-white uppercase tracking-tight mb-2.5">
                      {step.title}
                    </h3>

                    {/* Step Card Description */}
                    <p className="font-lato text-xs sm:text-sm text-white/80 leading-relaxed mb-6 font-normal">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom Action Link with Arrow */}
                  <div className="pt-2 w-full flex justify-center">
                    {step.isOwnerTrigger ? (
                      <button
                        type="button"
                        onClick={onOpenListBoarding}
                        className="inline-flex items-center gap-1.5 text-xs font-montserrat font-extrabold uppercase tracking-wider text-emerald-400 group-hover:text-emerald-300 transition-colors focus:outline-none"
                      >
                        <span>{step.actionLabel}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                      </button>
                    ) : (
                      <a
                        href={step.actionHref}
                        onClick={(e) => scrollToSection(e, step.actionHref?.replace("#", "") || "")}
                        className="inline-flex items-center gap-1.5 text-xs font-montserrat font-extrabold uppercase tracking-wider text-emerald-400 group-hover:text-emerald-300 transition-colors"
                      >
                        <span>{step.actionLabel}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

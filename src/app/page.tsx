"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedListingsSection from "@/components/FeaturedListingsSection";
import RentalPlansSection from "@/components/RentalPlansSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OwnerBannerSection from "@/components/OwnerBannerSection";
import FAQSection from "@/components/FAQSection";

import Footer from "@/components/Footer";
import Modals from "@/components/Modals";
import ListingDetailModal from "@/components/ListingDetailModal";
import { BoardingListing } from "@/types/boarding";

export default function Home() {
  // Modal states
  const [authModal, setAuthModal] = useState<{
    isOpen: boolean;
    tab: "login" | "register";
  } | null>(null);

  const [listBoardingOpen, setListBoardingOpen] = useState(false);

  const [searchExplorer, setSearchExplorer] = useState<{
    isOpen: boolean;
    location?: string;
    rentalType?: string;
    moveInDate?: string;
    planType?: "daily" | "weekly" | "monthly";
  } | null>(null);

  const [infoModal, setInfoModal] = useState<{
    isOpen: boolean;
    title: string;
    content: string;
  } | null>(null);

  const [selectedListing, setSelectedListing] = useState<BoardingListing | null>(
    null
  );

  // Search handler from Hero Section & Navbar
  const handleSearch = (criteria: {
    location: string;
    moveInDate: string;
    rentalType: string;
    genderPreference?: string;
    maxBudget?: string;
    planType?: "daily" | "weekly" | "monthly";
  }) => {
    const plan =
      criteria.planType ||
      (criteria.rentalType === "daily" ||
      criteria.rentalType === "weekly" ||
      criteria.rentalType === "monthly"
        ? criteria.rentalType
        : undefined);

    setSearchExplorer({
      isOpen: true,
      location: criteria.location,
      moveInDate: criteria.moveInDate,
      rentalType: criteria.rentalType,
      planType: plan,
    });
  };

  // Explore handler from Rental Plans Section
  const handleExplorePlan = (planType: "daily" | "weekly" | "monthly") => {
    setSearchExplorer({
      isOpen: true,
      planType,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#393a47] font-sans antialiased selection:bg-[#162b83] selection:text-white">
      {/* 1. NAVBAR */}
      <Navbar
        onOpenAuth={(tab) => setAuthModal({ isOpen: true, tab })}
        onOpenListBoarding={() => setListBoardingOpen(true)}
        onQuickSearch={(loc) =>
          handleSearch({ location: loc, moveInDate: "", rentalType: "all" })
        }
      />

      {/* MAIN HOMEPAGE SECTIONS */}
      <main className="flex-1">
        {/* 2. HERO SECTION */}
        <HeroSection
          onSearch={handleSearch}
          onOpenListBoarding={() => setListBoardingOpen(true)}
        />

        {/* 3. FEATURED BOARDING HOUSES & ROOMS */}
        <FeaturedListingsSection
          onSelectListing={(listing) => setSelectedListing(listing)}
          onExploreAll={() => setSearchExplorer({ isOpen: true })}
        />

        {/* 4. RENTAL PLANS (DAILY, WEEKLY, MONTHLY) */}
        <RentalPlansSection onExplorePlan={handleExplorePlan} />

        {/* 5. HOW IT WORKS */}
        <HowItWorksSection
          onOpenListBoarding={() => setListBoardingOpen(true)}
        />

        {/* 6. WHY CHOOSE BOARDINGLK */}
        <WhyChooseUsSection />

        {/* 7. REVIEWS & TESTIMONIALS */}
        <TestimonialsSection />

        {/* 8. LANDLORD ONBOARDING BANNER */}
        <OwnerBannerSection
          onOpenListBoarding={() => setListBoardingOpen(true)}
        />

        {/* 9. FREQUENTLY ASKED QUESTIONS */}
        <FAQSection />


      </main>

      {/* 11. FOOTER */}
      <Footer
        onOpenAuth={(tab) => setAuthModal({ isOpen: true, tab })}
        onOpenListBoarding={() => setListBoardingOpen(true)}
        onOpenInfoModal={(title, content) =>
          setInfoModal({ isOpen: true, title, content })
        }
      />

      {/* Interactive Modals */}
      <Modals
        authModal={authModal}
        onCloseAuth={() => setAuthModal(null)}
        listBoardingOpen={listBoardingOpen}
        onCloseListBoarding={() => setListBoardingOpen(false)}
        searchExplorer={searchExplorer}
        onCloseSearchExplorer={() => setSearchExplorer(null)}
        infoModal={infoModal}
        onCloseInfoModal={() => setInfoModal(null)}
      />

      {/* Detailed Room & Booking Modal */}
      <ListingDetailModal
        listing={selectedListing}
        onClose={() => setSelectedListing(null)}
        onOpenAuth={(tab) => setAuthModal({ isOpen: true, tab })}
      />
    </div>
  );
}

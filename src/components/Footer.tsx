"use client";

import React from "react";
import Link from "next/link";
import { Building2, ArrowUpRight } from "lucide-react";

interface FooterProps {
  onOpenAuth: (tab: "login" | "register") => void;
  onOpenListBoarding: () => void;
  onOpenInfoModal: (title: string, content: string) => void;
}

export default function Footer({ onOpenAuth, onOpenListBoarding, onOpenInfoModal }: FooterProps) {
  return (
    <footer id="about" className="bg-[#1f2230] text-[#c5cbd8] pt-16 pb-12 border-t border-[#2e3245]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#2e3245]">
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group" aria-label="BoardingLK Home">
              <div className="w-10 h-10 rounded-lg bg-[#187dee] text-white flex items-center justify-center shadow-lg shadow-[#187dee]/20">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="font-montserrat font-extrabold text-2xl tracking-tight text-white">
                Boarding<span className="text-[#187dee]">LK</span>
              </span>
            </Link>

            <p className="font-lato text-sm text-[#9ca3af] leading-relaxed mb-6 max-w-sm">
              “Making it easier to find a place you can call home.”
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-[#2b2f42] hover:bg-[#187dee] text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-[#2b2f42] hover:bg-[#e1306c] text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-[#2b2f42] hover:bg-[#0077b5] text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Col */}
          <div className="lg:col-span-2">
            <h4 className="font-montserrat font-bold text-xs uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-lato">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="#search-section" className="hover:text-white transition-colors">
                  Find Boarding
                </a>
              </li>
              <li>
                <a href="#rental-plans" className="hover:text-white transition-colors">
                  Rental Plans
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <button
                  onClick={() =>
                    onOpenInfoModal(
                      "About Us",
                      "BoardingLK is Sri Lanka's dedicated boarding and accommodation platform. We connect seekers with vetted boarding owners across island-wide cities and prime residential zones."
                    )
                  }
                  className="hover:text-white transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    onOpenInfoModal(
                      "Contact Us",
                      "Get in touch with our Colombo HQ team at support@boardinglk.com or call +94 (11) 234-5678 (Mon - Sat, 8:00 AM - 7:00 PM)."
                    )
                  }
                  className="hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* For Owners Col */}
          <div className="lg:col-span-2">
            <h4 className="font-montserrat font-bold text-xs uppercase tracking-wider text-white mb-4">
              For Owners
            </h4>
            <ul className="space-y-2.5 text-sm font-lato">
              <li>
                <button
                  onClick={onOpenListBoarding}
                  className="text-[#187dee] hover:underline font-semibold flex items-center gap-1 text-left"
                >
                  List Your Boarding
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenAuth("login")}
                  className="hover:text-white transition-colors text-left"
                >
                  Owner Login
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    onOpenInfoModal(
                      "Owner Verification Guidelines",
                      "All boarding properties listed on BoardingLK undergo physical or digital verification to ensure student & tenant safety."
                    )
                  }
                  className="hover:text-white transition-colors text-left"
                >
                  Verification Rules
                </button>
              </li>
            </ul>
          </div>

          {/* Support Col */}
          <div className="lg:col-span-2">
            <h4 className="font-montserrat font-bold text-xs uppercase tracking-wider text-white mb-4">
              Support
            </h4>
            <ul className="space-y-2.5 text-sm font-lato">
              <li>
                <button
                  onClick={() =>
                    onOpenInfoModal(
                      "Help Center",
                      "Welcome to BoardingLK Support. Here you can find help with booking inquiries, deposit refunds, move-in procedures, and owner communications."
                    )
                  }
                  className="hover:text-white transition-colors text-left"
                >
                  Help Center
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    onOpenInfoModal(
                      "Frequently Asked Questions",
                      "Q: How do I book a room?\nA: Choose your boarding, select daily/weekly/monthly plan, and submit your booking request.\n\nQ: Are bills included?\nA: Yes, all verified boarding profiles clearly list utility inclusions."
                    )
                  }
                  className="hover:text-white transition-colors text-left"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    onOpenInfoModal(
                      "Contact Support",
                      "Direct line: +94 (11) 234-5678\nEmail: help@boardinglk.com\nAddress: High Level Road, Colombo 05, Sri Lanka."
                    )
                  }
                  className="hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Col */}
          <div className="lg:col-span-2">
            <h4 className="font-montserrat font-bold text-xs uppercase tracking-wider text-white mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5 text-sm font-lato">
              <li>
                <button
                  onClick={() =>
                    onOpenInfoModal(
                      "Privacy Policy",
                      "BoardingLK strictly protects your personal information and contact details. Your data is encrypted and only shared with confirmed boarding hosts upon booking."
                    )
                  }
                  className="hover:text-white transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    onOpenInfoModal(
                      "Terms & Conditions",
                      "By using BoardingLK, you agree to respectful boarding conduct, timely payment of agreed rentals, and verified identification."
                    )
                  }
                  className="hover:text-white transition-colors text-left"
                >
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-lato text-[#818181]">
          <p>© 2026 BoardingLK. All rights reserved.</p>
          <p className="text-[11px] font-montserrat uppercase tracking-wider">
            Modern Accommodation & Boarding Management
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
} from "lucide-react";

interface NavbarProps {
  onOpenAuth: (tab: "login" | "register") => void;
  onOpenListBoarding: () => void;
  onQuickSearch?: (location: string) => void;
}

export default function Navbar({
  onOpenAuth,
  onOpenListBoarding,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#162b83]/95 backdrop-blur-md shadow-lg py-3 border-b border-white/10"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* 1. BRAND LOGO PNG AS HOME BUTTON */}
          <Link
            href="/"
            onClick={scrollToTop}
            className="flex items-center shrink-0 group focus:outline-none transition-transform duration-200 hover:scale-105"
            aria-label="BoardingLK Home"
          >
            <div className="relative h-11 sm:h-12 md:h-13 w-44 sm:w-52 md:w-56 flex items-center">
              <Image
                src="/images/logo.png"
                alt="BoardingLK Logo"
                fill
                priority
                unoptimized
                sizes="(max-width: 640px) 176px, (max-width: 768px) 208px, 224px"
                className="object-contain object-left drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] brightness-105"
              />
            </div>
          </Link>

          {/* 2. CENTER NAVIGATION LINKS (HOW IT WORKS & REVIEWS REMOVED, LOGIN ADDED NEXT TO FAQ) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 shrink-0">
            <a
              href="#featured-listings"
              onClick={(e) => scrollToSection(e, "featured-listings")}
              className="text-xs font-montserrat font-bold uppercase tracking-[0.14em] text-white/90 hover:text-white transition-colors py-1 whitespace-nowrap"
            >
              ROOMS & BOARDINGS
            </a>

            <a
              href="#rental-plans"
              onClick={(e) => scrollToSection(e, "rental-plans")}
              className="text-xs font-montserrat font-bold uppercase tracking-[0.14em] text-white/90 hover:text-white transition-colors py-1 whitespace-nowrap"
            >
              RENTAL PLANS
            </a>

            <a
              href="#faq"
              onClick={(e) => scrollToSection(e, "faq")}
              className="text-xs font-montserrat font-bold uppercase tracking-[0.14em] text-white/90 hover:text-white transition-colors py-1 whitespace-nowrap"
            >
              FAQ
            </a>

            <button
              type="button"
              onClick={() => {}}
              className="text-xs font-montserrat font-bold uppercase tracking-[0.14em] text-white/90 hover:text-white transition-colors py-1 whitespace-nowrap"
            >
              LOGIN
            </button>
          </nav>

          {/* 3. RIGHT SECTION: LIST PROPERTY & SOCIAL MEDIA ICONS AT THE RIGHT CORNER */}
          <div className="hidden md:flex items-center gap-5 text-white shrink-0">
            {/* List Property Action Button (Inactive on click) */}
            <button
              type="button"
              onClick={() => {}}
              className="px-3.5 py-1.5 text-[11px] font-montserrat font-bold uppercase tracking-[0.1em] text-white border border-white/40 hover:bg-white hover:text-[#162b83] transition-all rounded-xs shadow-sm"
            >
              + List Property
            </button>

            <div className="h-4 w-[1px] bg-white/20" />

            {/* Social Media Icons Moved to the Right Corner */}
            <div className="flex items-center gap-3.5">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/80 hover:text-white hover:scale-110 transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.592 9 4.615V8z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/80 hover:text-white hover:scale-110 transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-white/80 hover:text-white hover:scale-110 transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-white/80 hover:text-white hover:scale-110 transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* 4. MOBILE HAMBURGER BUTTON */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              type="button"
              onClick={() => {}}
              className="text-[11px] font-montserrat font-bold uppercase tracking-wider text-white border border-white/40 px-2.5 py-1"
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#162b83] border-t border-white/10 px-6 py-6 shadow-2xl animate-fadeIn text-white">
          <div className="flex flex-col space-y-3.5">
            <a
              href="#featured-listings"
              onClick={(e) => scrollToSection(e, "featured-listings")}
              className="font-montserrat text-xs font-bold uppercase tracking-[0.15em] py-1 border-b border-white/10"
            >
              ROOMS & BOARDINGS
            </a>
            <a
              href="#rental-plans"
              onClick={(e) => scrollToSection(e, "rental-plans")}
              className="font-montserrat text-xs font-bold uppercase tracking-[0.15em] py-1 border-b border-white/10"
            >
              RENTAL PLANS
            </a>
            <a
              href="#faq"
              onClick={(e) => scrollToSection(e, "faq")}
              className="font-montserrat text-xs font-bold uppercase tracking-[0.15em] py-1 border-b border-white/10"
            >
              FAQ
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="font-montserrat text-xs font-bold uppercase tracking-[0.15em] py-1 border-b border-white/10 text-left"
            >
              LOGIN
            </button>

            <div className="pt-3 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-white text-[#162b83] py-3 text-xs font-montserrat font-bold uppercase tracking-widest"
              >
                + LIST YOUR PROPERTY
              </button>

              {/* Mobile Social icons row */}
              <div className="flex items-center justify-center gap-5 pt-2 text-white/80">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.592 9 4.615V8z" />
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

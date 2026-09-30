"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  X,
  Building2,
  PlusCircle,
  MapPin,
  Star,
  CheckCircle2,
  User,
  ShieldCheck,
} from "lucide-react";
import { BOARDING_LISTINGS } from "@/lib/boardingData";

interface ModalsProps {
  authModal: { isOpen: boolean; tab: "login" | "register" } | null;
  onCloseAuth: () => void;
  listBoardingOpen: boolean;
  onCloseListBoarding: () => void;
  searchExplorer: {
    isOpen: boolean;
    location?: string;
    rentalType?: string;
    moveInDate?: string;
    planType?: "daily" | "weekly" | "monthly";
  } | null;
  onCloseSearchExplorer: () => void;
  infoModal: { isOpen: boolean; title: string; content: string } | null;
  onCloseInfoModal: () => void;
}

export default function Modals({
  authModal,
  onCloseAuth,
  listBoardingOpen,
  onCloseListBoarding,
  searchExplorer,
  onCloseSearchExplorer,
  infoModal,
  onCloseInfoModal,
}: ModalsProps) {
  // Auth state
  const [authTab, setAuthTab] = useState<"login" | "register">(
    authModal?.tab || "login"
  );
  const [authEmail, setAuthEmail] = useState("");
  const [authPassword, setAuthPassword] = useState("");
  const [authFullName, setAuthFullName] = useState("");
  const [authPhone, setAuthPhone] = useState("");
  const [authNic, setAuthNic] = useState("");
  const [authRole, setAuthRole] = useState<"customer" | "landlord">("customer");
  const [authSuccess, setAuthSuccess] = useState(false);

  // List boarding state (Landlord, BoardingHouse, Room, RoomRentalPlan)
  const [ownerFullName, setOwnerFullName] = useState("");
  const [ownerPhone, setOwnerPhone] = useState("");
  const [ownerNic, setOwnerNic] = useState("");
  const [boardingName, setBoardingName] = useState("");
  const [boardingCity, setBoardingCity] = useState("Colombo");
  const [boardingAddress, setBoardingAddress] = useState("");
  const [roomNumber, setRoomNumber] = useState("Room 101");
  const [roomType, setRoomType] = useState("Single Room");
  const [roomCapacity, setRoomCapacity] = useState(1);
  const [planType, setPlanType] = useState<"daily" | "weekly" | "monthly">("monthly");
  const [planPrice, setPlanPrice] = useState("20000");
  const [ownerSubmitted, setOwnerSubmitted] = useState(false);

  // Explorer state
  const [selectedBookingItem, setSelectedBookingItem] = useState<string | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  return (
    <>
      {/* 1. AUTH MODAL (LOGIN / REGISTER) */}
      {authModal?.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative border border-[#e5e8ef]">
            <button
              onClick={onCloseAuth}
              className="absolute top-4 right-4 text-[#818181] hover:text-[#162b83] p-1.5 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded bg-[#162b83] text-white flex items-center justify-center">
                <Building2 className="w-4 h-4" />
              </div>
              <span className="font-montserrat font-bold text-lg text-[#162b83]">
                BoardingLK
              </span>
            </div>

            {authSuccess ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-[#eef2ff] text-[#162b83] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-montserrat font-bold text-xl text-[#393a47] mb-2">
                  Welcome to BoardingLK!
                </h3>
                <p className="font-lato text-sm text-[#626262] mb-6">
                  You have successfully {authTab === "login" ? "logged in" : "registered as a " + authRole}.
                </p>
                <button
                  onClick={() => {
                    setAuthSuccess(false);
                    onCloseAuth();
                  }}
                  className="btn-mountain-primary w-full py-2.5 rounded-lg text-xs"
                >
                  Continue
                </button>
              </div>
            ) : (
              <>
                {/* Tabs */}
                <div className="flex border-b border-[#e5e8ef] mb-6">
                  <button
                    onClick={() => setAuthTab("login")}
                    className={`flex-1 pb-3 font-montserrat font-bold text-xs uppercase tracking-wider text-center transition-colors relative ${
                      authTab === "login"
                        ? "text-[#162b83] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#162b83]"
                        : "text-[#818181] hover:text-[#393a47]"
                    }`}
                  >
                    Login
                  </button>
                  <button
                    onClick={() => setAuthTab("register")}
                    className={`flex-1 pb-3 font-montserrat font-bold text-xs uppercase tracking-wider text-center transition-colors relative ${
                      authTab === "register"
                        ? "text-[#162b83] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#162b83]"
                        : "text-[#818181] hover:text-[#393a47]"
                    }`}
                  >
                    Register
                  </button>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setAuthSuccess(true);
                  }}
                  className="space-y-3.5"
                >
                  {authTab === "register" && (
                    <>
                      <div>
                        <label className="block text-xs font-montserrat font-bold uppercase tracking-wider text-[#393a47] mb-1">
                          Role (User Table)
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => setAuthRole("customer")}
                            className={`py-2 text-xs font-montserrat font-semibold rounded-lg border text-center transition-all ${
                              authRole === "customer"
                                ? "bg-[#162b83] text-white border-[#162b83]"
                                : "bg-[#f8f9fc] text-[#393a47] border-[#e5e8ef]"
                            }`}
                          >
                            Customer (Tenant)
                          </button>
                          <button
                            type="button"
                            onClick={() => setAuthRole("landlord")}
                            className={`py-2 text-xs font-montserrat font-semibold rounded-lg border text-center transition-all ${
                              authRole === "landlord"
                                ? "bg-[#162b83] text-white border-[#162b83]"
                                : "bg-[#f8f9fc] text-[#393a47] border-[#e5e8ef]"
                            }`}
                          >
                            Landlord (Owner)
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-montserrat font-bold uppercase tracking-wider text-[#393a47] mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={authFullName}
                          onChange={(e) => setAuthFullName(e.target.value)}
                          placeholder="e.g. Kasun Perera"
                          className="w-full bg-[#f8f9fc] border border-[#e5e8ef] rounded-lg px-3.5 py-2 text-xs font-lato focus:bg-white focus:outline-none focus:border-[#162b83]"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-xs font-montserrat font-bold uppercase tracking-wider text-[#393a47] mb-1">
                            Phone
                          </label>
                          <input
                            type="tel"
                            required
                            value={authPhone}
                            onChange={(e) => setAuthPhone(e.target.value)}
                            placeholder="077 123 4567"
                            className="w-full bg-[#f8f9fc] border border-[#e5e8ef] rounded-lg px-3 py-2 text-xs font-lato focus:bg-white focus:outline-none focus:border-[#162b83]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-montserrat font-bold uppercase tracking-wider text-[#393a47] mb-1">
                            NIC
                          </label>
                          <input
                            type="text"
                            required
                            value={authNic}
                            onChange={(e) => setAuthNic(e.target.value)}
                            placeholder="199512345678"
                            className="w-full bg-[#f8f9fc] border border-[#e5e8ef] rounded-lg px-3 py-2 text-xs font-lato focus:bg-white focus:outline-none focus:border-[#162b83]"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  <div>
                    <label className="block text-xs font-montserrat font-bold uppercase tracking-wider text-[#393a47] mb-1">
                      Email Address (User.email)
                    </label>
                    <input
                      type="email"
                      required
                      value={authEmail}
                      onChange={(e) => setAuthEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full bg-[#f8f9fc] border border-[#e5e8ef] rounded-lg px-3.5 py-2 text-xs font-lato focus:bg-white focus:outline-none focus:border-[#162b83]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-montserrat font-bold uppercase tracking-wider text-[#393a47] mb-1">
                      Password (User.password_hash)
                    </label>
                    <input
                      type="password"
                      required
                      value={authPassword}
                      onChange={(e) => setAuthPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full bg-[#f8f9fc] border border-[#e5e8ef] rounded-lg px-3.5 py-2 text-xs font-lato focus:bg-white focus:outline-none focus:border-[#162b83]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-mountain-primary py-3 rounded-lg text-xs mt-2"
                  >
                    {authTab === "login" ? "Sign In" : "Register Account"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* 2. LIST YOUR BOARDING MODAL (FOR LANDLORDS) */}
      {listBoardingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-[#e5e8ef] my-8 max-h-[92vh] overflow-y-auto">
            <button
              onClick={onCloseListBoarding}
              className="absolute top-4 right-4 text-[#818181] hover:text-[#162b83] p-1.5 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-md bg-[#eef2ff] text-[#162b83]">
                <PlusCircle className="w-5 h-5" />
              </span>
              <h3 className="font-montserrat font-bold text-xl text-[#393a47] uppercase tracking-tight">
                List Boarding & Room
              </h3>
            </div>
            <p className="font-lato text-xs text-[#626262] mb-6">
              Create Landlord, BoardingHouse, Room & RoomRentalPlan database records.
            </p>

            {ownerSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-[#eef2ff] text-[#162b83] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="font-montserrat font-bold text-lg text-[#393a47] mb-2">
                  Boarding House Listed!
                </h4>
                <p className="font-lato text-sm text-[#626262] mb-6">
                  <strong>{boardingName}</strong> ({roomNumber}) has been added under Landlord <strong>{ownerFullName}</strong>.
                </p>
                <button
                  onClick={() => {
                    setOwnerSubmitted(false);
                    onCloseListBoarding();
                  }}
                  className="btn-mountain-primary w-full py-2.5 rounded-lg text-xs"
                >
                  Done
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setOwnerSubmitted(true);
                }}
                className="space-y-4"
              >
                {/* Landlord Section */}
                <div className="p-3 bg-[#f8f9fc] rounded-lg border border-[#e5e8ef] space-y-2.5">
                  <span className="text-[11px] font-montserrat font-bold uppercase tracking-wider text-[#162b83] block">
                    1. Landlord Information
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      required
                      placeholder="Landlord Name"
                      value={ownerFullName}
                      onChange={(e) => setOwnerFullName(e.target.value)}
                      className="bg-white border border-[#e5e8ef] rounded px-3 py-2 text-xs font-lato"
                    />
                    <input
                      type="text"
                      required
                      placeholder="NIC Number"
                      value={ownerNic}
                      onChange={(e) => setOwnerNic(e.target.value)}
                      className="bg-white border border-[#e5e8ef] rounded px-3 py-2 text-xs font-lato"
                    />
                  </div>
                  <input
                    type="tel"
                    required
                    placeholder="Contact Phone Number"
                    value={ownerPhone}
                    onChange={(e) => setOwnerPhone(e.target.value)}
                    className="w-full bg-white border border-[#e5e8ef] rounded px-3 py-2 text-xs font-lato"
                  />
                </div>

                {/* BoardingHouse Section */}
                <div className="p-3 bg-[#f8f9fc] rounded-lg border border-[#e5e8ef] space-y-2.5">
                  <span className="text-[11px] font-montserrat font-bold uppercase tracking-wider text-[#162b83] block">
                    2. Boarding House Details
                  </span>
                  <input
                    type="text"
                    required
                    placeholder="Boarding House Name (e.g. Royal Palm Residence)"
                    value={boardingName}
                    onChange={(e) => setBoardingName(e.target.value)}
                    className="w-full bg-white border border-[#e5e8ef] rounded px-3 py-2 text-xs font-lato"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      required
                      placeholder="City (e.g. Colombo, Moratuwa)"
                      value={boardingCity}
                      onChange={(e) => setBoardingCity(e.target.value)}
                      className="bg-white border border-[#e5e8ef] rounded px-3 py-2 text-xs font-lato"
                    />
                    <input
                      type="text"
                      required
                      placeholder="Address"
                      value={boardingAddress}
                      onChange={(e) => setBoardingAddress(e.target.value)}
                      className="bg-white border border-[#e5e8ef] rounded px-3 py-2 text-xs font-lato"
                    />
                  </div>
                </div>

                {/* Room & Pricing Section */}
                <div className="p-3 bg-[#f8f9fc] rounded-lg border border-[#e5e8ef] space-y-2.5">
                  <span className="text-[11px] font-montserrat font-bold uppercase tracking-wider text-[#162b83] block">
                    3. Room & Rental Plan
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    <input
                      type="text"
                      required
                      placeholder="Room No (e.g. Rm 101)"
                      value={roomNumber}
                      onChange={(e) => setRoomNumber(e.target.value)}
                      className="bg-white border border-[#e5e8ef] rounded px-2.5 py-2 text-xs font-lato"
                    />
                    <select
                      value={roomType}
                      onChange={(e) => setRoomType(e.target.value)}
                      className="bg-white border border-[#e5e8ef] rounded px-2 py-2 text-xs font-lato"
                    >
                      <option value="Single Room">Single Room</option>
                      <option value="Shared Room">Shared Room</option>
                      <option value="Studio Apartment">Studio Apartment</option>
                      <option value="Master Suite">Master Suite</option>
                    </select>
                    <input
                      type="number"
                      min="1"
                      placeholder="Capacity"
                      value={roomCapacity}
                      onChange={(e) => setRoomCapacity(parseInt(e.target.value) || 1)}
                      className="bg-white border border-[#e5e8ef] rounded px-2.5 py-2 text-xs font-lato"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <select
                      value={planType}
                      onChange={(e) => setPlanType(e.target.value as any)}
                      className="bg-white border border-[#e5e8ef] rounded px-2.5 py-2 text-xs font-lato"
                    >
                      <option value="daily">Daily Rental Plan</option>
                      <option value="weekly">Weekly Rental Plan</option>
                      <option value="monthly">Monthly Rental Plan</option>
                    </select>
                    <input
                      type="number"
                      required
                      placeholder="Price (LKR)"
                      value={planPrice}
                      onChange={(e) => setPlanPrice(e.target.value)}
                      className="bg-white border border-[#e5e8ef] rounded px-2.5 py-2 text-xs font-lato"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-mountain-primary w-full py-3 rounded-lg text-xs"
                >
                  Save Boarding & Room Record
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* 3. SEARCH EXPLORER MODAL */}
      {searchExplorer?.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-3 sm:p-6 animate-fadeIn overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl relative border border-[#e5e8ef] my-6 max-h-[90vh] flex flex-col">
            <button
              onClick={onCloseSearchExplorer}
              className="absolute top-4 right-4 text-[#818181] hover:text-[#162b83] p-1.5 rounded-full hover:bg-gray-100 transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="border-b border-[#e5e8ef] pb-4 mb-6">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#eef2ff] text-[11px] font-montserrat font-bold uppercase tracking-wider text-[#162b83] mb-2">
                Verified Listings
              </div>
              <h3 className="font-montserrat font-extrabold text-2xl text-[#3d3234] uppercase tracking-tight">
                Available Boarding Accommodations
              </h3>
              <p className="font-lato text-xs sm:text-sm text-[#626262]">
                {searchExplorer.location ? `Matching location: "${searchExplorer.location}"` : "Explore curated top-rated rooms in Sri Lanka."}
              </p>
            </div>

            {/* Booking confirmation notice */}
            {bookingConfirmed && (
              <div className="mb-4 p-4 rounded-xl bg-[#eef2ff] border border-[#162b83]/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#162b83] shrink-0" />
                  <div>
                    <h5 className="font-montserrat font-bold text-xs text-[#162b83] uppercase tracking-wider">
                      Booking Request Received!
                    </h5>
                    <p className="font-lato text-xs text-[#393a47]">
                      The host of <strong>{BOARDING_LISTINGS.find(l => l.id === selectedBookingItem)?.title || "your selected room"}</strong> will contact you directly to confirm your check-in.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setBookingConfirmed(false);
                    setSelectedBookingItem(null);
                  }}
                  className="text-xs font-montserrat font-bold text-[#162b83] hover:underline shrink-0"
                >
                  Dismiss
                </button>
              </div>
            )}

            {/* Listings Grid */}
            <div className="overflow-y-auto flex-1 pr-1 space-y-4">
              {BOARDING_LISTINGS.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl border border-[#e5e8ef] p-4 sm:p-5 hover:border-[#162b83] hover:shadow-md transition-all flex flex-col sm:flex-row gap-5 items-center"
                >
                  <div className="relative w-full sm:w-48 h-36 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                    <Image
                      src={item.images[0]}
                      alt={item.title}
                      fill
                      sizes="200px"
                      className="object-cover"
                    />
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-white/90 text-[10px] font-montserrat font-bold uppercase tracking-wide text-[#162b83]">
                      {item.roomType}
                    </span>
                  </div>

                  <div className="flex-1 flex flex-col justify-between w-full">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className="font-montserrat font-bold text-base text-[#393a47]">
                          {item.title}
                        </h4>
                        <div className="flex items-center gap-1 text-xs font-montserrat font-bold text-[#162b83]">
                          <Star className="w-3.5 h-3.5 fill-[#162b83] text-[#162b83]" />
                          <span>{item.rating}</span>
                        </div>
                      </div>

                      <p className="flex items-center gap-1.5 text-xs font-lato text-[#626262] mb-2">
                        <MapPin className="w-3.5 h-3.5 text-[#162b83]" />
                        {item.city} • {item.address}
                      </p>

                      <div className="text-xs font-lato text-[#626262] mb-3">
                        <strong>Host:</strong> {item.landlord.name} ({item.contactNo})
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-[#f0f2f7] gap-3">
                      <div>
                        <span className="text-xs font-montserrat font-bold text-[#162b83]">
                          Rs. {(item.pricing.monthly || 22000).toLocaleString()} / mo
                        </span>
                      </div>
                      <button
                        onClick={() => {
                          setSelectedBookingItem(item.id);
                          setBookingConfirmed(true);
                        }}
                        className="btn-mountain-primary py-2 px-4 rounded text-xs"
                      >
                        Book This Stay
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 4. GENERAL INFO MODAL */}
      {infoModal?.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative border border-[#e5e8ef]">
            <button
              onClick={onCloseInfoModal}
              className="absolute top-4 right-4 text-[#818181] hover:text-[#162b83] p-1.5 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-montserrat font-bold text-xl text-[#393a47] uppercase tracking-tight mb-4">
              {infoModal.title}
            </h3>

            <div className="font-lato text-sm text-[#626262] leading-relaxed whitespace-pre-line mb-6">
              {infoModal.content}
            </div>

            <button
              onClick={onCloseInfoModal}
              className="btn-mountain-primary w-full py-2.5 rounded-lg text-xs"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

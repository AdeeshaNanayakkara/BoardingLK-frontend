"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does BoardingLK verify boarding houses and rooms?",
      answer:
        "Every boarding house on BoardingLK undergoes a dual verification process. We physically send local field inspectors to verify the room conditions, cleanliness, electrical/water facilities, and security measures. Furthermore, host national identities (NIC/Passport) and property ownership/lease deeds are verified prior to listing.",
    },
    {
      question: "Are electricity, water, and Wi-Fi bills included in the rental price?",
      answer:
        "Most monthly boarding listings on BoardingLK clearly state if utilities are inclusive. For short-term (daily and weekly) stays, all electricity, water, and high-speed Wi-Fi are 100% included with no extra surcharges. For monthly stays, any separate sub-meter charges (e.g. heavy AC usage) are transparently disclosed on each listing card.",
    },
    {
      question: "Can I book a room for just a few days or a week?",
      answer:
        "Yes! BoardingLK offers flexible rental plans including Daily Stays (ideal for short stays, visits, or exams) and Weekly Stays (ideal for internship periods and temporary projects), alongside traditional long-term Monthly Stays.",
    },
    {
      question: "How do security deposits (key money) work?",
      answer:
        "Unlike informal brokers who often demand 6–12 months key money, verified hosts on BoardingLK generally request only 1 month refundable security deposit for long-term stays. Daily and weekly stays require zero security deposit.",
    },
    {
      question: "What safety protocols exist for female students and girls' boardings?",
      answer:
        "Girls-only residences on BoardingLK require strict access controls, resident female wardens or host families on site, secure boundary gates, and verified visitor guidelines. Male visitors are strictly restricted to public common areas during designated daytime hours.",
    },
    {
      question: "How do I schedule an in-person room visit?",
      answer:
        "You can directly call or message the verified boarding owner via the phone contact button on any listing card. Alternatively, submit a booking inquiry and the host will arrange a convenient time for you and your parents to visit.",
    },
    {
      question: "Is there any commission or service fee charged to seekers?",
      answer:
        "No! BoardingLK is completely free for boarding seekers and students. You pay 0% commission to brokers. You deal directly with the property owner at agreed transparent rates.",
    },
  ];

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#162b83]/8 border border-[#162b83]/15 text-xs font-montserrat font-bold uppercase tracking-[0.14em] text-[#162b83] mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Clear Answers & Guidance
          </div>
          <h2 className="font-montserrat text-3xl sm:text-4xl font-extrabold text-[#3d3234] uppercase tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-lato text-base text-[#626262] leading-relaxed">
            Everything you need to know about finding, booking, and living in a verified boarding place.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-[#162b83] bg-[#fbfcfd] shadow-sm"
                    : "border-[#e5e8ef] bg-white hover:border-[#162b83]/40"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-montserrat font-bold text-sm sm:text-base text-[#393a47] pr-2">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#162b83] text-white rotate-180"
                        : "bg-[#f0f3ff] text-[#162b83]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 font-lato text-sm text-[#626262] leading-relaxed border-t border-[#f0f2f7] animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Help box */}
        <div className="mt-12 p-6 rounded-2xl bg-[#f8f9fc] border border-[#e5e8ef] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#162b83] text-white flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-montserrat font-bold text-sm text-[#3d3234]">
                Still have questions?
              </h4>
              <p className="text-xs font-lato text-[#626262]">
                Our local support team is here to guide you 7 days a week.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {}}
            className="btn-mountain-primary px-5 py-2.5 rounded-lg text-xs whitespace-nowrap shadow-sm cursor-pointer"
          >
            Call +94 (11) 234-5678
          </button>
        </div>
      </div>
    </section>
  );
}

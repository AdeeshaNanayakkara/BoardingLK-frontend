# BoardingLK — Boarding Management & Accommodation Platform

<p align="center">
  <strong>Find a Place You'll Feel at Home</strong><br />
  A modern, high-performance web platform for discovering, booking, and managing verified boarding houses, student accommodations, and residential annexes across Sri Lanka.
</p>

---

## 🌟 Key Features

### 1. 🔍 Comprehensive Smart Search & Multi-criteria Explorer
- **Location-based Search**: Filter by major university hubs and commercial cities (Moratuwa, Malabe, Colombo 03/07, Kelaniya, Nugegoda, Kandy, etc.).
- **Flexible Move-in Date & Rate Filters**: Switch effortlessly between Daily, Weekly, and Monthly stays with real-time rate adjustments.
- **Gender & Room Preference**: Filter by Girls-only, Boys-only, or Mixed accommodations, as well as Single Rooms, Shared Rooms, Studio Apartments, and Master Suites.

### 2. 🛡️ 100% In-Person Verification & Quality Guarantee
- Dual verification system (Physical inspection of amenities, hygiene, security & host NIC / deed verification).
- Transparent badge indicators (`100% Verified`, `Bills Included`, `Top Rated Host`).
- Curfew guidelines, security protocols, and female warden credentials for peace of mind.

### 3. 🗓️ Flexible Rental Plans
- **Daily Stays (Short-Term)**: Ideal for students sitting university exams, viva, workshops, or quick city visits.
- **Weekly Stays (Flexible)**: Designed for internship rotations, corporate training, and short research visits.
- **Monthly Stays (Long-Term)**: Best value for university undergraduates and long-term working professionals with zero broker fees.

### 4. 🛏️ Interactive Room Detail & Live Booking Modal
- Multi-image gallery with high-resolution view and thumbnail navigation.
- Dynamic duration and bill calculator with refundable deposit estimates.
- Instant booking request submission with reference code generation.
- Direct host contact button (Phone & WhatsApp).

### 5. 🏡 Property Landlord & Owner Onboarding
- Free listing submission form for property owners and landlords.
- Direct tenant lead delivery with 0% broker commission cuts.
- Average 48-hour occupancy matching.

### 6. 🔔 Instant Vacancy Notification System
- Campus-specific vacancy alerts sent via WhatsApp and Email when new inspected rooms are published.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 16 (Turbopack, App Router)](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS design system tokens
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Google Fonts (`Montserrat` for headings, `Lato` for body text)
- **Language**: TypeScript 5

---

## 📂 Project Architecture

```plaintext
BoardingLK_frontend/
├── public/
│   └── images/                     # Optimized property & accommodation images
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root HTML, SEO metadata, fonts & viewport configuration
│   │   └── page.tsx                # Main Landing Page with stateful modal orchestration
│   ├── components/
│   │   ├── Navbar.tsx              # Sticky navigation with mobile drawer & Auth/List triggers
│   │   ├── HeroSection.tsx         # Hero banner, smart search form, and trust indicators
│   │   ├── FeaturedListingsSection.tsx # Verified property cards with dynamic price switcher
│   │   ├── ExploreLocationsSection.tsx # University campus zones & regional hub selector
│   │   ├── RentalPlansSection.tsx  # Daily, Weekly, and Monthly rental tier breakdown
│   │   ├── HowItWorksSection.tsx   # 4-step Search → Explore → Book → Stay guide
│   │   ├── WhyChooseUsSection.tsx  # 6 trust pillars and security standards
│   │   ├── TestimonialsSection.tsx # Social proof, tenant stories & platform statistics
│   │   ├── OwnerBannerSection.tsx  # Landlord onboarding CTA & direct benefits
│   │   ├── FAQSection.tsx          # Interactive accordion FAQ
│   │   ├── BoardingAlertsSection.tsx # Campus vacancy notification signup
│   │   ├── Footer.tsx              # Footer navigation, legal links & contact modals
│   │   ├── ListingDetailModal.tsx  # Interactive room modal with dynamic price calculator
│   │   └── Modals.tsx              # Auth (Login/Register), List Boarding & Explorer modals
│   ├── lib/
│   │   └── boardingData.ts         # Mock dataset of verified properties & university hubs
│   ├── styles/
│   │   └── globals.css             # Theme variables, custom scrollbars, typography utilities
│   └── types/
│       └── boarding.ts             # TypeScript interfaces for listings, plans, and hosts
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18+ or 20+ installed
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repo-url>
cd BoardingLK_frontend

# Install dependencies
npm install
```

### Running Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Building for Production
```bash
npm run build
npm run start
```

### Running Linting & Type Checks
```bash
npm run lint
```

---

## 📄 License
Private repository for BoardingLK. All rights reserved.
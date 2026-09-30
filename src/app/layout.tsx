import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#162b83",
};

export const metadata: Metadata = {
  title: "BoardingLK | Boarding Management & Booking Platform",
  description:
    "Find and book comfortable, affordable boarding houses and rooms in Sri Lanka. Flexible daily, weekly, and monthly rental plans for students, professionals, and visitors.",
  keywords: [
    "Boarding LK",
    "Boarding management Sri Lanka",
    "Find boarding house",
    "Rooms for rent",
    "Student boarding",
    "Daily weekly monthly boarding",
    "Accommodation booking",
  ],
  authors: [{ name: "BoardingLK" }],
  openGraph: {
    title: "BoardingLK - Find a Place You'll Feel at Home",
    description:
      "Discover comfortable and affordable boarding houses that match your needs, location and budget. Search, explore, and book easily.",
    type: "website",
    locale: "en_US",
    siteName: "BoardingLK",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <body className="min-h-screen bg-white text-[#393a47] font-sans selection:bg-[#162b83] selection:text-white flex flex-col">
        {children}
      </body>
    </html>
  );
}

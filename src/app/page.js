
import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import RoomListingSlider from "@/components/sections/RoomListingSlider";
import DealSection from "@/components/sections/DealSection";
export default function Home() {
  return (
    <main className="py-5">
      <HeroSection/>
      <DealSection/>
    </main>
  );
}

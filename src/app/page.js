
import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import RoomListingSlider from "@/components/sections/RoomListingSlider";
import DealSection from "@/components/sections/DealSection";
import ExploreSection from "@/components/sections/ExploreSection";
export default function Home() {
  return (
    <main>
      <HeroSection/>
      <DealSection/>
      <ExploreSection/>
    </main>
  );
}

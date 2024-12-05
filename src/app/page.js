
import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import RoomListingSlider from "@/components/sections/RoomListingSlider";
import Section1 from "@/components/sections/Section1";
export default function Home() {
  return (
    <main className="py-5">
      <HeroSection/>
      <Section1/>
    </main>
  );
}

import RoomListingSlider from '@/components/sections/RoomListingSlider'
import React from 'react'
import { Poppins } from 'next/font/google'

const poppins= Poppins({
  subsets:["latin"],
  weight: ["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"]
})
export default function page() {
  return (
    <div>
      <h2 className={`text-4xl font-bold my-2 mx-5 ${poppins.className}`}>Explore</h2>
      <RoomListingSlider/>
    </div>
  )
}

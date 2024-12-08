"use client"
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
export default function CityDrops() {

    return (
        <div className="mt-16 h-12 w-full flex justify-around items-center">
            <Link href={"/"} className="text-base hover:bg-gray-300 px-2 py-1 rounded-md font-semibold text-black"><FaLocationDot size={20} /></Link>
            <div className="flex justify-around items-center overflow-x-auto w-[90%] lg:w-[80%]">
                <Link href={"/"} className="text-base hover:bg-gray-300 px-2 py-1 rounded-md font-semibold text-black">Jalgaon</Link>
                <Link href={"/"} className="text-base hover:bg-gray-300 px-2 py-1 rounded-md font-semibold text-black">Pune</Link>
                <Link href={"/"} className="text-base hover:bg-gray-300 px-2 py-1 rounded-md font-semibold text-black">Mumbai</Link>
                <Link href={"/"} className="text-base hover:bg-gray-300 px-2 py-1 rounded-md font-semibold text-black">Banglore</Link>
                <Link href={"/"} className="text-base hover:bg-gray-300 px-2 py-1 rounded-md font-semibold text-black">Kolkata</Link>
                <Link href={"/"} className="text-base hover:bg-gray-300 px-2 py-1 rounded-md font-semibold text-black">Noida</Link>
                <Link href={"/"} className="text-base hover:bg-gray-300 px-2 py-1 rounded-md font-semibold text-black">Delhi</Link>
                <Link href={"/"} className="text-base hover:bg-gray-300 px-2 py-1 rounded-md font-semibold text-black">Nagpur</Link>
                <Link href={"/"} className="text-base hover:bg-gray-300 px-2 py-1 rounded-md font-semibold text-black">All Cities</Link>
            </div>
        </div>
    )
}

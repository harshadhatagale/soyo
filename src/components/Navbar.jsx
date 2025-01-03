"use client"

import React, { useState } from "react"
import Link from 'next/link';
import { Public_Sans } from "next/font/google";
import { BsBuildings } from "react-icons/bs";
import { FaCaretDown } from "react-icons/fa";
import { IoEarthOutline } from "react-icons/io5";
const LogoFont = Public_Sans({
  subsets: ["latin"],
  weight: ["200", '300', '400', '500', '600', '700', "800", "900"]
})
const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false)
  const openNav = () => {
    setNavOpen(!isNavOpen)
  }
  const closeNav = () => {
    setNavOpen(false)
  }
  return (
    <nav className={`${isNavOpen ? "active-nav" : ""} select-none flex fixed top-0 justify-between w-full px-5 shadow-md items-center bg-white text-white h-16 `}>
      <Link href={"/"} className={`${LogoFont.className}`}>
        <span className="text-3xl text-black logo">HostelHive</span>
      </Link>
      <div className="lg:h-full">
        <Link href={"/"}></Link>
        <Link href={"/"}></Link>
        <div className="flex justify-center items-center space-x-2 h-full">
          <Link href={'/'} className="text-black px-2 hover:bg-gray-100 lg:h-full flex font-bold justify-center items-center space-x-1">
            <BsBuildings size={20} />
            <span className="text-lg hidden lg:block">List your Property</span>
          </Link>
          <Link href={"/"} className="text-black px-2 hover:bg-gray-100 lg:h-full flex font-bold justify-center items-center space-x-1">
            <IoEarthOutline size={20} />
            <span className="text-lg">English</span>
            <FaCaretDown />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




// const Navbar = () => {
  

//   return (
//     <nav className="bg-indigo-600">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link href="/">
//               <a className="text-white text-xl font-bold">RoomFinder</a>
//             </Link>
//           </div>

//           {/* Navbar Links */}
//           <div className="hidden md:flex space-x-8">
//             <Link href="/">
//               <a className="text-gray-200 hover:text-white">Home</a>
//             </Link>
//             <Link href="/about">
//               <a className="text-gray-200 hover:text-white">About</a>
//             </Link>

//             {/* Cities Dropdown */}
//     </nav>
//   );
// };

// export default Navbar;

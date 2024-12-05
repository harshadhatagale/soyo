"use client"

import React, { useState } from "react"
import Link from 'next/link';
import { IoHome } from "react-icons/io5";
import { MdExplore } from "react-icons/md";
import { FaDonate } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false)
  const openNav = () => {
    setNavOpen(!isNavOpen)
  }
  const closeNav = () => {
    setNavOpen(false)
  }
  return (
    <nav className={`${isNavOpen ? "active-nav" : ""} flex fixed top-0 justify-between w-full px-5 shadow-md items-center bg-red-600 text-white h-16 `}>
      <div className="w-full h-[64px] flex justify-between items-center lg:w-fit">
        <div className="text-white font-extrabold text-2xl">
          <Link href="/">Soyo</Link>
        </div>
        <RiMenu3Fill onClick={openNav} size={24} color='white' className='lg:hidden flex justify-center items-center' />
      </div>

      <div className={`${isNavOpen ? "active-navlinks" : ""} lg:flex hidden justify-center items-center space-x-5`}>
        <div className={`${isNavOpen ? "active-links" : ""}  flex justify-center items-center space-x-3`}>
          <Link
            href="/"
            className="font-bold flex space-x-2 justify-center hover:text-cyan-400 items-center"
          >
            <IoHome size={20} />
            <span>Home</span>
          </Link>
          <Link
            href="/explore"
            className="font-bold flex space-x-2 justify-center hover:text-cyan-400 items-center"
          >
            <MdExplore />
            <span>Explore</span>
          </Link>
          <Link
            href="/about"
            className="font-bold flex space-x-2 justify-center hover:text-cyan-400 items-center"
          >
            <FaInfoCircle />
            <span>About Us</span>
          </Link>
          <Link
            href="/donation"
            className="font-bold flex space-x-2 justify-center hover:text-cyan-400 items-center"
          >
            <FaDonate />
            <span>Donate Us</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

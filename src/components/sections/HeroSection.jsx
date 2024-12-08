'use client'
import { Roboto } from 'next/font/google'
import { Poppins } from "next/font/google";
import { FcGlobe } from "react-icons/fc";
import { Typewriter } from 'react-simple-typewriter';
import Link from 'next/link';
const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"]
})
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})
export default function HeroSection() {
    return (
        <div className='lg:h-64 h-[70vh] bg-gradient-to-b from-gray-500 flex-col to-gray-900 flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center space-y-2'>
                <h2 className={`${poppins.className} text-white text-4xl flex justify-center items-center tracking-wider font-extrabold`}>HostelHive</h2>
                <p className={`${poppins.className} text-slate-300 text-lg lg:text-3xl flex justify-center items-center tracking-wider font-extrabold`}>Your Perfect Stay, One Click Away!</p>
            </div>
            <div className='w-[90%] lg:w-[75%] flex-col lg:flex-row flex justify-center items-center bg-transparent lg:bg-white rounded-md h-20 lg:h-14 mt-6 px-0 rounded-tl-md rounded-bl-md'>
                <div className='lg:w-[80%] w-full h-full bg-white rounded-tl-md rounded-bl-md'>
                    <input type="text" name="query" placeholder='Search by Locality' className='bg-transparent text-lg border border-r-black px-4 outline-none h-full w-[80%]' />
                    <input type="date" name="" id="" className='text-lg border border-r-black px-4 outline-none h-full w-[20%]' />
                </div>
                <button className='bg-green-500 text-lg text-white font-bold h-14 lg:h-full w-full lg:w-[20%] lg:rounded-tr-md lg:rounded-br-md lg:rounded-tl-none lg:rounded-bl-none rounded-md'>Search</button>
            </div>
        </div>
    )
}

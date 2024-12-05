'use client'
import { Roboto } from 'next/font/google'
import { Poppins } from "next/font/google";
import { FcGlobe } from "react-icons/fc";
import { Typewriter } from 'react-simple-typewriter';

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
        <div>
            <div className="text-center bg-opacity-10 flex flex-col space-y-9 justify-between py-5 items-center bg-cover bg-center h-[400px]" style={{ "backgroundImage": 'url("/rent-house-bg.jpg")' }}>
                <div>
                    <h1 className={`flex bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent text-5xl text-center justify-center items-center font-extrabold w-full ${poppins.className}`}> <Typewriter
                        words={["SOYO - Student's OYO"]}
                        cursor
                        cursorBlinking
                        cursorColor='red'
                    /></h1>
                    <p className='text-2xl mb-36 text-black w-[70%] font-bold my-9 lg:text-3xl text-center mx-auto'>Find Your Perfect Student Accommodation – Affordable, Comfortable, and Convenient!</p>
                </div>
            </div>
        </div>
    )
}

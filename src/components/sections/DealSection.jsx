import React from 'react'
import Link from 'next/link'
import { FaFireAlt } from "react-icons/fa";
export default function DealSection() {
    return (
        <div className="lg:w-[80%] flex-col lg:flex-row space-x-5 h-16 my-6 mx-auto border border-gray-200 flex justify-center items-center rounded-md">
            <div className='flex justify-center items-center space-x-3 px-1 py-2'>
                <div>
                    <img src="/fire.svg" alt="Fire" className='w-10 h-10'/>
                </div>
                <div>
                    <p className='lg:text-2xl text-sm font-bold text-center'>Get exclusive discounted deals for students by HostelHive !</p>
                </div>
            </div>
            <Link href={'/login/customer'} className='px-8 py-2 text-white font-bold bg-green-400 rounded-md'>Login</Link>
        </div>
    )
}

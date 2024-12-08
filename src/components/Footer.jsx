import React from 'react'
import { Public_Sans } from "next/font/google";

const LogoFont= Public_Sans({
    subsets: ['latin'],
    weight: ["200", '300', '400', '500', '600', '700', "800", "900"]
})
export default function Footer() {
  return (
    <footer>
        <div className={`${LogoFont.className} text-3xl text-black logo`}>
            <span>HostelHive</span>
        </div>
        <div>
            
        </div>
    </footer>
  )
}

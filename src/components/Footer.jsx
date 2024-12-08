import React from 'react'
import { Public_Sans } from "next/font/google";

const logoFont= Public_Sans({
    subsets: ['latin'],
    weight: ["200", '300', '400', '500', '600', '700', "800", "900"]
})
export default function Footer() {
  return (
    <div>Footer</div>
  )
}

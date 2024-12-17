
import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CityDrops from "@/components/CityDrops";


export const metadata = {
  title: "HostelHive",
  description: "The student's Oyo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <CityDrops/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}

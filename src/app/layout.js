import "./globals.css";
import Navbar from "@/components/Navbar";


export const metadata = {
  title: "Soyo",
  description: "The student's Oyo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="px-4 mt-16">
          {children}
        </main>
      </body>
    </html>
  );
}

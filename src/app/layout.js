
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
        <main className="mt-10">
          {children}
        </main>
      </body>
    </html>
  );
}

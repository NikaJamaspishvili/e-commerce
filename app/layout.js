"use client";

import { Inter,Poppins,Space_Grotesk } from "next/font/google";
import { usePathname } from "next/navigation";

//component imports
import Navbar from "../components/shop/Navbar";
import Footer from "../components/shop/Footer";

import "./globals.css";

 const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200","300","400", "500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-spaceGrotesk",
});

export default function RootLayout({ children }) {

  const pathName = usePathname();
  const showComponents = pathName.startsWith('/elegant');

  return (
    <html lang="en">
      <body className={`bg-[#FFFFFF] ${poppins.variable} ${inter.variable} ${spaceGrotesk.variable} relative`}>
        {showComponents && <Navbar />}
        <div className="w-[95%] mx-auto max-w-[1500px]">
        {children}
        </div>
        {showComponents && <Footer />}
      </body>
    </html>
  );
}

"use client";

import { Inter,Poppins,Space_Grotesk } from "next/font/google";
import { usePathname } from "next/navigation";
import { Suspense,useEffect } from "react"
import Loader from "@/components/reusable/Loader";
import dynamic from "next/dynamic";

//component imports
const Navbar = dynamic(()=>import('../components/shop/Navbar'),{ssr:false,loading:()=><Loader />});
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
  const lastPart = pathName.split("/").pop();

  useEffect(() => {
    localStorage.setItem("prevPath",pathName);
  }, [lastPart]);

  return (
    <html lang="en">
      <body className={`bg-[#FFFFFF] ${poppins.variable} ${inter.variable} ${spaceGrotesk.variable} relative`}>
        {showComponents &&<Suspense fallback={<div>Loading...</div>}><Navbar isRegistered={true}/></Suspense>}
        <div className="w-[95%] mx-auto max-w-[1500px]">
        {children}
        </div>
        {showComponents && <Footer />}
      </body>
    </html>
  );
}

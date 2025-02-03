import { Inter,Poppins } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import "./globals.css";

 const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-[#FFFFFF] ${poppins.variable} ${inter.variable} max-w-[1500px] mx-auto`}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}

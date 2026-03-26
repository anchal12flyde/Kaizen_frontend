
import { Geist, Geist_Mono, Times_New_Romanwwww } from "next/font/google";
import "./globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchSiteContent } from "@/lib/api";
import { setSiteContent } from "@/lib/siteContent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default async function RootLayout({ children }) {
  const apiData = await fetchSiteContent();
  
  if (apiData) {
    console.log("✅ API DATA LOADED");
    setSiteContent(apiData);
  } else {
    console.log("⚠️ USING STATIC JSON");
  }

  if (apiData) {
    setSiteContent(apiData); 
  }


  return (
    <html lang="en">
      <body className={``}>
       {children}
      </body>
    </html>
  );
}

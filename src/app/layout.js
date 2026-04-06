
import { Geist, Geist_Mono, Times_New_Romanwwww } from "next/font/google";
import "./globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import staticData from "@/data/sitecontent.json";
import { fetchSiteContent } from "@/lib/api";
import { SiteContentProvider } from "@/context/SiteContentProvider";
import { setSiteContent } from "@/lib/siteContent";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kaizen | Leading Law Firm for Businesses & Startups",
  description:
    "Kaizen is a forward-thinking law firm offering expert legal counsel in private equity, M&A, technology law, and general counsel services across key sectors.",
};
export default async function RootLayout({ children }) {
  const apiData = await fetchSiteContent();

  const apiContent = apiData?.data?.meta || {};

  // 🔥 SIMPLE shallow merge (no recursion)
  const siteContent = {
    ...staticData,
    ...apiContent,
    servicepages: {
      ...staticData.servicepages,
      ...apiContent.servicepages,
    },
  };

  setSiteContent(siteContent);

  return (
    <html lang="en">
      <body className={``}>
        <SiteContentProvider value={siteContent}>
        {children}
        </SiteContentProvider>
      </body>
    </html>
  );
}

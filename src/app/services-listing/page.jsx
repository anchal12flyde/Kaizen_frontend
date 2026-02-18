import AboutHeroSection from "@/components/abouthero";
import GuidesSection from "@/components/guidesSection";
import Footer from "@/components/ui-kit/footer";
import Header from "@/components/ui-kit/header";

export default function ServicesListing () {
    return(
        <div>
            <Header />
            <AboutHeroSection />
            <GuidesSection serviceListPage = {true} />
            <Footer />
        </div>
    )
}
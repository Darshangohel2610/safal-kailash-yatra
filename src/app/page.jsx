import Hero from "@/components/Hero";
import TrustFeatures from "@/components/TrustFeatures";
import WhyAdiKailash from "@/components/WhyAdiKailash";
import HomePackagesSection from "@/components/HomePackagesSection";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
export const revalidate = 0;

export default function Home() {
  return (
    <>
      <Hero />
      <TrustFeatures />
      <WhyAdiKailash />
      <HomePackagesSection />
      <Gallery />
      <FAQ />
      <FinalCTA />
    </>
  );
}

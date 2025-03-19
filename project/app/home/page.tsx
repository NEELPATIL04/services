import Head from "next/head";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServiceSection";
import TechStackSection from "./TechStackSection";
import ClientsSection from "./ClientsSection";
import FeaturedProjectSection from "./FeatureProjectsection";
import CTASection from "./CTASection";
import PortfolioSection from "./Featuresproject2";
import seoSchema from "./seoSchema";

export default function Home() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>WebDrift | Professional Web Solutions</title>
        <meta name="description" content="Providing top-notch web solutions for enterprises, startups, and individuals." />
        <meta name="keywords" content="web development, enterprise solutions, tech stack, portfolio, client feedback" />
        <meta property="og:title" content="WebDrift | Professional Web Solutions" />
        <meta property="og:description" content="We build high-quality web solutions for businesses of all sizes." />
        <meta property="og:url" content="https://webdrift.in" />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(seoSchema) }}
        />
      </Head>

      <div className="flex flex-col min-h-screen">
        {/* Wrapper for Hero and Services sections with shared glow effect */}
        <div className="relative">
          {/* Shared Diagonal Glow Effect for Hero and Services sections only */}
          <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
            <div
              className="absolute w-[200%] h-[600px] bg-gradient-to-r from-transparent via-blue-100/30 to-transparent dark:via-white/10 blur-[100px] transition-colors duration-300 z-10"
              style={{
                top: "15%",
                left: "-25%",
                transform: "rotate(35deg)",
              }}
            />
          </div>

          <HeroSection />
          <ServicesSection />
        </div>

        {/* Remaining sections without the glow effect */}
        <TechStackSection />
        <ClientsSection />
        <FeaturedProjectSection />
        <PortfolioSection />
        <CTASection />
      </div>
    </>
  );
}

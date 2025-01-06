import { CodePreview } from "@/components/home/views/code-preview";
import { CTA } from "@/components/home/views/cta";
import { Features, TechFeatures } from "@/components/home/views/features";
import { HomeHero } from "@/components/home/views/hero";
import { Performance } from "@/components/home/views/performance";
import { Pricing } from "@/components/home/views/pricing";
import { Stats } from "@/components/home/views/stats";
import { Testimonials } from "@/components/home/views/testimonials";

const HomePage = async () => (
  <>
    <HomeHero />
    <Stats />
    <Features />
    <Testimonials />
    <CodePreview />
    <TechFeatures />
    <Performance />
    <CTA />
    <Pricing />
  </>
);

export default HomePage;

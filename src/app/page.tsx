/**
 * Home page with primary conversion path to estimate request.
 */
import { HeroSection } from "@/components/sections/HeroSection";
import { ProofSection } from "@/components/sections/ProofSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsPreviewSection } from "@/components/sections/ProjectsPreviewSection";
import { ProcessPreviewSection } from "@/components/sections/ProcessPreviewSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <HeroSection />
      <ProofSection />
      <ServicesSection />
      <ProjectsPreviewSection />
      <ProcessPreviewSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}

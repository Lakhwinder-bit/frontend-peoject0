
import AboutValues from "@/features/about/compontent/AboutValues";
import AboutMilestones from "@/features/about/compontent/AboutMilestones";
import AboutTeam from "@/features/about/compontent/AboutTeam";
import HeroPage from "@/shared/compontent/common/heroPage";
import AboutIntro from "@/features/about/compontent/AboutIntro";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroPage
        currentPage="About Us"
        title="Built on repeat customers,"
        highlight="not advertising"
        description="We believe great travel is simple: comfortable vehicles, professional drivers, honest pricing and service that makes people choose us again."
      />
      <AboutIntro />

      <AboutValues />

      <AboutMilestones />

      <AboutTeam />

    </div>
  );
}
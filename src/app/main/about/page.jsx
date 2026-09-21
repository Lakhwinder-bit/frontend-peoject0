import AboutIntro from "@/components/about/AboutIntro";
import AboutValues from "@/components/about/AboutValues";
import AboutMilestones from "@/components/about/AboutMilestones";
import AboutTeam from "@/components/about/AboutTeam";
import HeroPage from "@/components/ui/common/heroPage";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
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

    </main>
  );
}
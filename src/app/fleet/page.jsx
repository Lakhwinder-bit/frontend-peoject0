import Fleet from "@/components/fleet/fleet";
import HeroPage from "@/components/ui/common/heroPage";

export default function FleetPage() {
    return (
   <main className="min-h-screen bg-background text-foreground">
  <HeroPage
    currentPage="Fleet"
    title="A vehicle for every"
    highlight="kind of journey"
    description="Every vehicle is under 5 years old, fully insured, deep-sanitised and driven by a verified professional."
  />
 <Fleet />

</main>
    );
}
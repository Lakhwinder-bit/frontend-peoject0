
import HeroPage from "@/components/ui/common/heroPage";
import Tours from "@/components/tourPackage/tourPage";
export default function TourPackage(){
    return(
        <main className="min-h-screen bg-background text-foreground">
          
<HeroPage
  currentPage="Packages"
  title="Discover your next"
  highlight="perfect journey"
  description="Explore handpicked travel packages designed to make your journey comfortable, memorable and hassle-free."
/>
  <Tours />
        </main>
    )
}
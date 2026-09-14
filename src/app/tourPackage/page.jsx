import HeroPage from "@/components/ui/common/heroPage";
import Tours from "@/components/tourPackage/tourPage";
import { getPackage } from "@/api/publicApi";

export default async function TourPackage(){

  const packages = await getPackage();
    return(
        <main className="min-h-screen bg-background text-foreground">
          
<HeroPage
  currentPage="Packages"
  title="Discover your next"
  highlight="perfect journey"
  description="Explore handpicked travel packages designed to make your journey comfortable, memorable and hassle-free."
/>
  <Tours package={packages}/>
        </main>
    )
}
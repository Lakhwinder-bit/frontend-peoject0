import { Suspense } from "react";
import Fleet from "@/components/fleet/fleet";
import HeroPage from "@/components/ui/common/heroPage";
import { getFeeds } from "@/api/publicApi";
import FeedSkeleton from "@/components/fleet/fleetSkeleton";

export default function FleetPage() {

    return (
   <main className="min-h-screen bg-background text-foreground">
  <HeroPage
    currentPage="Fleet"
    title="A vehicle for every"
    highlight="kind of journey"
    description="Every vehicle is under 5 years old, fully insured, deep-sanitised and driven by a verified professional."
  />
 <Suspense fallback={<FeedSkeleton />}>
<FeedsData/>
 </Suspense>

</main>
    );
}

async function FeedsData() {
  const feedApiData = await getFeeds();
  return  <Fleet feeds={feedApiData}/>
}
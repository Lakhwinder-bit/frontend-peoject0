import { Suspense } from "react";
import Fleet from "@/features/fleet/compontent/fleet";
import HeroPage from "@/shared/compontent/common/heroPage";

import FeedSkeleton from "@/features/fleet/compontent/fleetSkeleton";
import { getFeeds } from "@/features/fleet/api/fleetApi";

export default function FleetPage() {

    return (
   <div className="min-h-screen bg-background text-foreground">
  <HeroPage
    currentPage="Fleet"
    title="A vehicle for every"
    highlight="kind of journey"
    description="Every vehicle is under 5 years old, fully insured, deep-sanitised and driven by a verified professional."
  />
 <Suspense fallback={<FeedSkeleton />}>
<FeedsData/>
 </Suspense>

</div>
    );
}

async function FeedsData() {
  const feedApiData = await getFeeds();
  return  <Fleet feeds={feedApiData}/>
}
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { RecentWork } from "@/components/RecentWork";
import { Promise } from "@/components/Promise";
import { MidCTA } from "@/components/MidCTA";
import { Process } from "@/components/Process";
import { ServiceAreas } from "@/components/ServiceAreas";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <RecentWork />
      <Promise />
      <MidCTA />
      <Process />
      {/* Trust & Reviews section slots here once you paste in the reviews */}
      <ServiceAreas />
      <FAQ />
      <FinalCTA />
    </>
  );
}

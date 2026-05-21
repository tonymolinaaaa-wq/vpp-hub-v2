import { Hero } from "@/components/Hero";
import { WhyDirect } from "@/components/WhyDirect";
import { Services } from "@/components/Services";
import { Promise } from "@/components/Promise";
import { Process } from "@/components/Process";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyDirect />
      <Services />
      <Promise />
      <Process />
      {/* Next: Trust & Reviews, Where We Work, Questions, Recent Work, Final CTA */}
    </>
  );
}

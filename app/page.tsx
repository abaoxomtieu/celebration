import TextRevealLetters from "@/components/mvpblocks/text-reveal-1";
import { FireworksOverlay } from "@/components/fireworks";
import { Skiper30 } from "@/components/scroll-image";
import { AppreciationSection } from "@/components/appreciation-section";
import { Skiper17 } from "@/components/card-stack";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <TextRevealLetters />
      <FireworksOverlay delay={2000} duration={3000} />
      <Skiper30 />
      <AppreciationSection />
      <Skiper17 />
      <Footer />
    </>
  );
}

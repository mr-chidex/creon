import { ComingSoon, Footer, Hero, MoreDetails } from "../components";
import CreonPassNFT from "../components/CreonPassNFT";
import OurVision from "../components/OurVision";
import PassingThrough from "../components/PassingThrough";

export default function Home() {
  return (
    <main
      className="bg-black text-white
    
    "
    >
      <Hero />
      <div className="max-w-[1280px] mx-auto">
        <CreonPassNFT />
        <PassingThrough />
        <OurVision />
        <ComingSoon />
        <MoreDetails />
      </div>

      <Footer />
    </main>
  );
}

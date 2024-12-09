import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import Link from "next/link";
import HomeProperties from "@/components/HomeProperties";
export default function HomePage() {


  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </>
  );
}

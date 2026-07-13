import Image from "next/image";
import HeroSection from "@/components/modules/hero/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-primary ">
      <HeroSection />
    </div>
  );
}

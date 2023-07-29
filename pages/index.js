import Image from "next/image";
import { Inter } from "next/font/google";
import TopSection from "@/components/TopSection";
import BottomSection from "@/components/BottomSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <TopSection />
      <BottomSection />
    </div>
  );
}

import Image from "next/image";
import LandingPage from "./landingPage/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#EEEDEB] bg:items-center justify-between p-24 container mx-auto">
      <LandingPage/>
    </main>
  );
}

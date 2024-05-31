import Image from "next/image";
import Hero from "./hero/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#EEEDEB] bgitems-center justify-between p-24 container mx-auto">
      <Hero/>
    </main>
  );
}

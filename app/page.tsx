import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#44164c] bgitems-center justify-between p-24 container mx-auto">
      <Hero/>
    </main>
  );
}

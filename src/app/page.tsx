'use client';

import Benefit from "@/components/benefit";
import Features from "@/components/features";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Benefit />
    </div>
  );
}

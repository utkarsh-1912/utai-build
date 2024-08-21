"use client"

import MainCta from "@/components/mainCta";
import MainFaqs from "@/components/mainFaqs";
import MainFeatures from "@/components/mainFeatures";
import MainHeader from "@/components/mainHeader";
import MainTestimonial from "@/components/mainTestimonial";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <main className="flex flex-col items-center">
      <MainHeader/>
      <MainFeatures/>
      <MainTestimonial/>
      <MainFaqs/>
      <MainCta/>
      {/* <h1 className=" gradient-title font-extrabold text-xl md:text-3xl lg:text-5xl tracking-tighter,">Utkristi AI Labs</h1> */}
      {/* <Detection/> */}
    </main>
    </>
  );
}

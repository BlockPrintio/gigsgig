import { Geist, Geist_Mono } from "next/font/google";
import React from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import Categories from "../components/categories";
import PopularTasks from "../components/populartasks";
import Testimonials from "../components/testimonials";
import HowItWorks from "../components/howitworks";
import Footer from "../components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)] bg-white`}
    >
      <Header />
      <main className="flex-grow flex flex-col pt-20">
        <Hero />
        <Categories />
        <PopularTasks />
        <Testimonials />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}

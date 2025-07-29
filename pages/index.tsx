import React from "react";
// import Image from "next/image";
import { FILTER_LABELS } from "@/constants";
import FilterPill from "@/components/common/FilterPill";

const Home: React.FC = () =>{
  return(
    <div>
      <section
      className="relative h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center flex items-center justify-center text-center text-white"
      style={{backgroundImage: "url('/assets/boat-on-river-background-img.jpg')"}}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 p-4">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 text-green-600">Find Your Favourite Place Here</h1>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Explore by Category</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {FILTER_LABELS.map((label) => (
            <FilterPill key={label} label={label} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home;
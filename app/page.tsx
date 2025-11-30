import Image from "next/image";
import Link from "next/link";
import Button from "./components/UI/button";
import SectionHeading from "./components/UI/sectionheading";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects";

export default function Home() {
  const featuredProject = projects[0];

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <Image 
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=2000" 
          alt="Hero Architecture" 
          fill
          className="object-cover animate-slow-zoom" 
          priority
        />
        <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center text-white">
          <div className="animate-fade-in-up">
            <h2 className="text-xs md:text-sm tracking-[0.4em] uppercase mb-6 opacity-90 border-l-2 border-white pl-4">
              Est. 2014 — Dallas • Texas
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-[1.1]">
              Designing <br/> the Timeless.
            </h1>
            <p className="max-w-xl text-lg opacity-90 mb-12 font-light leading-relaxed">
              We are a collective of visionaries dedicated to crafting spaces that inspire, endure, and harmonize with their environment.
            </p>
            <div className="flex flex-col md:flex-row gap-6">
              <Link href="/portfolio">
                <Button variant="white">
                  View Portfolio <ArrowRight size={16} />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-stone-900">
                  Start a Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 w-full z-20 flex justify-center animate-bounce duration-[2000ms]">
           <div className="w-[1px] h-16 bg-white/50"></div>
        </div>
      </div>

      {/* Featured Project */}
      <section className="py-24 md:py-32 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
                <SectionHeading subtitle="Featured Work" title={featuredProject.title} />
                <p className="text-stone-600 font-light text-lg mb-8 leading-relaxed">
                   A modern family home designed for comfortable living. This project showcases our approach to creating functional, beautiful spaces that work for everyday life.
                </p>
                <div className="flex gap-12 mb-10 border-t border-stone-200 pt-8">
                   <div>
                      <span className="block text-2xl font-serif text-stone-900">{featuredProject.year}</span>
                      <span className="text-xs uppercase tracking-widest text-stone-500">Year</span>
                   </div>
                   <div>
                      <span className="block text-2xl font-serif text-stone-900">{featuredProject.category}</span>
                      <span className="text-xs uppercase tracking-widest text-stone-500">Type</span>
                   </div>
                   <div>
                      <span className="block text-2xl font-serif text-stone-900">{featuredProject.location.split(',')[0]}</span>
                      <span className="text-xs uppercase tracking-widest text-stone-500">Location</span>
                   </div>
                </div>
                <Link href={`/portfolio/${featuredProject.id}`}>
                  <Button variant="primary">
                    Explore Project <ArrowRight size={16} />
                  </Button>
                </Link>
             </div>
             <Link href={`/portfolio/${featuredProject.id}`} className="relative group cursor-pointer overflow-hidden">
                <div className="relative w-full aspect-[4/5]">
                  <Image 
                    src={featuredProject.mainImage} 
                    alt={featuredProject.title} 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
             </Link>
          </div>
        </div>
      </section>

      {/* Firm Teaser */}
      <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-800/50 -skew-x-12 translate-x-1/2"></div>
         <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
               <SectionHeading subtitle="About The Firm" title="We build context, not just buildings." dark />
               <p className="text-stone-400 text-xl font-light leading-relaxed mb-12">
                  Founded on the belief that great architecture is born from a deep understanding of place and people. Our methodology combines rigorous research with intuitive design thinking.
               </p>
               <Link href="/firm">
                 <Button variant="white">Read Our Story</Button>
               </Link>
            </div>
         </div>
      </section>
    </>
  );
}

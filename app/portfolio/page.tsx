'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";

export default function PortfolioPage() {
    const [filter, setFilter] = useState('All');
    const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  
    const filteredProjects = filter === 'All' 
      ? projects 
      : projects.filter(p => p.category === filter);
  
    return (
      <div className="bg-white min-h-screen">
        <div className="pt-32 pb-24 container mx-auto px-6">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-6">Portfolio</h1>
          <p className="text-stone-500 font-light text-lg">A curated selection of our work across residential, commercial, and cultural sectors globally.</p>
        </div>
  
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-8 mb-20">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs uppercase tracking-[0.2em] pb-2 border-b transition-all duration-300 
                ${filter === cat ? 'border-stone-900 text-stone-900' : 'border-transparent text-stone-400 hover:text-stone-600'}`}
            >
              {cat}
            </button>
          ))}
        </div>
  
        {/* Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {filteredProjects.map((project, idx) => (
            <Link 
              key={project.id} 
              href={`/portfolio/${project.id}`}
              className={`group cursor-pointer relative flex flex-col ${idx % 2 !== 0 ? 'md:mt-24' : ''}`}
            >
              <div className="w-full aspect-[3/4] overflow-hidden bg-stone-200 mb-8 relative">
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-all duration-500 z-10"></div>
                <Image 
                  src={project.mainImage} 
                  alt={project.title} 
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                   <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full">
                      <ArrowUpRight size={24} className="text-stone-900" />
                   </div>
                </div>
              </div>
              <div className="border-t border-stone-200 pt-6 group-hover:border-stone-900 transition-colors duration-500">
                 <div className="flex justify-between items-baseline mb-2">
                   <h3 className="text-3xl font-serif text-stone-900">{project.title}</h3>
                   <span className="text-xs font-bold uppercase tracking-widest text-stone-400">{project.year}</span>
                 </div>
                 <div className="flex justify-between items-center text-sm font-light text-stone-500">
                   <span>{project.location}</span>
                   <span>{project.category}</span>
                 </div>
              </div>
            </Link>
          ))}
        </div>
        </div>
      </div>
    );
}

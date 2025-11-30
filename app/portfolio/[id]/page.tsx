import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Minus } from "lucide-react";
import Button from "@/app/components/UI/button";
import { projects } from "@/lib/projects";
import { Project } from "@/lib/interfaces";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project: Project | undefined = projects.find(p => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Detail Hero */}
      <div className="h-[80vh] w-full relative">
        <Image 
          src={project.mainImage} 
          alt={project.title} 
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent flex flex-col justify-end p-6 md:p-20">
           <div className="container mx-auto animate-fade-in-up">
              <Link href="/portfolio" className="text-white text-xs tracking-widest uppercase mb-8 flex items-center hover:opacity-80 transition-opacity">
                <Minus className="mr-2" size={16} /> Back to Projects
              </Link>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6">{project.title}</h1>
              <p className="text-white/80 text-xl font-light">{project.location}</p>
           </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Sidebar Metadata */}
          <div className="lg:col-span-4 space-y-12">
             <div className="bg-white p-8 border border-stone-100 sticky top-32">
                <div className="space-y-8">
                   <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Role</h4>
                      <p className="text-stone-900 font-serif text-lg">{project.role}</p>
                   </div>
                   <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Year</h4>
                      <p className="text-stone-900 font-serif text-lg">{project.year}</p>
                   </div>
                   <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Client</h4>
                      <p className="text-stone-900 font-serif text-lg">Confidential</p>
                   </div>
                   <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-3">Scope</h4>
                      <ul className="space-y-2">
                        {project.scope.map((item, i) => (
                          <li key={i} className="flex items-center text-stone-600 font-light text-sm">
                            <CheckCircle2 size={14} className="mr-3 text-stone-900" /> {item}
                          </li>
                        ))}
                      </ul>
                   </div>
                </div>
                <div className="mt-12 pt-8 border-t border-stone-100">
                    <Button variant="primary" className="w-full">Download Case Study</Button>
                </div>
             </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
             <div>
                <h3 className="text-3xl font-serif mb-8 text-stone-900">The Vision</h3>
                <p className="text-stone-600 text-lg leading-relaxed font-light whitespace-pre-line">
                   {project.description}
                </p>
             </div>

             {/* Gallery Section */}
             <div className="space-y-8">
                <h3 className="text-3xl font-serif mb-8 text-stone-900">Project Gallery</h3>
                
                {/* Main Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.gallery.map((image, index) => (
                    <div 
                      key={index} 
                      className={`relative w-full overflow-hidden group ${
                        index === 0 ? 'md:col-span-2 aspect-[21/9]' : 
                        index === 1 ? 'aspect-square' : 
                        index === 2 ? 'aspect-square' : 
                        'aspect-square'
                      }`}
                    >
                      <Image 
                        src={image} 
                        className="object-cover transition-transform duration-700 group-hover:scale-105" 
                        alt={`${project.title} - Image ${index + 1}`} 
                        fill 
                      />
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>

        {/* Next Project Nav */}
        <div className="mt-32 border-t border-stone-200 pt-16 flex justify-between items-center">
           <div>
              <span className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-2 block">Next Project</span>
              <h3 className="text-3xl font-serif text-stone-900">Explore Portfolio</h3>
           </div>
           <Link href="/portfolio">
             <Button variant="outline">View All Works</Button>
           </Link>
        </div>
      </div>
    </div>
  );
}


import Image from "next/image";

export default function FirmPage() {
    return (
       <div className="bg-white min-h-screen">
          <div className="pt-32 pb-24 container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-20">
             <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-8 leading-tight">
                Architecture that honors the past while building the future.
             </h1>
          </div>
          
          <div className="w-full h-[60vh] bg-stone-200 mb-20 overflow-hidden relative">
             <Image 
               src="https://img.freepik.com/free-photo/crop-architect-opening-blueprint_23-2147710985.jpg?semt=ais_hybrid&w=740&q=80" 
               alt="Studio" 
               fill
               className="object-cover"
             />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
             <div className="lg:col-span-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-stone-900 mb-6 border-t border-stone-900 pt-4">Our Ethos</h3>
             </div>
             <div className="lg:col-span-8 space-y-8">
                <p className="text-2xl font-light text-stone-800 leading-relaxed">
                   Founded in 2014, ARCH. has established itself as a premier studio for thoughtful, sustainable, and context-aware architecture. We believe that every line drawn on paper must have a purpose in the real world.
                </p>
                <p className="text-lg font-light text-stone-600 leading-relaxed">
                   Our team consists of architects, urban planners, and interior designers who work in unison to deliver projects that are as functional as they are beautiful. We serve private clients looking for bespoke homes, as well as developers seeking to create landmark commercial spaces.
                </p>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
             {[
                { title: "Residential", desc: "Bespoke private residences that reflect the individuality of their inhabitants." },
                { title: "Commercial", desc: "High-performance workspaces designed for collaboration and innovation." },
                { title: "Cultural", desc: "Public spaces that foster community and celebrate local heritage." }
             ].map((s, i) => (
                <div key={i} className="bg-white p-10 border border-stone-100 hover:shadow-xl transition-shadow duration-500">
                   <span className="text-4xl font-serif text-stone-600 mb-6 block">0{i+1}</span>
                   <h3 className="text-xl font-serif text-stone-900 mb-3">{s.title}</h3>
                   <p className="text-stone-500 font-light text-sm leading-relaxed">{s.desc}</p>
                </div>
             ))}
          </div>
          </div>
       </div>
    );
}


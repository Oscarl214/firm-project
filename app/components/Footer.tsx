'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-500 py-20 border-t border-stone-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
           <div className="col-span-1 md:col-span-1">
              <span className="text-3xl font-serif text-white tracking-tighter mb-6 block">ARCH.</span>
              <p className="text-sm font-light leading-relaxed max-w-xs">
                Creating timeless spaces that harmonize with their environment and inspire the human spirit.
              </p>
           </div>
           <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Studio</h4>
              <ul className="space-y-4 text-sm font-light">
                 <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                 <li><Link href="/firm" className="hover:text-white transition-colors">The Firm</Link></li>
                 <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
                 <li><Link href="/contact" className="hover:text-white transition-colors">Careers</Link></li>
              </ul>
           </div>
           <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Social</h4>
              <ul className="space-y-4 text-sm font-light">
                 <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Pinterest</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              </ul>
           </div>
           <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Newsletter</h4>
              <div className="flex border-b border-stone-800 pb-2">
                 <input type="email" placeholder="Email Address" className="bg-transparent border-none outline-none text-white w-full placeholder-stone-700 text-sm" />
                 <button className="text-white uppercase text-xs tracking-widest hover:text-stone-400">Join</button>
              </div>
           </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-900 text-xs tracking-widest uppercase">
            <p className="opacity-60">© 2024 ARCH Studio.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white">Privacy</a>
                <a href="#" className="hover:text-white">Terms</a>
            </div>
        </div>
      </div>
    </footer>
  );
}


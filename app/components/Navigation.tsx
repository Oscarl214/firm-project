'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'portfolio', label: 'Portfolio', href: '/portfolio' },
    { id: 'firm', label: 'The Firm', href: '/firm' },
    { id: 'contact', label: 'Contact', href: '/contact' }
  ];

  const isHome = pathname === '/';
  const isScrolledOrNotHome = scrolled || !isHome;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm border-b border-stone-100' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link 
          href="/"
          className={`text-2xl font-bold tracking-tighter cursor-pointer font-serif relative z-50 ${isScrolledOrNotHome ? 'text-stone-900' : 'text-white'}`}
        >
          ARCH.
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href === '/' && pathname === '/');
            return (
              <Link
                key={link.id}
                href={link.href}
                className={`text-xs font-medium tracking-[0.2em] uppercase hover:opacity-70 transition-all duration-300 relative group
                  ${isActive ? 'opacity-100' : 'opacity-80'}
                  ${isScrolledOrNotHome ? 'text-stone-900' : 'text-white'}
                `}
              >
                {link.label}
                <span className={`absolute -bottom-2 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full ${isActive ? 'w-full' : ''}`}></span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden z-50">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className={`transition-colors duration-300 ${isScrolledOrNotHome || mobileMenuOpen ? 'text-stone-900' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-500 transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden flex flex-col justify-center px-8`}>
        <div className="flex flex-col space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-left text-3xl font-serif text-stone-900 hover:text-stone-500 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="mt-12 pt-12 border-t border-stone-200">
           <p className="text-xs uppercase tracking-widest text-stone-500 mb-2">Contact</p>
           <p className="text-stone-900 mb-1">+1 (212) 555-0199</p>
           <p className="text-stone-900">hello@arch-studio.com</p>
        </div>
      </div>
    </nav>
  );
}


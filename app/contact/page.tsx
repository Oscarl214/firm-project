'use client';

import SectionHeading from "../components/UI/sectionheading";
import Button from "../components/UI/button";
import { MapPin, Phone, Mail, Instagram, Linkedin, Twitter } from "lucide-react";

export default function ContactPage() {
    return (
       <div className="bg-white min-h-screen">
          <div className="pt-32 pb-24 container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
             <div>
                <SectionHeading subtitle="Contact Us" title="Let's build something extraordinary." />
                <p className="text-lg font-light text-stone-600 mb-12 max-w-md">
                   We are currently accepting new projects for 2024-2025. Please reach out to discuss your vision.
                </p>
                
                <div className="space-y-8">
                   <div className="flex items-start">
                      <MapPin className="mt-1 mr-6 text-stone-900" size={20} />
                      <div>
                         <h4 className="text-xs font-bold uppercase tracking-widest text-stone-900 mb-1">New York</h4>
                         <p className="text-stone-500 font-light">123 Architectural Ave, Design District<br/>NY 10012</p>
                      </div>
                   </div>
                   <div className="flex items-start">
                      <Phone className="mt-1 mr-6 text-stone-900" size={20} />
                      <div>
                         <h4 className="text-xs font-bold uppercase tracking-widest text-stone-900 mb-1">Phone</h4>
                         <p className="text-stone-500 font-light">+1 (212) 555-0199</p>
                      </div>
                   </div>
                   <div className="flex items-start">
                      <Mail className="mt-1 mr-6 text-stone-900" size={20} />
                      <div>
                         <h4 className="text-xs font-bold uppercase tracking-widest text-stone-900 mb-1">Email</h4>
                         <p className="text-stone-500 font-light">hello@arch-studio.com</p>
                      </div>
                   </div>
                </div>
                <div className="flex space-x-4 mt-12">
                   <Button variant="outline" className="px-4"><Instagram size={18}/></Button>
                   <Button variant="outline" className="px-4"><Linkedin size={18}/></Button>
                   <Button variant="outline" className="px-4"><Twitter size={18}/></Button>
                </div>
             </div>

             <div className="bg-stone-100 p-10 lg:p-16">
                <form className="space-y-6">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                         <label className="text-xs uppercase tracking-widest text-stone-500 mb-2 block">Name</label>
                         <input type="text" className="w-full bg-white border-none p-4 text-stone-900 focus:ring-1 focus:ring-stone-900 transition-all placeholder:text-stone-300" placeholder="John Doe" />
                      </div>
                      <div>
                         <label className="text-xs uppercase tracking-widest text-stone-500 mb-2 block">Email</label>
                         <input type="email" className="w-full bg-white border-none p-4 text-stone-900 focus:ring-1 focus:ring-stone-900 transition-all placeholder:text-stone-300" placeholder="john@example.com" />
                      </div>
                   </div>
                   <div>
                      <label className="text-xs uppercase tracking-widest text-stone-500 mb-2 block">Project Type</label>
                      <select className="w-full bg-white border-none p-4 text-stone-900 focus:ring-1 focus:ring-stone-900 transition-all cursor-pointer">
                         <option>Residential Design</option>
                         <option>Commercial Headquarters</option>
                         <option>Cultural / Public</option>
                         <option>Interior Renovation</option>
                      </select>
                   </div>
                   <div>
                      <label className="text-xs uppercase tracking-widest text-stone-500 mb-2 block">Message</label>
                      <textarea rows={5} className="w-full bg-white border-none p-4 text-stone-900 focus:ring-1 focus:ring-stone-900 transition-all placeholder:text-stone-300 resize-none" placeholder="Tell us about your project timeline and location..."></textarea>
                   </div>
                   <Button variant="primary" className="w-full py-4 mt-4">Send Inquiry</Button>
                </form>
             </div>
            </div>
          </div>
       </div>
    );
}


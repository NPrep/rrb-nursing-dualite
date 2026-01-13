import React from 'react';
import { cn } from '../../lib/utils';
import { Cross, TrendingUp, BookOpen, Users, AlertCircle, FileText, CheckCircle2 } from 'lucide-react';
import { Logo } from './Logo';

interface BlogCoverProps {
  title: string;
  category: string;
  image?: string;
  className?: string;
}

export function BlogCover({ title, category, image, className }: BlogCoverProps) {
  // If a specific image URL is provided, use it.
  if (image) {
    return (
      <div className={cn("relative w-full aspect-video overflow-hidden bg-slate-100", className)}>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
        <div className="absolute top-4 left-4 md:top-6 md:left-6">
           <span className="bg-white/90 backdrop-blur-md text-slate-900 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-widest shadow-sm">
             {category}
           </span>
        </div>
      </div>
    );
  }

  // Dynamic Design Logic based on Category
  const getCategoryConfig = (cat: string) => {
    const c = cat.toLowerCase();
    if (c.includes('strategy')) return { color: 'bg-[#FFD700]', text: 'text-black', icon: TrendingUp, gradient: 'from-[#1a237e] to-[#0d47a1]' }; // Navy Blue
    if (c.includes('syllabus')) return { color: 'bg-[#00E676]', text: 'text-black', icon: BookOpen, gradient: 'from-[#311b92] to-[#4527a0]' }; // Deep Purple
    if (c.includes('salary')) return { color: 'bg-[#00B0FF]', text: 'text-white', icon: Users, gradient: 'from-[#01579b] to-[#0277bd]' }; // Blue
    if (c.includes('eligibility')) return { color: 'bg-[#FF3D00]', text: 'text-white', icon: AlertCircle, gradient: 'from-[#b71c1c] to-[#c62828]' }; // Red
    if (c.includes('analysis')) return { color: 'bg-[#FFEA00]', text: 'text-black', icon: CheckCircle2, gradient: 'from-[#263238] to-[#37474f]' }; // Dark Slate
    return { color: 'bg-[#FFD700]', text: 'text-black', icon: FileText, gradient: 'from-[#0F172A] to-[#1E293B]' }; // Default Navy
  };

  const config = getCategoryConfig(category);
  const Icon = config.icon;

  return (
    <div className={cn("relative w-full aspect-video overflow-hidden bg-slate-900", className)}>
      {/* Background Gradient */}
      <div className={cn("absolute inset-0 bg-gradient-to-br", config.gradient)} />
      
      {/* Dot Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:24px_24px]" />

      {/* Decorative Lines */}
      <div className="absolute top-8 left-0 w-full h-[1px] bg-white/20" />
      <div className="absolute top-[34px] left-0 w-1/3 h-[2px] bg-white/40" />
      <div className="absolute bottom-8 right-0 w-full h-[1px] bg-white/20" />
      
      {/* Main Content Container */}
      <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-center z-10">
        
        {/* Big Brand Header */}
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter drop-shadow-2xl mb-5 uppercase leading-none">
          RRB NURSING
        </h1>

        {/* Highlight Box */}
        <div className={cn(
          "inline-flex items-center gap-2 px-5 py-2 md:px-8 md:py-3 rounded-xl shadow-[4px_4px_0px_rgba(0,0,0,0.3)] transform -skew-x-6 self-start mb-5 border border-white/20",
          config.color
        )}>
           <Icon className={cn("w-5 h-5 md:w-6 md:h-6", config.text)} />
           <span className={cn("font-black text-sm md:text-xl uppercase tracking-wide transform skew-x-6", config.text)}>
             {category}
           </span>
        </div>

        {/* Blog Title */}
        <h2 className="text-xl md:text-3xl font-bold text-white leading-snug max-w-2xl drop-shadow-lg border-l-4 border-white/50 pl-4">
          {title}
        </h2>
      </div>

      {/* Right Side Graphic (Emblem) */}
      <div className="absolute -right-12 top-1/2 -translate-y-1/2 opacity-90 hidden md:block scale-90 lg:scale-100">
         <div className="w-56 h-56 rounded-full border-[8px] border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-sm shadow-2xl relative">
            <div className="absolute inset-0 rounded-full border-2 border-white/20 border-dashed animate-spin-slow" style={{ animationDuration: '20s' }}></div>
            {/* Replaced img with Logo Component */}
            <Logo className="w-28 h-28 drop-shadow-2xl" />
         </div>
      </div>

      {/* NPrep Logo Bottom Right */}
      <div className="absolute bottom-4 right-6 flex items-center gap-2 z-20">
         <div className="bg-white p-1.5 rounded-md shadow-lg">
            <Cross className="w-4 h-4 text-[#0F172A]" />
         </div>
         <span className="text-white font-black text-xl tracking-wider drop-shadow-md">NPrep</span>
      </div>
    </div>
  );
}

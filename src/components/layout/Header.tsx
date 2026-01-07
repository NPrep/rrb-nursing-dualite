import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, BookOpen, FileText, Bell, Info, ShieldCheck, User, Layers, Stethoscope, ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', isExternal: false, icon: Home },
    { name: 'Courses', path: '/courses', isExternal: false, icon: BookOpen }, // Changed to internal route
    { name: 'Resources', path: '/resources', isExternal: false, icon: Layers },
    { name: 'Blogs', path: '/blogs', isExternal: false, icon: FileText },
    { name: 'Notifications', path: '/notifications', isExternal: false, icon: Bell },
    { name: 'About Us', path: '/about', isExternal: false, icon: Info },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Section - Nursing Focused */}
          <Link to="/" className="flex items-center space-x-3 group shrink-0">
            <div className="bg-primary p-2 rounded-lg shadow-sm group-hover:bg-primary/90 transition-colors">
              <Stethoscope className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">
                RRB <span className="text-primary">Nursing</span>
              </span>
              <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider mt-1">
                Nursing Prep Portal
              </span>
            </div>
          </Link>

          {/* Desktop/Tablet Nav */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-4 mx-4">
            {navItems.map((item) => (
              item.isExternal ? (
                <a
                  key={item.name}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[13px] lg:text-[14px] font-medium text-slate-600 hover:text-primary transition-colors px-2 lg:px-3 py-2 rounded-md hover:bg-slate-50 whitespace-nowrap"
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-1.5 text-[13px] lg:text-[14px] font-medium px-2 lg:px-3 py-2 rounded-md transition-colors whitespace-nowrap",
                    location.pathname.startsWith(item.path) && item.path !== '/' || location.pathname === item.path
                      ? "text-primary bg-primary/5 font-semibold" 
                      : "text-slate-600 hover:text-primary hover:bg-slate-50"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* Right Side - "Official Portal" Section - Visible only on LG */}
          <div className="hidden lg:flex items-center shrink-0">
            <div className="flex items-center gap-4 pl-6 border-l border-slate-200 h-10">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-sm font-bold text-slate-800">Exam Prep</span>
              </div>
              
              <div className="h-6 w-[1px] bg-slate-200 mx-1"></div>
              
              <div className="flex items-center gap-3">
                <div className="bg-slate-100 p-1.5 rounded-full text-slate-700">
                   <ShieldCheck className="h-5 w-5" />
                </div>
                <div className="h-9 w-9 bg-slate-100 rounded-full flex items-center justify-center overflow-hidden border border-slate-200 shadow-sm cursor-pointer hover:ring-2 hover:ring-primary/20 transition-all">
                   <User className="h-5 w-5 text-slate-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden">
             <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background p-4 shadow-lg absolute w-full z-50">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              item.isExternal ? (
                <a
                  key={item.name}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 text-base font-medium rounded-md hover:bg-slate-50 text-slate-700 flex items-center gap-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5 text-slate-400" />
                  {item.name}
                  <ExternalLink className="h-3 w-3 opacity-40 ml-auto" />
                </a>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "px-4 py-3 text-base font-medium rounded-md transition-colors flex items-center gap-3",
                    location.pathname.startsWith(item.path) && item.path !== '/' || location.pathname === item.path
                      ? "bg-primary/5 text-primary" 
                      : "hover:bg-slate-50 text-slate-700"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className={cn("h-5 w-5", location.pathname === item.path ? "text-primary" : "text-slate-400")} />
                  {item.name}
                </Link>
              )
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

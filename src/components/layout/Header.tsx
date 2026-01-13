import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, BookOpen, FileText, Bell, Info, Layers, ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';
import { Logo } from '../ui/Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', isExternal: false, icon: Home },
    { name: 'Courses', path: '/courses', isExternal: false, icon: BookOpen },
    { name: 'Resources', path: '/resources', isExternal: false, icon: Layers },
    { name: 'Blogs', path: '/blogs', isExternal: false, icon: FileText },
    { name: 'Notifications', path: '/notifications', isExternal: false, icon: Bell },
    { name: 'About Us', path: '/about', isExternal: false, icon: Info },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3 group shrink-0">
            <Logo className="h-12 w-12 drop-shadow-sm group-hover:scale-105 transition-transform duration-300" />
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
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-4 mx-4 ml-auto">
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

          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden ml-auto">
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

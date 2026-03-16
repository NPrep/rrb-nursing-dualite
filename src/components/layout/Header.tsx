import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Bell, ClipboardList, CheckCircle2, FilePenLine } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';
import { Logo } from '../ui/Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Notification', path: '/rrb-nursing-notification', icon: Bell },
    { name: 'Vacancy', path: '/rrb-nursing-vacancy', icon: ClipboardList },
    { name: 'Eligibility', path: '/rrb-nursing-eligibility', icon: CheckCircle2 },
    { name: 'Application', path: '/rrb-nursing-application-process', icon: FilePenLine },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group shrink-0">
            <Logo className="h-12 w-12" />
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">
                RRB <span className="text-primary">Nursing</span>
              </span>
              <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider mt-1">
                Information Portal
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-6 mx-4 ml-auto">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  'flex items-center gap-2 text-sm font-medium px-3 py-2.5 rounded-md transition-all whitespace-nowrap min-h-[44px] hover:-translate-y-0.5 hover:shadow-sm',
                  location.pathname === item.path ? 'text-primary bg-primary/5 font-semibold' : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center lg:hidden ml-auto">
            <Button variant="ghost" size="icon" className="min-h-[48px] min-w-[48px]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden nprep-mobile-drawer">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  'px-4 py-4 text-base font-medium rounded-md transition-all flex items-center gap-3 min-h-[52px] hover:translate-x-0.5',
                  location.pathname === item.path ? 'bg-primary/5 text-primary' : 'hover:bg-slate-50 text-slate-700'
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon className={cn('h-5 w-5', location.pathname === item.path ? 'text-primary' : 'text-slate-400')} />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

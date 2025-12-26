import React from 'react';
import { Link } from 'react-router-dom';
import { Search, FileText, BarChart3, CreditCard, BookOpen, ArrowRight, Briefcase, Users, MapPin, FileCheck, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { notifications, importantDates } from '../data/mockData';
import { cn } from '../lib/utils';

export default function HomePage() {
  const RRB_OFFICIAL_URL = "https://indianrailways.gov.in/railwayboard/view_section.jsp?lang=0&id=0,7,1281";
  const NPREP_URL = "https://nprep.in";

  const featureCards = [
    { 
      title: "Apply Now", 
      desc: "Start your application", 
      icon: FileText, 
      bg: "bg-primary", 
      link: RRB_OFFICIAL_URL,
      isExternal: true 
    },
    { 
      title: "Check Results", 
      desc: "View exam results", 
      icon: BarChart3, 
      bg: "bg-primary/90", 
      link: RRB_OFFICIAL_URL,
      isExternal: true 
    },
    { 
      title: "Download Admit Card", 
      desc: "Get your hall ticket", 
      icon: CreditCard, 
      bg: "bg-primary/80", 
      link: RRB_OFFICIAL_URL,
      isExternal: true 
    },
    { 
      title: "View Syllabus", 
      desc: "Exam preparation guide", 
      icon: BookOpen, 
      bg: "bg-red-800", 
      link: NPREP_URL, 
      isExternal: true 
    },
  ];

  const stats = [
    { value: "12", label: "Active Notifications", icon: Briefcase },
    { value: "15,000+", label: "Total Vacancies", icon: Users },
    { value: "17", label: "Railway Zones", icon: MapPin },
    { value: "2.5M+", label: "Applications Processed", icon: FileCheck },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section with Red Gradient */}
      <section className="pt-20 pb-12 px-4 bg-gradient-to-b from-red-50 to-white">
        <div className="container mx-auto max-w-6xl text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight">
            Your <span className="text-primary">Railway Career</span> Starts Here
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Official Railway Recruitment Board portal for applications, notifications, results, and exam resources
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mt-8 relative">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-primary transition-colors" />
              <input 
                type="text"
                placeholder="Search exams, notifications, zones..." 
                className="w-full h-14 pl-12 pr-4 rounded-full border border-slate-200 shadow-sm text-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureCards.map((card, idx) => (
              <a 
                key={idx} 
                href={card.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <div className={cn(
                  "h-full rounded-xl p-8 text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between min-h-[240px]",
                  card.bg
                )}>
                  <div className="space-y-4">
                    <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <card.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{card.title}</h3>
                      <p className="text-white/80 text-sm font-medium">{card.desc}</p>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex items-center text-sm font-semibold group-hover:gap-2 transition-all">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <Card key={idx} className="border-0 shadow-none bg-transparent">
                <CardContent className="p-0 flex flex-col items-center text-center space-y-2">
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-2">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Notifications & Dates */}
      <section className="py-16 px-4 bg-slate-50/50">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Latest Notifications */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">Latest Notifications</h2>
              <Link to="/notifications" className="text-primary font-medium hover:underline flex items-center">
                View All <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid gap-4">
              {notifications.slice(0, 3).map((note) => (
                <Card key={note.id} className="group hover:border-primary/50 transition-colors border-slate-200 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Badge variant={note.status === 'Active' ? 'default' : 'secondary'} className="rounded-sm">
                            {note.status}
                          </Badge>
                          <span className="text-xs text-slate-500">{note.date}</span>
                        </div>
                        <h3 className="font-semibold text-lg text-slate-900 group-hover:text-primary transition-colors">
                          {note.title}
                        </h3>
                        <p className="text-sm text-slate-500 line-clamp-1">
                          {note.description}
                        </p>
                      </div>
                      <a href={RRB_OFFICIAL_URL} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="shrink-0 border-slate-200 hover:bg-slate-50 hover:text-primary">
                          View Details <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Important Dates Timeline */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-slate-900">Important Dates</h2>
            <Card className="border-slate-200 shadow-sm">
              <CardContent className="p-6">
                <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-200">
                  {importantDates.map((item, idx) => (
                    <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-100 shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                        <div className={`h-2.5 w-2.5 rounded-full ${item.status === 'completed' ? 'bg-green-500' : 'bg-primary'}`} />
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-lg bg-slate-50 border border-slate-100">
                        <div className="font-semibold text-slate-900 text-sm mb-1">{item.title}</div>
                        <div className="text-xs text-slate-500 font-medium">{item.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

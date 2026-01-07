import React from 'react';
import { Link } from 'react-router-dom';
import { Search, FileText, Briefcase, Users, MapPin, FileCheck, ExternalLink, ArrowRight, BookOpen, AlertCircle, IndianRupee, PlayCircle, Download } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { notifications, importantDates } from '../data/mockData';
import { NPREP_LINKS } from '../data/links';
import { cn } from '../lib/utils';

export default function HomePage() {
  const RRB_OFFICIAL_URL = "https://indianrailways.gov.in/railwayboard/view_section.jsp?lang=0&id=0,7,1281";

  const featureCards = [
    { 
      title: "Apply Online", 
      desc: "Official RRB Portal", 
      icon: FileText, 
      bg: "bg-primary", 
      link: RRB_OFFICIAL_URL,
      isExternal: true 
    },
    { 
      title: "Admit Card", 
      desc: "Download Hall Ticket", 
      icon: FileCheck, 
      bg: "bg-primary", 
      link: RRB_OFFICIAL_URL,
      isExternal: true 
    },
    { 
      title: "Check Results", 
      desc: "View Selection List", 
      icon: Users, 
      bg: "bg-primary", 
      link: RRB_OFFICIAL_URL,
      isExternal: true 
    },
    { 
      title: "Syllabus", 
      desc: "Exam Pattern 2026", 
      icon: BookOpen, 
      bg: "bg-primary", 
      link: "/syllabus", 
      isExternal: false 
    },
  ];

  const stats = [
    { value: "1200+", label: "Nursing Vacancies", icon: Briefcase },
    { value: "50k+", label: "Happy Students", icon: Users },
    { value: "17", label: "Railway Zones", icon: MapPin },
    { value: "100+", label: "Mock Tests", icon: FileCheck },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 bg-gradient-to-b from-red-50 to-white">
        <div className="container mx-auto max-w-6xl text-center space-y-6">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0 mb-2">
            #1 Nursing Preparation Platform
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight">
            Crack <span className="text-primary">RRB Nursing</span> Exam
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            The definitive hub for Railway Nursing Superintendent aspirants. Get official updates, expert guidance, and premium study material.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mt-8 relative">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-primary transition-colors" />
              <input 
                type="text"
                placeholder="Search syllabus, eligibility, previous papers..." 
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
              card.isExternal ? (
                <a 
                  key={idx} 
                  href={card.link} 
                  target={card.link.startsWith('http') ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className={cn(
                    "h-full rounded-xl p-8 text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between min-h-[200px]",
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
                      Access Now <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </a>
              ) : (
                <Link 
                  key={idx} 
                  to={card.link}
                  className="block group"
                >
                  <div className={cn(
                    "h-full rounded-xl p-8 text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between min-h-[200px]",
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
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Nursing Officer Essentials Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Nursing Officer Essentials</h2>
            <p className="text-slate-600 mt-2">Everything you need to know about the RRB Nursing Superintendent post.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { title: "Eligibility Criteria", icon: AlertCircle, link: "/blogs/rrb-nursing-superintendent-eligibility-criteria-2026", desc: "Age limit & Qualifications" },
               { title: "Salary & Perks", icon: IndianRupee, link: "/blogs/rrb-nursing-superintendent-salary-job-profile-2026", desc: "Pay Level-7 Structure" },
               { title: "Exam Pattern", icon: FileText, link: "/blogs/rrb-nursing-superintendent-exam-pattern-syllabus-2026-complete-subject-wise-guide", desc: "Subject-wise Weightage" },
               { title: "Preparation Strategy", icon: Briefcase, link: "/blogs/6-months-preparation-strategy-rrb-nursing-superintendent", desc: "6-Month Study Plan" },
             ].map((item, i) => (
               <Link key={i} to={item.link} className="group">
                 <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all h-full flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                      <item.icon className="h-7 w-7 text-slate-600 group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                 </div>
               </Link>
             ))}
          </div>
        </div>
      </section>

      {/* Free Prep Zone Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-slate-900 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-4 max-w-xl text-center md:text-left">
                <Badge className="bg-green-500 text-black hover:bg-green-400 border-0">Free Resources</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Start Preparing for Free!</h2>
                <p className="text-slate-300 text-lg">
                  Access high-quality video lectures, previous year question papers, and daily mock tests without paying a penny.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
                  <a href={NPREP_LINKS.FREE_RESOURCES} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-white text-slate-900 hover:bg-slate-100 font-bold">
                      <PlayCircle className="mr-2 h-4 w-4" /> Watch Classes
                    </Button>
                  </a>
                  <a href={NPREP_LINKS.PYQ} target="_blank" rel="noopener noreferrer">
                    {/* Added bg-transparent to fix the invisible text issue */}
                    <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 hover:text-white">
                      <Download className="mr-2 h-4 w-4" /> Download PYQs
                    </Button>
                  </a>
                </div>
              </div>
              
              {/* Visual Graphic */}
              <div className="relative">
                 <div className="w-64 h-40 bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
                    <div className="text-center">
                       <FileCheck className="h-12 w-12 text-green-500 mx-auto mb-2" />
                       <div className="font-bold text-white">Daily Test</div>
                       <div className="text-xs text-slate-400">Live Now</div>
                    </div>
                 </div>
                 <div className="absolute -top-4 -left-4 w-64 h-40 bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center shadow-xl transform -rotate-3 z-[-1]">
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <Card key={idx} className="border-0 shadow-none bg-transparent">
                <CardContent className="p-0 flex flex-col items-center text-center space-y-2">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-2 shadow-sm">
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
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Latest Notifications */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">Latest Nursing Updates</h2>
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
            <h2 className="text-2xl font-bold text-slate-900">Exam Calendar</h2>
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

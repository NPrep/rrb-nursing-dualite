import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Briefcase, Users, MapPin, FileCheck, ExternalLink, ArrowRight, BookOpen, AlertCircle, IndianRupee, PlayCircle, Calendar, GraduationCap, HelpCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { notifications, importantDates, faqs } from '../data/mockData';
import { NPREP_LINKS } from '../data/links';
import { cn } from '../lib/utils';
import SEO from '../components/SEO';
import SEOContent from '../components/home/SEOContent';

export default function HomePage() {
  const RRB_OFFICIAL_URL = "https://indianrailways.gov.in/railwayboard/view_section.jsp?lang=0&id=0,7,1281";

  // 1. FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // 2. Event Schema for Exam Dates (Added)
  const eventSchema = importantDates.map(item => ({
    "@context": "https://schema.org",
    "@type": "EducationEvent",
    "name": item.title,
    "startDate": new Date(item.date).toISOString().split('T')[0], // Approximation for schema
    "eventStatus": "https://schema.org/EventScheduled",
    "description": `Important date for ${item.title} - RRB Nursing Superintendent 2026`,
    "location": {
      "@type": "Place",
      "name": "Online / All India"
    }
  }));

  // 3. WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "RRB Nursing Prep",
    "url": "https://rrbnursing.com"
  };

  const combinedSchema = [websiteSchema, faqSchema, ...eventSchema];

  const featureCards = [
    { 
      title: "Notifications", 
      desc: "Latest Vacancies", 
      icon: FileText, 
      bg: "bg-slate-800", 
      link: "/notifications",
      isExternal: false 
    },
    { 
      title: "Syllabus", 
      desc: "Exam Pattern 2026", 
      icon: BookOpen, 
      bg: "bg-slate-800", 
      link: "/syllabus", 
      isExternal: false 
    },
    { 
      title: "Eligibility", 
      desc: "Check Criteria", 
      icon: FileCheck, 
      bg: "bg-slate-800", 
      link: "/blogs/rrb-nursing-superintendent-eligibility-criteria-2026", 
      isExternal: false 
    },
    { 
      title: "Exam Dates", 
      desc: "View Calendar", 
      icon: Calendar, 
      bg: "bg-slate-800", 
      link: "/notifications", 
      isExternal: false 
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <SEO 
        title="RRB Nursing Superintendent 2026 - Official Preparation Portal"
        description="India's #1 Portal for RRB Nursing Superintendent Exam 2026. Get latest notification, syllabus, eligibility, salary details, and online coaching."
        keywords={['RRB Nursing', 'Nursing Superintendent', 'Railway Staff Nurse', 'RRB Notification 2026']}
        canonical="/"
        schema={combinedSchema}
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-red-50 to-white">
        <div className="container mx-auto max-w-6xl text-center space-y-8">
          <Badge className="bg-red-100 text-red-800 hover:bg-red-200 border-0 mb-4 px-4 py-1.5 text-sm">
            #1 RRB Nursing Information Portal
          </Badge>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            RRB <span className="text-primary">Nursing Superintendent</span> <br className="hidden md:block"/> Recruitment 2026
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Your one-stop destination for official updates, syllabus, eligibility criteria, and exam patterns for Indian Railways Nursing Exams.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-4">
             <Link to="/notifications">
               <Button size="lg" className="h-12 px-8 text-base font-bold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                 View Notifications
               </Button>
             </Link>
             <Link to="/syllabus">
               <Button size="lg" variant="outline" className="h-12 px-8 text-base font-bold border-2">
                 Download Syllabus
               </Button>
             </Link>
          </div>
        </div>
      </section>

      {/* Quick Navigation Grid (Official Info) */}
      <section className="py-8 px-4 -mt-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {featureCards.map((card, idx) => (
              <Link 
                key={idx} 
                to={card.link}
                className="block group"
              >
                <div className={cn(
                  "h-full rounded-xl p-6 md:p-8 text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between min-h-[160px] md:min-h-[200px]",
                  card.bg
                )}>
                  <div className="space-y-3 md:space-y-4">
                    <div className="bg-white/10 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <card.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold mb-1 leading-tight">{card.title}</h3>
                      <p className="text-white/70 text-xs md:text-sm font-medium">{card.desc}</p>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-8 flex items-center text-xs md:text-sm font-semibold group-hover:gap-2 transition-all opacity-80 group-hover:opacity-100">
                    View <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Essential Info Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Exam Essentials</h2>
            <p className="text-slate-600 mt-2">Everything you need to know about the post.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { 
                 title: "Eligibility Criteria", 
                 icon: AlertCircle, 
                 link: "/blogs/rrb-nursing-superintendent-eligibility-criteria-2026", 
                 desc: "Age limit & Qualifications" 
               },
               { 
                 title: "Salary & Perks", 
                 icon: IndianRupee, 
                 link: "/blogs/rrb-nursing-superintendent-salary-job-profile-2026", 
                 desc: "Pay Level-7 Structure" 
               },
               { 
                 title: "Exam Pattern", 
                 icon: FileText, 
                 link: "/blogs/rrb-nursing-superintendent-exam-pattern-syllabus-2026", 
                 desc: "Subject-wise Weightage" 
               },
               { 
                 title: "Preparation Strategy", 
                 icon: Briefcase, 
                 link: "/blogs/6-months-preparation-strategy-rrb-nursing-superintendent", 
                 desc: "6-Month Study Plan" 
               },
             ].map((item, i) => (
               <Link key={i} to={item.link} className="group block h-full">
                 <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-primary/30 hover:shadow-lg transition-all h-full flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <item.icon className="h-7 w-7 text-slate-700 group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                 </div>
               </Link>
             ))}
          </div>
        </div>
      </section>

      {/* NPrep Coaching Section - VISUALLY SEPARATED & LABELED */}
      <section className="py-16 px-4 bg-indigo-50/50 border-y-4 border-indigo-100">
        <div className="container mx-auto max-w-7xl">
          
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-indigo-200 shadow-lg relative overflow-hidden">
            
            {/* Disclaimer Banner */}
            <div className="absolute top-0 left-0 w-full bg-indigo-100 py-2 text-center border-b border-indigo-200">
              <p className="text-xs font-bold text-indigo-800 uppercase tracking-widest">
                Sponsored Content
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10 mt-6">
              <div className="space-y-6 max-w-2xl text-center md:text-left">
                <div>
                   <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                     NPrep Online Coaching
                   </h2>
                   <p className="text-sm font-bold text-indigo-600 uppercase tracking-wide bg-indigo-50 inline-block px-3 py-1 rounded-full border border-indigo-100">
                     (Independent Platform)
                   </p>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Looking for structured preparation? NPrep offers premium video courses, test series, and free resources designed specifically for nursing exams.
                </p>
                <p className="text-xs text-slate-400 italic">
                  * This coaching offering is independent of RRB.
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <a href={NPREP_LINKS.GOLD_COURSE} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold h-12 px-6 shadow-md">
                      <GraduationCap className="mr-2 h-5 w-5" /> Explore GOLD Batch
                    </Button>
                  </a>
                  <a href={NPREP_LINKS.FREE_RESOURCES} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-slate-300 h-12 px-6">
                      <PlayCircle className="mr-2 h-5 w-5 text-red-500" /> Free Classes
                    </Button>
                  </a>
                </div>
              </div>
              
              {/* Visual Graphic */}
              <div className="relative hidden md:block">
                 <div className="w-72 h-48 bg-slate-900 rounded-xl border border-slate-800 flex flex-col items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
                    <div className="text-center p-6">
                       <FileCheck className="h-12 w-12 text-green-500 mx-auto mb-3" />
                       <div className="font-bold text-white text-xl">Daily Test Series</div>
                       <div className="text-sm text-slate-400 mt-1">Live on NPrep App</div>
                       <a href={NPREP_LINKS.DAILY_TEST} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-xs font-bold text-green-400 hover:underline">
                         Attempt Now &rarr;
                       </a>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Notifications & Dates */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Latest Notifications */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">Latest Updates</h2>
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
                          <span className="text-xs font-medium text-slate-400">• {note.zone}</span>
                        </div>
                        <h3 className="font-semibold text-lg text-slate-900 group-hover:text-primary transition-colors">
                          {note.title}
                        </h3>
                      </div>
                      <a href={RRB_OFFICIAL_URL} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="shrink-0 border-slate-200 hover:bg-slate-50 hover:text-primary min-h-[44px]">
                          View Notice <ExternalLink className="ml-2 h-3 w-3" />
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

      {/* SEO Content Silo */}
      <SEOContent />

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-600 mt-2">Common queries about RRB Nursing Superintendent Recruitment 2026.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <Card key={idx} className="border-slate-200 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="shrink-0 mt-1">
                      <HelpCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-slate-900">{faq.question}</h3>
                      <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, ClipboardList, CheckCircle2, Briefcase, Users, MapPin, FileText, ExternalLink, ArrowRight, AlertCircle, IndianRupee, PlayCircle, GraduationCap, HelpCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { notifications, faqs } from '../data/mockData';
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

  // 2. WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "RRB Nursing Prep",
    "url": "https://rrbnursing.com"
  };

  const combinedSchema = [websiteSchema, faqSchema];

  const featureCards = [
    { 
      title: "Notifications", 
      desc: "Latest Vacancies", 
      icon: Bell,
      bg: "bg-white",
      link: "/notifications",
      isExternal: false 
    },
    { 
      title: "Syllabus", 
      desc: "Exam Pattern 2026", 
      icon: ClipboardList,
      bg: "bg-white",
      link: "/syllabus", 
      isExternal: false 
    },
    { 
      title: "Eligibility", 
      desc: "Check Criteria", 
      icon: CheckCircle2,
      bg: "bg-white",
      link: "/blogs/rrb-nursing-superintendent-eligibility-criteria-2026", 
      isExternal: false 
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <SEO 
        title="RRB Nursing — Information & Preparation Portal"
        description="India's #1 Portal for RRB Nursing Superintendent Exam 2026. Get latest notification, syllabus, eligibility, salary details, and online coaching."
        keywords={['RRB Nursing', 'Nursing Superintendent', 'Railway Staff Nurse', 'RRB Notification 2026']}
        canonical="/"
        schema={combinedSchema}
      />

      {/* Hero Section */}
      <section className="pt-16 pb-16 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-10 shadow-sm grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-5">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0 px-4 py-1.5 text-sm">
                RRB Nursing Recruitment 2026
              </Badge>
              <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                RRB Nursing Superintendent Recruitment 2026
              </h1>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                Track notifications, syllabus, eligibility, and stage-wise updates for Railway nursing recruitment in one place.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link to="/notifications">
                  <Button size="lg" className="h-12 px-6 text-base font-semibold bg-primary hover:bg-primary/90">
                    Latest Notifications
                  </Button>
                </Link>
                <Link to="/syllabus">
                  <Button size="lg" variant="outline" className="h-12 px-6 text-base font-semibold border-2">
                    Download Syllabus
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 md:p-6">
              <h2 className="text-base font-semibold text-slate-900 mb-4">Recruitment Process</h2>
              <ol className="space-y-3">
                {['Notification', 'Apply Online', 'Admit Card', 'CBT Exam', 'Result', 'Document Verification', 'Joining'].map((step, index) => (
                  <li key={step} className="flex items-center gap-3">
                    <div className="h-7 w-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-slate-700 font-medium text-sm md:text-base">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Grid */}
      <section className="py-8 px-4 -mt-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {featureCards.map((card, idx) => (
              <Link 
                key={idx} 
                to={card.link}
                className="block group"
              >
                <div className={cn(
                  "h-full rounded-xl p-6 md:p-8 text-slate-900 border border-slate-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between min-h-[160px] md:min-h-[200px]",
                  card.bg
                )}>
                  <div className="space-y-3 md:space-y-4">
                    <div className="bg-primary/10 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center">
                      <card.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold mb-1 leading-tight">{card.title}</h3>
                      <p className="text-slate-500 text-xs md:text-sm font-medium">{card.desc}</p>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-8 flex items-center text-xs md:text-sm font-semibold group-hover:gap-2 transition-all text-primary">
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

      {/* Latest Notifications */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">Latest Updates</h2>
              <Link to="/notifications" className="text-primary font-medium hover:underline flex items-center">
                View All <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid gap-4">
              {notifications.slice(0, 3).map((note) => (
                <Card key={note.id} className={cn("group hover:border-primary/50 transition-colors border-slate-200 shadow-sm", note.status === 'Closed' && 'opacity-60')}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className={cn(
                            'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold',
                            note.status === 'Active' && 'bg-green-100 text-green-700',
                            note.status === 'Upcoming' && 'bg-blue-100 text-blue-700',
                            note.status === 'Closed' && 'bg-slate-200 text-slate-600'
                          )}>
                            <span className={cn(
                              'h-2 w-2 rounded-full',
                              note.status === 'Active' && 'bg-green-500',
                              note.status === 'Upcoming' && 'bg-blue-500',
                              note.status === 'Closed' && 'bg-slate-500'
                            )} />
                            {note.status}
                          </div>
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
                    <p className="text-xs text-slate-500 mt-3">
                      Direct link to specific notification will be updated when available.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SEO Content Silo */}
      <SEOContent />

      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="nprep-testimonial-cta">
            <h2 className="text-3xl font-semibold text-[var(--text-primary)]">Hear from real students</h2>
            <a className="cta" href="https://nprep.in/blogs?filter=NORCET+Success+Story" target="_blank" rel="noopener noreferrer">
              Read verified success stories on NPrep
            </a>
          </div>
        </div>
      </section>

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

      <section className="py-16 px-4 bg-white border-t border-slate-200">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900">Preparation Resources</h2>
            <p className="text-slate-600 mt-2">Structured guidance and premium learning support for aspirants who prefer mentored preparation.</p>
          </div>

          <Card className="border-indigo-200 bg-indigo-50/40">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">Recommended by rrbnursing.com</Badge>
                <Badge variant="outline" className="text-xs border-slate-300">Paid Course</Badge>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">NPrep Online Coaching</h3>
              <p className="text-slate-600 mb-6">
                NPrep offers guided classes, practice tests, and revision tools tailored for Railway nursing recruitment exams.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={NPREP_LINKS.GOLD_COURSE} target="_blank" rel="noopener noreferrer">
                  <Button className="h-11"><GraduationCap className="mr-2 h-4 w-4" /> Explore GOLD Batch</Button>
                </a>
                <a href={NPREP_LINKS.FREE_RESOURCES} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="h-11"><PlayCircle className="mr-2 h-4 w-4" /> Free Classes</Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

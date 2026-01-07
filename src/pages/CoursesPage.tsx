import React from 'react';
import { GraduationCap, Zap, FileCheck, CheckCircle2, ArrowRight, Star, Clock, BookOpen } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { NPREP_LINKS } from '../data/links';

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center space-y-6">
          <Badge variant="secondary" className="bg-yellow-500 text-black hover:bg-yellow-400 border-0 mb-4 text-sm px-4 py-1">
            Trusted by 50,000+ Nurses
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Premium <span className="text-yellow-400">Nursing Courses</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Structured preparation for RRB Nursing Superintendent. From comprehensive theory to last-minute revision, we have everything you need to crack the exam.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <div className="container mx-auto max-w-7xl px-4 -mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Gold Course - The Flagship */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-200 flex flex-col relative group hover:-translate-y-2 transition-transform duration-300">
            <div className="absolute top-4 right-4 z-10">
              <Badge className="bg-yellow-500 text-black font-bold">BEST SELLER</Badge>
            </div>
            <div className="h-56 bg-gradient-to-br from-slate-900 to-slate-800 p-8 flex flex-col justify-center items-center text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:16px_16px]"></div>
              <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                <GraduationCap className="h-10 w-10 text-yellow-400" />
              </div>
              <h3 className="text-3xl font-bold text-white">Gold Course</h3>
              <p className="text-yellow-200/80 font-medium tracking-wide mt-1">COMPLETE PREPARATION</p>
            </div>
            
            <div className="p-8 flex-1 flex flex-col">
              <div className="space-y-4 mb-8 flex-1">
                <p className="text-slate-600 text-sm leading-relaxed">
                  The ultimate course for beginners. Covers the entire syllabus from zero level to advanced concepts.
                </p>
                <div className="space-y-3">
                  {[
                    "Full Syllabus Coverage (Tech + Non-Tech)",
                    "500+ Hours of Video Lectures",
                    "Printable PDF Notes & E-Books",
                    "Dedicated Doubt Clearing Sessions"
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <a href={NPREP_LINKS.GOLD_COURSE} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold h-12 text-lg shadow-lg shadow-yellow-500/20">
                  Join Gold Course <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Rapid Revision */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-200 flex flex-col group hover:-translate-y-2 transition-transform duration-300">
             <div className="h-56 bg-gradient-to-br from-purple-900 to-purple-800 p-8 flex flex-col justify-center items-center text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#d8b4fe_1px,transparent_1px)] [background-size:16px_16px]"></div>
              <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                <Zap className="h-10 w-10 text-purple-400" />
              </div>
              <h3 className="text-3xl font-bold text-white">Rapid Revision</h3>
              <p className="text-purple-200/80 font-medium tracking-wide mt-1">CRASH COURSE</p>
            </div>

            <div className="p-8 flex-1 flex flex-col">
              <div className="space-y-4 mb-8 flex-1">
                <p className="text-slate-600 text-sm leading-relaxed">
                  Short on time? Revise the entire syllabus quickly with high-yield topics and focused content.
                </p>
                <div className="space-y-3">
                  {[
                    "Quick Syllabus Recap (30 Days)",
                    "Exam-Oriented High Yield Topics",
                    "Formula Charts & Mnemonics",
                    "Last Minute Strategy Sessions"
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <a href={NPREP_LINKS.RAPID_REVISION} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold h-12 text-lg shadow-lg shadow-purple-600/20">
                  Start Revision <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Test Series */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-200 flex flex-col group hover:-translate-y-2 transition-transform duration-300">
             <div className="h-56 bg-gradient-to-br from-green-900 to-green-800 p-8 flex flex-col justify-center items-center text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#86efac_1px,transparent_1px)] [background-size:16px_16px]"></div>
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                <FileCheck className="h-10 w-10 text-green-400" />
              </div>
              <h3 className="text-3xl font-bold text-white">Test Series</h3>
              <p className="text-green-200/80 font-medium tracking-wide mt-1">EXAM SIMULATION</p>
            </div>

            <div className="p-8 flex-1 flex flex-col">
              <div className="space-y-4 mb-8 flex-1">
                <p className="text-slate-600 text-sm leading-relaxed">
                  Practice with exam-level questions. Analyze your performance and improve your rank.
                </p>
                <div className="space-y-3">
                  {[
                    "50+ Full Length Mock Tests",
                    "Subject-Wise & Topic-Wise Tests",
                    "Detailed Performance Analysis",
                    "All India Rank Prediction"
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <a href={NPREP_LINKS.TEST_SERIES} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold h-12 text-lg shadow-lg shadow-green-600/20">
                  Attempt Tests <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container mx-auto max-w-6xl px-4 mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Why Choose NPrep?</h2>
          <p className="text-slate-600 mt-2">We don't just teach, we mentor you till selection.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
           {[
             { icon: Star, title: "Expert Faculty", desc: "Learn from top nursing educators and selected officers." },
             { icon: Clock, title: "Flexible Learning", desc: "Watch classes anytime, anywhere on your mobile or laptop." },
             { icon: BookOpen, title: "Updated Content", desc: "Syllabus updated as per latest RRB 2025-26 patterns." }
           ].map((item, i) => (
             <div key={i} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center">
               <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                 <item.icon className="h-6 w-6 text-primary" />
               </div>
               <h3 className="font-bold text-lg mb-2">{item.title}</h3>
               <p className="text-slate-500 text-sm">{item.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}

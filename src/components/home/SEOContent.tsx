import React from 'react';
import { NPREP_LINKS } from '../../data/links';
import { Card, CardContent } from '../ui/card';
import { GraduationCap, BookOpen, ExternalLink } from 'lucide-react';

export default function SEOContent() {
  return (
    <section className="py-16 px-4 bg-white border-t border-slate-100">
      <div className="container mx-auto max-w-5xl">
        <article className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-xl">
          
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">What is Nursing?</h2>
            <p className="text-slate-600 leading-relaxed">
              Nursing is a noble healthcare profession dedicated to the care of individuals, families, and communities to ensure they attain, maintain, or recover optimal health. Nurses play a critical role in patient care, from administering medication and monitoring health conditions to providing emotional support and education. It requires a unique blend of clinical expertise, compassion, and resilience. In India, nursing is one of the most stable and respected career paths, with opportunities in government sectors like <strong>Indian Railways (RRB)</strong>, <strong>AIIMS</strong>, and state health missions.
            </p>
          </div>

          {/* Nursing Exams 2026 Overview */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Nursing Exams 2026: The Gateway to Government Jobs</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The <strong>Nursing Exams 2026</strong> cycle is crucial for aspirants aiming to secure permanent positions in India's top healthcare institutions. Whether you are targeting the RRB Staff Nurse vacancy or the prestigious AIIMS NORCET, 2026 promises thousands of opportunities. These exams assess candidates on core subjects like Anatomy, Physiology, Medical-Surgical Nursing, and Midwifery.
            </p>
          </div>

          {/* Exam Details Table */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Major Nursing Exams 2026: Key Details</h3>
            <div className="overflow-x-auto border rounded-lg shadow-sm">
              <table className="w-full text-sm text-left">
                <thead className="bg-slate-50 text-slate-700 uppercase">
                  <tr>
                    <th className="px-6 py-3 border-b">Nursing Exam</th>
                    <th className="px-6 py-3 border-b">Purpose</th>
                    <th className="px-6 py-3 border-b">Focus Subjects</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">RRB Staff Nurse 2026</td>
                    <td className="px-6 py-4">Recruitment for Indian Railways Hospitals (Level-7).</td>
                    <td className="px-6 py-4">Nursing Theory, General Awareness, Arithmetic.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">AIIMS NORCET 2026</td>
                    <td className="px-6 py-4">Nursing Officer selection for all AIIMS.</td>
                    <td className="px-6 py-4">Med-Surg, Pediatrics, OBG, Psychiatry.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">JIPMER Nursing Officer</td>
                    <td className="px-6 py-4">Central Govt posts in JIPMER Puducherry.</td>
                    <td className="px-6 py-4">Advanced Nursing, Skill-based questions.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">DSSSB Nursing Officer</td>
                    <td className="px-6 py-4">Delhi Govt Hospitals (Lok Nayak, GTB, etc).</td>
                    <td className="px-6 py-4">Nursing + Hindi/English/Math/Reasoning.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* NPrep Coaching Section - Separated */}
          <div className="my-16">
            <div className="flex items-center justify-center gap-4 mb-8">
               <div className="h-px bg-slate-200 flex-1"></div>
               <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Sponsored Content</span>
               <div className="h-px bg-slate-200 flex-1"></div>
            </div>

            <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                 <GraduationCap className="h-8 w-8 text-slate-900" />
                 <div>
                    <h2 className="text-2xl font-bold m-0 text-slate-900">NPrep Online Coaching</h2>
                    <p className="text-xs font-bold text-primary uppercase tracking-wide m-0">(Independent Platform)</p>
                 </div>
              </div>
              
              <p className="text-slate-600 mb-6">
                At <strong>NPrep</strong>, we understand the unique challenges of nursing aspirants. Our courses are designed by expert faculty to fit into your busy schedule, whether you are a student or a working nurse.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-l-4 border-l-yellow-500 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <GraduationCap className="h-6 w-6 text-yellow-600" />
                      <h3 className="text-xl font-bold m-0">GOLD Batch</h3>
                    </div>
                    <p className="text-sm text-slate-600 mb-4 m-0">
                      Our flagship comprehensive course covering the entire syllabus from basics to advanced. Includes video lectures, notes, and doubt sessions.
                    </p>
                    <a href={NPREP_LINKS.GOLD_COURSE} target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline flex items-center gap-1">
                      Explore Course <ExternalLink className="h-3 w-3" />
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-500 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <BookOpen className="h-6 w-6 text-purple-600" />
                      <h3 className="text-xl font-bold m-0">Rapid Revision</h3>
                    </div>
                    <p className="text-sm text-slate-600 mb-4 m-0">
                      A 30-day crash course designed for last-minute preparation. Focuses on high-yield topics and exam trends.
                    </p>
                    <a href={NPREP_LINKS.RAPID_REVISION} target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline flex items-center gap-1">
                      Start Revision <ExternalLink className="h-3 w-3" />
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
               <div className="h-px bg-slate-200 flex-1"></div>
               <div className="h-1 w-1 bg-slate-300 rounded-full"></div>
               <div className="h-px bg-slate-200 flex-1"></div>
            </div>
          </div>

          {/* Study Materials & Strategy */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Study Materials & Preparation Strategy</h2>
            <p className="text-slate-600 mb-4">
              To crack exams like RRB and NORCET, you need more than just hard work—you need the right resources.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">1. Previous Year Question Papers (PYQs)</h3>
                <p className="text-slate-600">
                  Solving past papers is non-negotiable. It helps you understand the exam pattern and difficulty level.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">2. Effective Study Plan</h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-600">
                  <li><strong>Analyze the Syllabus:</strong> Know what to study and what to skip.</li>
                  <li><strong>Time Management:</strong> Allocate specific hours for Nursing subjects and General Awareness.</li>
                  <li><strong>Revision:</strong> Use short notes for daily revision.</li>
                </ul>
              </div>
            </div>
          </div>

        </article>
      </div>
    </section>
  );
}

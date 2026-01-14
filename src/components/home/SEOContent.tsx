import React from 'react';
import { NPREP_LINKS } from '../../data/links';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Card, CardContent } from '../ui/card';
import { CheckCircle2, BookOpen, GraduationCap, Calendar } from 'lucide-react';

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
              The <strong>Nursing Exams 2026</strong> cycle is crucial for aspirants aiming to secure permanent positions in India's top healthcare institutions. Whether you are targeting the <a href={NPREP_LINKS.GOLD_COURSE} target="_blank" rel="noopener noreferrer">RRB Staff Nurse</a> vacancy or the prestigious AIIMS NORCET, 2026 promises thousands of opportunities. These exams assess candidates on core subjects like Anatomy, Physiology, Medical-Surgical Nursing, and Midwifery.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Success in these exams requires a strategic approach. At <strong>NPrep</strong>, we provide structured online courses like the <a href={NPREP_LINKS.GOLD_COURSE} target="_blank" rel="noopener noreferrer">GOLD Batch</a> to help you master the syllabus efficiently.
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
                  <tr>
                    <td className="px-6 py-4 font-medium">MNS (Military Nursing)</td>
                    <td className="px-6 py-4">Commissioned Officer in Indian Army.</td>
                    <td className="px-6 py-4">Nursing, English, General Intelligence.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Eligibility Criteria */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Eligibility Criteria for Nursing Exams 2026</h3>
            <p className="text-slate-600 mb-4">
              Before applying, candidates must ensure they meet the specific age and educational requirements. Below is a consolidated eligibility chart for 2026:
            </p>
            <div className="overflow-x-auto border rounded-lg shadow-sm">
              <table className="w-full text-sm text-left">
                <thead className="bg-slate-50 text-slate-700 uppercase">
                  <tr>
                    <th className="px-6 py-3 border-b">Exam Name</th>
                    <th className="px-6 py-3 border-b">Eligibility Requirements</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">RRB Staff Nurse</td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-4 space-y-1">
                        <li><strong>Age:</strong> 20-40 Years.</li>
                        <li><strong>Qualification:</strong> GNM or B.Sc. Nursing.</li>
                        <li><strong>Registration:</strong> Must be registered with INC/State Nursing Council.</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">AIIMS NORCET</td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-4 space-y-1">
                        <li><strong>Age:</strong> 18-30 Years.</li>
                        <li><strong>Qualification:</strong> B.Sc. Nursing OR GNM + 2 Years Experience (50-bed hospital).</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">DSSSB Nursing Officer</td>
                    <td className="px-6 py-4">
                      <ul className="list-disc pl-4 space-y-1">
                        <li><strong>Age:</strong> Up to 32 Years (Relaxable).</li>
                        <li><strong>Qualification:</strong> GNM + 1 Year Exp OR B.Sc. Nursing.</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Upcoming Exams List - Expanded */}
          <div className="mb-12 space-y-8">
            <h2 className="text-3xl font-bold text-slate-900">List of Upcoming Nursing Exams in India 2026</h2>
            
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-primary mb-2">1. RRB Staff Nurse Exam 2026</h3>
              <p className="text-slate-700 mb-3">
                The Railway Recruitment Board is expected to release over <strong>2,500+ vacancies</strong> for Nursing Superintendents and Staff Nurses. This is a golden opportunity as it offers a Level-7 salary with unmatched railway perks. Candidates should start preparing early with the <a href={NPREP_LINKS.GOLD_COURSE} className="font-semibold underline">NPrep GOLD Batch</a> to cover the syllabus comprehensively.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-primary mb-2">2. AIIMS NORCET 2026</h3>
              <p className="text-slate-700 mb-3">
                Conducted twice a year, NORCET recruits Nursing Officers for all AIIMS institutes. The competition is fierce, requiring deep clinical knowledge. The exam focuses heavily on practical application and image-based questions. Practice these high-level questions with our <a href={NPREP_LINKS.TEST_SERIES} className="font-semibold underline">Nursing Test Series</a>.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-primary mb-2">3. JIPMER Nursing Officer Exam 2026</h3>
              <p className="text-slate-700 mb-3">
                Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER) is a premier institute of national importance. The recruitment for Nursing Officer (Group B) is highly prestigious. The exam pattern focuses on advanced nursing care, clinical decision-making, and patient safety. Aspirants must have a strong grip on core subjects, which is covered in detail in our <a href={NPREP_LINKS.GOLD_COURSE} className="font-semibold underline">GOLD Batch</a>.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-primary mb-2">4. DSSSB Nursing Officer 2026</h3>
              <p className="text-slate-700 mb-3">
                The Delhi Subordinate Services Selection Board (DSSSB) recruits for Delhi government hospitals. Unlike AIIMS, DSSSB has a significant non-nursing section (Math, Hindi, English). Many candidates fail because they ignore this section. Our <a href={NPREP_LINKS.RAPID_REVISION} className="font-semibold underline">Rapid Revision Course</a> includes dedicated modules for these non-tech subjects to ensure you clear the cutoff.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-primary mb-2">5. Military Nursing Service (MNS) 2026</h3>
              <p className="text-slate-700 mb-3">
                For those who wish to wear the uniform, MNS offers a Commissioned Officer rank in the Indian Army. The selection process involves a written exam followed by an interview and medical board. It requires not just nursing knowledge but also general intelligence and personality traits.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-primary mb-2">6. OSSSC Nursing Officer 2026</h3>
              <p className="text-slate-700 mb-3">
                The Odisha Sub-ordinate Staff Selection Commission (OSSSC) conducts massive recruitment drives for state-run hospitals. The exam is known for being direct and factual. Solving <a href={NPREP_LINKS.PYQ} className="font-semibold underline">Previous Year Questions (PYQs)</a> is the best strategy to crack this state-level exam.
              </p>
            </div>
          </div>

          {/* NPrep Courses Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">NPrep Online Coaching: Your Path to Success</h2>
            <p className="text-slate-600 mb-6">
              At <strong>NPrep</strong>, we understand the unique challenges of nursing aspirants. Our courses are designed by expert faculty to fit into your busy schedule, whether you are a student or a working nurse.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-yellow-500">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <GraduationCap className="h-6 w-6 text-yellow-600" />
                    <h3 className="text-xl font-bold">GOLD Batch</h3>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">
                    Our flagship comprehensive course covering the entire syllabus from basics to advanced. Includes video lectures, notes, and doubt sessions.
                  </p>
                  <a href={NPREP_LINKS.GOLD_COURSE} className="text-primary font-semibold hover:underline">Explore Course &rarr;</a>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <BookOpen className="h-6 w-6 text-purple-600" />
                    <h3 className="text-xl font-bold">Rapid Revision</h3>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">
                    A 30-day crash course designed for last-minute preparation. Focuses on high-yield topics and exam trends.
                  </p>
                  <a href={NPREP_LINKS.RAPID_REVISION} className="text-primary font-semibold hover:underline">Start Revision &rarr;</a>
                </CardContent>
              </Card>
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
                  Solving past papers is non-negotiable. It helps you understand the exam pattern and difficulty level. <a href={NPREP_LINKS.PYQ} target="_blank" rel="noopener noreferrer">Download RRB PYQs here</a> to start practicing today.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">2. Mock Tests & Test Series</h3>
                <p className="text-slate-600">
                  Regular testing builds speed and accuracy. Our <a href={NPREP_LINKS.TEST_SERIES} target="_blank" rel="noopener noreferrer">Nursing Test Series</a> offers full-length mock tests with detailed performance analysis.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">3. Effective Study Plan</h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-600">
                  <li><strong>Analyze the Syllabus:</strong> Know what to study and what to skip.</li>
                  <li><strong>Time Management:</strong> Allocate specific hours for Nursing subjects and General Awareness.</li>
                  <li><strong>Revision:</strong> Use short notes for daily revision.</li>
                  <li><strong>Consistency:</strong> Stick to your schedule. Join our <a href={NPREP_LINKS.DAILY_TEST} target="_blank" rel="noopener noreferrer">Daily Free Test</a> to maintain momentum.</li>
                </ul>
              </div>
            </div>
          </div>

        </article>
      </div>
    </section>
  );
}

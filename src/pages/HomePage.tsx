import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';

const infoPages = [
  {
    name: 'RRB Nursing Notification',
    path: '/rrb-nursing-notification',
    desc: 'Official notice, dates, and instructions',
  },
  {
    name: 'RRB Nursing Vacancy',
    path: '/rrb-nursing-vacancy',
    desc: 'Zone-wise and category-wise post details',
  },
  {
    name: 'RRB Nursing Eligibility',
    path: '/rrb-nursing-eligibility',
    desc: 'Qualification, age, and registration criteria',
  },
  {
    name: 'RRB Nursing Exam Pattern',
    path: '/rrb-nursing-exam-pattern',
    desc: 'CBT structure, marking, and sections',
  },
  {
    name: 'RRB Nursing Syllabus',
    path: '/rrb-nursing-syllabus',
    desc: 'Topic coverage and revision checkpoints',
  },
  {
    name: 'RRB Nursing Selection Process',
    path: '/rrb-nursing-selection-process',
    desc: 'CBT merit, verification, and medical stages',
  },
  {
    name: 'RRB Nursing Application Process',
    path: '/rrb-nursing-application-process',
    desc: 'Registration, upload, and final submission steps',
  },
  {
    name: 'RRB Nursing Admit Card',
    path: '/rrb-nursing-admit-card',
    desc: 'Hall ticket release and exam day instructions',
  },
  {
    name: 'RRB Nursing Exam Date',
    path: '/rrb-nursing-exam-date',
    desc: 'Exam schedule, city intimation, and shifts',
  },
  {
    name: 'RRB Nursing Salary',
    path: '/rrb-nursing-salary',
    desc: 'Pay level, allowances, and in-hand overview',
  },
];

const processSteps = [
  'Notification Release',
  'Online Application',
  'Admit Card Download',
  'CBT Exam',
  'Result & Merit List',
  'Document Verification',
  'Medical & Final Appointment',
];

export default function HomePage() {
  return (
    <div className="bg-white">
      <SEO
        title="RRB Nursing Exam Information Portal"
        description="Get official updates on Railway Nursing Superintendent recruitment including vacancies, eligibility, exam pattern and application process."
        canonical="/"
      />

      <section className="relative overflow-hidden py-16 px-4 bg-gradient-to-b from-red-50 via-white to-white border-b border-red-100">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-10 -left-10 h-56 w-56 rounded-full bg-red-200/40 blur-3xl" />
          <div className="absolute top-12 right-0 h-64 w-64 rounded-full bg-rose-200/30 blur-3xl" />
        </div>

        <div className="relative container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 text-red-800 text-sm font-semibold mb-5">
            <Sparkles className="h-4 w-4" /> Railway Recruitment Updates
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
            RRB Nursing Exam Information Portal
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed mb-4 mx-auto">
            Get official updates on Railway Nursing Superintendent recruitment including vacancies, eligibility, exam pattern and application process.
          </p>
          <p className="text-base text-slate-600 mb-3 mx-auto">
            For preparation, mock tests and study plans visit NPrep.
          </p>
          <a
            href="https://exam.nprep.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 mb-8 flex w-fit mx-auto items-center justify-center rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-800 ring-1 ring-red-200 hover:bg-red-200 transition-colors"
          >
            Check your RRB Nursing Selection Chances
          </a>

          <a
            href="https://nprep.in/rrb-nursing-preparation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-red-200 transition-all"
          >
            Prepare for RRB Nursing <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Recruitment Process at a Glance</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {processSteps.map((step, idx) => (
              <div
                key={step}
                className="rounded-lg border border-red-100 p-4 bg-gradient-to-br from-white to-red-50 hover:-translate-y-0.5 hover:shadow-md hover:shadow-red-100 transition-all"
              >
                <span className="text-xs font-bold text-primary">STEP {idx + 1}</span>
                <p className="text-slate-800 font-semibold mt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">RRB Nursing Information Pages</h2>
          <p className="text-slate-600 mb-6">
            Explore concise, official-information focused pages for each major recruitment topic.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {infoPages.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="group block border border-slate-200 rounded-xl p-5 hover:border-red-300 hover:bg-gradient-to-br hover:from-red-50 hover:to-white hover:shadow-md hover:shadow-red-100 transition-all"
              >
                <span className="font-semibold text-slate-800 block group-hover:text-red-700">{item.name}</span>
                <span className="text-sm text-slate-600">{item.desc}</span>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-red-700">
                  Read details <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-4 border-t bg-gradient-to-r from-red-50/60 to-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Official Source Reminder</h2>
          <p className="text-slate-700 leading-relaxed">
            Always verify final dates and instructions with official Railway Recruitment Board notifications. This portal is designed to organize key information in one place for quick reference.
          </p>
        </div>
      </section>
    </div>
  );
}

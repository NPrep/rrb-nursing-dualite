import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

type Section = {
  heading: string;
  content: string;
};

type RRBInfoPageProps = {
  title: string;
  description: string;
  canonical: string;
  keyPoints: string[];
  sections: Section[];
  importantDates?: string[];
};

const quickLinks = [
  { label: 'Eligibility', path: '/rrb-nursing-eligibility' },
  { label: 'Exam Pattern', path: '/rrb-nursing-exam-pattern' },
  { label: 'Vacancy', path: '/rrb-nursing-vacancy' },
  { label: 'Application', path: '/rrb-nursing-application-process' },
];

export default function RRBInfoPage({
  title,
  description,
  canonical,
  keyPoints,
  sections,
  importantDates,
}: RRBInfoPageProps) {
  return (
    <div className="bg-slate-50 py-12 px-4">
      <SEO title={`${title} 2026`} description={description} canonical={canonical} />
      <div className="container mx-auto max-w-5xl space-y-6">
        <article className="bg-white border border-slate-200 rounded-2xl p-6 md:p-10 shadow-sm">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
          <p className="text-slate-700 text-base md:text-lg leading-relaxed">{description}</p>

          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {keyPoints.map((point) => (
              <div key={point} className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                {point}
              </div>
            ))}
          </div>

          {importantDates && importantDates.length > 0 && (
            <div className="mt-8 border-t border-slate-200 pt-6">
              <h2 className="text-xl font-bold text-slate-900 mb-3">Important timeline checkpoints</h2>
              <ul className="list-disc pl-5 text-slate-700 space-y-2">
                {importantDates.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-8 border-t border-slate-200 pt-6 space-y-5">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-bold text-slate-900 mb-2">{section.heading}</h2>
                <p className="text-slate-700 leading-relaxed">{section.content}</p>
              </section>
            ))}
          </div>

          <div className="mt-8 border-t border-slate-200 pt-6">
            <h2 className="text-xl font-bold text-slate-900 mb-3">Quick links</h2>
            <div className="flex flex-wrap gap-3">
              {quickLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="px-4 py-2 rounded-md border border-slate-300 text-sm font-semibold text-slate-700 hover:text-primary hover:border-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

import React from 'react';

export default function SEOContent() {
  return (
    <section className="py-16 px-4 bg-white border-t border-slate-100">
      <div className="container mx-auto max-w-5xl">
        <article className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Nursing Careers in Indian Railways</h2>
            <p className="text-slate-600 leading-relaxed">
              Indian Railways offers one of the most stable nursing career tracks through Railway Recruitment Board (RRB) hiring. Nursing professionals work in railway hospitals and health units across zones, handling patient care, emergency support, and preventive health services. These posts combine clinical responsibility with long-term government service benefits and a structured promotion pathway.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">RRB Nursing Recruitment 2026 Overview</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The 2026 cycle is expected to include multiple nursing designations under Railway medical services. Aspirants should track zone-wise vacancy notices, verify eligibility, and prepare for CBT plus document verification. Early preparation helps candidates balance core nursing subjects with general awareness and aptitude sections.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">RRB Nursing Posts and Pay Levels</h3>
            <div className="overflow-x-auto border rounded-lg shadow-sm">
              <table className="w-full text-base text-left">
                <thead className="bg-slate-50 text-slate-700 uppercase">
                  <tr>
                    <th className="px-6 py-3 border-b">Post Name</th>
                    <th className="px-6 py-3 border-b">Pay Level</th>
                    <th className="px-6 py-3 border-b">Role Focus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">Nursing Superintendent</td>
                    <td className="px-6 py-4">Level 7</td>
                    <td className="px-6 py-4">Clinical nursing care, ward management, and hospital coordination.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Staff Nurse</td>
                    <td className="px-6 py-4">Level 7</td>
                    <td className="px-6 py-4">Direct patient care, emergency support, and routine procedures.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Chief Nursing Superintendent</td>
                    <td className="px-6 py-4">Level 8</td>
                    <td className="px-6 py-4">Senior supervision, staff planning, and quality control in railway hospitals.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Study Materials & Preparation Strategy</h2>
            <p className="text-slate-600 mb-4">
              To crack RRB nursing recruitment, combine conceptual revision with frequent mock practice and exam-oriented time management.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">1. Previous Year Question Papers (PYQs)</h3>
                <p className="text-slate-600">
                  Solve previous papers to understand recurring topics, exam difficulty, and the best attempt strategy.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">2. Effective Study Plan</h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-600">
                  <li><strong>Syllabus-first planning:</strong> Prioritize high-weightage nursing subjects.</li>
                  <li><strong>Time blocks:</strong> Reserve daily slots for nursing theory and one slot for MCQ practice.</li>
                  <li><strong>Revision cycles:</strong> Use weekly revision plus short notes for rapid recall.</li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-3">RRB Nursing Information Portal</h3>
            <p className="text-sm text-slate-400">
              Official information hub for Railway Nursing Superintendent recruitment updates.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Important Pages</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/rrb-nursing-notification" className="hover:text-primary transition-colors">Notification</Link></li>
              <li><Link to="/rrb-nursing-vacancy" className="hover:text-primary transition-colors">Vacancy</Link></li>
              <li><Link to="/rrb-nursing-eligibility" className="hover:text-primary transition-colors">Eligibility</Link></li>
              <li><Link to="/rrb-nursing-exam-pattern" className="hover:text-primary transition-colors">Exam Pattern</Link></li>
              <li><Link to="/rrb-nursing-application-process" className="hover:text-primary transition-colors">Application Process</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-8">
          <h4 className="text-white font-bold text-lg mb-3">Prepare for Railway RRB Nursing Exam with NPrep</h4>
          <ul className="list-disc pl-5 text-slate-300 text-sm space-y-1 mb-4">
            <li>30,000+ nursing MCQs</li>
            <li>RRB level mock tests</li>
            <li>structured preparation plan</li>
            <li>previous year questions</li>
          </ul>
          <a href="https://nprep.in" target="_blank" rel="noopener noreferrer" className="inline-flex text-white bg-primary px-4 py-2 rounded-md font-semibold hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-lg transition-all">
            Start preparation →
          </a>
        </div>
      </div>
    </footer>
  );
}

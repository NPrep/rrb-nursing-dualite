import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { NPREP_LINKS } from '../../data/links';
import { Logo } from '../ui/Logo';

export default function Footer() {
  const RRB_OFFICIAL_URL = "https://indianrailways.gov.in/railwayboard/view_section.jsp?lang=0&id=0,7,1281";
  
  return (
    <footer className="bg-slate-900 text-slate-200 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Logo className="h-10 w-10" />
              <span className="text-lg font-bold text-white">RRB Nursing</span>
            </div>
            <p className="text-sm text-slate-400">
              India's leading preparation portal for Railway Nursing Superintendent exams. Get the best courses, test series, and study material.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Official Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/notifications" className="hover:text-white transition-colors">Latest Notifications</Link></li>
              <li><a href={RRB_OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">Apply Online <ExternalLink className="h-3 w-3" /></a></li>
              <li><a href={RRB_OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">Download Admit Card <ExternalLink className="h-3 w-3" /></a></li>
              <li><a href={RRB_OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">Check Results <ExternalLink className="h-3 w-3" /></a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Preparation</h3>
            <ul className="space-y-2 text-sm">
              <li><a href={NPREP_LINKS.GOLD_COURSE} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-slate-300 font-medium flex items-center gap-1">Gold Course <ArrowRight className="h-3 w-3" /></a></li>
              <li><a href={NPREP_LINKS.RAPID_REVISION} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">Rapid Revision <ArrowRight className="h-3 w-3" /></a></li>
              <li><a href={NPREP_LINKS.TEST_SERIES} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">Nursing Test Series <ArrowRight className="h-3 w-3" /></a></li>
              <li><a href={NPREP_LINKS.PYQ} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">Previous Year Papers <ArrowRight className="h-3 w-3" /></a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Important</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/resources" className="hover:text-white transition-colors">Free Resources</Link></li>
              <li><Link to="/blogs" className="hover:text-white transition-colors">Exam Strategy Blog</Link></li>
              <li><Link to="/helpdesk" className="hover:text-white transition-colors">Helpdesk</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Disclaimer Section */}
        <div className="border-t border-slate-800 mt-12 pt-8 pb-4">
          <div className="bg-slate-950/50 rounded-lg p-6 border border-slate-800/50">
            <p className="text-xs text-slate-400 leading-relaxed text-center md:text-left">
              <span className="font-bold text-slate-300 block mb-2 md:inline md:mb-0 md:mr-1">Disclaimer:</span> 
              rrbnursing.com is neither associated with Indian Railways nor with Railway Recruitment Board (RRB). The Official website of RRB Application is <a href="https://rrbapply.gov.in" target="_blank" rel="nofollow noreferrer" className="text-blue-400 hover:underline">rrbapply.gov.in</a>. rrbapply.com is a job portal sharing the Latest Vacancy Notification, Eligibility, Application Process, Exam Date of RRB Nursing Superintendent Exam Syllabus, Exam Date & Admit Cards & Results.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 mt-6">
          <p>© 2025 RRB Nursing. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </footer>
  );
}

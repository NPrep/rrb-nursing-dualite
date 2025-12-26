import React from 'react';
import { Link } from 'react-router-dom';
import { Cross, ExternalLink, ArrowRight } from 'lucide-react';

export default function Footer() {
  const RRB_OFFICIAL_URL = "https://indianrailways.gov.in/railwayboard/view_section.jsp?lang=0&id=0,7,1281";
  const NPREP_URL = "https://nprep.in";
  
  return (
    <footer className="bg-slate-900 text-slate-200 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-white/10 p-1.5 rounded-md">
                <Cross className="h-6 w-6 text-white" />
              </div>
              <span className="text-lg font-bold text-white">RRB Nursing</span>
            </div>
            <p className="text-sm text-slate-400">
              Official recruitment portal for Indian Railways Nursing Staff. Facilitating transparent and efficient hiring processes across all zones.
            </p>
            <div className="text-xs text-slate-500 border-t border-slate-800 pt-4 mt-4">
              Disclaimer: This is a demo portal UI for educational purposes. Not affiliated with Government of India.
            </div>
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
              <li><a href={NPREP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-slate-300 font-medium flex items-center gap-1">Free Study Material <ArrowRight className="h-3 w-3" /></a></li>
              {/* Changed to Internal Blog Link */}
              <li><Link to="/blogs" className="hover:text-primary transition-colors flex items-center gap-1">Exam Strategy Blog <ArrowRight className="h-3 w-3" /></Link></li>
              <li><a href={NPREP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">Nursing Mock Tests <ArrowRight className="h-3 w-3" /></a></li>
              <li><a href={NPREP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">Previous Year Papers <ArrowRight className="h-3 w-3" /></a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Important</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="hover:text-white transition-colors">Terms of Use</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Hyperlinking Policy</Link></li>
              <li><Link to="/helpdesk" className="hover:text-white transition-colors">Helpdesk</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2025 Railway Recruitment Board. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </footer>
  );
}

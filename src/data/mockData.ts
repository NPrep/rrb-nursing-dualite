import { NPREP_LINKS } from './links';

export const notifications = [
  {
    id: "cen-nursing-01-2026",
    title: "CEN 01/2026 - Recruitment of Nursing Superintendent",
    date: "2026-02-15",
    type: "Recruitment",
    status: "Active",
    zone: "All RRBs",
    description: "Applications invited for 1200+ Nursing Superintendent posts across Indian Railways."
  },
  {
    id: "cen-staff-nurse-02-2026",
    title: "Upcoming: Staff Nurse (Level-7) Vacancies",
    date: "2026-03-01",
    type: "Recruitment",
    status: "Upcoming",
    zone: "All RRBs",
    description: "Notification expected for 2500+ Staff Nurse vacancies in Railway Hospitals."
  },
  {
    id: "result-nursing-2025",
    title: "Result: Chief Nursing Superintendent Promotion Exam",
    date: "2025-01-20",
    type: "Result",
    status: "Closed",
    zone: "RRB Mumbai",
    description: "List of departmental candidates shortlisted for promotion."
  },
  {
    id: "paramedical-2025",
    title: "CEN 04/2025 - Paramedical Categories (Nursing Wing)",
    date: "2024-12-10",
    type: "Recruitment",
    status: "Closed",
    zone: "All RRBs",
    description: "Application window closed for Assistant Nursing Officer posts."
  },
  {
    id: "admit-card-ns",
    title: "Download E-Call Letter for Nursing Supdt. CBT",
    date: "2025-05-10",
    type: "Admit Card",
    status: "Active",
    zone: "All RRBs",
    description: "Login with Registration Number to download hall ticket."
  }
];

export const zones = [
  "Ahmedabad", "Ajmer", "Allahabad", "Bangalore", "Bhopal",
  "Bhubaneswar", "Bilaspur", "Chandigarh", "Chennai", "Gorakhpur",
  "Guwahati", "Jammu-Srinagar", "Kolkata", "Malda", "Mumbai",
  "Muzaffarpur", "Patna", "Ranchi", "Secunderabad", "Siliguri", "Thiruvananthapuram"
];

export const importantDates = [
  { title: "Nursing Supdt. Applications", date: "Feb 20, 2026", status: "completed" },
  { title: "Staff Nurse Notification", date: "Mar 01, 2026", status: "upcoming" },
  { title: "CBT-1 Exam Date", date: "June 15, 2026", status: "upcoming" },
  { title: "Admit Card Release", date: "June 01, 2026", status: "upcoming" },
];

export const faqs = [
  {
    question: "How do I apply for RRB Nursing Superintendent?",
    answer: "Visit the official RRB website via our 'Apply' section. Ensure you have your GNM/B.Sc Nursing registration handy."
  },
  {
    question: "Is experience required for Staff Nurse?",
    answer: "Generally, no experience is required for direct recruitment of Staff Nurse (Level-7), but it is mandatory for higher posts."
  },
  {
    question: "What is the syllabus for the Nursing exam?",
    answer: "It covers Professional Ability (Nursing), General Awareness, Arithmetic, General Intelligence, and General Science."
  },
  {
    question: "Where can I find free study material?",
    answer: "You can access our Free Resources section which includes video lectures and previous year papers."
  }
];

export const blogs = [
  {
    id: "6-months-preparation-strategy-rrb-nursing-superintendent",
    title: "6 Months Preparation Strategy for RRB Nursing Superintendent",
    excerpt: "A comprehensive month-by-month study plan to crack the RRB Nursing Superintendent exam, covering foundation, core subjects, daily schedules, and revision strategies.",
    date: "March 20, 2025",
    author: "NPrep Team",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=2070",
    content: `
      <p class="lead text-lg text-slate-700 mb-6">Cracking the RRB Nursing Superintendent exam requires more than just clinical knowledge—it demands a disciplined, strategic approach. With the 2026 notification expected soon, a dedicated 6-month study plan is the perfect timeline to cover the vast syllabus without burnout.</p>

      <div class="my-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg text-center shadow-sm">
        <p class="font-bold text-yellow-800 text-lg mb-3">** Boost Your Prep with Rapid Revision **</p>
        <p class="text-sm text-yellow-700 mb-4">Short on time? Cover the entire syllabus quickly with our focused course.</p>
        <a href="${NPREP_LINKS.RAPID_REVISION}" target="_blank" class="inline-flex items-center text-white bg-yellow-600 hover:bg-yellow-700 px-6 py-3 rounded-md font-bold transition-colors">
          Join RRB Rapid Revision Course
        </a>
      </div>

      <h2 class="text-2xl font-bold text-slate-900 mb-4">Phase 1: The Foundation (Months 1-2)</h2>
      <p class="mb-4"><strong>Goal:</strong> Build a rock-solid conceptual base. Do not rush into solving MCQs without understanding the theory.</p>
      
      <h3 class="text-xl font-semibold text-slate-800 mb-3">Key Targets for Phase 1:</h3>
      <ul class="list-disc pl-5 space-y-2 mb-6 text-slate-700 marker:text-primary">
          <li><strong>Anatomy & Physiology:</strong> Focus on skeletal, circulatory, nervous, and respiratory systems.</li>
          <li><strong>Fundamentals of Nursing:</strong> Master vital signs, routes of administration, CPR, First Aid.</li>
          <li><strong>General Science:</strong> Start reading NCERT 9th & 10th Physics and Chemistry.</li>
      </ul>

      <div class="my-8 p-6 bg-blue-50 border border-blue-200 rounded-lg text-center shadow-sm">
        <p class="font-bold text-blue-800 text-lg mb-3">** Need a Complete Solution? **</p>
        <a href="${NPREP_LINKS.GOLD_COURSE}" target="_blank" class="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md font-bold transition-colors">
          Check Out Gold Course for Complete Preparation
        </a>
      </div>

      <h2 class="text-2xl font-bold text-slate-900 mb-4">Phase 4: The Final Sprint (Month 6)</h2>
      <ul class="list-disc pl-5 space-y-2 mb-6 text-slate-700 marker:text-primary">
          <li><strong>Mock Tests:</strong> Attempt at least <strong>3 full-length mock tests</strong> per week.</li>
          <li><strong>Analysis:</strong> Spend more time analyzing the mock test than taking it.</li>
      </ul>

      <div class="my-8 p-6 bg-green-50 border border-green-200 rounded-lg text-center shadow-sm">
        <p class="font-bold text-green-800 text-lg mb-3">** Practice Makes Perfect **</p>
        <a href="${NPREP_LINKS.TEST_SERIES}" target="_blank" class="inline-flex items-center text-white bg-green-600 hover:bg-green-700 px-6 py-3 rounded-md font-bold transition-colors">
          Join RRB Test Series
        </a>
      </div>
    `
  },
  {
    id: "rrb-nursing-superintendent-exam-pattern-syllabus-2026-complete-subject-wise-guide",
    title: "RRB Nursing Superintendent Exam Pattern & Syllabus 2026: Complete Subject-Wise Guide",
    excerpt: "A comprehensive breakdown of the RRB Nursing Superintendent 2026 exam pattern, marking scheme, and detailed subject-wise syllabus.",
    date: "March 15, 2025",
    author: "NPrep Team",
    category: "Syllabus & Guide",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070",
    content: `
      <p class="lead text-lg text-slate-700 mb-6">The RRB Nursing Superintendent exam is a senior supervisory-level exam that evaluates your clinical depth. Understanding the exact exam pattern is critical.</p>

      <div class="my-8 p-6 bg-red-50 border border-red-200 rounded-lg text-center shadow-sm">
        <p class="font-bold text-red-800 text-lg mb-3">** Solve Previous Year Questions **</p>
        <a href="${NPREP_LINKS.PYQ}" target="_blank" class="inline-flex items-center text-white bg-primary hover:bg-primary/90 px-6 py-3 rounded-md font-bold transition-colors">
          Download RRB PYQs Now
        </a>
      </div>

      <h2 class="text-2xl font-bold text-slate-900 mb-4">RRB Nursing Superintendent Exam Pattern</h2>
      <p class="mb-6">It is a single-stage Computer Based Test (CBT) with 100 questions.</p>

      <h3 class="text-xl font-semibold text-slate-800 mb-4">Exam Structure Overview</h3>
      <ul class="list-disc pl-5 space-y-2 mb-6 text-slate-700 marker:text-primary">
          <li><strong>Professional Ability (Nursing):</strong> 70 Marks</li>
          <li><strong>General Awareness:</strong> 10 Marks</li>
          <li><strong>General Arithmetic & Reasoning:</strong> 10 Marks</li>
          <li><strong>General Science:</strong> 10 Marks</li>
      </ul>

      <div class="my-8 p-6 bg-purple-50 border border-purple-200 rounded-lg text-center shadow-sm">
        <p class="font-bold text-purple-800 text-lg mb-3">** Test Your Knowledge Daily **</p>
        <a href="${NPREP_LINKS.DAILY_TEST}" target="_blank" class="inline-flex items-center text-white bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-md font-bold transition-colors">
          Attempt Free RRB Daily Test
        </a>
      </div>
    `
  },
  {
    id: "rrb-nursing-superintendent-eligibility-criteria-2026",
    title: "RRB Nursing Superintendent Eligibility Criteria 2026: Age, Qualification & Experience",
    excerpt: "Confused about eligibility? Check the detailed age limit, educational qualification (GNM vs B.Sc), and experience requirements.",
    date: "March 22, 2025",
    author: "NPrep Team",
    category: "Eligibility",
    image: "https://images.unsplash.com/photo-1579684385136-137af7546135?auto=format&fit=crop&q=80&w=2070",
    content: `
      <p class="lead text-lg text-slate-700 mb-6">Before you start your preparation, it is crucial to confirm if you are eligible for the post of RRB Nursing Superintendent.</p>

      <h2 class="text-2xl font-bold text-slate-900 mb-4">1. Educational Qualification</h2>
      <ul class="list-disc pl-5 space-y-3 text-slate-700 marker:text-primary">
          <li><strong>Option A:</strong> GNM from a recognized institution.</li>
          <li><strong>Option B:</strong> B.Sc. (Nursing) from a recognized University.</li>
      </ul>

      <div class="my-8 p-6 bg-blue-50 border border-blue-200 rounded-lg text-center shadow-sm">
        <p class="font-bold text-blue-800 text-lg mb-3">** Start Preparing Early **</p>
        <a href="${NPREP_LINKS.GOLD_COURSE}" target="_blank" class="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md font-bold transition-colors">
          Join Gold Course for Complete Prep
        </a>
      </div>
    `
  },
  {
    id: "rrb-nursing-superintendent-salary-job-profile-2026",
    title: "RRB Nursing Superintendent Salary 2026: In-Hand Pay, Allowances & Job Profile",
    excerpt: "Discover the lucrative salary structure of a Railway Nursing Superintendent under the 7th Pay Commission.",
    date: "March 21, 2025",
    author: "NPrep Team",
    category: "Salary & Career",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2070",
    content: `
      <p class="lead text-lg text-slate-700 mb-6">The post of Nursing Superintendent in Indian Railways is a Group 'C' Level-7 post, making it one of the highest-paying nursing jobs.</p>

      <div class="my-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg text-center shadow-sm">
        <p class="font-bold text-yellow-800 text-lg mb-3">** Clear the Exam in First Attempt **</p>
        <a href="${NPREP_LINKS.RAPID_REVISION}" target="_blank" class="inline-flex items-center text-white bg-yellow-600 hover:bg-yellow-700 px-6 py-3 rounded-md font-bold transition-colors">
          Enroll in Rapid Revision Course
        </a>
      </div>
    `
  },
  {
    id: "best-books-rrb-nursing-superintendent-preparation",
    title: "Best Books for RRB Nursing Superintendent 2026: Subject-Wise List",
    excerpt: "Stop wasting money on random guides. Here is the curated list of the best books and online resources.",
    date: "March 19, 2025",
    author: "NPrep Team",
    category: "Resources",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=2073",
    content: `
      <p class="lead text-lg text-slate-700 mb-6">Choosing the right study material is 50% of the battle won. We recommend a mix of standard textbooks and our curated online courses.</p>

      <div class="my-8 p-6 bg-red-50 border border-red-200 rounded-lg text-center shadow-sm">
        <p class="font-bold text-red-800 text-lg mb-3">** Don't Just Read, Practice! **</p>
        <a href="${NPREP_LINKS.PYQ}" target="_blank" class="inline-flex items-center text-white bg-primary hover:bg-primary/90 px-6 py-3 rounded-md font-bold transition-colors">
          Download Previous Year Papers
        </a>
      </div>

      <div class="my-8 p-6 bg-green-50 border border-green-200 rounded-lg text-center shadow-sm">
        <p class="font-bold text-green-800 text-lg mb-3">** Access Free Video Lectures **</p>
        <a href="${NPREP_LINKS.FREE_RESOURCES}" target="_blank" class="inline-flex items-center text-white bg-green-600 hover:bg-green-700 px-6 py-3 rounded-md font-bold transition-colors">
          Watch Free Nursing Classes
        </a>
      </div>
    `
  },
  {
    id: "top-5-mistakes-rrb-nursing-exam",
    title: "Top 5 Mistakes to Avoid in RRB Nursing Superintendent Exam",
    excerpt: "Why do good candidates fail? Learn about the common pitfalls like ignoring non-tech subjects and negative marking.",
    date: "March 18, 2025",
    author: "NPrep Team",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1518644730709-0835105d9daa?auto=format&fit=crop&q=80&w=2070",
    content: `
      <p class="lead text-lg text-slate-700 mb-6">Hard work alone doesn't guarantee selection. Smart work does. Avoid these common mistakes.</p>

      <div class="my-8 p-6 bg-purple-50 border border-purple-200 rounded-lg text-center shadow-sm">
        <p class="font-bold text-purple-800 text-lg mb-3">** Avoid Negative Marking **</p>
        <a href="${NPREP_LINKS.TEST_SERIES}" target="_blank" class="inline-flex items-center text-white bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-md font-bold transition-colors">
          Practice with RRB Test Series
        </a>
      </div>
    `
  },
  {
    id: "rrb-nursing-previous-year-cutoff-analysis",
    title: "RRB Nursing Superintendent: Previous Year Cut-off Analysis & Safe Score",
    excerpt: "Analyze the zone-wise cut-off trends from previous years to set a realistic target score.",
    date: "March 17, 2025",
    author: "NPrep Team",
    category: "Analysis",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
    content: `
      <p class="lead text-lg text-slate-700 mb-6">Understanding the cut-off trends is the first step in setting a realistic goal.</p>

      <div class="my-8 p-6 bg-blue-50 border border-blue-200 rounded-lg text-center shadow-sm">
        <p class="font-bold text-blue-800 text-lg mb-3">** Aim for 80+ Score **</p>
        <a href="${NPREP_LINKS.GOLD_COURSE}" target="_blank" class="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md font-bold transition-colors">
          Start Gold Course Preparation
        </a>
      </div>
    `
  },
  {
    id: "document-verification-checklist-rrb-nursing",
    title: "Document Verification Checklist for RRB Nursing Superintendent",
    excerpt: "Don't get rejected at the last stage. Here is the complete list of original documents.",
    date: "March 16, 2025",
    author: "NPrep Team",
    category: "Guide",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2070",
    content: `
      <p class="lead text-lg text-slate-700 mb-6">Document Verification (DV) is the final hurdle before your appointment letter.</p>

      <div class="my-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg text-center shadow-sm">
        <p class="font-bold text-yellow-800 text-lg mb-3">** Final Revision Before Exam **</p>
        <a href="${NPREP_LINKS.RAPID_REVISION}" target="_blank" class="inline-flex items-center text-white bg-yellow-600 hover:bg-yellow-700 px-6 py-3 rounded-md font-bold transition-colors">
          Get Rapid Revision Course
        </a>
      </div>
    `
  }
];

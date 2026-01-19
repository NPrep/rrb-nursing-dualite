import { NPREP_LINKS } from './links';

// Updated Notifications with specific download links (pointing to PYQ/Resources for actual files)
export const notifications = [
  {
    id: "cen-nursing-01-2026",
    title: "CEN 01/2026 - Recruitment of Nursing Superintendent",
    date: "2026-02-15",
    type: "Recruitment",
    status: "Active",
    zone: "All RRBs",
    description: "Applications invited for 1200+ Nursing Superintendent posts across Indian Railways.",
    downloadLink: NPREP_LINKS.PYQ // Directing to actual resource
  },
  {
    id: "cen-staff-nurse-02-2026",
    title: "Upcoming: Staff Nurse (Level-7) Vacancies",
    date: "2026-03-01",
    type: "Recruitment",
    status: "Upcoming",
    zone: "All RRBs",
    description: "Notification expected for 2500+ Staff Nurse vacancies in Railway Hospitals.",
    downloadLink: NPREP_LINKS.FREE_RESOURCES
  },
  {
    id: "result-nursing-2025",
    title: "Result: Chief Nursing Superintendent Promotion Exam",
    date: "2025-01-20",
    type: "Result",
    status: "Closed",
    zone: "RRB Mumbai",
    description: "List of departmental candidates shortlisted for promotion.",
    downloadLink: NPREP_LINKS.PYQ
  },
  {
    id: "paramedical-2025",
    title: "CEN 04/2025 - Paramedical Categories (Nursing Wing)",
    date: "2024-12-10",
    type: "Recruitment",
    status: "Closed",
    zone: "All RRBs",
    description: "Application window closed for Assistant Nursing Officer posts.",
    downloadLink: NPREP_LINKS.PYQ
  },
  {
    id: "admit-card-ns",
    title: "Download E-Call Letter for Nursing Supdt. CBT",
    date: "2025-05-10",
    type: "Admit Card",
    status: "Active",
    zone: "All RRBs",
    description: "Login with Registration Number to download hall ticket.",
    downloadLink: "https://rrbapply.gov.in" // Keep official link for Admit Card login
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
    id: "rrb-nursing-superintendent-eligibility-criteria-2026",
    title: "RRB Nursing Superintendent Eligibility Criteria 2026: Age, Qualification & Medical Standard",
    excerpt: "Confused about RRB Nursing eligibility? Read this detailed guide on Age Limit, Educational Qualification (GNM vs BSc), Experience requirements, and Medical Standards for 2026.",
    date: "March 24, 2026",
    author: "Senior Nursing Officer",
    category: "Eligibility",
    image: "https://i.imgur.com/dK1c8JQ.jpeg",
    content: `
      <p class="lead text-xl text-slate-700 mb-8 leading-relaxed">The <strong>RRB Nursing Superintendent</strong> post is one of the most sought-after government jobs for nursing professionals in India. With the 2026 recruitment cycle around the corner, thousands of aspirants are asking the same question: <em>"Am I eligible?"</em>. In this comprehensive guide, I break down every single aspect of the eligibility criteria—from age relaxations to strict medical standards.</p>

      <p class="text-slate-700 mb-6 text-lg">As a Senior Nursing Officer, I strongly recommend that you verify your eligibility early and start preparing immediately. For structured guidance, <strong>NPrep</strong> is the platform I trust and recommend to all my juniors.</p>

      <div class="my-8 p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg shadow-sm">
        <h4 class="font-bold text-blue-900 text-lg mb-2">🚀 Quick Summary for Busy Nurses</h4>
        <ul class="list-disc pl-5 space-y-1 text-blue-800">
          <li><strong>Post Name:</strong> Nursing Superintendent (Level-7)</li>
          <li><strong>Age Limit:</strong> 20 to 40 Years (General)</li>
          <li><strong>Qualification:</strong> GNM (3 Years) OR B.Sc. Nursing</li>
          <li><strong>Experience:</strong> NOT required for freshers (Direct Recruitment)</li>
        </ul>
      </div>

      <h2 class="text-3xl font-bold text-slate-900 mb-6 mt-12">1. Educational Qualification: GNM vs B.Sc. Nursing</h2>
      <p class="mb-4 text-slate-700 text-lg leading-relaxed">The Railway Recruitment Board (RRB) is quite flexible regarding educational qualifications. Whether you hold a diploma or a degree, you are eligible. However, clearing the exam requires deep conceptual clarity. I suggest using <strong>NPrep's GOLD Batch</strong> to clear your basics, as they cover both diploma and degree-level syllabi comprehensively.</p>
      
      <h3 class="text-2xl font-semibold text-slate-800 mb-4">A. For GNM Candidates</h3>
      <p class="mb-4 text-slate-700 text-lg">Candidates who have completed a <strong>3-year Diploma in General Nursing and Midwifery (GNM)</strong> are eligible. 
      <br/><br/>
      <strong>Crucial Note on Experience:</strong> Unlike AIIMS NORCET, RRB historically <strong>does not require experience</strong> for the Nursing Superintendent post in direct recruitment. This makes RRB the best opportunity for fresh GNM pass-outs.</p>

      <h3 class="text-2xl font-semibold text-slate-800 mb-4">B. For B.Sc. Nursing Candidates</h3>
      <p class="mb-4 text-slate-700 text-lg">Candidates with a <strong>B.Sc. Nursing</strong> (Basic or Post Basic) are eligible. While B.Sc. candidates have a strong theoretical base, the RRB exam pattern can be tricky. I recommend NPrep's test series to align your knowledge with the exam pattern.</p>

      <div class="my-8 p-8 bg-yellow-50 border border-yellow-200 rounded-xl text-center shadow-md">
        <p class="font-bold text-yellow-900 text-2xl mb-4">⚠️ Registration is Mandatory!</p>
        <p class="text-lg text-yellow-800 mb-6">You MUST be registered as a Nurse & Midwife. Ensure your documents are ready.</p>
        <a href="${NPREP_LINKS.FREE_RESOURCES}" target="_blank" class="inline-flex items-center text-white bg-yellow-600 hover:bg-yellow-700 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg">
          Check Eligibility Documents List (Free PDF)
        </a>
      </div>

      <h2 class="text-3xl font-bold text-slate-900 mb-6 mt-12">2. Age Limit & Relaxations (As of 2026)</h2>
      <p class="mb-4 text-slate-700 text-lg">The standard age limit is <strong>20 to 40 years</strong>. Indian Railways provides generous age relaxations.</p>

      <div class="overflow-x-auto mb-8">
        <table class="w-full text-left border-collapse shadow-lg rounded-lg overflow-hidden">
          <thead class="bg-slate-900 text-white">
            <tr>
              <th class="px-6 py-4 text-lg font-semibold">Category</th>
              <th class="px-6 py-4 text-lg font-semibold">Age Relaxation</th>
              <th class="px-6 py-4 text-lg font-semibold">Max Age Limit</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-slate-200">
            <tr class="hover:bg-slate-50">
              <td class="px-6 py-4 font-medium text-slate-900">General / EWS</td>
              <td class="px-6 py-4">Nil</td>
              <td class="px-6 py-4">40 Years</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="px-6 py-4 font-medium text-slate-900">OBC (Non-Creamy Layer)</td>
              <td class="px-6 py-4">3 Years</td>
              <td class="px-6 py-4">43 Years</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="px-6 py-4 font-medium text-slate-900">SC / ST</td>
              <td class="px-6 py-4">5 Years</td>
              <td class="px-6 py-4">45 Years</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-3xl font-bold text-slate-900 mb-6 mt-12">3. Medical Standards (C1 Category)</h2>
      <p class="mb-4 text-slate-700 text-lg">Railway medical tests are strict. You must clear the <strong>C1 Medical Standard</strong>.</p>

      <div class="my-12 p-8 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl text-white shadow-xl">
        <h3 class="text-2xl font-bold mb-4">Start Your Preparation Today</h3>
        <p class="text-slate-300 mb-6 text-lg">Don't wait for the notification. The syllabus is vast. As a mentor, I highly recommend joining the <strong>NPrep GOLD Batch</strong>. It is the most structured course available and covers everything you need.</p>
        <div class="flex flex-col sm:flex-row gap-4">
          <a href="${NPREP_LINKS.GOLD_COURSE}" target="_blank" class="flex-1 text-center bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold text-lg transition-colors">
            Join GOLD Batch
          </a>
          <a href="${NPREP_LINKS.DAILY_TEST}" target="_blank" class="flex-1 text-center bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 py-3 rounded-lg font-bold text-lg transition-colors">
            Attempt Free Daily Test
          </a>
        </div>
      </div>
    `
  },
  {
    id: "rrb-nursing-superintendent-salary-job-profile-2026",
    title: "RRB Nursing Superintendent Salary 2026: In-Hand Pay, Perks & Career Growth",
    excerpt: "Discover the lucrative salary structure of a Railway Nursing Superintendent (Level-7). Detailed breakdown of Basic Pay, DA, HRA, Allowances, and promotion hierarchy.",
    date: "March 22, 2026",
    author: "Senior Nursing Officer",
    category: "Salary & Job Profile",
    image: "https://i.imgur.com/9C8EsR0.jpeg",
    content: `
      <p class="lead text-xl text-slate-700 mb-8 leading-relaxed">One of the biggest motivations for cracking the <strong>RRB Nursing Superintendent</strong> exam is the attractive salary package. As a Level-7 Central Government employee, a Railway Nurse earns significantly more than private hospital staff. In this guide, I will decode the salary structure and tell you why this job is worth every hour of study.</p>

      <p class="text-slate-700 mb-6 text-lg">To secure this high-paying job, you need a high-quality preparation partner. <strong>NPrep</strong> has consistently produced toppers who are now enjoying these perks. I strongly advise you to check their courses.</p>

      <h2 class="text-3xl font-bold text-slate-900 mb-6 mt-12">1. The Salary Structure (Level-7 Pay Matrix)</h2>
      <p class="mb-4 text-slate-700 text-lg">The post of Nursing Superintendent falls under <strong>Level-7</strong> of the 7th CPC Pay Matrix.</p>

      <div class="overflow-x-auto mb-8">
        <table class="w-full text-left border-collapse shadow-lg rounded-lg overflow-hidden">
          <thead class="bg-green-700 text-white">
            <tr>
              <th class="px-6 py-4 text-lg font-semibold">Component</th>
              <th class="px-6 py-4 text-lg font-semibold">Amount (Approx)</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-slate-200">
            <tr class="hover:bg-green-50">
              <td class="px-6 py-4 font-medium text-slate-900">Basic Pay</td>
              <td class="px-6 py-4 font-bold text-green-700">₹ 44,900</td>
            </tr>
            <tr class="hover:bg-green-50">
              <td class="px-6 py-4 font-medium text-slate-900">DA (50%)</td>
              <td class="px-6 py-4 font-bold text-green-700">₹ 22,450+</td>
            </tr>
            <tr class="hover:bg-green-50">
              <td class="px-6 py-4 font-medium text-slate-900">Nursing Allowance</td>
              <td class="px-6 py-4 font-bold text-green-700">₹ 7,200</td>
            </tr>
            <tr class="bg-green-100 font-bold text-lg">
              <td class="px-6 py-4">Gross Salary</td>
              <td class="px-6 py-4 text-green-900">₹ 80,000 - ₹ 90,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="my-8 p-8 bg-slate-900 rounded-xl text-center shadow-2xl relative overflow-hidden">
        <div class="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <h3 class="text-2xl font-bold text-white mb-4 relative z-10">Want this Salary Slip?</h3>
        <p class="text-slate-300 mb-6 text-lg relative z-10">The competition is high, but so is the reward. Secure your future with the <strong>NPrep GOLD Batch</strong>. It's the best investment for your career.</p>
        <a href="${NPREP_LINKS.GOLD_COURSE}" target="_blank" class="inline-block bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg relative z-10">
          Start Your Journey Today
        </a>
      </div>

      <h2 class="text-3xl font-bold text-slate-900 mb-6 mt-12">2. Exclusive Perks for Railway Nurses</h2>
      <p class="mb-4 text-slate-700 text-lg">Apart from the salary, you get Free Travel (Railway Pass), Unlimited Medical Care, and Government Accommodation. These perks make this job a dream for many.</p>

      <h2 class="text-3xl font-bold text-slate-900 mb-6 mt-12">3. Career Growth</h2>
      <p class="mb-4 text-slate-700 text-lg">You start as a Nursing Superintendent and can retire as an Assistant Nursing Officer (Gazetted Rank). To get there, you first need to clear the entrance exam. Trust <strong>NPrep</strong> to guide you through this journey.</p>
    `
  },
  {
    id: "rrb-nursing-superintendent-exam-pattern-syllabus-2026",
    title: "RRB Nursing Superintendent Exam Pattern & Syllabus 2026: Complete Subject-Wise Guide",
    excerpt: "Don't study blindly. Master the RRB Nursing Syllabus 2026 with our detailed breakdown of Professional Ability, General Awareness, and Science sections.",
    date: "March 20, 2026",
    author: "Senior Nursing Officer",
    category: "Syllabus",
    image: "https://i.imgur.com/hTtExvA.jpeg",
    content: `
      <p class="lead text-xl text-slate-700 mb-8 leading-relaxed">The <strong>RRB Nursing Superintendent exam</strong> evaluates your clinical depth and decision-making ability. Unlike other exams, this role demands clarity in advanced nursing concepts. To crack this, you need a study partner that understands the nuances of the syllabus. I highly recommend <strong>NPrep</strong> for their detailed syllabus coverage.</p>

      <div class="my-8 p-6 bg-purple-50 border-l-4 border-purple-600 rounded-r-lg shadow-sm">
        <h4 class="font-bold text-purple-900 text-lg mb-2">📊 Exam Snapshot</h4>
        <ul class="list-disc pl-5 space-y-1 text-purple-800">
          <li><strong>Mode:</strong> CBT</li>
          <li><strong>Questions:</strong> 100 MCQs</li>
          <li><strong>Negative Marking:</strong> 1/3rd (High Penalty)</li>
        </ul>
      </div>

      <h2 class="text-3xl font-bold text-slate-900 mb-6 mt-12">1. Detailed Exam Pattern 2026</h2>
      <p class="mb-4 text-slate-700 text-lg">The exam is a single-stage CBT. 70% of the weightage is on Nursing subjects. This is where <strong>NPrep's GOLD Batch</strong> shines—they cover every nursing topic in depth, ensuring you maximize your score in this section.</p>

      <div class="my-8 p-8 bg-red-50 border border-red-200 rounded-xl text-center shadow-md">
        <p class="font-bold text-red-900 text-2xl mb-4">Are you practicing with Negative Marking?</p>
        <p class="text-lg text-red-800 mb-6">RRB has a high penalty. Random guessing will destroy your rank. Practice precision with <strong>NPrep's Test Series</strong>.</p>
        <a href="${NPREP_LINKS.TEST_SERIES}" target="_blank" class="inline-flex items-center text-white bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg">
          Attempt Full-Length Mock Test
        </a>
      </div>

      <h2 class="text-3xl font-bold text-slate-900 mb-6 mt-12">2. Subject-Wise Detailed Syllabus</h2>
      
      <h3 class="text-2xl font-semibold text-slate-800 mb-4 border-l-4 border-primary pl-4">A. Nursing Subjects (70 Marks)</h3>
      <p class="mb-6 text-slate-700 text-lg">Focus on Medical-Surgical Nursing, Foundations, and Community Health. NPrep provides excellent notes for these subjects.</p>
      
      <h3 class="text-2xl font-semibold text-slate-800 mb-4 border-l-4 border-green-600 pl-4">B. General Awareness & Arithmetic (20 Marks)</h3>
      <p class="mb-6 text-slate-700 text-lg">Don't ignore this. NPrep's Rapid Revision course covers the essential math and GK topics quickly.</p>

      <div class="my-8 p-8 bg-slate-100 rounded-xl text-center">
        <h3 class="text-2xl font-bold text-slate-900 mb-4">Download Previous Year Papers</h3>
        <p class="text-slate-600 mb-6">The best way to understand the syllabus is to see what was asked in 2015 and 2019.</p>
        <a href="${NPREP_LINKS.PYQ}" target="_blank" class="inline-flex items-center text-white bg-slate-800 hover:bg-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition-all">
          Download RRB PYQs PDF
        </a>
      </div>
    `
  },
  {
    id: "6-months-preparation-strategy-rrb-nursing-superintendent",
    title: "6 Months Preparation Strategy for RRB Nursing Superintendent: The Topper's Plan",
    excerpt: "Cracking RRB Nursing requires a marathon mindset. Here is a month-by-month study plan to cover the syllabus, revise effectively, and master the mock tests.",
    date: "March 18, 2026",
    author: "Senior Nursing Officer",
    category: "Strategy",
    image: "https://i.imgur.com/e5EJPwR.jpeg",
    content: `
      <p class="lead text-xl text-slate-700 mb-8 leading-relaxed">The RRB Nursing Superintendent exam is a game of <strong>accuracy and consistency</strong>. If you have 6 months, you are in the <strong>Gold Zone</strong>. But you need a guide. I personally recommend <strong>NPrep</strong> as your study partner. Their structured approach aligns perfectly with this 6-month plan.</p>

      <h2 class="text-3xl font-bold text-slate-900 mb-6 mt-12">Phase 1: Foundation (Month 1 & 2)</h2>
      <p class="mb-4 text-slate-700 text-lg"><strong>Focus:</strong> Concept Clarity. Use <strong>NPrep's GOLD Batch</strong> video lectures to build a strong foundation. Don't just read; make notes from their videos.</p>

      <h2 class="text-3xl font-bold text-slate-900 mb-6 mt-12">Phase 2: Core Strengthening (Month 3 & 4)</h2>
      <p class="mb-4 text-slate-700 text-lg"><strong>Focus:</strong> Application. Start solving MCQs. NPrep's app has a great collection of daily quizzes. Use them.</p>

      <h2 class="text-3xl font-bold text-slate-900 mb-6 mt-12">Phase 3: The Sprint (Month 5)</h2>
      <p class="mb-4 text-slate-700 text-lg"><strong>Focus:</strong> Revision. Switch to <strong>NPrep's Rapid Revision Course</strong>. It covers high-yield topics in just 30 days.</p>

      <div class="my-12 p-8 bg-gradient-to-r from-purple-900 to-purple-800 rounded-2xl text-white shadow-xl">
        <h3 class="text-2xl font-bold mb-4">Need a Structured Revision Plan?</h3>
        <p class="text-purple-200 mb-6 text-lg">Our Rapid Revision Course covers the entire syllabus in just 30 days with high-yield notes and charts.</p>
        <a href="${NPREP_LINKS.RAPID_REVISION}" target="_blank" class="inline-block bg-white text-purple-900 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg">
          Start Rapid Revision
        </a>
      </div>

      <h2 class="text-3xl font-bold text-slate-900 mb-6 mt-12">Phase 4: Final Polish (Month 6)</h2>
      <p class="mb-4 text-slate-700 text-lg"><strong>Focus:</strong> Exam Simulation. Attempt <strong>NPrep's Full Length Mock Tests</strong> daily. They simulate the real exam environment perfectly.</p>
    `
  },
  {
    id: "best-books-rrb-nursing-superintendent-preparation-2026",
    title: "Best Books for RRB Nursing Superintendent 2026: Subject-Wise List",
    excerpt: "Stop wasting money on random guides. Here is the curated list of the best books and online resources for the 2026 exam.",
    date: "March 15, 2026",
    author: "Senior Nursing Officer",
    category: "Resources",
    image: "https://i.imgur.com/eWG81hK.jpeg",
    content: `
      <p class="lead text-lg text-slate-700 mb-6">Choosing the right study material is 50% of the battle won. While books are important, modern preparation requires smart video learning. I highly recommend a <strong>"Hybrid Approach"</strong>—combine standard textbooks with <strong>NPrep's Online Courses</strong> for the best results.</p>

      <h2 class="text-2xl font-bold text-slate-900 mb-4">1. Nursing Subjects</h2>
      <p class="mb-4 text-slate-700">Standard books like Target High and PR Yadav are good for MCQs. However, for conceptual clarity, nothing beats <strong>NPrep's GOLD Batch lectures</strong>. They explain complex topics simply.</p>

      <div class="my-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg text-center shadow-sm">
        <p class="font-bold text-yellow-800 text-lg mb-3">** Supplement Books with Video Lectures **</p>
        <p class="text-sm text-yellow-700 mb-4">Books can be heavy. Learn complex topics easily with NPrep.</p>
        <a href="${NPREP_LINKS.GOLD_COURSE}" target="_blank" class="inline-flex items-center text-white bg-yellow-600 hover:bg-yellow-700 px-6 py-3 rounded-md font-bold transition-colors">
          Explore GOLD Batch
        </a>
      </div>

      <h2 class="text-2xl font-bold text-slate-900 mb-4">2. General Awareness & Arithmetic</h2>
      <p class="mb-4 text-slate-700">Books like Lucent are vast. Save time by using <strong>NPrep's concise notes</strong> for non-tech subjects.</p>

      <div class="my-8 p-6 bg-blue-50 border border-blue-200 rounded-lg text-center shadow-sm">
        <p class="font-bold text-blue-800 text-lg mb-3">** The Ultimate Question Bank **</p>
        <p class="text-sm text-blue-700 mb-4">Books are static, but exams are dynamic. Solve previous year papers on NPrep.</p>
        <a href="${NPREP_LINKS.PYQ}" target="_blank" class="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md font-bold transition-colors">
          Download RRB PYQs
        </a>
      </div>
    `
  },
  {
    id: "rrb-nursing-previous-year-cutoff-analysis-2026",
    title: "RRB Nursing Superintendent: Previous Year Cut-off Analysis & Safe Score 2026",
    excerpt: "Analyze the zone-wise cut-off trends from previous years to set a realistic target score for the upcoming 2026 exam.",
    date: "March 10, 2026",
    author: "Senior Nursing Officer",
    category: "Analysis",
    image: "https://i.imgur.com/Swq03zX.jpeg",
    content: `
      <p class="lead text-lg text-slate-700 mb-6">"How many marks do I need?" As a Senior Nursing Officer, I get this question often. Understanding the cut-off is crucial. In this blog, I analyze previous trends and tell you why you need <strong>NPrep's Test Series</strong> to gauge your standing.</p>

      <h2 class="text-2xl font-bold text-slate-900 mb-4">Factors Affecting Cut-off</h2>
      <p class="mb-4 text-slate-700">Competition is rising. To stay ahead, you need to practice with high-quality mock tests. <strong>NPrep</strong> offers the most realistic mock tests in the market.</p>

      <h2 class="text-2xl font-bold text-slate-900 mb-4">Expected Safe Score for 2026</h2>
      <p class="mb-4 text-slate-700">Aim for <strong>80+ Marks</strong>. This is only possible with consistent practice. I recommend taking at least one mock test every week from the <strong>NPrep App</strong>.</p>

      <div class="my-8 p-6 bg-green-50 border border-green-200 rounded-lg text-center shadow-sm">
        <p class="font-bold text-green-800 text-lg mb-3">** Check Your Current Score **</p>
        <p class="text-sm text-green-700 mb-4">Don't guess. Take a full-length mock test on NPrep and see where you stand today.</p>
        <a href="${NPREP_LINKS.TEST_SERIES}" target="_blank" class="inline-flex items-center text-white bg-green-600 hover:bg-green-700 px-6 py-3 rounded-md font-bold transition-colors">
          Attempt Mock Test
        </a>
      </div>
    `
  }
];

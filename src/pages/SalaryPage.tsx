import React from 'react';
import RRBInfoPage from './RRBInfoPage';

export default function SalaryPage() {
  return (
    <RRBInfoPage
      title="RRB Nursing Salary"
      description="RRB Nursing salary is determined by pay level, basic pay, allowances, and posting location. In-hand salary varies after deductions and can differ across cities and service conditions."
      canonical="/rrb-nursing-salary"
      keyPoints={[
        'Salary includes basic pay plus applicable central government allowances.',
        'In-hand amount depends on deductions such as NPS, taxes, and other components.',
        'Posting city category may affect HRA and related allowances.',
        'Career progression and periodic revisions impact long-term earnings.',
      ]}
      sections={[
        {
          heading: 'Salary components',
          content:
            'Compensation usually includes basic pay, DA, HRA, transport allowance, and other admissible benefits under railway rules. Exact amount depends on current government rates.',
        },
        {
          heading: 'Career growth outlook',
          content:
            'With regular service and departmental progression, candidates can move to higher responsibilities and improved pay structure over time.',
        },
      ]}
    />
  );
}

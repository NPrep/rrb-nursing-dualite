import React from 'react';
import RRBInfoPage from './RRBInfoPage';

export default function EligibilityPage() {
  return (
    <RRBInfoPage
      title="RRB Nursing Eligibility"
      description="RRB Nursing eligibility includes education, nursing council registration, age, and nationality conditions. Applicants must satisfy every criterion as per the cutoff date mentioned in the recruitment notification."
      canonical="/rrb-nursing-eligibility"
      keyPoints={[
        'Eligible candidates should hold the required nursing qualification from a recognized institution.',
        'Valid registration with the relevant Nursing Council is essential.',
        'Age criteria and relaxations vary by category and are strictly verified.',
        'Incomplete or invalid eligibility proof can lead to rejection at document verification.',
      ]}
      sections={[
        {
          heading: 'Educational requirement',
          content:
            'Candidates should check accepted qualifications, recognized boards/universities, and document format requirements. Marksheets and final certificates must match application details.',
        },
        {
          heading: 'Document readiness',
          content:
            'Keep identity proof, category certificate (if applicable), registration proof, and qualification records ready well before the application deadline and verification stages.',
        },
      ]}
    />
  );
}

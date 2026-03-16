import React from 'react';
import RRBInfoPage from './RRBInfoPage';

export default function ApplicationProcessPage() {
  return (
    <RRBInfoPage
      title="RRB Nursing Application Process"
      description="The RRB Nursing application process is completed online through official RRB platforms. Candidates should submit accurate personal, educational, and category information and complete payment before the final deadline."
      canonical="/rrb-nursing-application-process"
      keyPoints={[
        'Complete registration with valid email and mobile number.',
        'Upload photograph, signature, and documents in the required format.',
        'Enter qualification and category details exactly as per original records.',
        'Confirm payment status and save final submitted application copy.',
      ]}
      sections={[
        {
          heading: 'Step-by-step flow',
          content:
            'Typical process includes registration, profile completion, document upload, post preference, payment, and final submission. Check your form preview before locking the application.',
        },
        {
          heading: 'Common mistakes to avoid',
          content:
            'Avoid spelling mismatches, wrong date of birth entries, invalid category proofs, and incomplete payment. These errors often cause rejection during scrutiny or verification.',
        },
      ]}
    />
  );
}

import React from 'react';
import RRBInfoPage from './RRBInfoPage';

export default function AgeLimitPage() {
  return (
    <RRBInfoPage
      title="RRB Nursing Age Limit"
      description="RRB Nursing age limit is announced in the notification with category-wise upper-age relaxation. Candidates should verify both minimum and maximum age criteria before applying."
      canonical="/rrb-nursing-age-limit"
      keyPoints={[
        'Minimum and maximum age are calculated as per the official cutoff date.',
        'Age relaxation applies to eligible reserved categories under central rules.',
        'Supporting category documents are required to claim relaxation benefits.',
        'Date of birth details should exactly match valid government documents.',
      ]}
      sections={[
        {
          heading: 'How age is calculated',
          content:
            'Age is typically evaluated on a specific reference date mentioned in the notice. Applicants should compute their age carefully before form submission to avoid rejection.',
        },
        {
          heading: 'Relaxation verification',
          content:
            'If you are claiming relaxation, ensure that your certificates are valid, recent (where required), and in the prescribed format accepted by RRB authorities.',
        },
      ]}
    />
  );
}

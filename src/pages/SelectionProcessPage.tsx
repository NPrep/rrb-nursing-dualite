import React from 'react';
import RRBInfoPage from './RRBInfoPage';

export default function SelectionProcessPage() {
  return (
    <RRBInfoPage
      title="RRB Nursing Selection Process"
      description="The RRB Nursing selection process generally includes CBT-based merit, document verification, and medical fitness assessment. Appointment is finalized only after successful completion of all required stages."
      canonical="/rrb-nursing-selection-process"
      keyPoints={[
        'CBT score is a primary component in candidate shortlisting.',
        'Document verification confirms eligibility and reservation claims.',
        'Medical examination validates fitness standards for railway service.',
        'Final panel and posting are issued according to merit and vacancy availability.',
      ]}
      sections={[
        {
          heading: 'From exam to final panel',
          content:
            'After CBT results, shortlisted candidates are called for document verification and medical checks. Any mismatch in credentials can lead to cancellation of candidature.',
        },
        {
          heading: 'Merit and tie-resolution',
          content:
            'Where required, tie-breaking and normalization rules are applied according to official policy. Always refer to the latest recruitment notice for exact criteria.',
        },
      ]}
    />
  );
}

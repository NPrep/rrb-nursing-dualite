import React from 'react';
import RRBInfoPage from './RRBInfoPage';

export default function AdmitCardInfoPage() {
  return (
    <RRBInfoPage
      title="RRB Nursing Admit Card"
      description="RRB Nursing admit card is released online before the exam with candidate details, exam city, reporting time, and instructions. Download and verify hall ticket details in advance to avoid last-minute issues."
      canonical="/rrb-nursing-admit-card"
      keyPoints={[
        'Admit card is available through official candidate login.',
        'Verify name, roll number, exam date, and reporting center details.',
        'Carry valid photo ID along with printed admit card to the exam venue.',
        'Follow reporting-time and prohibited-item instructions strictly.',
      ]}
      sections={[
        {
          heading: 'Before exam day',
          content:
            'Check venue route, reporting slot, and required documents at least one day before the exam. Keep an extra printout of the admit card and a backup ID proof.',
        },
        {
          heading: 'If details are incorrect',
          content:
            'In case of visible discrepancies, contact the respective RRB help channel immediately and follow official correction guidance before exam day.',
        },
      ]}
    />
  );
}

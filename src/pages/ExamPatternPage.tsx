import React from 'react';
import RRBInfoPage from './RRBInfoPage';

export default function ExamPatternPage() {
  return (
    <RRBInfoPage
      title="RRB Nursing Exam Pattern"
      description="The RRB Nursing exam pattern generally includes a computer-based test covering nursing and general sections. The latest notification should be treated as the final authority for marks, duration, and negative marking."
      canonical="/rrb-nursing-exam-pattern"
      keyPoints={[
        'Computer Based Test (CBT) is the main screening stage.',
        'Question mix usually includes nursing subjects and general aptitude sections.',
        'Negative marking policy is clearly mentioned in the official exam notice.',
        'Final merit is based on normalized CBT performance and eligibility verification.',
      ]}
      sections={[
        {
          heading: 'Subject coverage approach',
          content:
            'Candidates should review both technical nursing topics and non-technical sections. Balanced preparation is important because overall score determines the shortlist for later stages.',
        },
        {
          heading: 'Marking and time strategy',
          content:
            'Know total questions, exam duration, and penalty rules before the exam day. Proper attempt strategy reduces negative marks and improves final normalized score.',
        },
      ]}
    />
  );
}

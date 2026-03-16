import React from 'react';
import RRBInfoPage from './RRBInfoPage';

export default function SyllabusInfoPage() {
  return (
    <RRBInfoPage
      title="RRB Nursing Syllabus"
      description="RRB Nursing syllabus includes technical nursing topics and relevant general sections prescribed for the CBT. Candidates should follow the latest official syllabus for topic-wise preparation and revision."
      canonical="/rrb-nursing-syllabus"
      keyPoints={[
        'Technical nursing subjects form the core of the exam syllabus.',
        'General sections may include reasoning, general awareness, and basic aptitude.',
        'Topic coverage and weightage should be checked from the latest official notice.',
        'Syllabus-aligned revision improves accuracy and exam confidence.',
      ]}
      sections={[
        {
          heading: 'How to use the syllabus effectively',
          content:
            'Break the syllabus into weekly blocks, complete high-weight topics first, and keep regular revisions to retain technical concepts. Use official topic boundaries to avoid over-preparation in low-priority areas.',
        },
        {
          heading: 'Revision checkpoints',
          content:
            'Create a final revision list covering nursing fundamentals, clinical topics, and general sections. Keep one last review cycle before exam date to improve recall speed.',
        },
      ]}
    />
  );
}

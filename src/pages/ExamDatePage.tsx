import React from 'react';
import RRBInfoPage from './RRBInfoPage';

export default function ExamDatePage() {
  return (
    <RRBInfoPage
      title="RRB Nursing Exam Date"
      description="RRB Nursing exam date is announced through official notices along with exam city and shift details. Candidates should track updates regularly and complete all pre-exam formalities in time."
      canonical="/rrb-nursing-exam-date"
      keyPoints={[
        'Exam schedule may be released zone-wise or in phases.',
        'City intimation and admit card notices are published separately.',
        'Candidates should monitor official communication channels frequently.',
        'Travel planning should be done early based on allotted city and shift.',
      ]}
      sections={[
        {
          heading: 'Where to track exam schedule',
          content:
            'Follow the official RRB zone websites and recruitment notices for the latest exam timetable. Relying on unofficial date rumors may lead to missed updates.',
        },
        {
          heading: 'Exam readiness checklist',
          content:
            'Keep admit card, ID proof, route plan, and reporting-time compliance ready. Confirm all details as soon as date and shift information are released.',
        },
      ]}
    />
  );
}

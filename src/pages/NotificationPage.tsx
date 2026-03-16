import React from 'react';
import RRBInfoPage from './RRBInfoPage';

export default function NotificationPage() {
  return (
    <RRBInfoPage
      title="RRB Nursing Notification"
      description="The official RRB Nursing notification is the primary source for post details, zone-wise distribution, eligibility rules, and online application dates. Candidates should always verify every instruction from the current cycle before applying."
      canonical="/rrb-nursing-notification"
      keyPoints={[
        'Check zone-wise and category-wise vacancy breakup in the notification PDF.',
        'Verify age, educational qualification, and registration requirements before form fill-up.',
        'Track important dates for application window, fee payment, and correction period.',
        'Use only official RRB channels for notices, corrigendum updates, and final instructions.',
      ]}
      importantDates={[
        'Notification release date',
        'Online application start and last date',
        'Fee payment deadline',
        'Correction/edit window schedule',
        'Admit card and CBT city intimation notice',
      ]}
      sections={[
        {
          heading: 'What to check first',
          content:
            'Start with post name, pay level, and medical standard. Then review exam stage details and document list to ensure you are eligible for all phases of recruitment.',
        },
        {
          heading: 'How updates are published',
          content:
            'RRBs issue fresh notices, addendum, and corrigendum through official pages. Even if you have already applied, keep checking updates to avoid missing revised dates or mandatory instructions.',
        },
      ]}
    />
  );
}

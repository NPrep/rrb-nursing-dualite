import React from 'react';
import RRBInfoPage from './RRBInfoPage';

export default function VacancyPage() {
  return (
    <RRBInfoPage
      title="RRB Nursing Vacancy"
      description="RRB Nursing vacancy details are released zone-wise and category-wise. Final selection is made according to merit, preference, and availability of notified posts across railway zones."
      canonical="/rrb-nursing-vacancy"
      keyPoints={[
        'Vacancies are usually distributed by RRB zones and reservation categories.',
        'Horizontal reservation (PwBD/Ex-servicemen) is applied as per government rules.',
        'Vacancy numbers may be revised through official corrigendum notices.',
        'Choice of zone and preference order can impact final posting outcomes.',
      ]}
      sections={[
        {
          heading: 'Category-wise distribution',
          content:
            'Each notification provides a category matrix (UR, OBC, SC, ST, EWS, and others where applicable). Check this matrix carefully before choosing your preferred zone.',
        },
        {
          heading: 'Why vacancy analysis matters',
          content:
            'Understanding vacancy spread helps candidates plan realistic score targets and zone preferences. Keep a record of current and past cycle trends for better decision making.',
        },
      ]}
    />
  );
}

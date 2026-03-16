import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import { RouterWrapper } from './next/RouterWrapper';
import NotificationPage from './pages/NotificationPage';
import VacancyPage from './pages/VacancyPage';
import ExamPatternPage from './pages/ExamPatternPage';
import EligibilityPage from './pages/EligibilityPage';
import AgeLimitPage from './pages/AgeLimitPage';
import SelectionProcessPage from './pages/SelectionProcessPage';
import SyllabusInfoPage from './pages/SyllabusInfoPage';
import ApplicationProcessPage from './pages/ApplicationProcessPage';
import AdmitCardInfoPage from './pages/AdmitCardInfoPage';
import ExamDatePage from './pages/ExamDatePage';
import SalaryPage from './pages/SalaryPage';

type AppProps = {
  initialPath?: string;
};

function App({ initialPath = '/' }: AppProps) {
  return (
    <RouterWrapper initialPath={initialPath}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="rrb-nursing-notification" element={<NotificationPage />} />
          <Route path="rrb-nursing-vacancy" element={<VacancyPage />} />
          <Route path="rrb-nursing-exam-pattern" element={<ExamPatternPage />} />
          <Route path="rrb-nursing-eligibility" element={<EligibilityPage />} />
          <Route path="rrb-nursing-age-limit" element={<AgeLimitPage />} />
          <Route path="rrb-nursing-selection-process" element={<SelectionProcessPage />} />
          <Route path="rrb-nursing-syllabus" element={<SyllabusInfoPage />} />
          <Route path="rrb-nursing-application-process" element={<ApplicationProcessPage />} />
          <Route path="rrb-nursing-admit-card" element={<AdmitCardInfoPage />} />
          <Route path="rrb-nursing-exam-date" element={<ExamDatePage />} />
          <Route path="rrb-nursing-salary" element={<SalaryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </RouterWrapper>
  );
}

export default App;

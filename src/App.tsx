import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import NotificationsPage from './pages/NotificationsPage';
import ApplyPage from './pages/ApplyPage';
import AdmitCardPage from './pages/AdmitCardPage';
import ZonesPage from './pages/ZonesPage';
import SyllabusPage from './pages/SyllabusPage';
import BlogsPage from './pages/BlogsPage';
import BlogPostPage from './pages/BlogPostPage';
import AboutPage from './pages/AboutPage';
import ResourcesPage from './pages/ResourcesPage';
import CoursesPage from './pages/CoursesPage'; // Import CoursesPage
import NotFoundPage from './pages/NotFoundPage';
import { RouterWrapper } from './next/RouterWrapper';

// Placeholder components for routes not fully implemented in this artifact
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="container mx-auto px-4 py-12 text-center">
    <h1 className="text-3xl font-bold text-primary mb-4">{title}</h1>
    <p className="text-muted-foreground">This section is under development.</p>
  </div>
);

type AppProps = {
  initialPath?: string;
};

function App({ initialPath = '/' }: AppProps) {
  return (
    <RouterWrapper initialPath={initialPath}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="apply" element={<ApplyPage />} /> 
          <Route path="admit-card" element={<AdmitCardPage />} />
          <Route path="results" element={<PlaceholderPage title="Results" />} />
          <Route path="zones" element={<ZonesPage />} />
          <Route path="syllabus" element={<SyllabusPage />} />
          <Route path="blogs" element={<BlogsPage />} />
          <Route path="blogs/:id" element={<BlogPostPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="helpdesk" element={<PlaceholderPage title="Helpdesk" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </RouterWrapper>
  );
}

export default App;

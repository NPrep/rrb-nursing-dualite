import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import NotificationsPage from './pages/NotificationsPage';
import ApplyPage from './pages/ApplyPage';
import AdmitCardPage from './pages/AdmitCardPage';
import ZonesPage from './pages/ZonesPage';
import SyllabusPage from './pages/SyllabusPage';
import BlogsPage from './pages/BlogsPage';
import BlogPostPage from './pages/BlogPostPage';

// Placeholder components for routes not fully implemented in this artifact
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="container mx-auto px-4 py-12 text-center">
    <h1 className="text-3xl font-bold text-primary mb-4">{title}</h1>
    <p className="text-muted-foreground">This section is under development.</p>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "notifications", element: <NotificationsPage /> },
      { path: "apply", element: <ApplyPage /> },
      { path: "admit-card", element: <AdmitCardPage /> },
      { path: "results", element: <PlaceholderPage title="Results" /> },
      { path: "zones", element: <ZonesPage /> },
      { path: "syllabus", element: <SyllabusPage /> },
      { path: "blogs", element: <BlogsPage /> },
      { path: "blogs/:id", element: <BlogPostPage /> },
      { path: "helpdesk", element: <PlaceholderPage title="Helpdesk" /> },
    ],
  },
], { basename: "/rrb-nursing-dualite" });

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';
import { FileQuestion, Home, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function NotFoundPage() {
  return (
    <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center min-h-[60vh]">
      <div className="bg-red-50 p-6 rounded-full mb-6">
        <FileQuestion className="h-16 w-16 text-primary" />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-slate-700 mb-4">Page Not Found</h2>
      <p className="text-slate-500 max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/">
          <Button size="lg" className="gap-2">
            <Home className="h-4 w-4" /> Go to Homepage
          </Button>
        </Link>
        <Link to="/helpdesk">
          <Button variant="outline" size="lg" className="gap-2">
            <ArrowLeft className="h-4 w-4" /> Contact Helpdesk
          </Button>
        </Link>
      </div>
    </div>
  );
}

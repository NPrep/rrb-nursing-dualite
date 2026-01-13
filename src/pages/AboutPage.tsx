import React from 'react';
import { Info, ShieldAlert, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import SEO from '../components/SEO';

export default function AboutPage() {
  // Updated to use the local generated SVG
  const LOGO_URL = "/rrb-train-logo.svg";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NPrep",
    "url": "https://rrbnursing.com",
    "logo": "https://rrbnursing.com/rrb-train-logo.svg", // Absolute path for Schema
    "description": "Leading preparation portal for RRB Nursing Superintendent Exam.",
    "sameAs": [
      "https://facebook.com/nprep",
      "https://twitter.com/nprep",
      "https://instagram.com/nprep"
    ]
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <SEO 
        title="About Us - RRB Nursing Prep"
        description="Learn about NPrep's mission to help nurses crack the RRB Nursing Superintendent exam. We provide study material, mock tests, and expert guidance."
        keywords={['About NPrep', 'RRB Nursing Coaching', 'Nursing Exam Guidance']}
        canonical="/about"
        schema={organizationSchema}
      />

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-primary">About RRB Nursing</h1>
          <p className="text-xl text-slate-600">
            Dedicated to helping nurses achieve their dream of serving in Indian Railways.
          </p>
        </div>

        {/* Disclaimer Card */}
        <Card className="border-l-4 border-l-yellow-500 bg-yellow-50/50">
          <CardContent className="p-6 flex items-start gap-4">
            <ShieldAlert className="h-8 w-8 text-yellow-600 shrink-0" />
            <div className="space-y-2">
              <h2 className="text-lg font-bold text-yellow-800">Unofficial Information Portal</h2>
              <p className="text-yellow-700 text-sm leading-relaxed">
                <strong>rrbnursing.com</strong> is a private educational portal and is <strong>NOT</strong> associated with Indian Railways or the Railway Recruitment Board (RRB). We provide study material, exam analysis, and guidance for nursing aspirants. For official applications, please always visit <a href="https://rrbapply.gov.in" target="_blank" rel="nofollow noreferrer" className="underline font-semibold">rrbapply.gov.in</a>.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed">
              We aim to bridge the gap between hard-working nursing aspirants and quality preparation resources. The RRB Nursing Superintendent exam is highly competitive, and we believe every nurse deserves access to structured guidance, whether they are working professionals or full-time students.
            </p>
          </div>
          <div className="bg-slate-100 rounded-xl p-6 flex items-center justify-center">
             {/* Placeholder for graphic */}
             <div className="text-center space-y-2">
               <div className="text-4xl font-bold text-primary">10,000+</div>
               <div className="text-slate-500">Nurses Guided</div>
             </div>
          </div>
        </div>

        {/* What We Offer */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 space-y-3">
                <CheckCircle className="h-8 w-8 text-green-500" />
                <h3 className="font-bold text-lg">Exam Updates</h3>
                <p className="text-sm text-slate-500">Latest notifications and news about RRB Nursing vacancies.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-3">
                <CheckCircle className="h-8 w-8 text-blue-500" />
                <h3 className="font-bold text-lg">Study Material</h3>
                <p className="text-sm text-slate-500">Curated notes, syllabus guides, and previous year papers.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-3">
                <CheckCircle className="h-8 w-8 text-purple-500" />
                <h3 className="font-bold text-lg">Mock Tests</h3>
                <p className="text-sm text-slate-500">High-quality test series to simulate the real exam environment.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

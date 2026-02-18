import React from 'react';
import { CheckCircle2, ArrowRight, GraduationCap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../components/ui/card';
import { NPREP_LINKS } from '../data/links';
import SEO from '../components/SEO';

export default function CoursesPage() {
  // Product Schema for Courses (SEO)
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Product",
        "name": "NPrep GOLD Batch",
        "description": "Complete Preparation Course for RRB, NORCET 10 & 11, CHO, BTSC, KGMU.",
        "brand": { "@type": "Brand", "name": "NPrep" },
        "offers": { "@type": "Offer", "price": "4999", "priceCurrency": "INR", "availability": "https://schema.org/InStock" }
      },
      {
        "@type": "Product",
        "name": "Rapid Revision 2.0",
        "description": "100 Hours Crash Course for RRB and Nursing Exams.",
        "brand": { "@type": "Brand", "name": "NPrep" },
        "offers": { "@type": "Offer", "price": "1999", "priceCurrency": "INR", "availability": "https://schema.org/InStock" }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white pb-24">
      <SEO 
        title="Best RRB Nursing Coaching 2026 - Online Courses & Test Series | NPrep"
        description="Join India's #1 Online Coaching for RRB Nursing Superintendent. Get GOLD Batch, Rapid Revision 2.0, and Test Series with expert faculty."
        keywords={['RRB Nursing Coaching', 'Online Nursing Classes', 'RRB Staff Nurse Test Series', 'NPrep GOLD Batch']}
        schema={courseSchema}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Courses', item: '/courses' }
        ]}
      />

      {/* Header Banner */}
      <div className="bg-slate-900 text-white py-3 text-center px-4">
        <p className="text-sm font-medium flex items-center justify-center gap-2">
          <GraduationCap className="h-4 w-4 text-yellow-400" />
          NPrep Online Coaching
        </p>
      </div>

      {/* Minimal Hero Section */}
      <section className="pt-16 pb-12 px-4 text-center">
        <div className="container mx-auto max-w-3xl">
          <Badge variant="secondary" className="mb-6 bg-slate-100 text-slate-600 hover:bg-slate-200 border-0 px-4 py-1.5 text-sm font-medium">
            Trusted by 50,000+ Nurses
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Premium Nursing Courses
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Structured preparation for RRB Nursing Superintendent and other top exams. Choose the plan that fits your schedule and start learning today.
          </p>
        </div>
      </section>

      {/* Minimalist Courses Grid */}
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* GOLD Batch */}
          <Card className="flex flex-col border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="mb-4">
                <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 border-0 rounded-md px-3">Best Seller</Badge>
              </div>
              <CardTitle className="text-2xl font-bold text-slate-900">GOLD Batch</CardTitle>
              <CardDescription className="text-base mt-2 text-slate-600">
                Complete preparation from zero to advanced level. Covers everything you need.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pt-0">
              <div className="space-y-4 mt-4">
                {[
                  "RRB/ NORCET 10 & 11/ CHO / BTSC/ KGMU - All Covered",
                  "900 Hours - Basic to Advanced Theory (with Clinicals)",
                  "100 Hrs - Rapid Revision 2.0",
                  "30,000 Questions - QBank (Topic Wise)",
                  "Daily Test Series",
                  "Previous Year Papers",
                  "Subject Wise Papers"
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="h-5 w-5 text-slate-900 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="pt-6">
              <a href={NPREP_LINKS.GOLD_COURSE} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full bg-white text-slate-900 border border-slate-900 hover:bg-slate-50 hover:text-slate-900 font-semibold h-11">
                  Join Batch <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </CardFooter>
          </Card>

          {/* Rapid Revision 2.0 */}
          <Card className="flex flex-col border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="mb-4">
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 border-0 rounded-md px-3">Crash Course</Badge>
              </div>
              <CardTitle className="text-2xl font-bold text-slate-900">Rapid Revision 2.0</CardTitle>
              <CardDescription className="text-base mt-2 text-slate-600">
                Fast-track revision for last minute preparation and quick recall.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pt-0">
              <div className="space-y-4 mt-4">
                {[
                  "RRB/ NORCET/ CHO/ BTSC/ KGMU - All Covered",
                  "Complete Nursing Syllabus in 100 Hours",
                  "Previous Year Papers - with Explainations",
                  "Daily Test Series",
                  "30,000+ Questions - QBank (Topic Wise)",
                  "Subject Wise Tests"
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="h-5 w-5 text-slate-900 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="pt-6">
              <a href={NPREP_LINKS.RAPID_REVISION} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button variant="outline" className="w-full border-slate-200 hover:bg-slate-50 text-slate-900 hover:text-slate-900 font-semibold h-11">
                  Start Revision <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </CardFooter>
          </Card>

          {/* Test Series */}
          <Card className="flex flex-col border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="mb-4">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200 border-0 rounded-md px-3">Practice</Badge>
              </div>
              <CardTitle className="text-2xl font-bold text-slate-900">Test Series</CardTitle>
              <CardDescription className="text-base mt-2 text-slate-600">
                Real exam simulation with detailed performance analysis and ranking.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pt-0">
              <div className="space-y-4 mt-4">
                {[
                  "30,000+ Questions - QBank (Topic Wise)",
                  "Each Question with Explaination",
                  "Subject Wise Tests",
                  "Daily Test Series",
                  "Previous Year Question Papers",
                  "IBQs, Clinical Scenario Questions"
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="h-5 w-5 text-slate-900 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="pt-6">
              <a href={NPREP_LINKS.TEST_SERIES} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button variant="outline" className="w-full border-slate-200 hover:bg-slate-50 text-slate-900 hover:text-slate-900 font-semibold h-11">
                  Attempt Tests <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </CardFooter>
          </Card>

        </div>
      </div>
    </div>
  );
}

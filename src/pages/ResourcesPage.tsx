import React from 'react';
import { Download, PlayCircle, FileText, CheckSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { NPREP_LINKS } from '../data/links';

export default function ResourcesPage() {
  const resources = [
    {
      title: "Free Video Lectures",
      desc: "Watch topic-wise nursing classes for free.",
      icon: PlayCircle,
      link: NPREP_LINKS.FREE_RESOURCES,
      color: "text-red-500",
      btnText: "Watch Now"
    },
    {
      title: "Previous Year Papers",
      desc: "Download solved papers of RRB 2015 & 2019.",
      icon: Download,
      link: NPREP_LINKS.PYQ,
      color: "text-blue-500",
      btnText: "Download PDF"
    },
    {
      title: "Daily Free Test",
      desc: "Attempt daily quizzes to check your progress.",
      icon: CheckSquare,
      link: NPREP_LINKS.DAILY_TEST,
      color: "text-green-500",
      btnText: "Attempt Now"
    },
    {
      title: "Nursing Test Series",
      desc: "Full-length mock tests with detailed analysis.",
      icon: FileText,
      link: NPREP_LINKS.TEST_SERIES,
      color: "text-purple-500",
      btnText: "View Test Series"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Free Study Resources</h1>
        <p className="text-lg text-slate-600">
          Boost your preparation with our curated collection of free materials, previous year papers, and daily quizzes.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {resources.map((res, idx) => (
          <Card key={idx} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className={`p-3 rounded-full bg-slate-50 ${res.color}`}>
                <res.icon className="h-8 w-8" />
              </div>
              <div>
                <CardTitle className="text-xl">{res.title}</CardTitle>
                <CardDescription>{res.desc}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
               {/* Content placeholder if needed */}
            </CardContent>
            <CardFooter>
              <a href={res.link} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full" variant="outline">
                  {res.btnText}
                </Button>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

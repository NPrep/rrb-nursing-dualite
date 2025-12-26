import React from 'react';
import { BookOpen, Download, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

export default function SyllabusPage() {
  const NPREP_URL = "https://nprep.in";

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-primary">Syllabus & Exam Pattern</h1>
          <p className="text-muted-foreground mt-1">
            Detailed syllabus for RRB Nursing Superintendent and Staff Nurse Recruitment.
          </p>
        </div>
        <a href={NPREP_URL} target="_blank" rel="noopener noreferrer">
          <Button className="bg-accent hover:bg-accent/90">
            <Download className="mr-2 h-4 w-4" /> Download Full PDF from NPrep
          </Button>
        </a>
      </div>

      <div className="grid gap-8">
        {/* Exam Pattern */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Exam Pattern (CBT)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-slate-50 text-slate-700 uppercase">
                  <tr>
                    <th className="px-6 py-3">Subject</th>
                    <th className="px-6 py-3">No. of Questions</th>
                    <th className="px-6 py-3">Marks</th>
                    <th className="px-6 py-3">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">Professional Ability (Nursing)</td>
                    <td className="px-6 py-4">70</td>
                    <td className="px-6 py-4">70</td>
                    <td className="px-6 py-4 row-span-4 align-middle border-l">90 Minutes</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">General Awareness</td>
                    <td className="px-6 py-4">10</td>
                    <td className="px-6 py-4">10</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">General Arithmetic, General Intelligence & Reasoning</td>
                    <td className="px-6 py-4">10</td>
                    <td className="px-6 py-4">10</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">General Science</td>
                    <td className="px-6 py-4">10</td>
                    <td className="px-6 py-4">10</td>
                  </tr>
                  <tr className="bg-slate-50 font-bold">
                    <td className="px-6 py-4">Total</td>
                    <td className="px-6 py-4">100</td>
                    <td className="px-6 py-4">100</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              * There will be negative marking of 1/3rd mark for each wrong answer.
            </p>
          </CardContent>
        </Card>

        {/* Detailed Syllabus */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="md:col-span-2 border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle>Professional Ability (Nursing) - 70 Marks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  <li>Anatomy & Physiology</li>
                  <li>Nutrition & Biochemistry</li>
                  <li>Nursing Foundations</li>
                  <li>Psychology & Sociology</li>
                  <li>Microbiology</li>
                  <li>Medical-Surgical Nursing I & II</li>
                </ul>
                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  <li>Child Health Nursing</li>
                  <li>Midwifery & Obstetrical Nursing</li>
                  <li>Mental Health Nursing</li>
                  <li>Community Health Nursing</li>
                  <li>Nursing Research & Statistics</li>
                  <li>Management of Nursing Services & Education</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">General Awareness</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
                <li>Current Affairs (National & International)</li>
                <li>Indian Geography, Culture & History of India</li>
                <li>Indian Polity & Constitution</li>
                <li>Indian Economy</li>
                <li>Environmental Issues</li>
                <li>Sports & General Scientific Developments</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">General Science</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
                <li>Physics (Up to 10th Standard)</li>
                <li>Chemistry (Up to 10th Standard)</li>
                <li>Life Sciences (Up to 10th Standard)</li>
                <li>Environmental Studies</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">General Arithmetic</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {['Number Systems', 'BODMAS', 'Decimals', 'Fractions', 'LCM & HCF', 'Ratio & Proportion', 'Percentages', 'Mensuration', 'Time & Work', 'Time & Distance', 'Simple & Compound Interest', 'Profit & Loss', 'Algebra', 'Geometry', 'Trigonometry', 'Statistics'].map((topic) => (
                  <Badge key={topic} variant="secondary">{topic}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">General Intelligence & Reasoning</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {['Analogies', 'Alphabetical Series', 'Number Series', 'Coding & Decoding', 'Mathematical Operations', 'Relationships', 'Syllogism', 'Jumbling', 'Venn Diagrams', 'Data Interpretation', 'Conclusions', 'Decision Making', 'Similarities', 'Differences', 'Analytical Reasoning', 'Classification', 'Directions'].map((topic) => (
                  <Badge key={topic} variant="outline">{topic}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

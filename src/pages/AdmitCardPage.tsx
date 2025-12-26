import React, { useState } from 'react';
import { Download, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';

export default function AdmitCardPage() {
  const [downloadLink, setDownloadLink] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate finding admit card
    setDownloadLink("#");
  };

  return (
    <div className="container mx-auto px-4 py-12 flex justify-center">
      <Card className="w-full max-w-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Download E-Call Letter</CardTitle>
          <CardDescription>Enter your details to download your Admit Card for CBT-1/CBT-2</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="regNo">Registration Number</Label>
              <Input id="regNo" placeholder="Enter Registration No." required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dob">Date of Birth</Label>
              <Input id="dob" type="date" required />
            </div>
            
            {!downloadLink ? (
              <Button type="submit" className="w-full">Search</Button>
            ) : (
              <div className="space-y-4 pt-2">
                <div className="bg-green-50 border border-green-200 rounded-md p-4 flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-green-800">Admit Card Found</h4>
                    <p className="text-xs text-green-700 mt-1">Candidate: John Doe | Exam: RRB NTPC</p>
                  </div>
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90" onClick={() => alert("Downloading PDF...")}>
                  <Download className="mr-2 h-4 w-4" /> Download PDF
                </Button>
                <Button variant="ghost" className="w-full" onClick={() => setDownloadLink(null)}>
                  Search Another
                </Button>
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

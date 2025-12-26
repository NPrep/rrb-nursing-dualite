import React from 'react';
import { MapPin } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { zones } from '../data/mockData';

export default function ZonesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-primary">Railway Recruitment Boards (RRBs)</h1>
        <p className="text-muted-foreground mt-2">Select a zone to view specific notifications and contact details.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {zones.map((zone) => (
          <Card key={zone} className="hover:shadow-md hover:border-primary/50 cursor-pointer transition-all group">
            <CardContent className="p-6 flex items-center space-x-3">
              <div className="bg-slate-100 p-2 rounded-full group-hover:bg-primary/10 transition-colors">
                <MapPin className="h-5 w-5 text-slate-500 group-hover:text-primary" />
              </div>
              <span className="font-medium text-slate-700 group-hover:text-primary">{zone}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Filter, Search, ExternalLink, Download } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { notifications } from '../data/mockData';
import SEO from '../components/SEO';

export default function NotificationsPage() {
  const [filter, setFilter] = useState('All');
  const RRB_OFFICIAL_URL = "https://indianrailways.gov.in/railwayboard/view_section.jsp?lang=0&id=0,7,1281";
  
  const filteredNotifications = filter === 'All' 
    ? notifications 
    : notifications.filter(n => n.type === filter);

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO 
        title="Latest RRB Nursing Notifications 2026 - Vacancy, Exam Date & Results"
        description="Get real-time updates on RRB Nursing Superintendent and Staff Nurse recruitment 2026. Download official notifications, admit cards, and results."
        keywords={['RRB Nursing Notification', 'Railway Nurse Vacancy', 'RRB Exam Date 2026', 'RRB Results']}
        canonical="/notifications"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Notifications', item: '/notifications' }
        ]}
      />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-primary">Notifications</h1>
          <p className="text-muted-foreground mt-1">Stay updated with the latest recruitment announcements.</p>
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search notices..." className="pl-9" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {['All', 'Recruitment', 'Result', 'Admit Card'].map((type) => (
          <Button 
            key={type}
            variant={filter === type ? 'default' : 'outline'}
            onClick={() => setFilter(type)}
            className="rounded-full"
          >
            {type}
          </Button>
        ))}
      </div>

      <div className="grid gap-4">
        {filteredNotifications.map((note) => (
          <Card key={note.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4 justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant={
                      note.status === 'Active' ? 'default' : 
                      note.status === 'Closed' ? 'secondary' : 'warning'
                    }>
                      {note.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{note.date}</span>
                    <span className="text-sm font-medium text-primary/80">• {note.zone}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{note.title}</h3>
                  <p className="text-muted-foreground">{note.description}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a href={RRB_OFFICIAL_URL} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" /> Download PDF
                    </Button>
                  </a>
                  {note.status === 'Active' && note.type === 'Recruitment' && (
                    <a href={RRB_OFFICIAL_URL} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-accent hover:bg-accent/90">
                        Apply Now <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

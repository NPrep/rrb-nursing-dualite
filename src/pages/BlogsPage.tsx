import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { BlogCover } from '../components/ui/BlogCover';
import { blogs } from '../data/mockData';
import SEO from '../components/SEO';

export default function BlogsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <SEO 
        title="RRB Nursing Blogs 2026 - Exam Strategy, Syllabus & Updates"
        description="Read the latest expert articles on RRB Nursing Superintendent preparation. Get study plans, syllabus breakdowns, and exam tips from NPrep experts."
        keywords={['RRB Nursing Blogs', 'Nursing Exam Strategy', 'Railway Nurse Preparation', 'RRB Syllabus Guide']}
        canonical="/blogs"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Blogs', item: '/blogs' }
        ]}
      />

      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Latest Updates & Articles</h1>
        <p className="text-lg text-slate-600">
          Expert insights, exam strategies, and latest news from the Railway Recruitment Board.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <Link key={blog.id} to={`/blogs/${blog.id}`} className="group">
            <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-slate-200 flex flex-col">
              <div className="w-full overflow-hidden rounded-t-lg">
                <BlogCover 
                  title={blog.title} 
                  category={blog.category} 
                  image={blog.image}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <CardHeader className="space-y-2 pb-2">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-slate-100 text-slate-700 hover:bg-slate-200">
                    {blog.category}
                  </Badge>
                  <div className="flex items-center text-xs text-slate-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    {blog.date}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
                  {blog.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-slate-600 text-sm line-clamp-3">
                  {blog.excerpt}
                </p>
              </CardContent>
              
              <CardFooter className="pt-0 mt-auto">
                <div className="flex items-center text-sm font-medium text-primary group-hover:underline underline-offset-4">
                  Read Article <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

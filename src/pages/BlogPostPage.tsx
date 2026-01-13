import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { BlogCover } from '../components/ui/BlogCover';
import { blogs } from '../data/mockData';
import SEO from '../components/SEO';

export default function BlogPostPage() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return <Navigate to="/blogs" replace />;
  }

  // Article Schema for Google
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": blog.title,
    "image": [blog.image || "https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Indian_Railways_logo.svg/300px-Indian_Railways_logo.svg.png"],
    "datePublished": new Date(blog.date).toISOString(),
    "dateModified": new Date().toISOString(),
    "author": [{
      "@type": "Organization",
      "name": "NPrep Team",
      "url": "https://rrbnursing.com"
    }]
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <SEO 
        title={`${blog.title} | RRB Nursing`}
        description={blog.excerpt}
        keywords={[blog.category, 'RRB Nursing', 'Railway Exam', 'Nursing Superintendent']}
        canonical={`/blogs/${blog.id}`}
        image={blog.image}
        type="article"
        schema={articleSchema}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Blogs', item: '/blogs' },
          { name: blog.title.substring(0, 20) + '...', item: `/blogs/${blog.id}` }
        ]}
      />

      <Link to="/blogs">
        <Button variant="ghost" className="mb-8 pl-0 hover:pl-0 hover:bg-transparent hover:text-primary">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blogs
        </Button>
      </Link>

      <article className="max-w-3xl mx-auto">
        <div className="space-y-4 mb-8">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">
            {blog.category}
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
            {blog.title}
          </h1>
          <div className="flex items-center justify-between py-4 border-b border-slate-200">
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm text-slate-600">
                <User className="h-4 w-4 mr-2" />
                {blog.author}
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <Calendar className="h-4 w-4 mr-2" />
                {blog.date}
              </div>
            </div>
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <Share2 className="mr-2 h-4 w-4" /> Share
            </Button>
          </div>
        </div>

        {/* Dynamic Cover Image */}
        <div className="rounded-xl overflow-hidden mb-10 shadow-lg">
          <BlogCover 
             title={blog.title} 
             category={blog.category}
             image={blog.image}
          />
        </div>

        <div 
          className="prose prose-lg prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-primary hover:prose-a:text-primary/80"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </article>

      {/* Related/More Posts */}
      <div className="max-w-3xl mx-auto mt-16 pt-8 border-t border-slate-200">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">More Articles</h3>
          <Link to="/blogs">
            <Button variant="link">View All</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

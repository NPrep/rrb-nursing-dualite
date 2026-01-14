import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
  schema?: object;
  breadcrumbs?: Array<{ name: string; item: string }>;
}

export default function SEO({ 
  title, 
  description, 
  keywords, 
  canonical, 
  image = "/rrb-train-logo.svg",
  type = 'website',
  schema,
  breadcrumbs
}: SEOProps) {
  const siteUrl = 'https://rrbnursing.com';
  const fullUrl = canonical ? (canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`) : siteUrl;

  // Construct Breadcrumb Schema
  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.item.startsWith('http') ? crumb.item : `${siteUrl}${crumb.item}`
    }))
  } : null;

  return (
    <Helmet>
      {/* Global Indexing Directive - CRITICAL */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />

      {/* Standard Metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords.join(', ')} />}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="RRB Nursing Prep" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
      
      {/* Breadcrumb Schema */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
}

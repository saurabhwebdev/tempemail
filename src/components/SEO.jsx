import React from 'react';
import { Helmet } from 'react-helmet';

const defaultSEO = {
  siteName: 'BlinkMail',
  siteUrl: 'https://blinkmail.xyz',
  defaultTitle: 'BlinkMail - Instant Temporary Email Service',
  defaultDescription: 'Generate secure, temporary email addresses in a blink. Perfect for testing, privacy, and avoiding spam. Free, fast, and no registration required.',
  defaultImage: '/images/default-image.png',
  ogImage: '/images/og-image.png',
  twitterImage: '/images/twitter-image.png',
  twitterHandle: '@blinkmailxyz',
  locale: 'en_US'
};

function SEO({ 
  title, 
  description, 
  canonical, 
  image, 
  type = 'website',
  noindex = false,
  structuredData,
  children 
}) {
  const seo = {
    title: title ? `${title} - ${defaultSEO.siteName}` : defaultSEO.defaultTitle,
    description: description || defaultSEO.defaultDescription,
    image: image || defaultSEO.defaultImage,
    ogImage: `${defaultSEO.siteUrl}${defaultSEO.ogImage}`,
    twitterImage: `${defaultSEO.siteUrl}${defaultSEO.twitterImage}`,
    url: canonical ? `${defaultSEO.siteUrl}${canonical}` : defaultSEO.siteUrl,
  };

  // Default structured data for the website
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: defaultSEO.siteName,
    url: defaultSEO.siteUrl,
    description: defaultSEO.defaultDescription,
    applicationCategory: 'Email Service',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1250'
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {canonical && <link rel="canonical" href={seo.url} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content={defaultSEO.siteName} />
      <meta property="og:locale" content={defaultSEO.locale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={defaultSEO.twitterHandle} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.twitterImage} />
      <meta name="twitter:image:alt" content={seo.title} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="theme-color" content="#2196f3" />
      
      {/* PWA Tags */}
      <link rel="manifest" href="/manifest.json" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={defaultSEO.siteName} />
      
      {/* Favicon Tags */}
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      
      {/* Additional tags passed as children */}
      {children}
    </Helmet>
  );
}

export default SEO; 
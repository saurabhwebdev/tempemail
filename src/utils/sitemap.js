const routes = [
  {
    url: '/',
    priority: 1.0,
    changefreq: 'daily'
  },
  {
    url: '/how-it-works',
    priority: 0.8,
    changefreq: 'monthly'
  },
  {
    url: '/features',
    priority: 0.8,
    changefreq: 'monthly'
  },
  {
    url: '/faq',
    priority: 0.7,
    changefreq: 'weekly'
  },
  // Legal pages
  {
    url: '/privacy',
    priority: 0.6,
    changefreq: 'monthly'
  },
  {
    url: '/terms',
    priority: 0.6,
    changefreq: 'monthly'
  },
  {
    url: '/cookies',
    priority: 0.6,
    changefreq: 'monthly'
  },
  {
    url: '/gdpr',
    priority: 0.6,
    changefreq: 'monthly'
  },
  // Contact pages
  {
    url: '/support',
    priority: 0.7,
    changefreq: 'monthly'
  },
  {
    url: '/report-abuse',
    priority: 0.7,
    changefreq: 'monthly'
  },
  {
    url: '/partnerships',
    priority: 0.7,
    changefreq: 'monthly'
  },
  {
    url: '/api',
    priority: 0.8,
    changefreq: 'monthly'
  }
];

function generateSitemap(baseUrl) {
  const today = new Date().toISOString();
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  routes.forEach((route) => {
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}${route.url}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  
  return xml;
}

export { routes, generateSitemap }; 
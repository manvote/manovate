const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  { url: '/services', changefreq: 'weekly', priority: 0.8 },
  { url: '/projects', changefreq: 'weekly', priority: 0.8 },
  { url: '/contact', changefreq: 'weekly', priority: 0.8 },
  { url: '/careers', changefreq: 'monthly', priority: 0.6 },
  { url: '/solution', changefreq: 'weekly', priority: 0.7 },
  { url: '/expertise', changefreq: 'weekly', priority: 0.7 },
];

const sitemap = new SitemapStream({ hostname: 'https://sdplacement.in' });

streamToPromise(sitemap)
  .then(() => console.log('✅ sitemap.xml created!'))
  .catch(console.error);

sitemap.pipe(createWriteStream('./public/sitemap.xml'));
links.forEach(link => sitemap.write(link));
sitemap.end();

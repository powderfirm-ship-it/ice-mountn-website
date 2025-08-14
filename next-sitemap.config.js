/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_BASE_URL || 'https://www.icemountn.com',
  generateRobotsTxt: true,
  exclude: ['/api/*'],
  transform: async (config, url) => {
    // Force https + www just in case
    const normalized = url
      .replace('http://', 'https://')
      .replace('://icemountn.com', '://www.icemountn.com');
    return {
      loc: normalized,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
      alternateRefs: [],
    };
  },
};

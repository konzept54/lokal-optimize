/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://localoptimize.de',
  generateRobotsTxt: false,
  outDir: './public',
  exclude: ['/leistungen', '/ueber-uns', '/referenzen', '/kontakt'],
}

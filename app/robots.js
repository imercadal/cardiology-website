export default function robots() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://drmercadal.cl';
  return {
    rules: { 
      userAgent: '*', 
      allow: '/',
      disallow: '/ejmercadal-azul.png'
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

// utils/sitemap.ts
export async function getDynamicRoutes() {
  // These would typically come from your API or database
  const services = [
    { id: 'service-1', slug: 'engineering-services' },
    { id: 'service-2', slug: 'consulting-services' },
    // ... more services
  ];
  
  const trainings = [
    { id: 'training-1', slug: 'safety-training' },
    { id: 'training-2', slug: 'technical-training' },
    // ... more trainings
  ];
  
  const locales = ['en', 'ar', 'de'];
  const routes = [];
  
  // Add dynamic service routes for all locales
  for (const locale of locales) {
    for (const service of services) {
      routes.push({
        loc: locale === 'en' ? 
          `/services/${service.slug}` : 
          locale === 'ar' ? 
            `/الخدمات/${service.slug}` : 
            `/Dienstleistungen/${service.slug}`,
        _i18n: {
          languages: {
            en: `/services/${service.slug}`,
            ar: `/الخدمات/${service.slug}`,
            de: `/Dienstleistungen/${service.slug}`
          }
        },
        lastmod: new Date().toISOString()
      });
    }
    
    // Add dynamic training routes for all locales
    for (const training of trainings) {
      routes.push({
        loc: locale === 'en' ? 
          `/training/${training.slug}` : 
          locale === 'ar' ? 
            `/تدريب/${training.slug}` : 
            `/Ausbildung/${training.slug}`,
        _i18n: {
          languages: {
            en: `/training/${training.slug}`,
            ar: `/تدريب/${training.slug}`,
            de: `/Ausbildung/${training.slug}`
          }
        },
        lastmod: new Date().toISOString()
      });
    }
  }
  
  return routes;
}
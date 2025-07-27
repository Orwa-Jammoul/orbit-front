
const fetchServices = async (apiBase, endpoint) => {
  try {
    const response = await fetch(`${apiBase}${endpoint}`, {
      method: 'GET',
      headers: {
        'Accept-Language': 'en-US',
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
};


export const sitemapRoutes = async () => {
  const apiBase = 'https://adminpanel.orbit-eng.net'
  const servicesEndpoint = '/api/v1/Products/allEndpoints'
  const trainingsEndpoint = '/api/v1/Courses/allEndpoints'
  const services = await fetchServices(apiBase, servicesEndpoint);
  const trainings = await fetchServices(apiBase, trainingsEndpoint);
  // console.log(services1);
  
  const locales = ['en', 'ar', 'de'];
  const routes = [];
  
  // Add dynamic service routes for all locales
  if(services.data && trainings.data){
    for (const locale of locales) {
      for (const service of services.data) {
        routes.push({
          loc: locale === 'en' ? 
            `/services/${service.endpointEn}` : 
            locale === 'ar' ? 
              `ar/الخدمات/${service.endpointAr ?? service.endpointEn}` : 
              `de/Dienstleistungen/${service.endpointGe ?? service.endpointEn}`,
          changefreq: 'weekly',
          priority: 0.7,
          _i18n: {
            languages: {
              en: `/services/${service.endpointEn}`,
              ar: `ar/الخدمات/${service.endpointAr ?? service.endpointEn}`,
              de: `de/Dienstleistungen/${service.endpointGe ?? service.endpointEn}`
            }
          },
          lastmod: new Date().toISOString()
        });
      }
      
      // Add dynamic training routes for all locales
      for (const training of trainings.data) {
        routes.push({
          loc: locale === 'en' ? 
            `/training/${training.endpointEn}` : 
            locale === 'ar' ? 
              `ar/تدريب/${training.endpointAr ?? training.endpointEn}` : 
              `de/Ausbildung/${training.endpointGe ?? training.endpointEn}`,
          changefreq: 'weekly',
          priority: 0.7,
          _i18n: {
            languages: {
              en: `/training/${training.endpointEn}`,
              ar: `ar/تدريب/${training.endpointAr ?? training.endpointEn}`,
              de: `de/Ausbildung/${training.endpointGe ?? training.endpointEn}`
            }
          },
          lastmod: new Date().toISOString()
        });
      }
    }
  }

  return { routes };
}
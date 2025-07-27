// import { useGetSiteApi } from "~/composables/useGetSiteApi";

// server/api/sitemap-routes.get.ts
export default defineEventHandler(async (event) => {
  // Fetch your dynamic content from DB or API
  // const { public: { apiBase, api } } = useRuntimeConfig();
  // const services = await useGetSiteApi().GetAll(`${api.productsApi}/GetAllPagedSearchProduct?pageNumber=1&pageSize=10000`)
  // const services = await fetchServices();
  // const trainings = await fetchTrainings();
  const services = [
    { id: 'service-1', endpointEn: 'engineering-services', endpointAr: 'engineering-services', endpointGe: 'engineering-services' },
    { id: 'service-2', endpointEn: 'engineering-services2', endpointAr: 'engineering-services2', endpointGe: 'engineering-services2' },
  ];
  
  const routes = [];
  
  // Generate routes for each locale
  for (const service of services) {
    routes.push({
      loc: `/services/${service.endpointEn}`,
      _i18n: {
        languages: {
          en: `/services/${service.endpointEn}`,
          ar: `/الخدمات/${service.endpointAr}`,
          de: `/Dienstleistungen/${service.endpointGe}`
        }
      }
    });
  }
  console.log(routes);
  // for (const training of trainings) {
  //   routes.push({
  //     loc: `/training/${training.slug}`,
  //     _i18n: {
  //       languages: {
  //         en: `/training/${training.slug}`,
  //         ar: `/تدريب/${training.slug}`,
  //         de: `/Ausbildung/${training.slug}`
  //       }
  //     }
  //   });
  // }
  
  return { data: routes };
});
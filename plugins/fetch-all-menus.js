export default defineNuxtPlugin(async (nuxtApp) => {
  const { public: {api, apiBase} } = useRuntimeConfig();

  // const menuQuery1 = `/api/menu/all`;
  // const socialMenuQuery = `/api/menu/all`;

  // const { data: menuData , error: menuError } = await useFetch(menuQuery1);
  // const { data: socialMenuData , error: socialMenuError } = await useFetch(socialMenuQuery);

  const menuQuery1 = `${api.MenusApi}?pageNumber=0&pageSize=100&categoryId=1`;
  // const menuQuery2 = `${api.MenusApi}?pageNumber=0&pageSize=100&categoryId=3`;
  // const menuQuery3 = `${api.MenusApi}?pageNumber=0&pageSize=100&categoryId=5`;
  const socialMenuQuery = `${api.MenusApi}?pageNumber=0&pageSize=100&categoryId=2`;
  const contactsQuery = `${api.MenusApi}?pageNumber=0&pageSize=100&categoryId=3`;

  const { data: menuData1 , error: menuError1 } = await useGetSiteApi().GetAll(menuQuery1);
  // const { data: menuData2 , error: menuError2 } = await useGetSiteApi().GetAll(menuQuery2);
  // const { data: menuData3 , error: menuError3 } = await useGetSiteApi().GetAll(menuQuery3);
  const { data: socialMenuData , error: socialMenuError } = await useGetSiteApi().GetAll(socialMenuQuery);
  const { data: contactsData , error: contactsError } = await useGetSiteApi().GetAll(contactsQuery);

  if(!menuError1.value && !socialMenuError.value && !contactsError.value){
    // all menu
    // useDataAllMenu().value = [...menuData1.value.items, ...menuData2.value.items]
    useDataAllMenu().value = menuData1.value.items
    // console.log(useDataAllMenu().value);
    // social
    useSocialMenu().value = socialMenuData.value.items
    useContactsMenus().value = contactsData.value.items
    // console.log(filterAndSort(menuData2.value.items));



    useMenu().value = arrangeMenus(menuData1.value.items);

    // console.log(useMenu().value);

  }else{
    console.log("error menus");
  }

})

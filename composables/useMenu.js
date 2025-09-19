export const useDataAllMenu = () => useState(() => '');
export const useSocialMenu = () => useState(() => []);
// export const useMenu = () => useState(() => null);


export const useMenuById = (id) => {
  // console.log(useDataAllMenu().value)
  if(!useDataAllMenu().value){
    return "d/not-found";
  }
  const result = useDataAllMenu().value.find((item) => item.id === id);
  return result
};

export const filterAndSort = (menu) => {
  
  let menuResult = menu.filter(item=> item.isActive)
  menuResult = menuResult.sort((a, b) => a.levelOrder - b.levelOrder)

  menuResult.map(item=> item.subPages=[])
  menuResult.forEach(item=> {
    if(item.parentId){
      menuResult.forEach(tItem=> {
        if(tItem.id == item.parentId){
          tItem.subPages.push(item)
        }
      })
    }
  })

  menuResult = menuResult.filter(item=> !item.parentId)
  return menuResult
};

export const arrangeMenus = (navbarMenu) => {
  
  let all = useDataAllMenu().value ? filterAndSort(useDataAllMenu().value) : null
  let navbar = navbarMenu? filterAndSort(navbarMenu) : null;
  let footer = navbarMenu? filterAndSort(navbarMenu) : null;
  let social = useSocialMenu().value? useSocialMenu().value : null;
  let contact = useContactsMenus().value? useContactsMenus().value : null;
  
  // console.log(all);
  // let navTop = ''
  // let navBottom = ''
  // let footer = ''
  // let contact = useSocialMenu().value




  return {
    "home" : all,
    "navbar" :navbar,
    "footer":footer,
    "social":social,
    "contact":contact,
  };
};

export const fetchMenus = async (nuxtApp) => {
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
  
  // const { data: messagData , error: messagError } = await useGetSiteApi().GetAll(`${api.MessagingApi}/20`);
  
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
    // useLaunch().value = messagData.value.data
    // console.log(useMenu().value);
    // console.log(useLaunch().value);

    return useMenu().value

  }else{
    console.log("error menus");

    return null
  }

}


// composables/useMenu.js
export const useMenu = () => {
  // Initialize the state with null but will be populated with menu data
  const menuState = useState('menu', () => null);
  
  // Function to fetch menu data from JSON file
  const fetchMenu = async () => {
    try {
      // Import the JSON data directly
      const menuData = await import('~/content/main-menu.json');
      console.log(menuData);
      menuState.value = menuData.default || menuData;
      return menuState.value;
    } catch (error) {
      console.error('Error loading menu data:', error);
      menuState.value = null;
      return null;
    }
  };
  
  // Function to get menu items by parent (for nested menus)
  const getMenuItems = (parentId = null) => {
    if (!menuState.value || !menuState.value.items) return [];
    
    return menuState.value.items.filter(item => item.parentId === parentId);
  };
  
  // Function to find a menu item by its ID
  const getMenuItem = (id) => {
    if (!menuState.value || !menuState.value.items) return null;
    
    return menuState.value.items.find(item => item.id === id);
  };
  
  return {
    menu: menuState,
    fetchMenu,
    getMenuItems,
    getMenuItem
  };
};


export const useDataAllMenu = () => useState(() => '');
export const useSocialMenu = () => useState(() => []);
export const useMenu = () => useState(() => null);


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
  
  let all = filterAndSort(useDataAllMenu().value)
  let navbar = filterAndSort(navbarMenu)
  let footer = filterAndSort(navbarMenu)
  let social = useSocialMenu().value
  let contact = useContactsMenus().value
  
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

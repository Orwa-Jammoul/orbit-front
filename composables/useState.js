export const useMainToken = () => useState(() => '');
export const useAuth = () => useState(() => ({
  isAuth: false,
}));
export const gLangs = () => useState(() => []);
export const useLang = () => useState(() => []);
export const useToken = () => useState(() => '');
export const useUserInfo = () => useState(() => '');
export const useRole = () => useState(() => '');
export const isAdmin = () => useState(() => '');

export const oTheme = () => useState(() => '');

// dashboard
export const showDrawer = () => useState(() => true);



export const useRefreshMainToken = () => useState(() => '');
export const useUserId = () => useState(() => '');
export const useClientId = () => useState(() => '');

export const useActive = () => useState(() => false);
export const useSocialMenus = () => useState(() => []);
export const useMainMenus = () => useState(() => []);
export const useMenusFooter = () => useState(() => []);
export const useCurrency = () => useState(() => "AED");
export const useCartStore = () => useState(() => []);

export const useAgeCategory = () => useState(() => []);
export const useAlltournaments = () => useState(() => []);
export const useGender = () => useState(() => [
  {
    id: 1 ,
    nameAr: 'انثى',
    nameEn: 'Female',
    value: "Female"
  },
  {
    id: 2 ,
    nameAr: 'ذكر',
    nameEn: 'Male',
    value: "Male"
  }
]);

export const fileReset = () => useState(() => false);
export const fileResetCount = () => useState(() => -1);


export const useImageLouded = () => useState(() => ({
  loaded: false
}));


export const useCart = () => useState(() => ({
  items: new Array(),
  totalQty: 0,
  totalPrice: 0
}));


export const useHeader = () => useState(() => []);
export const useShowNavVer = () => useState(() => ({
  show: false
}));
export const showSearchModal = () => useState(() => false);


export const showModal = () => useState(() => false);
export const modalData = () => useState(() => [
  {id:0, info:'', image: ''},
]);

export const showPlayerDetailsModal = () => useState(() => false);
export const showPlayerEditModal = () => useState(() => false);
export const showPlayerRenewModal = () => useState(() => false);
export const showPlayerTerminationModal = () => useState(() => false);
export const dataPlayerModal = () => useState(() => {});

export const showCoachDetailsModal = () => useState(() => false);
export const showCoachEditModal = () => useState(() => false);
export const showCoachRenewModal = () => useState(() => false);
export const showCoachTerminationModal = () => useState(() => false);
export const dataCoachModal = () => useState(() => {});

export const showManagerDetailsModal = () => useState(() => false);
export const showManagerEditModal = () => useState(() => false);
export const showManagerRenewModal = () => useState(() => false);
export const showManagerTerminationModal = () => useState(() => false);
export const dataManagerModal = () => useState(() => {});


// export const hallModalData = () => useState(() => null);
// export const allowNewLoan = () => useState(() => true);


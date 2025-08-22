
export const useLang = () => useState(() => []);

export const useMainToken = () => useState(() => []);
export const useRefreshMainToken = () => useState(() => []);
export const useToken = () => useState(() => []);
export const useUserInfo = () => useState(() => []);
export const useUserId = () => useState(() => null);
export const useClientId = () => useState(() => []);
export const useAuth = () => useState(() => ({
  isAuthenticated: false,
}));

export const useActive = () => useState(() => false);
export const useSocialMenus = () => useState(() => []);
export const useContactsMenus = () => useState(() => []);
export const useMainMenus = () => useState(() => []);
export const useMenusFooter = () => useState(() => []);
export const useCurrency = () => useState(() => "AED");
export const useCartStore = () => useState(() => []);
export const useAccountType = () => useState(() => []);
export const useAgeCategory = () => useState(() => []);
export const useAlltournaments = () => useState(() => []);
export const useGender = () => useState(() => [
  {
    id: 1 ,
    nameAr: 'ذكر',
    nameEn: 'Male',
    value: "Male"
  },
  {
    id: 2 ,
    nameAr: 'انثى',
    nameEn: 'Female',
    value: "Female"
  },
]);

export const siteLanguages = () => useState(() => new Object({
  en:'English',
  ar:'عربي',
  de:'Deutsch',
})); 

export const fileReset = () => useState(() => false);
export const fileResetCount = () => useState(() => -1);


export const useReMe = () => useState(() => false);
export const useImageLouded = () => useState(() => ({
  loaded: false
}));

export const cartEvent = () => useState(() => 0);
export const useCart = () => useState(() => ({
  items: [[],[],[]],
  totalItems: 0,
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


export const useLaunch = () => useState(() => null);


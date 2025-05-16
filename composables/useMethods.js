// import en from '../locales/en.json'
// import ar from '../locales/ar.json'
const vNotFound = 'v/not-found' // v/not-found
const dNotFound = 'd/not-found' // d/not-found
export const useModalImgs= () => useState(() => []);
export const useCapitalize= () => useState(() => false);

export const switchL= ()=>{
  const lang = localStorage.getItem('lang') ?? 'ar';
  useLang().value = lang==='en' ? 'ar' : 'en';
  // console.log(useI18n().locale.value);
  // console.log(useI18n());
  // useI18n().locale.value = lang==='en' ? 'ar' : 'en';
  // const c1 = useCookie('lang')
  // c1.value= useLang().value
  // const c2 = useCookie('i18n_redirected')
  // c2.value= useLang().value
  localStorage.setItem("lang", String(useLang().value));
  useCookie('lang').value= String(useLang().value)
  useCookie('i18n_redirected').value= String(useLang().value)
  // console.log(useCookie('lang').value);
  // useCookie().value //setCookie("lang", String(useLang().value));
}
export const isEn = () =>  {
  const lang = useLang().value ?? 'en';
  return lang==='en'
}
export const isDark = () =>  {
  const theme = oTheme().value ?? 'dark';
  return theme=='dark'
}
export const rtl = () => {
  const lang = useLang().value ?? 'en';
  return lang==='en'?'ltr':'rtl';
};
export const capitalize = (value) =>  {
  if(useCapitalize().value){
    return value.toUpperCase()
  }
  return value
}
export const capitalizeFirsts= (sentence)=> {
  let words = sentence.split(' ');
  let capitalizedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
  });
  
  return capitalizedWords.join(' ');
}
export const useName = (data, firstCapital=false, allCapital=false, firsts=false) => {
  if(!data){
    return dNotFound;
  }
  const lang = useLang().value ? useLang().value : 'en';
  let value;
  if(lang==='en'){
    value=  data.englishName ?? data.nameEnglish ?? data.nameEn ?? data.enName ?? data.fullNameEn ?? data.name ?? data.fullName ?? data.productNameEn ?? data.arabicName ?? data.en_title ?? data.firstName ?? vNotFound;
    if(allCapital){
      value = value.toUpperCase();
    }else if(firsts){
      value = capitalizeFirsts(value);
    }else if(firstCapital){
      value = value.charAt(0).toUpperCase() + value.slice(1);
    }

  }else{
    value= data.fullName ?? data.nameAr ?? data.arabicName ?? data.nameArabic ??  data.fullNameAr ?? data.ar_title ?? data.name ?? data.productNameAr ?? data.firstName ??  vNotFound;
  }
  return value;
};
export const useDes = (data, firstCapital=false, allCapital=false, firsts=false) => {
  if(!data){
    return dNotFound;
  }
  const lang = useLang().value ? useLang().value : 'en';
  let value;
  if(lang==='en'){
    value= data.descriptionEnglish ?? data.descriptionEn ?? data.englishDescription ?? data.descriptionAboutEn ?? data.description ?? '';
    if(allCapital){
      value = value.toUpperCase();
    }else if(firsts){
      value = capitalizeFirsts(value);
    }else if(firstCapital){
      value = value.charAt(0).toUpperCase() + value.slice(1);
    }
  }else{
    value= data.descriptionArabic ?? data.descriptionAr ?? data.description ?? data.descriptionAboutAr ?? '';
  }
  return value;
};
export const useDes1 = (data) => {
  if(!data){
    return dNotFound;
  }
  const lang = useLang().value ? useLang().value : 'en';
  if(lang==='en'){
    return data.englishDescription1
  }else{
    if(data.description1){
      return data.description1
    }
    return data.arabicDescription1
  }
};
export const useDes2 = (data) => {
  if(!data){
    return "not-found";
  }
  const lang = useLang().value ? useLang().value : 'en';
  if(lang==='en'){
    return data.englishDescription2
  }else{
    if(data.description2){
      return data.description2
    }
    return data.arabicDescription2
  }
};
export const useDes3 = (data) => {
  if(!data){
    return "not-found";
  }
  const lang = useLang().value ? useLang().value : 'en';
  if(lang==='en'){
    return data.englishDescription3
  }else{
    if(data.description3){
      return data.description3
    }
    return data.arabicDescription3
  }
};
export const useDes4 = (data) => {
  if(!data){
    return "not-found";
  }
  const lang = useLang().value ? useLang().value : 'en';
  if(lang==='en'){
    return data.englishDescription4
  }else{
    if(data.description4){
      return data.description4
    }
    return data.arabicDescription4
  }
};
export const productCategory = (data) => {
  const lang = useLang().value ? useLang().value : 'en';
  if(lang==='en'){
    return data.englishproductCategory
  }else{
    if(data.description1){
      return data.productCategory
    }
    return data.arabicproductCategory
  }
};
export const textLength=(data,l=100)=>{
  if(!data){
    return dNotFound;
  }
  if (data.length>l){
    return data.slice(0,l) +'...'
  }
  return data;
}
export const numD=(num,digitsNum=2)=>{
  let numStr = num.toString();
  let zerosToAdd = digitsNum - numStr.length;
  
  if (zerosToAdd > 0) {
      return "0".repeat(zerosToAdd) + numStr;
  } else {
      return numStr;
  }
}
export const t = ((key, firstCapital=false, allCapital=false, firsts=false) => {
  const lang = useLang().value ? useLang().value : 'en';
  let value;
  if(lang==='en'){
    value= useEn().value[key] ?? key ;
    if(allCapital){
      value = value.toUpperCase();
    }else if(firsts){
      value = capitalizeFirsts(value);
    }else if(firstCapital){
      value = value.charAt(0).toUpperCase() + value.slice(1);
    }
  }else{
    value= useAr().value[key] ?? key ;
  }

  return value;
});
export const useClasses = (enClasses,arClasses) => {
  const lang = useLang().value ? useLang().value : 'en';
  let value;
  if(lang==='en'){
    for (let i = 0; i < enClasses.length; i++) {
      const enClass = enClasses[i];
      value+= `${enClass} `
    }
  }else{
    for (let i = 0; i < arClasses.length; i++) {
      const arClass = arClasses[i];
      value+= `${arClass} `
    }
  }
  return value;
};
export const usePrice = ((product, withCurrency=false) => {
  if(!product){
    return dNotFound;
  }
  const type = useRole().value ?? "Person"
  let price= product.newPrice ?? product.price ;
  if(withCurrency){
    price =  price || price===0? (price +" "+ t(useCurrency().value)) : vNotFound;
  }else{
    price = price || price===0? price : vNotFound;
  }
  return price
  // if(type==="Company"){
  //   return product.wholesalePrice
  // }else{
  //   return product.retailPrice
  // }
});
export const useOldPrice = ((product, withCurrency=false) => {
  if(!product){
    return dNotFound;
  }
  const type = useRole().value ?? "Person"
  let price = product.price;
  if(withCurrency){
    price = price? (price +" "+ t(useCurrency().value)) : vNotFound;
  }else{
    price = price? price : vNotFound;
  }
  return price
  // if(type==="Company"){
  //   return product.wholesalePrice
  // }else{
  //   return product.retailPrice
  // }
});
export const useLogout = (() => {
  // localStorage.removeItem("accountType")
  localStorage.removeItem("userInfo")
  localStorage.removeItem("isAdmin")
  localStorage.removeItem("token")
  useAuth().value.isAuth = false
  isAdmin().value = null
  useUserInfo().value = null
  useToken().value = null

  location.assign("/");
  // window.location.reload(true);
  // location.reload()
})
export const useOrderById = ((items) => {
  return items.sort((a, b) => a.id - b.id);
});
export const getProductsGroup = async (endpoint, arr)=>{
  const pIds=arr;
  let pp=[];
  for (let i = 0; i < pIds.length; i++) {
    const pId = pIds[i];
    const { data:product} = await useGetSiteApi().GetAll(`${endpoint}/${pId}`);
    pp.push(product.value.data);
  }
  return pp;
};
export const useIcon = (name) => {
  const icons=  {
    "facebook":"carbon:logo-facebook",
    "instagram":"streamline:instagram-solid",
    "youtube":"bi:youtube",
    "youtube-play":"bi:youtube",
    "whatsapp":"formkit:whatsapp",
    "wechat":"ic:baseline-wechat",
    "telegram":"bx:bxl-telegram",
    "pinterest":"mdi:pinterest",
    "reddit":"ic:baseline-reddit",
    "linkedIn":"mdi:linkedin",
    "quora":"carbon:logo-quora",
    "discord":"ic:baseline-discord",
    "twitch":"ri:twitch-fill",
    "github":"mdi:github",
    "behance":"akar-icons:behance-fill",
    "tiktok":"ic:baseline-tiktok",
    "twitter":"ri:twitter-x-line",
    "snapchat":"ph:snapchat-logo-fill",
    "unknown":"pajamas:severity-unknown",
  }
  const isKnown = icons[name.toLowerCase()]
  const icon = name && isKnown ? icons[name.toLowerCase()]: icons['unknown']
  return icon;
};
export const goto=(link="/")=>{
  return navigateTo(link) 
};
export const addToCart = (item,qty=null, typeId=0) => {
  if(qty){
    useShoppingCartComposable().addToCartWithQty(item, qty, typeId);
  }else{
    useShoppingCartComposable().addToCart(item, typeId);
  }
};
export const removeFromCart = (id, typeId=0) => {
  useShoppingCartComposable().removeItemFromCart(id, typeId);
};
export const emptyCart = () => {
  useShoppingCartComposable().emptyCart();
};
export const useRememberMe = (remember) => {
  localStorage.setItem("ReMe", remember)
};

export const toShowDate = (date) => {
  const date_ =   new Date(date).toLocaleDateString(useLang().value, {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  })
  return date_;
};
export const shortDate = (date, sp='-') => {
  const date_ = new Date(date)
  const shortD =`${date_.getFullYear()}${sp}${numD(date_.getMonth()+1,2)}${sp}${numD(date_.getDate(),2)}`
  return shortD;
};
export const longDate = (date) => {
  return new Date(date)
};
export const cImg = (imgUrl,useDefault=true) => {
  const { public: { api, apiBase }, } = useRuntimeConfig();
  if(!imgUrl || imgUrl==''){
    return useDefault?`/logo/logo-01.png`: null
  }
  if(imgUrl.startsWith('data:image')){
    return imgUrl;
  }else{
    return `${apiBase}/${imgUrl}`
  }
}

export const getInnerText = (strHtmlElement) => {
  const htmlElement = document.createElement('div');
  htmlElement.innerHTML = strHtmlElement;
  
  const innerText = htmlElement.innerText;
  return innerText;
}
export const openAlbum = (album, defaultId=-1) => {
  // console.log(album);
  const modalAlbum = [...album.pagePhotos ?? album.blockPhotos]
  let imgs = modalAlbum.filter((item)=>item.image)
  imgs.map((item)=> {item.info=''; item.isDefault=false})
  if(defaultId!=-1){
    imgs.forEach(element => {
      element.id==defaultId?element["isDefault"]=true:'';
    });
  }
  // console.log(imgs);
  modalData().value = imgs
  showModal().value = true
};


export const genderString = (id) => {
  // console.log(id);
  const ss = useGender().value.find((item)=>item.value==id)
  if(ss){
    return id
  }
  const gender = useGender().value.find((item)=>item.id==id)
  return gender.value
};
export const genderId = (genderString) => {
  // console.log(genderString);
  const ss = useGender().value.find((item)=>item.id==genderString)
  if(ss){
    return genderString
  }
  const gender = useGender().value.find((item)=>item.value==genderString)
  return gender.id
};

export const isUrl = (url)=> {
  const regex = /^\/\d+$/;
  return !regex.test(url);
}
export const cDate = (d)=> {
  const date = new Date(d);
  let convertedDate = ''
  if(isEn()){
    convertedDate = date.toDateString()
  }else{
      // Format the date to Arabic
    convertedDate = new Intl.DateTimeFormat('ar-EG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  }
  return convertedDate
}

export const isPdf = (imgUrl)=>{
  if(!imgUrl){
    return false
  }
  const isPdf_ = imgUrl.toLowerCase().endsWith('.pdf');
  return isPdf_
}

export const convertToArray = (obj) => {
  return Object.entries(obj)
      .filter(([key]) => key !== 'fetchedAt') 
      .map(([, value]) => value); 
};
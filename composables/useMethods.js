
const vNotFound = '' // v/not-found
const dNotFound = '' // d/not-found
export const useModalImgs= () => useState(() => []);
export const useCapitalize= () => useState(() => false);

export const localePath = (path)=>{
  // const localePath = useLocalePath()
  return isEn()? path : `/${useLang().value}${path}`
}

export const useTr = (english, arabic, germany) =>  {
  const lang = useLang().value ?? 'en';
  if(lang=='en'){
    return english
  }else if(lang=='ar'){
    return arabic
  }else{
    return germany
  }
}
export const isEn = () =>  {
  const lang = useLang().value ?? 'en';
  return lang==='en'
}
export const isAr = () =>  {
  const lang = useLang().value ?? 'en';
  return lang==='ar'
}
export const isDe = () =>  {
  const lang = useLang().value ?? 'en';
  return lang==='de'
}
export const rtl = () => {
  const lang = useLang().value ?? 'en';
  return lang==='en' || lang==='de'?'ltr':'rtl';
};
export const capitalize = (value) =>  {
  if(useCapitalize().value){
    return value.toUpperCase()
  }
  return value
}
export const capitalizeFirsts= (sentence)=> {
  let sentenceTemp = sentence.toLowerCase()
  let words = sentenceTemp.split(' ');
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

  }else if(lang==='de'){
    value= data.nameGe ?? data.geName ?? data.fullNameGe ?? data.ge_title ?? vNotFound;
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
    value= data.descriptionEnglish ?? data.descriptionEn ?? data.englishDescription ?? data.descriptionAboutEn ?? data.description ?? vNotFound;
    if(allCapital){
      value = value.toUpperCase();
    }else if(firsts){
      value = capitalizeFirsts(value);
    }else if(firstCapital){
      value = value.charAt(0).toUpperCase() + value.slice(1);
    }
  }else if(lang==='de'){
    value= data.descriptionGe ?? vNotFound;
    if(allCapital){
      value = value.toUpperCase();
    }else if(firsts){
      value = capitalizeFirsts(value);
    }else if(firstCapital){
      value = value.charAt(0).toUpperCase() + value.slice(1);
    }
  }else{
    value= data.descriptionArabic ?? data.descriptionAr ?? data.description ?? data.descriptionAboutAr ?? vNotFound;
  }
  return value;
};
export const useDes1 = (data) => {
  if(!data){
    return dNotFound;
  }
  const lang = useLang().value ? useLang().value : 'en';
  if(lang==='en'){
    return data.englishDescription1 ?? vNotFound;
  }else if(lang==='de'){
    return data.descriptionGe1 ?? vNotFound;
  }else{
    return data.description1 ?? data.arabicDescription1 ?? vNotFound;
  }
};
export const useDes2 = (data) => {
  if(!data){
    return dNotFound;
  }
  const lang = useLang().value ? useLang().value : 'en';
  if(lang==='en'){
    return data.englishDescription2 ?? vNotFound;
  }else if(lang==='de'){
    return data.descriptionGe2 ?? vNotFound;
  }else{
    return data.description2 ?? data.arabicDescription2 ?? vNotFound;
  }
};
export const useDes3 = (data) => {
  if(!data){
    return dNotFound;
  }
  const lang = useLang().value ? useLang().value : 'en';
  if(lang==='en'){
    return data.englishDescription3 ?? vNotFound;
  }else if(lang==='de'){
    return data.descriptionGe3 ?? vNotFound;
  }else{
    return data.description3 ?? data.arabicDescription3 ?? vNotFound;
  }
};
export const useDes4 = (data) => {
  if(!data){
    return dNotFound;
  }
  const lang = useLang().value ? useLang().value : 'en';
  if(lang==='en'){
    return data.englishDescription4 ?? vNotFound;
  }else if(lang==='de'){
    return data.descriptionGe4 ?? vNotFound;
  }else{
    return data.description4 ?? data.arabicDescription4 ?? vNotFound;
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
  }else if(lang==='ar'){
    value= useAr().value[key] ?? key ;
  }else{
    value= useDe().value[key] ?? key ;
    if(allCapital){
      value = value.toUpperCase();
    }else if(firsts){
      value = capitalizeFirsts(value);
    }else if(firstCapital){
      value = value.charAt(0).toUpperCase() + value.slice(1);
    }
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
export const useFormatPrice = ((price, withCurrency=false, withCommas=true) => {
  if(!price &&  price!=0){
    return dNotFound;
  }
  if(withCommas){
    price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  if(withCurrency){
    price =  price || price==0? (t(useCurrency().value) +" "+ price) : vNotFound;
  }else{
    price = price || price==0? price : vNotFound;
  }
  return price
})

export const usePrice = ((product, withCurrency=false, withCommas=true) => {
  if(!product){
    return dNotFound;
  }
  // const type = useAccountType().value ?? "Person"
  let price= product.price ;
  if(product.newPrice && product.newPrice>0){
    price= product.newPrice;
  }
  if(!price &&  price!=0){
    return dNotFound;
  }
  if(withCommas){
    price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  // let price= product.newPrice ?? product.price ;
  if(withCurrency){
    price =  price || price===0? (t(useCurrency().value) +" "+ price) : vNotFound;
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
  const type = useAccountType().value ?? "Person"
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
  localStorage.removeItem("UserId")
  localStorage.removeItem("clientId")
  localStorage.removeItem("userInfo")
  localStorage.removeItem("token")
  useAuth().value.isAuthenticated = false
  useUserInfo().value = null
  useUserId().value = null
  useClientId().value = null
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
    "facebook":"iconoir:facebook",
    "instagram":"ant-design:instagram-outlined",
    "youtube":"bi:youtube",
    "youtube-play":"bi:youtube",
    "whatsapp":"ri:whatsapp-line",
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
    "twitter":"ri:twitter-x-fill",
    "x":"ri:twitter-x-fill",
    "snapchat":"ph:snapchat-logo-fill",
    "linkedin":"basil:linkedin-outline",
    "location":"tdesign:location",
    "phone":"material-symbols:call",
    "email":"material-symbols:mail-outline",
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
  cartEvent().value +=1
  if(qty){
    useShoppingCartComposable().addToCartWithQty(item, qty, typeId);
  }else{
    useShoppingCartComposable().addToCart(item, typeId);
  }
};
export const removeFromCart = (id, typeId=0) => {
  cartEvent().value +=1
  useShoppingCartComposable().removeItemFromCart(id, typeId);
};
export const emptyCart = () => {
  cartEvent().value +=1
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
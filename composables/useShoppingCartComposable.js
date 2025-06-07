export const useShoppingCartComposable = () => {
  if(localStorage.getItem('cart')){
    useCart().value = JSON.parse( localStorage.getItem('cart'));
  }
  const shoppingCart = useCart().value;
  const { $awn } = useNuxtApp()

  const addToCart = (item, typeId=0) => {
    let storedItem = reactive({
      id: item.id,
      qty: 0,
      price: usePrice(item),
      // qty: {
      //   countAdult: 0,
      //   countChild: 0,
      //   countBaby: 0,
      // },
      // price: {
      //   perAdult: item.perAdult,
      //   perChild: item.perChild,
      //   perBaby: item.perBaby,
      // },
      item: item,
      photo: item.productImageUrl
    })
    // console.log(storedItem);
    // check if this stored item inside the cart is the same item we currently add
    if (!cartHas(item.id, typeId)) {
      Object.assign(shoppingCart.items[typeId], {
        [item.id]: storedItem
      });
    }

    if (shoppingCart.items[typeId][item.id]) {
      // shoppingCart.items[typeId][item.id]['qty']['countAdult'] += 1;
      shoppingCart.items[typeId][item.id]['qty'] += 1;
    }
    
    resetCartToStorage(shoppingCart);
    // $awn.success(t('Product has been added to the cart'))
  }

  const updateQty = (id, qty, typeId=0) => {
      // check if this stored item inside the cart is the same item we currently add
      if (cartHas(id, typeId)) {
        // add this new quantity to main array cart
        shoppingCart.items[typeId][id]['qty'] = qty;
        // update items qunatity and price with new value
        resetCartToStorage(shoppingCart)
      }
  }

  const addToCartWithQty = (item, qty, typeId=0) => {
    if (cartHas(item.id, typeId)) {
      updateQty(item.id, qty, typeId)
    } else {
      addToCart(item, typeId)
      updateQty(item.id, qty, typeId)
    }
  }
  
  const removeItemFromCart = (id, typeId=0) => {
    // check if this stored item inside the cart is the same item we currently add
    if (cartHas(id, typeId)) {
        // delete the item it self from the 'items' array (from cart)
        delete shoppingCart.items[typeId][id];
        resetCartToStorage(shoppingCart)
        $awn.success(t('Product has been removed from cart'))
    }
  }

  const emptyCart = () => {
    shoppingCart.items=[[],[],[]];
    shoppingCart.totalItems=0;
    shoppingCart.totalQty=0;
    shoppingCart.totalPrice=0;

    resetCartToStorage(shoppingCart);
    $awn.success('Cart has been emptied')
  };

  const calcTotals = () => {
    const elements = shoppingCart.items;
    let tItems=0;
    let tQty=0;
    let tPrice=0;
    for (let j = 0; j < elements.length; j++) {
      const items = elements[j];
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if(item){
          tItems +=1;
          // tQty += item.qty.countAdult + item.qty.countChild + item.qty.countBaby 
          // tPrice += item.qty.countAdult * item.price.perAdult + item.qty.countChild * item.price.perChild + item.qty.countBaby * item.price.perBaby
          tQty += item.qty 
          tPrice += item.qty * item.price
        }
      }
    }

    shoppingCart.totalItems = tItems;
    shoppingCart.totalQty = tQty;
    shoppingCart.totalPrice = tPrice;
  }

  const cartHas = (id, typeId=0) => {
    const items = shoppingCart.items[typeId];
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if(item){
        if(String(item.id)===String(id)){
          return true;
        }
      }
    }
    return false;
  }

  const resetCartToStorage = (value) => {
    calcTotals();
    if (localStorage.getItem('cart')) {
      localStorage.removeItem('cart')
    } 
    localStorage.setItem('cart', JSON.stringify(value))
    useCart().value=value;
  }


  return {
    addToCart,
    addToCartWithQty,
    updateQty,
    removeItemFromCart,
    emptyCart
  }

}



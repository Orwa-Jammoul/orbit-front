export const useShoppingCartComposable = () => {
  const shoppingCart = useCart().value;
  const { $awn } = useNuxtApp()

  const addToCart = (item, qty) => {
    let storedItem = reactive({
      id: shoppingCart.items.length,
      product_id: item.id,
      qty: qty,
      price: item.price,
      item: item,
      photo: item.productImageUrl
    })
    shoppingCart.items.push(storedItem)
    shoppingCart.totalQty += qty;
    shoppingCart.totalPrice += (item.price * qty);
    // check if this stored item inside the cart is the same item we currently add
    // if ( !shoppingCart.items[item.id] ) {
    //   Object.assign(shoppingCart.items, {
    //     [item.id]: storedItem
    //   });
    //   shoppingCart.totalQty += 1;     // increase the qunatity by one every time we add new item to cart
    //   shoppingCart.totalPrice += item.price;
    // } else {
    //   shoppingCart.totalQty += 1;
    //   shoppingCart.totalPrice += item.price;
    // }

    // if (shoppingCart.items[item.id]) {
    //   shoppingCart.items[item.id]['qty'] += 1;
    // }
    resetCartToStorage(shoppingCart)
    $awn.success('Product has been added to the cart')
  }

  const addToCartWithQty = (item, qty) => {

    if(shoppingCart.items.length == 0) {
      addToCart(item, qty)
    }else {
      let found = false
      shoppingCart.items.forEach(cartitem => {
        if(cartitem.product_id == item.id && cartitem.price == item.price) {
          found = true
          cartitem.qty += qty
          shoppingCart.totalQty += qty;
          shoppingCart.totalPrice += (item.price * qty);
          resetCartToStorage(shoppingCart)
          $awn.success('Product has been updated in the cart')
        }
      })
      found ? '' : addToCart(item, qty)
    }

    // if (shoppingCart.items.hasOwnProperty(item.id) && shoppingCart.items[item.id]) {
    //   if(qty == 1) {
    //     updateQty(item.id, 1)
    //   }else {
    //     updateQty(item.id, qty)
    //   }
    //   // updateQty(item.id, qty)
    //   $awn.success('Product has been updated in the cart')
    // } else {
    //   if(qty == 1) {
    //     addToCart(item)
    //   }else {
    //     addToCart(item)
    //     updateQty(item.id, qty - 1)
    //   }
    // }
  }

  const updateQty = (id, qty) => {
      // check if this stored item inside the cart is the same item we currently add
      if ( shoppingCart.items.hasOwnProperty(id) && shoppingCart.items[id]) {
        // add this new quantity to main array cart
        shoppingCart.items[id]['qty'] += qty;
        // update items qunatity and price with new value
        shoppingCart.totalQty += qty ;
        shoppingCart.totalPrice += (qty * shoppingCart.items[id]['price']);
        resetCartToStorage(shoppingCart)
      }
  }

  const CartdecreaseQty = (id, qty) => {
      
      shoppingCart.items[id]['qty'] -= 1;
      // update items qunatity and price with new value
      shoppingCart.totalQty -= 1 ;
      shoppingCart.totalPrice -= (shoppingCart.items[id]['price']);
      resetCartToStorage(shoppingCart)
  }

  const CartincreaseQty = (id) => {
      
      shoppingCart.items[id]['qty'] += 1;
      // update items qunatity and price with new value
      shoppingCart.totalQty += 1 ;
      shoppingCart.totalPrice += (shoppingCart.items[id]['price']);
      resetCartToStorage(shoppingCart)
  }

  const removeItemFromCart = (id) => {
      shoppingCart.totalQty -= shoppingCart.items[id]['qty'];
        // descrease the total price after delete the price for deleted items
        shoppingCart.totalPrice -= (shoppingCart.items[id]['qty'] * shoppingCart.items[id]['price']);
        // delete the item it self from the 'items' array (from cart)
        // delete shoppingCart.items[id];
        shoppingCart.items.splice(id, 1)
        resetCartToStorage(shoppingCart)
        $awn.success('Product has been removed from cart')
  }

  const resetCartToStorage = (value) => {
    if (localStorage.getItem('cart')) {
      localStorage.removeItem('cart')
      localStorage.setItem('cart', JSON.stringify(value))
    } else {
      localStorage.setItem('cart', JSON.stringify(value))
    }
  }

  return {
    addToCart,
    addToCartWithQty,
    updateQty,
    removeItemFromCart,
    CartdecreaseQty,
    CartincreaseQty
  }

}
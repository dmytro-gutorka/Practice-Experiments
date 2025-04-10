// Importing module

import closeDeep from './node_modules/lodash-es/cloneDeep'
import {a ,b} from './shoppingCart.js'

const ShoppingCart2 = (function() {

    const cart = [];
    const shippingCost = 10
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function(product, quantity) {
        cart.push({cart, quantity});
        console.log(`${quantity} ${product} added to cart`);
    }

    const orderStock = function(product, quantity) {
        cart.push({cart, quantity});
        console.log(`${quantity} ${product} added to cart`);
    }

    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity
    }

})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 10);


console.log(a + b)
let c = {}
closeDeep(c)


// Exporting module
console.log('Exporting module')

const shippingCost = 10;
const cart = [];


export const addToCart = function(product, quantity) {
    cart.push({cart, quantity});
    console.log(`${quantity} ${product} added to cart`);
}

const totalPrice = 200;
const totalQuantity = 15;

export {totalPrice, totalQuantity as tq};




export default function(product, quantity) {
    cart.push({cart, quantity});
    console.log(`${quantity} ${product} added to cart`);
}
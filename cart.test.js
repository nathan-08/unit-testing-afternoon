const cart = require('./cart.js');
const cars = require('./data/cars.js');



describe('Cart Properties:', () => {
    test('cart is empty array', ()=>{
        expect(typeof cart.cart).toBe("object");
        expect(cart.cart).toBeNull(); //passed
    })
    test('total is 0', () => {
        expect(typeof cart.total).toBe("number")
        expect(cart.total).toBe(0); //passed
    })
})

describe.only('Cart Methods:', () => {
    afterEach( ()=> {
        // reset total property
        // reset cart to empty array
        cart.total = 0;
        cart.cart = [];
    })
    test('addToCart method', () => {
        let before = cart.cart.length
        cart.addToCart()
        let after = cart.cart.length 
        expect(after-1).toEqual(before)        
    })
})

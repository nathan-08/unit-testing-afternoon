const cars = require('./data/cars');

module.exports = {
  cart: [],
  total: 0,

  addToCart: function() {
    this.cart.push(cars[Math.floor(Math.random()*cars.length)])
    

  },

  removeFromCart: function() {

  },
  
  checkout: function() {

  }
};
var assert = require('assert');
var string = require('../string');
var cheapest = require('../cheapest');
var expensive = require('../expensive');
var average = require('../average');
var cheapest_shop = require('../cheapest_shop');
var pricesOfApples = require('../pricesOfApples');
var pricesInDescending = require('../pricesInDescending');
var cheapestFruit = require('../cheapestFruit');
var pricePerAvo = require('../pricePerAvo');


var avos = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50";
var avocados = [ [ 1, 3 ], [  2, 7 ], [  3, 10 ], [  5, 14.50 ] ];
var deals = [3.00, 3.50, 3.33, 2.90];

describe('avo test', function() {
  it('it sould split out the string into an array', function() {
    assert.deepEqual(string(avos), [
      [1, 3],
      [ 2, 7],
      [ 3, 10],
      [ 5, 14.50]
    ])
  })
  it('it should calculate the price per avo', function() {
    assert.deepEqual(pricePerAvo(avocados), [3.00, 3.50, 3.33, 2.90])
  })
  it('it should calculate the cheapest deal', function(){
    assert.equal(cheapest(deals), 2.90)
  })
  it('it should calulate the most expensive deal', function(){
    assert.equal(expensive(deals), 3.50)
  })
  it('it should find the average price', function(){
    assert.equal(average(deals), 3.18)
  })
});

var shops =
{
  "woolingsworth": {
    "apples": 4,
    "bananas": 3,
    "oranges": 12
  },

  "chockers": {
    "bananas": 2,
    "apples": 5,
    "oranges": 4
  },

  "pickle pay": {
    "bananas": 4,
    "oranges": 7
  },

  "shopwrong": {
    "apples": 2,
    "bananas": 3
  },

  "kwakspar": {
    "oranges": 9,
    "apples": 4
  }
}

describe('fruition test', function(){
  it('it should find the seller of the cheapest oranges',function(){
    assert.equal(cheapest_shop(shops), 'chockers')
  })
  it('it should return the prices and sellers of apples in ascending order', function(){
    assert.deepEqual(pricesOfApples(shops),
[{shop: 'shopwrong', price: 2},
 {shop: 'woolingsworth', price: 4},
 {shop: 'kwakspar', price: 4},
 {shop: 'chockers', price: 5}]
  )
})
  it('it should return prices and sellers of apples in descending order', function(){
    assert.deepEqual(pricesInDescending(shops),
    [{shop: 'chockers', price: 5},
     {shop: 'woolingsworth', price: 4},
     {shop: 'kwakspar', price: 4},
     {shop: 'shopwrong', price: 2}]
  )
  })
  it('it should return the cheapest fruit', function(){
    assert.equal(cheapestFruit(shops), 'bananas')
  })

});

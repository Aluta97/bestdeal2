var assert = require('assert');
var string = require('../string');
var cheapest = require('../cheapest');
var expensive = require('../expensive');
var average = require('../average');
var pricePerAvo = require('../pricePerAvo');


var avos = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50";
var avocados = [ [ '1', '3' ], [ ' 2', '7' ], [ ' 3', '10' ], [ ' 5', '14.50' ] ];
var deals = ['3.00', '3.50', '3.33', '2.90'];

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

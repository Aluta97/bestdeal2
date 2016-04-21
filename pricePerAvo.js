module.exports = function(lists) {

  var pArray = [];
  //Find the price of the Avo in Each deal and push them in the array;
  lists.forEach(function(list) {

    var price = list[1]; //price is index 1 of avos
    var Quantity = list[0];
    var pricePerAvo = price / Quantity;
    pArray.push(pricePerAvo.toFixed(2));

  });
  console.log(pArray)
  return pArray;

}

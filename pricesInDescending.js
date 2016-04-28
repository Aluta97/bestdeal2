module.exports = function(fruit) {
  var pArray = [];
  for (var key in fruit) {
    if (fruit[key].hasOwnProperty("apples")) {
      pArray.push({
        shop: key,
        price: fruit[key].apples
      });
    }
  }
  //  console.log(pArray);
  // sorting my data to be descending by price
  var byApple = pArray.slice(0);
  byApple.sort(function(a, b) {
    return b.price - a.price;
  });
  console.log(byApple);
  return byApple;

}

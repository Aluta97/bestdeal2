module.exports = function(fruit){

  var pArray = [];
  for (var key in fruit) {
    if (fruit[key].hasOwnProperty("apples")) {
      pArray.push({
        shop: key,
        price: fruit[key].apples
      });
    }
  }
// console.log(pArray)
// sorting my data to be ascending by price
  var byApple = pArray.slice(0);
     byApple.sort(function(a,b) {
      return a.price - b.price;
  });
    console.log(byApple);
    return byApple;
}

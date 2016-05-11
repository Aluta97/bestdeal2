module.exports = function(fruit) {
  //  var xArray = [];
  var min = 1000
  var cheapest = "";
  for (var key in fruit) {
    // console.log(fruit[key]);
    for (var key1 in fruit[key]) {
      //console.log(key1)
      var newShop = fruit[key];
      var shopPrice = newShop[key1];
      //  console.log(shopPrice);
      if (shopPrice < min) {
        cheapest = key1;
        //console.log(min)
      }

    }
  }
  console.log(cheapest);
  return cheapest;
}

module.exports = function(lists) {
  //convert my data into a array of objectss
  var pArray = [];
  for (var key in lists) {
    //console.log(key);
  //  console.log(lists[key]);
  //  coṇsole.log(lists[key].hasOwnProperty("oranges"));
    if (lists[key].hasOwnProperty("oranges")) {
      pArray.push({
        shops: key,
        price: lists[key].oranges
      });
    }
  }
  console.log(pArray);
  //finding the price of the chapest oranges ..
  var total = 1000;
  var shopName = "";
  pArray.forEach(function(part) {
    if (part.price < total) {
      total = part.price;
      shopName = part.shops;
    }
  });
//  console.log(total);
  console.log(shopName);
  return shopName;
}

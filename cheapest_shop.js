module.exports = function(lists) {
  var min = [];
  for (var key in lists) {
    //   console.log(key);
    //   console.log(shops[key]);
    //   coṇsole.log(shops[key].hasOwnProperty("bananas"));
    if (lists[key].hasOwnProperty("oranges")) {
      min.push({
        shops: key,
        price: lists[key].oranges
      });
    }
  }
  console.log(min);
  //return min;

var total = 1000;
min.forEach(function(user){
//  console.log(user.price);
   if(user.price < total){
     total = user.price;
   }
});
  console.log(total);
}

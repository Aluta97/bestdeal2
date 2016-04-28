module.exports = function(fruit) {
var xArray = [];
  for (var key in fruit) {
  //  console.log(fruit[key]);
    var newShop = fruit[key];
  //    console.log(newShop);
      xArray.push(newShop);
  }
  console.log(xArray);

  var max = 1000;
xArray.forEach(function(obj){
  if(obj[value] > max){
    max = obj;
  }
  console.log(max);
})

}

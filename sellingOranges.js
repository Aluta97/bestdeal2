module.exports = function(fruit){
  var pArray = [];
  for (var key in fruit) {
    if (fruit[key].hasOwnProperty("oranges")) {
      pArray.push({
        shop: key,
    //    price: fruit[key].oranges
      });
    }
  }

  console.log(pArray);
  return pArray;
}

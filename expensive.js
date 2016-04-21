module.exports = function(lists){
  var total = 0;
  lists.forEach(function(list){
    if(list > total){
      total = list;
    }
  })
  console.log(total);
  return total
}

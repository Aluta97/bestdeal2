module.exports = function(names){
  var max = 1000;
  names.forEach(function(name){
      if(name < max){
        max = name;
      }
  })
  console.log(max);
  return max;
}

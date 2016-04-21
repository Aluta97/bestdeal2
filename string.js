module.exports = function(name){

  var newAvos = name.split(",");


var avocados = [];

newAvos.forEach(function(name) {
  //remove the the "R and for" and push them in the new array
  avocados.push(name.split(" for R"));
});
 console.log(avocados);
 return avocados;

}

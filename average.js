module.exports = function(list) {
  var total = 0;
  for (var i = 0; i < list.length; i++) {
    total += list[i];
  };
  var average = total / list.length;
  var n = average.toFixed(2);
  console.log(n)
  return n;
}

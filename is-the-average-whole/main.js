function isTheAverageWhole(numbersArray){
  var x = null;
  for (var i = 0; i < numbersArray.length; i++){
    x += numbersArray[i];
  } if ((x / numbersArray.length) % 1 !== 0){
    return false
  } else {
    return true
  }
}

function decimalPlaceCounter(stringNumber){
  var result = 0;
  for (var i = 0; i < stringNumber.length; i++){
    if (stringNumber[i] === "."){
      result = stringNumber.length - i - 1;
    }
  }
  return result;
}

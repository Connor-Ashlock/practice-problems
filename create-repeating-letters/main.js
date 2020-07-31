function createRepeatingLetters(word, numOfRepeats){
  var repeatLetter = '';
  for (var i = 0; i < word.length; i++){
    for (var j = 0; j < word.length; j++) {
      repeatLetter += word.charAt(j).repeat(numOfRepeats);
    } return repeatLetter
  }
}

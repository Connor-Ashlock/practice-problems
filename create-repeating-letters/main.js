function createRepeatingLetters(word, numOfRepeats){
  var repeatLetter = '';
  for (var i = 0; i < word.length; i++){
    repeatLetter += word.charAt(i).repeat(numOfRepeats);
  } return repeatLetter
}

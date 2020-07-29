function getWordCount(sentence){
  var total = 1;
  for (var i = 0; i < sentence.length; i++)
    if (sentence[i] === " ") {
      total++;
    }
  return total;
}

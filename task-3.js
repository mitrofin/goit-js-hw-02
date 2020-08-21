function findLongestWord(string = '') {
  let words = string.split(' '); //создал массыв по пробелу
  let maxWord = words[0]; // назначил первое слово самым длинным
  for (const word of words) {
    //перебираем массив
    if (word.length > maxWord.length) {
      //если слово массива больше чем назначенное -
      maxWord = word;
    }
  }
  return maxWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('May the force be with you'));
console.log(findLongestWord('Google do a roll'));

function formatString(string, maxLength = 40) {
  // Write code under this line
  let maxString = string.split(''); //делаем массив

  if (maxString.length > maxLength) {
    // если длиннна строк больше = делаем 40
    maxString.length = maxLength;
    return maxString.join('') + '...'; // выводим строку макс 40 + ...
  } else {
    return maxString.join(''); //выводим строку
  }
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(
  formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
);

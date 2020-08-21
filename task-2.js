//const calculateEngravingPrice = (message = '', pricePerWord = 0) =>
// message.split(' ').length * pricePerWord; // Write code in this line

//тоже самое что
const calculateEngravingPrice = function (message = '', pricePerWord = 0) {
  return (
    message.split(' ').length * pricePerWord //возвращаем строку преобразованную в массив по пробелу
  ); // количество слов множим на цену
};

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120

console.log(calculateEngravingPrice('Uno', 100)); // 100

const getItemsString = function (array) {
  let result = ''; //переменная для результата
  // Write code under this line
  for (let i = 0; i < array.length; i += 1) {
    // перебираем массив. выводим индекс
    result = result + `${i + 1} - ${array[i]}\n `; // выводим массив(начиная с 1) - элемнт массива и новая строка
  }
  return result;
};

console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));

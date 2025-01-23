/*
 Створіть функцію sumBigIntegers, яка приймає два рядки (numStr1 та numStr2), що представляють великі числа.
 Функція повинна перетворити ці рядки на BigInt і повернути їх суму.

 console.log(sumBigIntegers('9007199254740991', '9007199254740991')); // виводить 18014398509481982n
*/

function sumBigIntegers(numStr1, numStr2) {
  return (BigInt(numStr1) + (BigInt(numStr2)));
}

console.log(sumBigIntegers('800732331219254740991', '9007199254740991'));
console.log(sumBigIntegers('54244152507199254740991', '6451151207199254740991'));
console.log(sumBigIntegers('706323421199254740991', '17244121254740991'));
console.log(sumBigIntegers('9007199254740991', '421511156207199254740991'));
console.log(sumBigIntegers('52515007199254740991', '3444141121444325254740991'));
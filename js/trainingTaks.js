/**
 * Массивы основные методы
 */

/**
 * Задача 1 - Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
 */
console.log(camelize('background-color'));
function camelize(str) {
  return str
    .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
    .map(
      // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
      // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
}

/**
 * Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.
  Функция должна возвращать новый массив и не изменять исходный.
 */
console.log(filterRange([1,7,8], 1,7))
function filterRange(arr, a, b) {
  let newArr = arr.filter(item => item >= a && item <= b);
  return newArr;
}

//arr.splice(index[, deleteCount, elem1, ..., elemN])
/**
 * Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
Функция должна изменять принимаемый массив и ничего не возвращать.
 */
function filterRangeInPlace(arr, a, b){
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

/**
 *Сортировка по убыванию
 */
let arr = [5, 2, 1, -10, 8];
console.log(reverseSorted(arr));
function reverseSorted(arr){ 
  return arr.sort((a, b) => b - a);
}

/**
 * У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
Создайте функцию copySorted(arr), которая будет возвращать такую копию.
 */
arr = ["HTML", "JavaScript", "CSS"];
console.log(copySorted(arr));
function copySorted(arr){
  let newArr = arr.sort();
  return newArr;
}

/**
 * 
 */
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

arr = [ vasya, petya, masha ];

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
//средний возраст
function getAverageAge(arr){
  let newArr = arr.map(item => item.age);
  let result = newArr.reduce((sum, current) => sum + current, 0);
  return result/newArr.length
}
//сортировка по возрасту
console.log(sortByAge(arr) );
function sortByAge(arr){
  let newArr = arr.map(item => item.age);
  return arr.sort((a, b) => a.age - b.age )
}

//уникальные
let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings))
function unique(arr) {
  let newArr = []
  for(let i=0; i<arr.length; i++){
    if(!newArr.includes(arr[i])){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}



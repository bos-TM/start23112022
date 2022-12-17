let arrRandomNumbers = [1, 3, 5, 4, 6, 9, 8, 20, 31, 33, 10];

// Task 1
// Створити функцію яка отримує массив і вибирає з нього всі парні числа і розміщує в новому масиві. Функція повина повертати массив з парними номерами.

evenNumberArr(arrRandomNumbers).forEach(elem => console.log(elem));

function evenNumberArr(arrayNumbers) {
  let evenArr = [];
  arrayNumbers.forEach(elem => {
    if (elem % 2 == 0) {
      evenArr.push(elem);
    }
  });
  return evenArr;
}

// Task 2
// Створити цикл який 5 разів виводить prompt  запитує що купити і вводить це в массив. 

let buyItems = [];
for (let i = 0; i < 5; i++) {
  let item = prompt("Що треба купити? ");
  buyItems.push(item);
}
buyItems.forEach(elem => console.log(elem));

// Task 3
// Створити функцію яка отримує як аргумент массив і вираховує середнє значення всіх чисел. ( при розрахунках вважайте що массив може бути будьякої довжини переданий)

averageOfNumbers(arrRandomNumbers);

function averageOfNumbers(arr) {
  let average = 0;
  arr.forEach(elem => {
    average += elem;
  });
  console.log(average / arr.length);
}

// Task 4
// Створити функцію яка замінює в массиві =) на ;)

let smile = [':)', '=)', ':)', '=)', ':)', '=)'];

smiles(smile);
smile.forEach(elem => console.log(elem));

function smiles(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '=)') {
      arr[i] = ';)';
    }
  }
}

// Task 5
// створити функцію яка отримує аргумент, якщо це 'last' то функція створює массив поміщає в нього останній елемент массиву  і видаляє останній елемент  массиву animals, якщо аргумент 'first' то також записує перший елемент массиву до нового массиву і видаляє перший елемент з animals

let animals = ['cat', 'cow', 'fish', 'chicken', 'dog', 'pig'];

animals.forEach(elem => console.log(elem));
console.log('===================')

chooseAnimal(animals, 'last').forEach(elem => console.log(elem));
console.log("-------------------");
animals.forEach(elem => console.log(elem));

console.log('===================')

chooseAnimal(animals, 'first').forEach(elem => console.log(elem));
console.log("-------------------");
animals.forEach(elem => console.log(elem));

function chooseAnimal(arrAnimals, locationAnimal) {
  let newArr = [];
  if (locationAnimal === 'last') {
    newArr.push(animals[animals.length - 1])
    arrAnimals.pop();
  }
  if (locationAnimal === 'first') {
    newArr.push(animals[0])
    arrAnimals.shift();
  }
  return newArr;
}

// Task 6
// Напишіть функцію яка отримує массив і повертає сумму всіх значень массиву

console.log(sumOfArray(arrRandomNumbers));

function sumOfArray(arrNumber) {
  let sum = 0;
  arrNumber.forEach(elem => sum += elem);
  return sum;
}

// Task 7
// Створити функцію яка отримує в аргумент старт значення і фініш значення (старт менше фініша) також отрмує массив задовільної довжини. Функція повина повертати массив в якому вирізанні значення з старт індекса по фініш

console.log(cutArray(0, 5, arrRandomNumbers));

function cutArray(startElem, finishElem, array) {
  if (startElem < finishElem) {
    let cuttedArray = array.slice(startElem, finishElem);
    return cuttedArray;
  }
  console.log("Індекс початкового елементу має бути меншим за кінцевий");
}
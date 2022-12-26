// ###1TASK###
//poorly worded task!!!
//
let userWallet = {
  amountUSA: 122,
  amountEuro: 23421,
  amountUa: 1212120,
};

let bank = [
  { buy: 41.8, sell: 42.4, name: "euro" },
  { buy: 40.45, sell: 40.59, name: "usa" },
  { buy: 1, sell: 1, name: "ua" }
];

function calcBuy() {
  if (userWallet.amountUa === 0) {
    return console.log(`no money left!`);
  } else {
    return console.log(
      `You can buy ${Math.round(userWallet.amountUa / bank[0].buy)} Euro or ${Math.round(
        userWallet.amountUa / bank[1].buy)} Dollars`
    );
  }
}
calcBuy();

function calcSell() {
  let sumGrn = userWallet.amountEuro * bank[0].sell + userWallet.amountUSA * bank[1].sell;
  return console.log(
    `If you sell your dollars and euro into grn, you can get ${Math.round(
      sumGrn
    )} Grn`
  );
}
calcSell();

// ###2TASK###

function move(where, steps) {
  return console.log(`The user has moved ${steps} steps ${where}`);
}

function moveUser(where, move, steps) {
  move(where, steps);
};

moveUser("north", move, 10)

// ###3TASK###

let arr = ["Keep", "Remove", "Keep", "Remove", "Keep", "Remove"];

function keep(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return console.log(`ERROR`);
  }

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      newArr.push(arr[i]);
    }
  }

  return console.log(newArr);
}
keep(arr);

// ###TASK4###

let figurs = [
  {
    figure: "Square",
    sizeA: 4,
    sizeB: 4,
  },
  {
    figure: "Rectangle",
    sizeA: 4,
    sizeB: 8,
  },
];

function areaCalc() {
  figurs.forEach(element => {
    console.log(`Area of the ${element.figure} is ${element.sizeA * element.sizeB}`);
  });
}

areaCalc();

// ###TASK5###

let num = [2, 3, 5, 4, 8, 7, 9, 10];
let updatedNum = [];

for (let i = 0; num.length > i; i++) {
  if (num[i] % 2 === 0) {
    let timesFour = num[i] * 4;
    updatedNum.push(timesFour);
  } else {
    updatedNum.push(num[i]);
  }
}

console.log(updatedNum);

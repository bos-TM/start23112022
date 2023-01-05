// #Task1

function method2(...number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum = number[i] + sum;
  }
  return console.log(sum);
}

method2(4, 3, 4);

// #Task2

function happyBithday(day, month, year) {
  let today = new Date();

  let age = today.getFullYear() - (year + 1);

  if ((month > (today.getMonth() + 1)) ||
    ((month === (today.getMonth() + 1)) && (day >= (today.getDay() + 1)))) {
    age++;
  }

  if ((day === (today.getDay() + 1)) && (month === (today.getMonth() + 1))) {
    let happyBithdayMessage = " !!!Happy Bithday!!!";

    return console.log(age + happyBithdayMessage);
  }

  return console.log(age);
}

happyBithday(4, 1, 2007);

// #Task3

function sendBithdaymessage() {
  return " !!!Happy Bithday!!!";
}

function happyBithdayWithCallback(day, month, year, birthdayMessageFn) {
  let today = new Date();

  let age = today.getFullYear() - (year + 1);

  if ((month > (today.getMonth() + 1)) ||
    ((month === (today.getMonth() + 1)) && (day >= (today.getDay() + 1)))) {
    age++;
  }

  if ((day === (today.getDay() + 1)) && (month === (today.getMonth() + 1))) {
    return console.log(age + birthdayMessageFn());
  }

  return console.log(age);
}

happyBithdayWithCallback(4, 1, 2007, sendBithdaymessage);


// #Task4

const ageCalc = (year) => {
  let century = parseInt(year / 100);
  if (year % 100 > 0) century++;

  return console.log(century + " століття");
};

ageCalc(2023);


// #Task5

function month() {
  let today = new Date();
  let nowMonthDay = 28;
  let nextMonthDay = 28;

  if ((today.getMonth() + 1) === 1) {
    nowMonthDay += 3;
    if (today.getFullYear() % 4 === 0) {
      nextMonthDay++
    };
  } else if ((today.getMonth() + 1) === 2) {
    nextMonthDay += 3;
    if (today.getFullYear() % 4 === 0) {
      nowMonthDay++;
    }
  } else if (((today.getMonth() + 1) === 7) || ((today.getMonth() + 1) === 12)) {
    nowMonthDay += 3;
    nextMonthDay += 3;
  }
  else if ((today.getMonth() + 1) === 12) {
    nowMonthDay += 3;
    nextMonthDay += 3;
  } else if ((((today.getMonth() + 1) > 2) && (today.getMonth() + 1) < 7) && ((today.getMonth() + 1) % 2 === 0) || (((today.getMonth() + 1) > 8) && ((today.getMonth() + 1) % 2 != 0))) {
    nowMonthDay += 2;
    nextMonthDay += 3;
  } else {
    nowMonthDay += 3;
    nextMonthDay += 2;
  }

  return console.log(`В цьому місяці ${nowMonthDay} днів, в наступному ${nextMonthDay}`)
}

month();
// // #TASK 1-2

function User(name, surname, age, id) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.id = id;
}

User.prototype.info = function () {
  return `The name is ${this.name} and surname ${this.surname}.The age is ${this.age} and id ${this.id}.`;
};

User.prototype.changes = function (name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;
};

let user1 = new User("Baby", "Ibrahumovich", 22, 5);

user1.changes("sdsa", "dddd", 33);

// // TASK 3

function Quadrangle(a, b, quadrangle) {
  this.a = a;
  this.b = b;
  if (a === b) {
    this.quadrangle = "square";
  } else {
    this.quadrangle = "rechtangle";
  }
}

Quadrangle.prototype.area = function () {
  return this.a * this.b;
};

Quadrangle.prototype.perimeter = function () {
  return 2 * (this.a + this.b);
};

Quadrangle.prototype.diagonal = function () {
  return Math.sqrt(this.a ** 2 + this.b ** 2);
};

let square = new Quadrangle(4, 4);

console.log(square.diagonal());

// #Task 4

function UpperLetters(name) {
  const firstLetter = name.slice(0, 1);
  const lastLetter = name.slice(name.length - 1, name.length);
  const LettersUpper = (firstLetter + lastLetter).toUpperCase();
  return console.log(LettersUpper);
}

UpperLetters("max");

// #Task 5

function Str(text) {
  let newText = text.trim();
  if (newText.length > 10) {
    let spliceText = newText.slice(0, 10);
    newText = spliceText + "...";
  }
  console.log(newText);
}

Str("Oleksandr Berezhnyi");

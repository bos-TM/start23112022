const firstValue = prompt("Write a number: ");
const secondValue = prompt("Write a second number: ");

console.log(Number(firstValue) + Number(secondValue));
console.log(Number(firstValue) - Number(secondValue));
console.log(Number(firstValue) / Number(secondValue));
console.log(Number(firstValue) * Number(secondValue));

const firstVar = prompt("Write a first your name: ");
const secondVar = prompt("Write a last your name: ");

document.write("User name: " + firstVar + "<br>" + "Lastname:  " + secondVar);

const info = prompt("Enter 'uk' or 'ru': ");

if ("uk" === info) {
  console.log(true);
} else if ("ru" === info) {
  console.log(false);
}

if (firstValue > 20 && secondValue > 30) {
  console.log(true);
} else {
  console.log(false);
}

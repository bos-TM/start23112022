let firstNumber = parseFloat(prompt("Введіть перше число", 0));
let operator = prompt("Введіть один з опереторів ( +, *, /, - ): ");
let secondNumber = parseFloat(prompt("Введіть друге число", 0));

if (secondNumber == 0) {
  alert("!!!Ділити на нуль не можна!!!");
}
else if (operator == '+') {
  alert(firstNumber + secondNumber);
}
else if (operator == '*') {
  alert(firstNumber * secondNumber);
}
else if (operator == '/') {
  alert(firstNumber / secondNumber);
}
else if (operator == '-') {
  alert(firstNumber - secondNumber);
}
else {
  alert("!!!Ви ввели некоректне значення!!!");
}
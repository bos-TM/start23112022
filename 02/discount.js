let number = parseFloat(prompt("Введіть число"));
if (number > 0) {
  if (number > 10000) {
    alert("Ваша знижка: " + (number * 0.07));
  }
  else if (number > 3000) {
    alert("Ваша знижка: " + (number * 0.05));
  }
  else if (number > 100) {
    alert("Ваша знижка: " + (number * 0.03));
  } else {
    alert("У вас немає знижки");
  }
} else {
  alert("!!!Має бути число і більше нуля!!!");
}

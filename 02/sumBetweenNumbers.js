let a = parseFloat(prompt("Введіть число A:", 0));
let b = parseFloat(prompt("Введіть останнє число В:", 0));
let sum = 0;

if (a < b) {
  for (let i = a + 1; i < b; i++) {
    sum += i;
  }
  alert("Cума чисел між А і В дорівнює " + sum);
} else {
  alert("Число А має бути меншим за В");
}


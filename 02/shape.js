let long = Number(prompt("Введіть довжину фігури", 0));
let width = Number(prompt("Введіть ширину фігури", 0));
let stars = "";

for (i = 0; i <= width; i++) {
  stars += "*";
}

for (let i = 0; i <= long; i++) {
  console.log(stars);
}
let login = prompt("Введіть логін");
let password = prompt("Введіть пароль");

if (login === "admin" && password === "12345") {
  alert("Вітаємо в системі")
} else {
  alert("Пароль чи логін не вірні")
}
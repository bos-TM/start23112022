let planet = prompt("Введіть назву планети: ").toLowerCase();

switch (planet) {
  case "уран":
  case "нептун":
  case "земля":
  case "венера":
  case "марс":
  case "меркурій":
  case "місяць":
  case "плутон":
  case "хаумеа":
    alert("Ця планета в сонячній системі")
    break;

  default:
    alert("Такої планети нема в сонячній системі")
    break;
}
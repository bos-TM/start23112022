let pet = prompt("Введіть назву домашньої тварни:").toLowerCase();
switch (pet) {
  case "корова":
    alert("му-му");
    break;

  case "кіт":
    alert("мяу-мяу");
    break;

  case "собака":
    alert("гав-гав");
    break;

  case "свиня":
    alert("хрю-хрю");
    break;

  case "коза":
    alert("ме-е-е-е-е");
    break;

  case "баран":
    alert("бе-е-е-е-е");
    break;

  case "півень":
    alert("ку-ка-рє-ку");
    break;

  case "курка":
    alert("ко-ко-ко");
    break;

  case "гуска":
    alert("га-га-га");
    break;

  case "качка":
    alert("кря-кря-кря");
    break;

  default:
    alert("!!!Введіть правильну назву або іншу домашню тварину!!!");
    break;
}
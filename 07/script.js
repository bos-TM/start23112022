//# Task1

document.querySelector("header").textContent = "this is header";
document.querySelector("footer").textContent = "this is footer";
document.querySelector("nav").textContent = "this is nav";
const ul = document.querySelectorAll("ul li");
for (let i = 0; i <= ul.length - 1; i++) {
  ul[i].textContent = "These are lists";
}

// #Task2

let parentElement = document.querySelector("li");
console.log(parentElement.parentNode);

// #Task3-5

class filmClass {
  constructor(yearOfRelease, genre, title, numberOfViews) {
    this.yearOfRelease = yearOfRelease;
    this.genre = genre;
    this.title = title;
    this.numberOfViews = numberOfViews;
  }

  raiting() {
    let today = new Date();
    return console.log(
      this.numberOfViews / (today.getFullYear() - this.yearOfRelease)
    );
  }
}

let arr = [
  new filmClass(2007, "Comedy", "The old road", 1000000),
  new filmClass(2001, "Drama", "Alone", 15231311),
  new filmClass(2222, "Drama", "Alone", 15231311),
];

let [film1, film2, film3] = arr;
console.log(film2.yearOfRelease);
arr.sort(function (a, b) {
  return a.yearOfRelease - b.yearOfRelease;
});

console.log(arr);
window.onload = () => {
  class imgValue {
    constructor(imgPath, alt, href) {
      this.imgPath = imgPath;
      this.alt = alt;
      this.href = href;
    }
  }
  let arr = [];
  arr.push(
    new imgValue(
      "./img/exploration-1640718.png",
      "earth exploration",
      "https://www.freeimages.com/photo/exploration-1640718"
    ),
    new imgValue(
      "./img/earth-lightning-1152640.jpg",
      "globus",
      "https://www.freeimages.com/photo/earth-lightning-1152640"
    ),
    new imgValue(
      "./img/mschheeat8-1640353.png",
      "urban",
      "https://www.freeimages.com/photo/mschheeat8-1640353"
    )
  );

  for (let i = 0; i < arr.length; i++) {
    let body = document.querySelector("body");
    let a = document.createElement("a");
    let img = document.createElement("img");
    body.appendChild(a);
    a.appendChild(img);
    img.src = arr[i].imgPath;
    img.alt = arr[i].alt;
    a.href = arr[i].href;
  }

  console.log(arr);
};

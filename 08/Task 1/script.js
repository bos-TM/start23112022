window.onload = () => {
  function mixed(content) {
    let divParent = document.querySelector(".list-bg");
    let lastItem = divParent.lastElementChild;
    let div = document.createElement("div");
    divParent.removeChild(lastItem);
    div.innerHTML = content;
    divParent.insertBefore(div, divParent.firstElementChild);
  }
  mixed("hello");
  mixed(`sdf`);
  mixed("sviatoslav");
  mixed("Sasha");
  mixed("hello");
};

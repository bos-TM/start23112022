window.onload = () => {
  let body = document.querySelector("body");
  let table = document.createElement("table");
  body.appendChild(table);
  for (let i = 0; i < 3; i++) {
    let row = table.insertRow();
    row.id = `tr${i}`;
    table.appendChild(row);
  }
  for (let i = 0; i < 3; i++) {
    let th = document.createElement("th");
    th.id = `th${i}`;
    tr0.appendChild(th);
  }
  for (let i = 0; i < 3; i++) {
    let td = document.createElement("td");
    td.id = `firstTd${i}`;
    tr1.appendChild(td);
  }
  for (let i = 0; i < 3; i++) {
    let td = document.createElement("td");
    td.id = `secondTd${i}`;
    tr2.appendChild(td);
  }
  th0.textContent = `імя`;
  th1.textContent = `місто`;
  th2.textContent = `курс`;
  firstTd0.textContent = `Олександр`;
  firstTd1.textContent = "Івано-франківськ";
  firstTd2.textContent = "1-Курс";
  secondTd0.textContent = `Макс`;
  secondTd1.textContent = "Київ";
  secondTd2.textContent = "3-Курс";
};

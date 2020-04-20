// function makeGridArray() {

// }

// function percentageOfSpace() {

// }

// const btn = document.querySelector

function toggleActive(element) {
  element.target.classList.toggle("active-grid-div");
}

const gridContainer = document.querySelector("#grid-container");
const gridDivs = Array(16)
  .join(0)
  .split(0)
  .map(() => document.createElement("div"));

// gridContainer.style["grid-template-rows"] = ``;
// gridContainer.style["grid-template-rows"] = ``;

for (var i = 0; i < gridDivs.length; i++) {
  gridDivs[i].addEventListener("click", toggleActive);

  gridDivs[i].setAttribute("class", "grid-div");

  gridContainer.appendChild(gridDivs[i]);
}

// .setAttribute("class", "grid-div")

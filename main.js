function resize(num) {
  const gridContainer = document.querySelector("#grid-container");
  var oldDivs = document.querySelectorAll(".grid-div");
  for (var i = 0; i < oldDivs.length; i++) {
    gridContainer.removeChild(oldDivs[i]);
  }

  var gridDivs = Array(num * num)
    .join(0)
    .split(0)
    .map(() => document.createElement("div"));

  gridContainer.style["grid-template-columns"] = `repeat(${num}, 1fr)`;
  gridContainer.style["grid-template-rows"] = `repeat(${num}, 1fr)`;

  gridContainer.addEventListener("mouseleave", () => {
    drawing = false;
  });

  for (var i = 0; i < gridDivs.length; i++) {
    gridDivs[i].addEventListener("mousedown", function (e) {
      drawing = true;
      e.target.classList.add("active-grid-div");
    });
    document.addEventListener("mouseup", function (e) {
      drawing = false;
      e.target.classList.add("active-grid-div");
    });
    gridDivs[i].addEventListener("mouseover", function (e) {
      if (drawing == true) {
        e.target.classList.add("active-grid-div");
      }
    });
    gridDivs[i].setAttribute("class", "grid-div");
    gridContainer.appendChild(gridDivs[i]);
  }
}
function reset() {
  var gridDivs = document.querySelectorAll(".grid-div");
  for (i = 0; i < gridDivs.length; i++) {
    gridDivs[i].classList.remove("active-grid-div");
  }
}

var drawing = false;

const resizeBtn = document.querySelector("#resize"),
  resetBtn = document.querySelector("#reset");

resizeBtn.addEventListener("click", () => {
  var validInput = false;

  while (validInput == false) {
    var resizeInt = Number(
      prompt(
        "Please enter an integer value between 10 and 100 \nfor the number of pixels you want per side of canvas"
      )
    );
    if (typeof resizeInt != "number") {
      validInput = false;
    } else if (resizeInt < 10 || resizeInt > 100) {
      validInput = false;
    } else {
      validInput = true;
      resize(Math.floor(resizeInt));
    }
  }
});
resetBtn.addEventListener("click", reset);

resize(16);

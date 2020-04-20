function toggleActive(element) {
  element.target.classList.toggle("active-grid-div");
}

// CREATING GRID

// Default Grid

const gridContainer = document.querySelector("#grid-container");
const gridDivs = Array(16 * 16)
  .join(0)
  .split(0)
  .map(() => document.createElement("div"));

gridContainer.style["grid-template-columns"] = "repeat(16, 1fr)";
gridContainer.style["grid-template-rows"] = "repeat(16, 1fr)";

for (var i = 0; i < gridDivs.length; i++) {
  gridDivs[i].addEventListener("click", toggleActive);

  gridDivs[i].setAttribute("class", "grid-div");

  gridContainer.appendChild(gridDivs[i]);
}

//FUNCTIONALITY OF GRID

// Resize Button

const resizeBtn = document.querySelector("#resize");
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

// Reset Button

const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", reset);

// Resize Function

function resize(num) {
  alert("valid input " + num);
}

// Reset Function

function reset() {}

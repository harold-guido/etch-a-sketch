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
      if (normal == true) {
        drawing = true;
        e.target.style.backgroundColor = `rgb(0, 0, 0)`;
      } else if (random == true) {
        drawing = true;
        e.target.style.backgroundColor = `rgb(${
          Math.floor(Math.random() * 255) + 1
        }, ${Math.floor(Math.random() * 255) + 1}, ${
          Math.floor(Math.random() * 255) + 1
        })`;
      } else if (shades == true) {
        drawing = true;
        var rgb = "";
        if (e.target.style.backgroundColor == false) {
          var rgb = "rgb(255, 255, 255)";
        } else {
          rgb = e.target.style.backgroundColor;
        }
        var currentRbg =
          rgb.length == 18
            ? Number(rgb.substring(4, 7))
            : rgb.length == 15
            ? Number(rgb.substring(4, 6))
            : 0;
        e.target.style.backgroundColor = `rgb(${
          currentRbg > 1 ? currentRbg - 25 : currentRbg
        },${currentRbg > 1 ? currentRbg - 25 : currentRbg},${
          currentRbg > 1 ? currentRbg - 25 : currentRbg
        })`;
        console.log(e.target.style.backgroundColor);
      }
    });

    document.addEventListener("mouseup", function (e) {
      drawing = false;
    });
    gridDivs[i].addEventListener("mouseover", function (e) {
      if (drawing == true && normal == true) {
        e.target.style.backgroundColor = `rgb(00, 00, 00)`;
      } else if (drawing == true && random == true) {
        e.target.style.backgroundColor = `rgb(${
          Math.floor(Math.random() * 255) + 1
        }, ${Math.floor(Math.random() * 255) + 1}, ${
          Math.floor(Math.random() * 255) + 1
        })`;
      } else if (drawing == true && shades == true) {
        if (e.target.style.backgroundColor == false) {
          var rgb = "rgb(255, 255, 255)";
        } else {
          rgb = e.target.style.backgroundColor;
        }
        var currentRbg =
          rgb.length == 18
            ? Number(rgb.substring(4, 7))
            : rgb.length == 15
            ? Number(rgb.substring(4, 6))
            : 0;
        e.target.style.backgroundColor = `rgb(${
          currentRbg > 1 ? currentRbg - 25 : currentRbg
        },${currentRbg > 1 ? currentRbg - 25 : currentRbg},${
          currentRbg > 1 ? currentRbg - 25 : currentRbg
        })`;
      }
    });
    gridDivs[i].setAttribute("class", "grid-div");
    gridContainer.appendChild(gridDivs[i]);
  }
}
function reset() {
  var gridDivs = document.querySelectorAll(".grid-div");
  for (i = 0; i < gridDivs.length; i++) {
    gridDivs[i].style.backgroundColor = "";
  }
}

var drawing = false,
  normal = true,
  random = false,
  shades = false;

const resizeBtn = document.querySelector("#resize");
const normalBtn = document.querySelector("#normal");
const randomBtn = document.querySelector("#random");
const shadesBtn = document.querySelector("#shades");
const resetBtn = document.querySelector("#reset");

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
normalBtn.addEventListener("click", () => {
  normal = true;
  random = false;
  shades = false;
});
randomBtn.addEventListener("click", () => {
  random = true;
  normal = false;
  shades = false;
});
shadesBtn.addEventListener("click", () => {
  shades = true;
  normal = false;
  random = false;
});
resetBtn.addEventListener("click", reset);

resize(16);

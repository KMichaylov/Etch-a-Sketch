let grid = document.getElementById("grid-container");
let inputFromUser = 25;
let color = "black";
let randomIsClicked = false;

function deleteAllChildren() {
  grid.innerHTML = "";
}


function drawGrid(inputFromUser) {
  const CANVAS_SIZE = 500;
  const CELL_SIZE = 500 / inputFromUser;
  const CELL_SIZEINPX = new String(CELL_SIZE + "px");
  deleteAllChildren();
  for (let i = 0; i < inputFromUser; i++) {
    let squareOnColumn = grid.appendChild(document.createElement("div"));
    squareOnColumn.className = "column";
    squareOnColumn.style.width = CELL_SIZEINPX;
    squareOnColumn.style.height = CELL_SIZEINPX;
    for (let j = 0; j < inputFromUser; j++) {
      let squareOnRow = grid.appendChild(document.createElement("div"));
      squareOnRow.className = "row";
      squareOnRow.style.width = CELL_SIZEINPX;
      squareOnRow.style.height = CELL_SIZEINPX;
      squareOnColumn.appendChild(squareOnRow);
    }
    grid.appendChild(squareOnColumn);
  }
}

let clearBtn = document.getElementById("clear");
let colorBtn = document.getElementById("color");
let sizeOfGrid = document.getElementById("size");
let random = document.getElementById("random");

sizeOfGrid.addEventListener("mouseup", (e) => {
  inputFromUser = e.target.value;
  drawGrid(inputFromUser);
  console.log(inputFromUser);
});

clearBtn.addEventListener("click", () => {
  for (let i = 0; i < inputFromUser; i++) {
    let square = grid.querySelectorAll("div.column")[i];
    for (let j = 0; j < inputFromUser; j++) {
      let element = square.querySelectorAll("div")[j];
      element.style.backgroundColor = "white";
    }
  }
});

colorBtn.addEventListener("input", () => {
  randomIsClicked = false;
  color = document.getElementById("color").value;
});

random.addEventListener("click", () => {
  randomIsClicked = true;
});

grid.addEventListener("mouseover", (e) => {
  if (randomIsClicked) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = "rgb(" + [r, g, b].join(",") + ")";
  } else {
    e.target.style.backgroundColor = color;
  }
});

function main() {
  drawGrid(inputFromUser);
}

main();

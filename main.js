let grid = document.getElementById("grid-container");
let inputFromUser = 25;
const CANVAS_SIZE = 500;
const CELL_SIZE = 500 / inputFromUser;
const CELL_SIZEINPX = new String(CELL_SIZE + "px");

// Draw the grid and place them in grid
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

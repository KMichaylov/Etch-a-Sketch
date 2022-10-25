let grid = document.getElementById('grid-container');
let inputFromUser = 2
// Draw the grid and place them in grid
for(let i = 0; i < inputFromUser; i++) {
    for (let j = 0; j < inputFromUser; j++) {
        let square = grid.appendChild(document.createElement('div'));
        square.style.border = 'medium solid #0000FF';
        square.style.display = 'flex';
        square.style.flexDirection = 'row'      
    }
}


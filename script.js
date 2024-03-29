// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    let tr = document.createElement("tr");
    for(let i=0; i<numCols; i++) {
        let td = document.createElement("td");
        td.onclick = function() {
            this.style.backgroundColor = colorSelected;
        }
        tr.appendChild(td);
    }
    document.getElementById("grid").appendChild(tr);
    numRows++;
}

// Add a column
function addC() {
    let grid = document.getElementById("grid");
    let trAll = grid.querySelectorAll("tr");
    for(let i=0; i<numRows; i++) {
        let td = document.createElement("td");
        td.onclick = function() {
            this.style.backgroundColor = colorSelected;
        }
        trAll[i].appendChild(td);
    }
    numCols++;
}

// Remove a row
function removeR() {
    let grid = document.getElementById("grid");
    grid.removeChild(grid.lastElementChild);
    numRows--;  
}

// Remove a column
function removeC() {
    let grid = document.getElementById("grid");
    let trAll = grid.querySelectorAll("tr");
    for(let i=0; i<numRows; i++) {
        trAll[i].removeChild(trAll[i].lastElementChild);
    }
    numCols--;
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    let grid = document.getElementById("grid");
    let trAll = grid.querySelectorAll("tr");
    for(let i=0; i<numRows; i++) {
        let tdAll = trAll[i].querySelectorAll("td");
        for(let j=0; j<numCols; j++) {
            if(!(tdAll[j].style.backgroundColor)){
                tdAll[j].style.backgroundColor = colorSelected;
            }
        }
    }

}

// Fill all cells
function fillAll(){
    let grid = document.getElementById("grid");
    let trAll = grid.querySelectorAll("tr");
    for(let i=0; i<numRows; i++) {
        let tdAll = trAll[i].querySelectorAll("td");
        for(let j=0; j<numCols; j++) {
            tdAll[j].style.backgroundColor = colorSelected;
        }
    }
}

// Clear all cells
function clearAll(){
    let trAll = grid.querySelectorAll("tr");
    for(let i=0; i<numRows; i++) {
        let tdAll = trAll[i].querySelectorAll("td");
        for(let j=0; j<numCols; j++) {
            tdAll[j].style.backgroundColor = "";
        }
    }
}
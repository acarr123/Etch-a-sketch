function makeGrid (number){
    const gridContainer = document.querySelector(".container");
    gridContainer.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    for (let i = 1; i <= number*number; i++) {
        let div = document.createElement("div");
        div.classList.add("grd")
        gridContainer.appendChild(div);
    }}; 

function changeColor(event){
    event.target.style.backgroundColor = "black";
};

function clearGrid(){
    let gridBoxList = document.querySelectorAll(".grd");
    gridBoxList.forEach(gridBox => {gridBox.style.backgroundColor = 'aqua'});
}
function resetGrid(){
   let num=prompt('Enter grid box size less than or equal to 100. ex: 16 will be 16x16:');
   if (num == undefined || num=== null || num==="" || num <= 0) return;
   while (num > 100 || num <=0) num=prompt('Enter number less than 100:');
   const gridContainer = document.querySelector(".container");
   while (gridContainer.hasChildNodes()) {
    gridContainer.removeChild(gridContainer.firstChild)};
    makeGrid(num);
    let gridBoxList = document.querySelectorAll(".grd");
    gridBoxList.forEach(gridBox => {gridBox.addEventListener("mouseover", changeColor)});
}

let gridNumber = 50;
    makeGrid(gridNumber);
    let gridBoxList = document.querySelectorAll(".grd");
    gridBoxList.forEach(gridBox => {gridBox.addEventListener("mouseover", changeColor)});

const clearButton= document.getElementById('clear');
clearButton.addEventListener('click', clearGrid);
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click',resetGrid)
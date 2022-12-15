//code that creates and appends divs(grids) to the container
const container = document.querySelector('.container');
let x = 0;

function createGrid(x){

    const sideLength = 500.0/x;
    const numberOfGrids = x*x;
    for(let i = 1; i<=numberOfGrids; i++){
        const div = document.createElement('div');
        div.style.width = `${sideLength}px`;
        div.style.height = `${sideLength}px`;
        div.classList.add('grid');
        container.appendChild(div);
    }
}
createGrid(16);

//button code below to set resolution
const btn = document.querySelector('.btn');
btn.addEventListener('click',promptGrid);

function promptGrid(e){
    let x = prompt('Enter the grid length you want.');
    if(x>100){
        alert("This number cannot be larger than 100.");
        return;
    }
    const divs = document.querySelectorAll('.grid');
    divs.forEach(div => {
        div.remove();
    })
    createGrid(x);
    enableChangingColors();
}

//below is the code that changes colors
enableChangingColors();

function enableChangingColors(){
    const divs = document.querySelectorAll('.grid');
    divs.forEach(div => div.addEventListener('mouseenter',changeColor));
    console.log(divs);
}
function changeColor(e){
    this.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
}
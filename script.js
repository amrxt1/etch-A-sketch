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
    x = prompt('Enter the grid length you want.');
    if(x>100){
        alert("This number cannot be larger than 100.");
        return;
    }
    const divs = document.querySelectorAll('.grid');
    divs.forEach(div => {
        div.remove();
    })
    createGrid(x);
    enableChangingColors('black');
}

//below is the code that changes colors
enableChangingColors('black');

function enableChangingColors(string){
    const divs = document.querySelectorAll('.grid');
    if(string === 'black'){    
        divs.forEach(div => div.addEventListener('mouseenter',changeColorBlack));
    }
    else{
        divs.forEach(div => div.addEventListener('mouseenter',changeColor));
    }
}
function changeColor(e){
    this.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
}
function changeColorBlack(e){
    this.style.backgroundColor = "#000000";
}

//code for magic colors button
const mgBtn = document.querySelector('.magic');
mgBtn.addEventListener('click',enableChangingColors);

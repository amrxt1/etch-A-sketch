//code that creates and appends divs(grids) to the container
const container = document.querySelector('.container');
let x = 16;

function createGrid(x){
    const divs = document.querySelectorAll('.grid');
    divs.forEach(div => {
        div.remove();
    })
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
createGrid(x);
enableBlack();
//button code below to set resolution
const btn = document.querySelector('.btn');
btn.addEventListener('click',promptGrid);

function promptGrid(e){
    x = prompt('Enter the grid length you want.');
    if(x>100){
        alert("This number cannot be larger than 100.");
        return;
    }
    createGrid(x);
    enableBlack();
}

//code for reset button
const reset = document.querySelector('.reset');
reset.addEventListener('click',l);
function l(){
    const divs = document.querySelectorAll('.grid');
    divs.forEach(div => {
        div.style.backgroundColor = 'beige';
    })
}

//code for black button
const black = document.querySelector('.black');
black.addEventListener('click',enableBlack);

function enableBlack(){
    const divs = document.querySelectorAll('.grid');
    divs.forEach(div => div.addEventListener('mouseenter',()=>{
        div.style.backgroundColor = 'black';
    }));
}

//code for magic button
const magic = document.querySelector('.magic');
magic.addEventListener('click',enableMagic);

function enableMagic(){
    const divs = document.querySelectorAll('.grid');
    divs.forEach(div => div.addEventListener('mouseenter',()=>{
        div.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
    }));
}
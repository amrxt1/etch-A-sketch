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
//below is the code that changes colors
const divs = document.querySelectorAll('.grid');
divs.forEach(div => div.addEventListener('mouseenter',changeColor));
console.log(divs);

function changeColor(e){
    this.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
}
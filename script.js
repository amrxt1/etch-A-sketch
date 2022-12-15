

const container = document.querySelector('.container');

for(let i = 0; i<=255; i++){
    const div = document.createElement('div');
    div.style.margin = 0;
    div.style.padding = 0;
    //div.style.border = '0.5px solid black';
    div.classList.add('grid');
    container.appendChild(div);
}

const divs = document.querySelectorAll('.grid');
divs.forEach(div => div.addEventListener('mouseenter',changeColor));
console.log(divs);

function changeColor(e){
    this.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
}
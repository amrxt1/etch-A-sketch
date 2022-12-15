

const container = document.querySelector('.container');

for(let i = 0; i<=255; i++){
    const div = document.createElement('div');
    div.style.margin = 0;
    div.style.padding = 0;
    //div.style.border = '0.5px solid black';
    div.classList.add('grid');
    div.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
    container.appendChild(div);
}

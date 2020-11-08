//  A simple color picker from a default array with a color palatte

const colors = ['green', 'red', 'blue', 'yellow', 'violet', 'orange'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', getRandomColor);

function getRandomColor() {
    const randomNum = Math.round(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomNum];
    color.textContent = colors[randomNum];
}
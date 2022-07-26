const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;

const colors = [
    "#16a085",
    "#27ae60",
    "#2980b9",
    "#8e44ad",
    "#2c3e50",
    "#f39c12",
    "#d35400",
    "#c0392b",
    "#bdc3c7",
    "#7f8c8d",
]

let lastClickX;
let lastClickY;

function onClick(event){
    ctx.beginPath();
    lastClickX = event.offsetX
    lastClickY = event.offsetY
    ctx.moveTo(lastClickX,lastClickY);
    console.log(lastClickX,lastClickY);
}
canvas.addEventListener("click", onClick);

function onMousemove(event){
    const color = colors[Math.floor(Math.random()*colors.length)]
    ctx.strokeStyle = color;
    ctx.moveTo(lastClickX,lastClickY);
    ctx.lineTo(event.offsetX, event.offsetY);
    console.log(event.offsetX,event.offsetY);
    ctx.stroke();
}
canvas.addEventListener("mousemove", onMousemove);


const canvas = document.getElementById("sketch");
console.log(canvas);
// const width = canvas.offsetWidth;
// const height = canvas.offsetHeight;
const width = 300;
const height = 150;
console.log(width);
console.log(height);
const ctx = canvas.getContext('2d');
let x = 0;
let y = 0;
const degree = 5;

function up() {
    if (y > 0)
        y -= degree;
    ctx.lineTo(x, y);
    ctx.stroke();
}
function right() {
    if (x < width-1)
        x += degree;
    ctx.lineTo(x, y);
    ctx.stroke();
}
function left() {
    if (x > 0)
        x -= degree;
    ctx.lineTo(x, y);
    ctx.stroke();
}
function down() {
    if (y < height-1)
        y += degree;
    ctx.lineTo(x, y);
    ctx.stroke();
}
function clear() {
    ctx.clearRect(0, 0, width, height);
    ctx.closePath();
    ctx.beginPath();
}
function reset() {
    x = 0;
    y = 0;
    ctx.moveTo(x, y);
}

ctx.beginPath();
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 1;
ctx.moveTo(x, y);
// ctx.strokeStyle = "green";
// ctx.fillStyle = "blue";
// ctx.fillRect(0, 0, width, height);

document.querySelector("#up").addEventListener("click",
    () => {
        console.log("Clicked up");
        up();
    }
);
document.querySelector("#down").addEventListener("click",
    () => {
        console.log("Clicked down")
        down();
    }
);
document.querySelector("#left").addEventListener("click",
    () => {
        console.log("Clicked left");
        left();
    }
);
document.querySelector("#right").addEventListener("click",
    () => {
        console.log("Clicked right");
        right();
    }
);
// document.querySelector("#tab").onkeydown =
//     (event) => {
//         if (event.key === "a" || event.keyCode === 37) {
//             console.log("LEFT");
//             left();
//         }//LEFT
//         else if (event.key === "w" || event.keyCode === 38) {
//             console.log("UP");
//             up();
//         }//UP
//         else if (event.key === "d" || event.keyCode === 39) {
//             console.log("RIGHT");
//             right();
//         }//RIGHT
//         else if (event.key === "s" || event.keyCode === 40) {
//             console.log("DOWN");
//             down();
//         }//DOWN
//     };
document.onkeydown =
    (event) => {
        if (event.key === "a" || event.keyCode === 37) {
            console.log("LEFT");
            left();
        }//LEFT
        else if (event.key === "w" || event.keyCode === 38) {
            console.log("UP");
            up();
        }//UP
        else if (event.key === "d" || event.keyCode === 39) {
            console.log("RIGHT");
            right();
        }//RIGHT
        else if (event.key === "s" || event.keyCode === 40) {
            console.log("DOWN");
            down();
        }//DOWN
        else if (event.key === "c") {
            console.log("CLEAR");
            clear();
        }//CLEAR
        else if (event.key === "r") {
            console.log("RESET");
            reset();
        }//RESET
    };
document.querySelector("#clear").addEventListener("click",
    () => {
        console.log("Cleared path");
        clear();
    }
);
document.querySelector("#reset").addEventListener("click",
    () => {
        console.log("Reset position to 0,0");
        reset();
    }
);
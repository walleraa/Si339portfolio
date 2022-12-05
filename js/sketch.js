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
let line = "black";
let ground = "white";

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
    ctx.fillStyle = ground;
    ctx.fillRect(0, 0, width, height);
    ctx.closePath();
    ctx.strokeStyle = line;
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
ctx.strokeStyle = line;
ctx.fillStyle = ground;
ctx.fillRect(0, 0, width, height);

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
        // console.log(event.key);
        if (event.key === "a" || event.key === "ArrowLeft") {
            console.log("LEFT");
            left();
        }//LEFT
        else if (event.key === "w" || event.key === "ArrowUp") {
            console.log("UP");
            up();
        }//UP
        else if (event.key === "d" || event.key === "ArrowRight") {
            console.log("RIGHT");
            right();
        }//RIGHT
        else if (event.key === "s" || event.key === "ArrowDown") {
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
document.querySelector("#bw").addEventListener("click",
    () => {
        console.log("Changing color to black on white");
        ctx.strokeStyle = "black";
        line = "black";
        ctx.fillStyle = "white";
        ground = "white";
        ctx.fillRect(0, 0, width, height);
    }
);
document.querySelector("#wb").addEventListener("click",
    () => {
        console.log("Changing color to white on black");
        ctx.strokeStyle = "white";
        line = "white";
        ctx.fillStyle = "black";
        ground = "black";
        ctx.fillRect(0, 0, width, height);
    }
);
document.querySelector("#gb").addEventListener("click",
    () => {
        console.log("Changing color to green on black");
        ctx.strokeStyle = "green";
        line = "green";
        ctx.fillStyle = "black";
        ground = "black";
        ctx.fillRect(0, 0, width, height);
    }
);
document.querySelector("#bb").addEventListener("click",
    () => {
        console.log("Changing color to blue on black");
        ctx.strokeStyle = "blue";
        line = "blue";
        ctx.fillStyle = "black";
        ground = "black";
        ctx.fillRect(0, 0, width, height);
    }
);
document.querySelector("#ob").addEventListener("click",
    () => {
        console.log("Changing color to orange on black");
        ctx.strokeStyle = "orange";
        line = "orange";
        ctx.fillStyle = "black";
        ground = "black";
        ctx.fillRect(0, 0, width, height);
    }
);
document.querySelector("#rb").addEventListener("click",
    () => {
        console.log("Changing color to red on black");
        ctx.strokeStyle = "red";
        line = "red";
        ctx.fillStyle = "black";
        ground = "black";
        ctx.fillRect(0, 0, width, height);
    }
);
document.querySelector("#yb").addEventListener("click",
    () => {
        console.log("Changing color to yellow on black");
        ctx.strokeStyle = "yellow";
        line = "yellow";
        ctx.fillStyle = "black";
        ground = "black";
        ctx.fillRect(0, 0, width, height);
    }
);
document.querySelector("#bm").addEventListener("click",
    () => {
        console.log("Changing color to maize on blue");
        ctx.strokeStyle = "#FFCB05";
        line = "#FFCB05";
        ctx.fillStyle = "#00274C";
        ground = "#00274C";
        ctx.fillRect(0, 0, width, height);
    }
);
document.querySelector("#mb").addEventListener("click",
    () => {
        console.log("Changing color to blue on maize");
        ctx.strokeStyle = "#00274C";
        line = "#00274C";
        ctx.fillStyle = "#FFCB05";
        ground = "#FFCB05";
        ctx.fillRect(0, 0, width, height);
    }
);
canvas = document.getElementById("mycanvas");
ctx = canvas.getContext('2d');

let gArray = []


let min = 5;
let max = 10;

class Circle {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.r = Math.floor(Math.random() * (max - min)) + min;
        let r1 = Math.floor(Math.random() * 256);
        let r2 = Math.floor(Math.random() * 256);
        let r3 = Math.floor(Math.random() * 256);
        this.color = "rgb(" + r1 + "," + r2 + "," + r3 + ")";
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.fill();
    };

}
function makeCircle() {
    let x = event.offsetX
    let y = event.offsetY
    let c1 = new Circle(x, y);
    console.log(c1.r)
    gArray.push(c1)
    c1.draw();
}


function randomr() {
    canvas.width = canvas.width
    for (i = 0; i < gArray.length; i++) {
        gArray[i].r = Math.floor(Math.random() * (max - min)) + min;
        gArray[i].draw();
    }
}

function smallandbig() {

    if (event.code == "KeyB") {

        canvas.width = canvas.width

        for (i = 0; i < gArray.length; i++) {

            gArray[i].r = 10;
            gArray[i].draw();
        }
    }
    if (event.code == "KeyS") {
        canvas.width = canvas.width

        for (i = 0; i < gArray.length; i++) {

            gArray[i].r = 5;
            gArray[i].draw();
        }
    }
}




document.addEventListener('keydown', smallandbig);
document.getElementById("btn").onclick = randomr;



canvas.addEventListener('click', makeCircle);



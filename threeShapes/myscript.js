let tr = document.getElementById("tr");
let ci = document.getElementById("ci");
let sq = document.getElementById("sq");
let canvas = document.getElementById("canvas")
let ctx = canvas.getContext('2d');

function square() {

    ctx.fillStyle = sq.value;
    ctx.fillRect(25, 25, 50, 50)
    ctx.fill();
}
function circle() {

    ctx.fillStyle = ci.value;
    ctx.arc(50, 50, 50, 0, 2 * Math.PI)
    ctx.fill()
}
function trangle() {
    console.log(tr.value)

    ctx.beginPath();
    ctx.moveTo(0, 100);
    ctx.lineTo(100, 100);
    ctx.lineTo(50, 0)
    ctx.lineTo(0, 100);
    ctx.closePath();
    ctx.fillStyle = tr.value;
    ctx.fill();

}
document.getElementById("display").onclick = function(){
    let newInterval=setInterval(function(){
    display();},500);
}
let i = 1;
function display() {

    if (i === 1) {
        canvas.width = canvas.width
        square();
        console.log(i)
        i++

    }

    else if (i === 2) {
        canvas.width = canvas.width
        trangle();
        console.log(i)
        i++


    }

    else if (i === 3) {
        canvas.width = canvas.width
        circle();

        console.log(i)
        i = 1

    }

}

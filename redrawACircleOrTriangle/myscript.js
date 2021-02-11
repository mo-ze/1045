let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
canvas.addEventListener('mousedown', Triangle);
let cliarr = new Array(2)
cliarr[0] = []
cliarr[1] = []


function Triangle() {
    let x = event.offsetX
    let y = event.offsetY
    cliarr[0].push(x);
    cliarr[1].push(y);
    console.log(cliarr);
    ctx.beginPath();
    ctx.fillStyle = "black"
    ctx.moveTo(x, y);
    ctx.lineTo(x - 25, y - 25)
    ctx.lineTo(x + 25, y + 0)
    ctx.lineTo(x, y)
    ctx.fill()


}




let xpos = 0
let ypos = 0

function goCircle() {



    ctx.fillStyle = "red"
    ctx.beginPath();
    ctx.arc(cliarr[0][xpos], cliarr[1][ypos], 20, 0, 2 * Math.PI);
    ctx.fill();
}

document.getElementById('go').onclick = function () {
    goCircle()
    setInterval(function () {

        xpos+=1
        ypos+=1
        goCircle()

    }, 500);
}



document.getElementById('res').onclick = reset;
function reset() {
    canvas.width = canvas.width;
    ctx.beginPath();
    ctx.fillStyle = "black"
    ctx.moveTo(cliarr[0][0],cliarr[1][0]);
    ctx.lineTo(cliarr[0][0] - 25, cliarr[1][0] - 25)
    ctx.lineTo(cliarr[0][0] + 25, cliarr[1][0] + 0)
    ctx.lineTo(cliarr[0][0], cliarr[1][0])
    ctx.fill()
}

document.getElementById("go").onclick=go;
// go(){
// //add color to shapes
//
//
//
// }

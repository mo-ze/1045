let can = document.getElementById("myC")
let ctx = can.getContext("2d");
let xmid = can.width / 2
let ymid = can.height / 2
let xPosSimile = xmid
let yPosSimile = ymid
ctx.save();

document.onload = drawsmile()

function drawsmile() {
    ctx.moveTo(xmid, ymid)
    ctx.beginPath();
    ctx.fillStyle = 'yellow'
    ctx.arc(xPosSimile, yPosSimile, 50, 0, 2 * Math.PI);
    ctx.fill()
    ctx.stroke();//outline

    ctx.beginPath();
    ctx.arc(xPosSimile, yPosSimile, 30, 0, Math.PI);
    ctx.stroke()//mouth

    ctx.beginPath()
    ctx.fillStyle = 'black'
    ctx.arc(xPosSimile - 20, yPosSimile - 20, 5, 0, 2 * Math.PI);
    ctx.fill()
    ctx.stroke() //eye1

    ctx.beginPath()
    ctx.fillStyle = 'black'
    ctx.arc(xPosSimile + 20, yPosSimile - 20, 5, 0, 2 * Math.PI);
    ctx.fill()
    ctx.stroke()//eye2

    


}


function moveright() {
    if (xPosSimile !== 550) {
        xPosSimile += 10
        can.width = can.width
        drawsmile()
    }
}
function moveup() {
    if (yPosSimile !== 50) {
        yPosSimile -= 10
        can.width = can.width
        drawsmile()
    }
}
function moveleft() {
    if (xPosSimile !== 50) {
        xPosSimile -= 10
        can.width = can.width
        drawsmile()
    }
}
function movedown() {
    if (yPosSimile  !== 450) {
        yPosSimile += 10
        can.width = can.width
        drawsmile()
    }
}
document.addEventListener('keydown',keyevent)
function keyevent(){
    if (event.key=='w')
    moveup();
    else if (event.key=='a')
    moveleft();
    else if (event.key=='d')
    moveright();
    else if (event.key=='s')
    movedown();
    
}
let x=xPosSimile
let y=yPosSimile


function reset(){
    
    can.width=can.width
    xPosSimile=can.width/2
    yPosSimile=can.height/2
    drawsmile();
}


//there are 15 different ways to do the same things
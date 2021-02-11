let can = document.getElementById("myCanvas")
let ctx = can.getContext("2d");

let n = document.getElementById('number')
let rad = document.getElementById('radius')
let xmid = can.width / 2
let ymid = can.height / 2


function drawsmile(x, y) {
    
    ctx.beginPath();
    ctx.fillStyle = 'yellow'
    ctx.arc(x, y, 50, 0, 2 * Math.PI);
    ctx.fill()
    ctx.stroke();//outline

    ctx.beginPath();
    ctx.arc(x, y, 30, 0, Math.PI)
    ctx.stroke()//mouth

    ctx.beginPath()
    ctx.fillStyle = 'black'
    ctx.arc(x - 20, y - 20, 5, 0, 2 * Math.PI);
    ctx.fill()
    ctx.stroke() //eye1

    ctx.beginPath()
    ctx.fillStyle = 'black'
    ctx.arc(x + 20, y - 20, 5, 0, 2 * Math.PI);
    ctx.fill()
    ctx.stroke()//eye2

}

function smile() {
    can.width = can.width

    let maxcircles = +n.value
    let radius = +rad.value

    if (maxcircles < 10 && radius < 150) {
        ctx.save();

        ctx.translate(xmid, ymid)
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, 2 * Math.PI);
        ctx.fillStyle = "white";
        ctx.fill();
       
        for (let i = 0; i <= maxcircles; i++) {

            drawsmile(radius, 0);
            ctx.rotate(2 * Math.PI / maxcircles)

        }
        ctx.restore();
    } else alert("invalid number")

}






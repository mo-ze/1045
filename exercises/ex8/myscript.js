canvas = document.getElementById("Mycanvas");
ctx = canvas.getContext('2d');

document.getElementById('draw').onclick = runcircles;
let colo = document.getElementById('color')
let number = document.getElementById('numb')

function runcircles() {
    ctx.clearRect(0,0,30,300)
    let num = number.value
    let xpos = 15
    canvas.width=canvas.width
    if (num <= 10 && num > 0) {
        
        for (i = 0; i < num; i++) {
            
            ctx.beginPath();
            ctx.fillStyle = colo.value
            ctx.arc(xpos, 15, 15, 0, 2 * Math.PI);
            ctx.fill()
            ctx.stroke();
            xpos += 30
        }
    }else alert ('invalid')
}
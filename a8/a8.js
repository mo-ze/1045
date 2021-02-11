let letter = document.getElementById('letter');
let sentence = document.getElementById('sentence');
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");

function sentencefinder() {
    let output = 0;
    let sent = sentence.value;
    let le = letter.value
    for (let i = 0; i < sent.length; i++) {
        if (sent.charAt(i) === le.charAt(0))
            output += 1;
    }
    console.log(sent)
    document.getElementById('output1').innerHTML = 'the letter ' + '"' + le + '"'
        + ' was repeated ' + output + ' times in the sentence ' + sent;
}
// slightly complex
h = document.getElementById('h')
function drawsquare() {
    max = +h.value
    let toPrint = '';
    if (!isNaN(max) && max > 0 && max < 10) {
        for (let row = 1; row <= max; row++) {
            for (let col = 1; col <= max; col++) {

                if (row + col == max+1)
                    toPrint += row;
                else
                    toPrint += '.';
            }
            toPrint += '</br>';
        }
        document.getElementById("output2").innerHTML = toPrint
    } else if (isNaN(max)) {
        alert("Hi, I am JavaScript, that does not look like a number, let me ask Python ")
        alert("Nope that is not a number")
    }
    else if (max > 10) {
        alert("I will NOT do " + max + ' attempts')
    }
    else if (max < 0) {
        prompt("Seriously, how can you expect a height to be below zero??")
        alert('Developer will contact you ')
    }


}



canvas.addEventListener('click', drawcircle)
function drawcircle(event) {
    x = event.offsetX
    y = event.offsetY

    canvas.width = canvas.width
    ctx.beginPath()
    ctx.fillStyle = "F6C3CB";
    ctx.arc(x, y, 10, 0, 2 * Math.PI)
    ctx.fill()


}
document.getElementById('parse').onclick = sentencefinder;
document.getElementById('draw').onclick = drawsquare;
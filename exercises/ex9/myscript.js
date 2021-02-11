let n = document.getElementById('number');

function sum() {
    let sum1 = 0
    let num = n.value.toString();
    console.log(num)
    for (i = 0; i < num.length; i++) {
        sum1 += Number(num.charAt(i))
    }
    document.getElementById('result').innerHTML = sum1

}
n.onkeydown = function () {
    if (event.code == "Enter") {
        sum()
    }
}


let inputtime = document.getElementById('usertime');

let timedisplay = document.getElementById("timedisplay")

document.getElementById('btncount').onclick = function () {
    let time = inputtime.value
    if (time > 0) {
        timedisplay.innerHTML = time;
        let timer = setInterval(myTimer, 1000);
        function myTimer() {
            time = (time - 1);
            timedisplay.innerHTML = time;
            if (time === 0) {
                clearInterval(timer);
            }
        }
    }else alert("invalid time")
}
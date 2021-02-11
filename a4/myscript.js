
let numb1 = document.getElementById("num1");
let numb2 = document.getElementById("num2");
let ans = document.getElementById("answer")
function add() {
    let x = Number(numb1.value) + Number(numb2.value);
    ans.value = x;
    console.log(numb1, numb2, x);

}
function sub() {
    let x = Number(numb1.value) - Number(numb2.value);
    ans.value = x;
    console.log(numb1, numb2, x);

}
function mult() {
    let x = Number(numb1.value) * Number(numb2.value);
    ans.value = x;
    console.log(numb1, numb2, x);

}
function dev() {
    let x = Number(numb1.value) / Number(numb2.value);
    ans.value = x;
    console.log(numb1, numb2, x);

}
function reset() {
    numb1.value = ""
    numb2.value = ""
    document.getElementById("answer").value = ""
}




function setUp() {
    let element = document.getElementById("plusb")
    element.onclick = add;
    let ele = document.getElementById("minusb")
    ele.onclick = sub;
    let elem = document.getElementById("multb")
    elem.onclick = mult;
    let eleme = document.getElementById("devideb")
    eleme.onclick = dev;
    let elemen = document.getElementById("resetb")
    elemen.onclick = reset;
}

setUp()   
document.getElementById("hours").addEventListener("keyup", wage);
function wage() {
    let totalhoursworked = +document.getElementById("hours").value
    
    if (event.key == "Enter" && !isNaN(totalhoursworked) && totalhoursworked < 40) {
        let money = totalhoursworked * 12
        document.getElementById("payed").innerHTML = money;
       
    }
    else if (event.key == "Enter" && !isNaN(totalhoursworked) && totalhoursworked > 40) {
        let hoursworkover40 = totalhoursworked-40
        let tpay=(40*12)+(hoursworkover40*18)
        document.getElementById("payed").innerHTML = tpay;
    }
    else if (isNaN(totalhoursworked)) {
        let text = "Not a number"
        document.getElementById("payed").innerHTML = text
    }
}
document.getElementById("val").onclick=numere
function numere() {
    let nume1 = +(document.getElementById("num1").value)
    let nume2 = +(document.getElementById("num2").value)
    let numberdoc = document.getElementById("denum")
    if (nume1 === 0 || nume2==0) {
        numberdoc.innerHTML = "you enter a ZERO!!!"
    }
    else if(isNaN(nume1)||isNaN (nume2)){
        numberdoc.innerHTML= "NOT A NUMBER"
    }
    else if(nume1===nume2){
        numberdoc.innerHTML = "they devide each other"
    }
    else if (nume1 % nume2 == 0){
        numberdoc.innerHTML =  nume1 +" is divisible by "+nume2
    }
    else if (nume2 % nume1 == 0){
        numberdoc.innerHTML =  nume2 +" is divisible by "+nume1
    }
    else {
        numberdoc.innerHTML = "THEY ARE NOT DIVISIBLE"
    }






}

document.getElementById("lyear").onclick = findleapyear
function findleapyear(){

    let leap = +(document.getElementById("year").value)
   
    if(leap<1582 || isNaN(leap)){
        (document.getElementById("leap").innerHTML= " Invalid number")
    } 
    else if (leap%400==0){
        (document.getElementById("leap").innerHTML= leap+" Leap year: YES")
    }
   
    else if (leap%4==0 && leap%100!=0 ){
        (document.getElementById("leap").innerHTML= leap+" Leap year: YES")
    }
    else {
        (document.getElementById("leap").innerHTML= leap+" Leap year: NO")
    }
}

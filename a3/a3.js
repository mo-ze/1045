
// i add the validation for the value be be sure not to enter the wrong values
function convertWeight(){
    let lbToKg =Number(prompt("enter weight in lbs")); 
    let y= lbToKg/ 2.205
    y=Math.round((y*100)) /100
    if (isNaN(lbToKg)){
        alert("Help Me Help You") 
    }
    else {
    document.getElementById("div1").innerHTML=lbToKg +"lbs is equal to " +y +" Kgs."
    }   
}
function calculateTip(){
   let amm =Number(prompt("enter meal amount ")); 
   let tipi =Number(prompt("enter tip percentage "));
   let tip = amm*(tipi/100)
   let GrandTotal=tip+amm
    if (isNaN(amm,tipi)){
        alert("HAHAHAHAHA, THIS IS NOT A TIP AMOUNT") 
    }
    else {
        document.getElementById("div2").innerHTML="You bought a meal for $" +amm+ " Your tip percentage is " + tipi+"%" + "<br> The tip ammount is $" + tip+" your GrandTotal is $"+GrandTotal
    }
}
function makeUsername(){
    //THe first letter of the first name capital+ the first 4letter of the last name 
    ///of which first letter is capital +
    ///the last 2digits of YOB
    //ask user to input
    let firstname=      prompt("enter firstname");
    let lastname=       prompt("enter lastname").toLowerCase(); 
    let yearofbirth=    prompt("enter your Year of Birth")
    //@TODO 4 digits insurance for yearofbirth

    firstname=      firstname.charAt(0).toUpperCase();
    lastname=       lastname.charAt(0).toUpperCase()+lastname.substring(1,4)

    yearofbirth=    yearofbirth.charAt((yearofbirth.length-2)) + yearofbirth.charAt((yearofbirth.length-1))
    
    let Fullname=   firstname+ lastname

    console.log(firstname,lastname)
    
    let username=   Fullname+yearofbirth
    console.log(username)

    let numberofFullName=Number(Fullname)
    //validation
    if(isNaN(numberofFullName)){
       document.getElementById("div3").innerHTML=username

    }else {
        alert ("Please enter correct values.")
    }
   
}
function resetToDefault(){
    location.reload
    document.getElementById("div1").innerHTML="You will show the result of converting weight here"
    document.getElementById("div2").innerHTML="You will show the result of calculating the tip here"
    document.getElementById("div3").innerHTML="You will show the result of making a username here"
}


//http://mylinux.langara.bc.ca/~jmckeescott/1045/a3.html
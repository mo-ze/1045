let n = document.getElementById('color');
let mycolorarray=new Array();
let y=document.getElementById("display");
let ccheck=document.getElementById("colorcheck");
let print =document.getElementById("print");

function pushinArray(){
    let x=n.value;
    mycolorarray.push(x);
    y.innerHTML=mycolorarray
}

function checkarray(){
let cc=ccheck.value
if (mycolorarray.includes(cc) ){
    
    print.innerHTML= mycolorarray.indexOf(cc);

}else {
    print.innerHTML= "What?"
}
}


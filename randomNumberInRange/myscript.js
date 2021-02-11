document.getElementById("ram").onclick = random
function  random(){
let mini =+document.getElementById("min").value
let maxi= +document.getElementById("max").value

// using only math.random generate random number between the range specified
if (mini<maxi){
    let r = maxi- mini
  let num= (Math.round(Math.random()*10)+mini);
  if(num<maxi&& num>mini){
       document.getElementById("out").innerHTML= num

  }else{
      random()
  }

  }
}
//count spaces and console.log it 

let count=0;
document.addEventListener("keydown",press)
function  press(){

    if (event.code=="Space"){
        count+=1
  console.log(count)
    }
}

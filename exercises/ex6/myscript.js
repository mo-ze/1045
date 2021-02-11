let lotto=0;


function push(){
   lotto= Math.round(Math.random()*100);
   console.log(lotto)
  
    }
function check (){
 let inputnum=document.getElementById("numinput").value;
    let num1= inputnum.charAt(0)
    let num2= inputnum.charAt(1)
    let lnum1= lotto.toString().charAt(0)
    let lnum2= lotto.toString().charAt(1)

   
        if(inputnum.length==2){
            if (Number(inputnum)==lotto  ){
                document.getElementById("result").innerHTML="you have exact match, he award is $10,000"
            }
     
            if(num1==lnum1 && num2 ){
                   document.getElementById("result").innerHTML="you have one match, he award is 3,000"}
           
           }
}
        
    
document.getElementById("gen").onclick = push;
document.getElementById("check").onclick = check;
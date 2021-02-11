document.addEventListener("keyup", push);
let count= 0
function push(){
    console.log(event.key);
    if(event.key== "a"|| event.key== "e" || event.key== "i"||event.key== "o"|| event.key== "u"){
    count= Number(count);
    count++;
    console.log (count);
    document.getElementById("counter").innerHTML =count;  
}

}
    
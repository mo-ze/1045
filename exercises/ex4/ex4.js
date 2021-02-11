function tip(){
    let cost=Number (document.getElementById("meal").value)
    let tip= Number(document.getElementById('tip').value)
    
    let tal = cost* (tip/100)+cost
    let tippp=cost* (tip/100)
    let text   ='your meal cost '+tal+" your tip is "+ tippp
    document.getElementById("mc").innerHTML =text;


   console.log(text, t1)
}
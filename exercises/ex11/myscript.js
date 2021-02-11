let nameA = document.getElementById('name');
let spA = document.getElementById('sp');
let ageA = document.getElementById("age");
let animalArr = []
function Animal(name, sp, age) {
    this.name = name
    this.sp = sp
    this.age = age
}

function newanimal() {
    let name = nameA.value;
    let sp = spA.value;
    let age = ageA.value;
    let newanimal = new Animal(name, sp, age);
     animalArr.push(newanimal);
     QW()

}
document.getElementById("add").onclick = newanimal;

function QW(){
     
     document.getElementById("list").innerHTML = ""
    for (let i = 0; i < animalArr.length; i++) {
        
        console.log(newanimal);
        document.getElementById("list").innerHTML += '<li>' + animalArr[i].name + " , " + animalArr[i].sp + " , "
         + animalArr[i].age + '</li>'
   
        }
        }
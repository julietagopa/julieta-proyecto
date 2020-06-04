
function random() {
 let numRandom1 = Math.floor(Math.random()*10)+1;
console.log(numRandom1);
let numRandom2= Math.floor(Math.random()*10)+1;
console.log(numRandom2);

let num1 = document.getElementById("num1").innerHTML = numRandom1;
let num2 = document.getElementById("num2").innerHTML = numRandom2;


}
console.log(random);

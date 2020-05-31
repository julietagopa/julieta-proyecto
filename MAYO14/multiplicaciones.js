function comprobar() {
  let num1 = document.getElementById("num1").innerHTML;
  let num2 = document.getElementById("num2").innerHTML;
  let numUsu= document.getElementById("numUsu").value;

let resMulti=num1*num2;
  if (numUsu ==resMulti) {
    alert("correcto");
  } else {
    alert ("sigue intentando");
  }


console.log(numUsu)
}


function actualizar() {
  Math.random(1,100)

}

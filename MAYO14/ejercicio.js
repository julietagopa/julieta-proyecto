function suma() {

  let total= parseInt(document.getElementById("numero1").value)+ parseInt(document.getElementById("numero2").value)
  let botonSuma= document.getElementById('numero1').value

  document.getElementById('resultado').innerHTML= total

}

function resta() {

  let total= parseInt(document.getElementById("numero1").value)- parseInt(document.getElementById("numero2").value)
  let botonResta= document.getElementById('numero1').value

  document.getElementById('resultado').innerHTML= total

}

function  multiplicacion() {

  let total= parseInt(document.getElementById("numero1").value)*parseInt(document.getElementById("numero2").value)
  let botonMultiplicacion= document.getElementById('numero1').value

  document.getElementById('resultado').innerHTML= total

}
function division() {

  let total= parseInt(document.getElementById("numero1").value)/ parseInt(document.getElementById("numero2").value)
  let botonDivision= document.getElementById('numero1').value

  document.getElementById('resultado').innerHTML= total

}

function nuevaCuenta() {
let ahorroInicial = prompt("Monto deseado para abrir la cuenta *cant. minima $1000*")

 if(ahorroInicial>=1000){
      document.getElementById("cantidadActual").innerHTML= ahorroInicial
 }
  else{
    alert("La cant. minima es $1000*")
    nuevaCuenta();
  }
 }

function ahorrar() {
  let ingreso= document.getElementById("cantUsuario").value;
  let cantidadActual = document.getElementById("cantidadActual").innerHTML;

  let suma= parseInt(ingreso)+ parseInt(cantidadActual);
  document.getElementById("cantidadActual").innerHTML=suma;

  document.getElementById("cantUsuario").value="";
}

function retirar() {
  let ingreso= document.getElementById("cantUsuario").value;
  let cantidadActual = document.getElementById("cantidadActual").innerHTML;

  let resta= parseInt(cantidadActual)- parseInt(ingreso);
  document.getElementById("cantidadActual").innerHTML=resta;

  document.getElementById("cantUsuario").value="";
}

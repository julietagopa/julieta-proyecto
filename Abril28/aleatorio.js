
function inicio(){
  console.log("Hola, soy Julieta")
  let numeroAleatorio =Math.floor(Math.random()* 10);
  //Math.floor(x)5.3 => 5  5.9  => 5
  //Math.floor()* 10=  0...9  5.9  => 5
  console.log(numeroAleatorio)

  let intento = prompt("Adivina el numero")
  console.log(intento)

  if (intento ==numeroAleatorio) {
    alert("Es correcto")

  } else {
    alert("Esta mal")

  }
  }

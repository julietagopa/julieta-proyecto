

let coloreado =false
let subrayado = false


function pedirNombre(){
  let nombre =prompt ("tu nombre")
  document.getElementById('aqui').innerHTML= "Hola" + nombre
}

function cambiarcolor() {

 let etiqueta = document.getElementById("aqui")
 etiqueta.classList.add("letrasRojas")
 //etiqueta.style.color="red"

}

function colorear(){
  let texto =document.getElementById("aqui")

  if(coloreado ==false) {
    texto.classList.add("letrasRojas")
    coloreado = true
  } else {
    texto.classList.remove("letrasRojas")
    coloreado = false

  }
}

function subrayar(){
  let texto = document.getElementById("aqui")

    if(subrayado ==false){
      texto.classList.add("subrayar")
      subrayado = true
    } else {
      texto.classList.add("subrayar")
      subrayado = false
    }
    }

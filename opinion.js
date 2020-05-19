function hola(){
  let texto= document.getElementById('nuevoElemento').value
  let lista= document.getElementById("lista")

  let nuevaEtiqueta = document.createElement("li")//creamos un Li (vacio)

  let textoInterno= document.createTextNode(texto)// creamos texto para HTML (crea la palabra)

  nuevaEtiqueta.appendChild(textoInterno)// mete la palabra a la lista

  lista.appendChild(nuevaEtiqueta)
}

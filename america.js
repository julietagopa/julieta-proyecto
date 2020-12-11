
function mostrar(elid) {
    console.log ('id seleccionado', elid)
    if ( document.getElementById(elid).style.display == 'inline-block'){
        document.getElementById(elid).style.display = 'none'
    } else{ 
        document.getElementById(elid).style.display = 'inline-block';

    }
   
}
    
   
 
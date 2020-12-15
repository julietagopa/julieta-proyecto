
function mostrar(elid) {
    console.log ('id seleccionado', elid)
    if ( document.getElementById(elid).style.display == 'inline-block'){
        document.getElementById(elid).style.display = 'none'
    } else{ 
        document.getElementById(elid).style.display = 'inline-block';

    }
   
}
    
/*var sign = prompt("¿Quieres descubrir?");

if (sign.toLowerCase() == "scorpio") {
  alert("Wow! I'm a Scorpio too!");
}

// there are many ways to use the prompt feature
var sign = window.prompt(); // open the blank prompt window
var sign = prompt();       //  open the blank prompt window
var sign = window.prompt('Are you feeling lucky'); // open the window with Text "Are you feeling lucky"
var sign = window.prompt('Are you feeling lucky', 'sure'); // open the window with Text "Are you feeling lucky" and default value "sure"*/
 


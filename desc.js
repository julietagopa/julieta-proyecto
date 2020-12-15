/*result = window.confirm("Quieres decubir?");*/
   
        if (window.confirm("¿TE GUSTARÍA DESCUBRIR ALGO NUEVO?  Haz click en OK" )) {
            /*window.open("exit.html", "Thanks for Visiting!");*/
            var links = new Array( "./REGINA.html", "./who.html", "./artistadelasemana.html","./Generos.html", "./nuevosartistas.html", "./GALERIADEARTISTAS.html", "./TRENDING.html" );
            enlaceAleatorio()
          }
       

        function enlaceAleatorio(){
            console.log("random")
           aleat = Math.random() * links.length;
           aleat = Math.floor(aleat);
           window.location=links[aleat];
        }
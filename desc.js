result = window.confirm("Quieres decubir?");{
    if (result != null)
    
       var links = new Array( "index.html", "who.html", src="artistadelasemana.html", "file:///C:/Users/lenovo/Desktop/julieta-proyecto/Generos.html","file:///C:/Users/lenovo/Desktop/julieta-proyecto/REGINA.html" , "http://www.altavista.com", "http://www.hotbot.com", "http://www.buscopio.com", "http://www.sol.es", "http://www.excite.com", "http://www.elbuscador.com", "http://www.ya.com", "http://www.wanadoo.es", "http://www.buscador.com.mx", "http://www.msn.com", "http://www.astrolabio.net");
        function enlaceAleatorio(){
           aleat = Math.random() * links.length;
           aleat = Math.floor(aleat);
           window.location=links[aleat];
        }
    
    }
    
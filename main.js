

const $tablero= document.querySelector('#tablero');

let $estado = document.querySelector('#estado');

const $botonStart= document.querySelector('#boton-start');

let $cuadros = document.querySelectorAll(".cuadro");

const $cuadroRojo = document.querySelector('#rojo');

const $cuadroAzul= document.querySelector('#azul');

const $cuadroVerde = document.querySelector('#verde');

const $cuadroAmarillo = document.querySelector('#amarillo');

let nivel;

let jugadaMaquina = [];

let jugadaUsuario = []; 



bloquearCuadrosUsuario();


$estado.innerText = "Toca START para empezar el juego";



$botonStart.onclick = function (){
    
    bloquearCuadrosUsuario();
    
    reiniciar();

   

    
    $estado.innerText = "Turno de la Máquina. Estás en el nivel " + nivel;
    
   
    

    jugar(jugadaMaquina);

    bloquearStart();
    
    
}


   

    function jugar(){
    
     $estado.innerText = "Turno de la Máquina. Estás en el nivel " + nivel;
        
       agregarCuadroAleatorio(jugadaMaquina);
       
       console.log(jugadaMaquina);
 
        let retrasoJugador = (jugadaMaquina.length + 1) * 1000;


        jugadaMaquina.forEach(function(cuadro,indice){ //indice del array

        let retrasoMaquina = (indice+1)*1000;
        
        

        setTimeout(function(){
           
            resaltarCuadros(cuadro) ;  
            
        },retrasoMaquina);

            });
        
            setTimeout ( function (){

            $estado.innerText = "Ahora es tu turno !"

            
            manejarCuadrosUsuario();//También desbloquea los cuadros

            

            setTimeout(function(){

                bloquearCuadrosUsuario();

                revisarJugadas(jugadaMaquina,jugadaUsuario,nivel);
            }
            ,retrasoJugador);

           
        },retrasoJugador);

        jugadaUsuario = [];

        nivel++;
    
    }


    function revisarJugadas(jugadaMaquina, jugadaUsuario, nivel){

      
        let evaluacion;

        let bien = "ACERTASTE";

        let mal = "FALLASTE"

        for (let i = 0 ; i<jugadaMaquina.length; i++){

            

            if(jugadaMaquina[i] === jugadaUsuario[i]){

                evaluacion = bien;

            }

            else {

                evaluacion = mal;
               
            }


        }
        if (evaluacion === bien && nivel === 3){

           // console.log("GANASTE");
            alert("SIMON DICE: GANASTE !!!")
            $estado.innerText = "Simón dice: GANASTE !!!. Toca START para empezar una nueva partida.";
            desbloquearStart();
        }
        
        if(evaluacion === bien && nivel !=3 ){
                  
            setTimeout(jugar,2000);

           
             } 
             
             else if(evaluacion === mal){
 
                 setTimeout(function(){
      
                 bloquearCuadrosUsuario();
                 $estado.innerText = "Perdiste!! Toca Start para empezar de nuevo."
                 desbloquearStart();
                     
                }, 2000);
    
            }
        
    }
         

    function bloquearCuadrosUsuario(){

        $cuadroRojo.onclick = function (){

           console.log("No puedes jugar todavia ROJO");
            //jugadaUsuario.push($cuadroRojo);
        }

        $cuadroAzul.onclick = function (){

            console.log("No puedes jugar todavia AZUL");
            //jugadaUsuario.push($cuadroAzul);
        }

        $cuadroAmarillo.onclick = function (){

            console.log("No puedes jugar todavia AMARILLO");
            //jugadaUsuario.push($cuadroAmarillo);
        }

        $cuadroVerde.onclick = function (){

            console.log("No puedes jugar todavia VERDE");
           // jugadaUsuario.push($cuadroVerde);
        }
                    
    }

    function manejarCuadrosUsuario(){

        
        $cuadroRojo.onclick = function (){

            console.log("Tocaste ROJO");
            resaltarCuadrosUsuario($cuadroRojo);
            jugadaUsuario.push($cuadroRojo);
        }

        $cuadroAzul.onclick = function (){

            console.log("Tocaste AZUL");
            resaltarCuadrosUsuario($cuadroAzul);
            jugadaUsuario.push($cuadroAzul);
        }

        $cuadroAmarillo.onclick = function (){

            console.log("Tocaste AMARILLO");
            resaltarCuadrosUsuario($cuadroAmarillo);
            jugadaUsuario.push($cuadroAmarillo);
        }

        $cuadroVerde.onclick = function (){

            console.log("Tocaste VERDE");
            resaltarCuadros($cuadroVerde);
            jugadaUsuario.push($cuadroVerde);
        }

    }

    function agregarCuadroAleatorio (jugadaMaquina){


        let $jugadaMaquina = jugadaMaquina;

         let $cuadros = document.querySelectorAll(".cuadro");

        let indiceAleatorio = Math.round(Math.random() * 3); 

        let cuadroAleatorio = $cuadros[indiceAleatorio];
       

            $jugadaMaquina.push(cuadroAleatorio);

            
        return $jugadaMaquina;

    }

    function resaltarCuadros(cuadro){ //toma la de la maquina

        
            if (cuadro === $cuadroRojo){

                $cuadroRojo.style.background = "#fc8787";
                $cuadroRojo.style.transform = "scale(1.1)";

                setTimeout (function(){

                    $cuadroRojo.style.background = "red";
                    $cuadroRojo.style.transform = "scale(1)";

                },800);
            }
    
            if(cuadro === $cuadroAzul){
    
                $cuadroAzul.style.background = " #717dfa ";
                $cuadroAzul.style.transform = "scale(1.1)";
                setTimeout (function(){

                    $cuadroAzul.style.background = "blue";
                    $cuadroAzul.style.transform = "scale(1)";

                },800);


            }
            
            if( cuadro === $cuadroVerde){
    
    
                $cuadroVerde.style.background = " #62f64e ";
                $cuadroVerde.style.transform = "scale(1.1)";

                setTimeout (function(){

                    $cuadroVerde.style.background = "green";
                    $cuadroVerde.style.transform = "scale(1)";

                },800);
            }
    
            if(cuadro === $cuadroAmarillo){
    
                $cuadroAmarillo.style.background = "#fafa8e ";
                $cuadroAmarillo.style.transform = "scale(1.1)";

                setTimeout (function(){

                    $cuadroAmarillo.style.background = "yellow";
                    $cuadroAmarillo.style.transform = "scale(1)";

                },800);
            }
              
          //enciende y apaga los cuadros

        }

    function reiniciar(){


        $estado.innerText = "Toca START para empezar el juego";

        jugadaMaquina = [];
        jugadaUsuario = [];
        nivel = 1;

        
        console.log ("REINICIAR");
    }

    

  function bloquearStart(){

    $botonStart.onclick = function (){console.log("START bloqueado");}



  }

  function desbloquearStart(){

    $botonStart.onclick = function (){
    
        bloquearCuadrosUsuario();
        
        reiniciar();
     
        $estado.innerText = "Turno de la Máquina. Estás en el nivel " + nivel;
        
        jugar(jugadaMaquina);
    
       bloquearStart(); 
        
    }

  }

  function resaltarCuadrosUsuario (cuadro){ //toma la del usuario

        
    if (cuadro === $cuadroRojo){

        $cuadroRojo.style.background = "#fc8787";
        $cuadroRojo.style.transform = "scale(1.1)";

        setTimeout (function(){

            $cuadroRojo.style.background = "red";
            $cuadroRojo.style.transform = "scale(1)";

        },500);
    }

    if(cuadro === $cuadroAzul){

        $cuadroAzul.style.background = " #717dfa ";
        $cuadroAzul.style.transform = "scale(1.1)";
        setTimeout (function(){

            $cuadroAzul.style.background = "blue";
            $cuadroAzul.style.transform = "scale(1)";

        },500);


    }
    
    if( cuadro === $cuadroVerde){


        $cuadroVerde.style.background = " #62f64e ";
        $cuadroVerde.style.transform = "scale(1.1)";

        setTimeout (function(){

            $cuadroVerde.style.background = "green";
            $cuadroVerde.style.transform = "scale(1)";

        },500);
    }

    if(cuadro === $cuadroAmarillo){

        $cuadroAmarillo.style.background = "#fafa8e ";
        $cuadroAmarillo.style.transform = "scale(1.1)";

        setTimeout (function(){

            $cuadroAmarillo.style.background = "yellow";
            $cuadroAmarillo.style.transform = "scale(1)";

        },500);
    }

}
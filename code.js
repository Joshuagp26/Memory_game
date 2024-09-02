let bIniciar = document.querySelector('.iniciar');
let bsiguiente = document.querySelector('.siguiente');
let puntajes = document.querySelector('.puntajes');
let valorPuntaje = puntajes.value;
let cd1 = document.querySelector('.c1');
let cd2 = document.querySelector('.c2');
let cd3 = document.querySelector('.c3');
let cd4 = document.querySelector('.c4');
let cd5 = document.querySelector('.c5');
let cd6 = document.querySelector('.c6');
let numeroAzar = 0;
let clicksuma = 0;
let numeros = [];
let comparar= [];
let puntos = 0;
bsiguiente.style.display = "none";
//se inicializa en 0 el valor del array index
let currentIndex = 0;
function iniciar() {
    agregarNivel();
    bIniciar.style.display = "none";
    bsiguiente.style.display = "block";
}
function reinicio(){
    puntos = 0;
    numeroAzar = 0;
    clicksuma = 0;
    numeros = [];
    comparar= [];
    bsiguiente.style.display = "none";
    bIniciar.style.display = "block";
    validar=false;
    }
//funcion llamar el cambio de colores
function colores(numeroAzar){
    switch (numeroAzar) {
        case 1:
            setTimeout(cambioColor,300,numeroAzar);
        break;
        case 2:
            setTimeout(cambioColor,300,numeroAzar);
        break;
        case 3:
            setTimeout(cambioColor,300,numeroAzar);
        break;
        case 4:
            setTimeout(cambioColor,300,numeroAzar);
        break;
        case 5:
            setTimeout(cambioColor,300,numeroAzar);
        break;
        case 6:
            setTimeout(cambioColor,300,numeroAzar);
        break;    
    }
}

function cambioColor(numeroAzar){
     switch (numeroAzar) {
            case 1:
            cd1.style.backgroundColor="black";
            setTimeout(cambioColor2,800,numeroAzar);
            break;           
            case 2:
                cd2.style.backgroundColor="black";
                setTimeout(cambioColor2,800,numeroAzar);
            break;
            case 3:
                cd3.style.backgroundColor="black";
                setTimeout(cambioColor2,800,numeroAzar);
            break;
            case 4:
                cd4.style.backgroundColor="black";
                setTimeout(cambioColor2,800,numeroAzar);
            break;
            case 5:
                cd5.style.backgroundColor="black";
                setTimeout(cambioColor2,800,numeroAzar);
            break;
            case 6:
                cd6.style.backgroundColor="black";
                setTimeout(cambioColor2,800,numeroAzar);
            break;
    
        default:
            break;
                    break;   }
}

function cambioColor2(numeroAzar){
    switch (numeroAzar) {
        case 1:
               cd1.style.backgroundColor="#dd0a1c";
            break;
            case 2:
                cd2.style.backgroundColor="#001aff";
            break;
            case 3:
                cd3.style.backgroundColor="#08c718";
            break;
            case 4:
                cd4.style.backgroundColor="#eed708";
            break;
            case 5:
                cd5.style.backgroundColor="#F27329";
            break;
            case 6:
                cd6.style.backgroundColor="#b21ddb";
            break; }
        }


function cc1 (click){
    click = 1 ;
    comparacion(click);
}
function cc2 (click){
    click = 2 ;
    comparacion(click);
}
function cc3 (click){
    click = 3 ;
    comparacion(click);
}
function cc4 (click){
    click = 4 ;
    comparacion(click);
}
function cc5 (click){
    click = 5 ;
    comparacion(click);
}
function cc6 (click){
    click = 6 ;
    comparacion(click);
}

//funcion agregar click al array
function comparacion(click){
    nuevo = comparar.push(click);
    clicksuma = clicksuma ++;
    puntos = puntos + 10 ;
    puntajes.textContent =puntos;
}

//verificar igualdad del array  
function siguiente(){
    let v=0; 
    //verificar el mismo largo de array
    v=v+1;
    if (numeros.length === comparar.length){
        v=v+1;
        //ciclo para verificar datos
        for(i = 0; i<numeros.length; i++){
            //si encuentra una diferencia en los datos reinicia
            if(numeros[i] !== comparar[i]){
                v=v+1;
                alert("LOSE, PUNTOS TOTALES SON = "+puntos);
                reinicio();
            } 
        }
        if(v<3) {
             agregarNivel();
        }
    }else{
        alert("LOSE, PUNTOS TOTALES SON = "+puntos);
        reinicio();
    }
   
   
}


function agregarNivel(){
    comparar=[];
    numeroAzar=Math.floor(Math.random()*6)+1;
    nuevo = numeros.push(numeroAzar);
    // Función para obtener el valor interno del elemento actual
        function tomarValor(index) {
            return numeros[index];
        }

        // Función para mostrar el valor
        function vervalor(value) {
            //llamda a combio de colores
            colores(value);
        }

        // Establecer el intervalo de tiempo en milisegundos
        const interval = 1200;

        // Crear un intervalo que recorra el numeros cada 1200 milisegundos
        const intervalId = setInterval(() => {
            if (currentIndex < numeros.length) {
                // Obtener el valor interno del elemento numeros[]
                const value = tomarValor(currentIndex);
                // Mostrar el valor
                vervalor(value);
                // Incrementar el índice
                currentIndex++;
            } else {
                // Detener el intervalo cuando se hayan procesado todos los elementos
                clearInterval(intervalId);
                currentIndex=0;
            }
        }, interval);

}






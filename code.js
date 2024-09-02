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
bsiguiente.style.display = "none";
let nivel = 0
//se inicializa en 0 el valor del array index
let currentIndex = 0;
function iniciar() {
    agregarNivel();
    console.log("INICIAR");
    bIniciar.style.display = "none";
    bsiguiente.style.display = "block";
}
function reinicio(){
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
            console.log("entrada");
            setTimeout(cambioColor,300,numeroAzar);
            console.log("cambio uno")
        break;
        case 2:
            console.log("entrada");
            setTimeout(cambioColor,300,numeroAzar);
            console.log("cambio uno")
        break;
        case 3:
            console.log("entrada");
            setTimeout(cambioColor,300,numeroAzar);
            console.log("cambio uno")
        break;
        case 4:
            console.log("entrada");
            setTimeout(cambioColor,300,numeroAzar);
            console.log("cambio uno")
        break;
        case 5:
            console.log("entrada");
            setTimeout(cambioColor,300,numeroAzar);
            console.log("cambio uno")
        break;
        case 6:
            console.log("entrada");
            setTimeout(cambioColor,300,numeroAzar);
            console.log("cambio uno")
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
            console.log("CAMBIONEGRODefault")
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
    console.log(click);
    comparacion(click);
}
function cc2 (click){
    click = 2 ;
    console.log(click);
    comparacion(click);
}
function cc3 (click){
    click = 3 ;
    console.log(click);
    comparacion(click);
}
function cc4 (click){
    click = 4 ;
    console.log(click);
    comparacion(click);
}
function cc5 (click){
    click = 5 ;
    console.log(click);
    comparacion(click);
}
function cc6 (click){
    click = 6 ;
    console.log(click);
    comparacion(click);
}

//funcion agregar click al array
function comparacion(click){
    nuevo = comparar.push(click);
    clicksuma = clicksuma ++;
    console.log("matriz COMposicion 0 = "+comparar[0]);
    console.log("matriz COMposicion 1 = "+comparar[1]);
}

//verificar igualdad del array  
function siguiente(){
    let v=0; 
    //verificar el mismo largo de array
    v=v+1;
    console.log("pRRRrimerV"+v);
    if (numeros.length === comparar.length){
        v=v+1;
        console.log("SEGUNDO"+v);
        //ciclo para verificar datos
        for(i = 0; i<numeros.length; i++){
            console.log("loop---------");
            //si encuentra una diferencia en los datos reinicia
            if(numeros[i] !== comparar[i]){
                v=v+1;
                console.log("TERCER"+v);
                reinicio();
            } 
        }
        if(v<3) {
             agregarNivel();
        }
    }else{
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
            console.log('Valor mostrado:', value);
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
                console.log('Todos los elementos han sido mostrados.');
                currentIndex=0;
            }
        }, interval);

}






//Declaracion de variables
let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 3;

console.log("El numero secreto es: " + numeroSecreto);


while(numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt("Me indicas un numero entre 1 y 10 porfavor: "));
    console.log(typeof(numeroUsuario));

    console.log(`El numero de usuario es: ${numeroUsuario}`);

    //Este codigo realiza la comparacion
    if(numeroUsuario == numeroSecreto){
        //Acertamos, fue verdadera la condicion
        alert(`Acertaste el numero es: ${numeroUsuario}, Lo hiciste en ${intentos} ${intentos == 1? "intento":"intentos"}`);
    }else{
        //No se cumplio la condicion
        if(numeroUsuario > numeroSecreto){
            alert("Lo siento no acertaste el numero, el numero secreto es menor");
        }else{
            alert("Lo siento no acertaste el numero, el numero secreto es mayor");
        }
        if(intentos == maximosIntentos){
            alert(`Llegaste al numero maximo de intentos:  ${intentos}`);
            break;
        }
        //Incrementamos el contador cuando no se acierta
        intentos += 1;
        
    }
}

//Declaracion de variables
let numeroSecreto = 8;
let numeroUsuario = 0;

while(numeroUsuario != numeroSecreto){
    numeroUsuario = prompt("Me indicas un numero entre 1 y 10 porfavor: ");

    console.log(numeroUsuario);

    //Este codigo realiza la comparacion
    if(numeroUsuario == numeroSecreto){
        //Acertamos, fue verdadera la condicion
        alert(`Acertaste, el numero ${numeroUsuario}`);
    }else{
        if(numeroUsuario > numeroSecreto){
            alert("El numero secreto es menor");
        }else{
            alert("El numero secreto es mayor");
        }
        //No se cumplio la condicion
        alert("Lo siento no acertaste el numero");
    }
}

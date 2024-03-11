let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un numero entre 1 y 10 porfavor: ");

console.log(numeroUsuario);

//Este codigo realiza la comparacion
if(numeroUsuario == numeroSecreto){
    //Acertamos, fue verdadera la condicion
    alert(`Acertaste, el numero ${numeroUsuario}`);
}else{
    //No se cumplio la condicion
    alert("Lo siento no acertaste el numero");
}
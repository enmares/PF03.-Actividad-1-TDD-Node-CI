
function esPinValido(pin){
    
    if(pin == null || pin == undefined || pin.length == 0 || (pin.length >= 4 && pin.length <=6) || !Number.isNaN(pin) || comprobarDigitosIguales(pin) == true){
        return true;
    }
    return false;
}

//Comprueba si la 
function comprobarDigitosIguales(string){

let aux = string[0];
let res = true;

    for(let i=1; i<string.length; i++){
        
        if(string[i] != aux){
            res = false;
            break;
        }
    }
    return res;
}
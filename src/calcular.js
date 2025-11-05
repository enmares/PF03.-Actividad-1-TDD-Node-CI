
function esPinValido(pin){
    
    if(pin == null || pin == undefined || pin.length == 0 || !(pin.length >= 4 && pin.length <=6) || isNaN(pin) || comprobarDigitosIguales(pin) == true){
        return false;
    }
    return true;
}

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



function fibonacci(n){
    if (n <= 0 || n == 0 || n == 1)
        return 0;
    if (n == 2 || n == 3)
        return 1;
    if (n == 4)
        return 2;

    let a = 1;
    let b = 1;
    let c = a + b;
    
    for(let i = 0; i < n - 4; i++){
        a = b;
        b = c;
        c = a + b;
    }
    return c;
}
export{
    fibonacci,
    esPinValido
}
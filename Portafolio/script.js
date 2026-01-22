let logoEspaña = document.getElementById("espanya");
let logoChina = document.getElementById("china");
let audio = new Audio("Audios/himnoEspaña.mp3");
let audioChina = new Audio("Audios/himnoChina.mp3");
let iniciarEspaña = false;
let iniciarChina = false;

logoEspaña.addEventListener("click", reproducirAudio)

function reproducirAudio(){
    
    if (iniciarEspaña == false){
        iniciarEspaña = true;
        audio.play();
    }
    else{
        iniciarEspaña = false;
        audio.pause();
    }
    
}

logoChina.addEventListener("click", reproducirAudioChina)

function reproducirAudioChina(){
    
    if (iniciarChina == false){
        iniciarChina = true;
        audioChina.play();
    }
    else{
        iniciarChina = false;
        audioChina.pause();
    }

}


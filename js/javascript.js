// DICHIARO L'ARRAY
const mail_list =
    ["luttrellajeya@pinopatent.com", 
    "daimosforyou@suksesboss.com", 
    "nastynabiiva@chahcyrans.com", 
    "cpgm4x4@fbclone.com", 
    "artemslobozhaninov@aulaoberta.es"]


// DICHIARO LA VARIABILE  
let email = prompt("inserisci la tua email")


// VARIABILE DI CONTROLLO
let email_found = false;


for(let i = 0; i < mail_list.length; i++){
    if(mail_list[i] === email){
        email_found = true;
    }
}
if (email_found === true ){
    document.getElementById('email-message').innerHTML = "La mail è presente nella lista"
}
else{
    document.getElementById('email-message').innerHTML = "La mail non è presente nella lista, inserisci una nuova email"
}



// GIOCO DEI DADI 

// DICHIARO I BOTTONI
const button = document.getElementById('lanciaDadiBtn');
const resultDiv = document.getElementById('result');

// FUNCTION
button.addEventListener('click', function() {
     // Generare un numero casuale da 1 a 6 per il giocatore
     let giocatore = Math.floor(Math.random() * 6) + 1;
    
     // Generare un numero casuale da 1 a 6 per il computer
     let computer = Math.floor(Math.random() * 6) + 1;
    
     // Determinare il vincitore
    let risultato;
    if (giocatore > computer) {
        risultato = `Giocatore vince. Giocatore: ${giocatore} - Computer: ${computer}`;
    } else if (giocatore < computer) {
        risultato = `Computer vince. Giocatore: ${giocatore} - Computer: ${computer}`;
    } else {
        risultato = `Pareggio. Giocatore: ${giocatore} - Computer: ${computer}`;
    }
    
    document.getElementById('result').innerHTML = risultato
})

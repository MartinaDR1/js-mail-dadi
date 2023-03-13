// Mail
//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.


// Creo array di mail a cui è consentito l'accesso
const listMail = [
    'mariorossi@gmail.com',
    'giovanniverdi@gmail.com',
    'martinabianchi@gmail.com'
];


// Seleziono elementi della DOM
const mail = document.getElementById('mail');
const buttonEl = document.querySelector('button');

// Aggiungo un event listener al bottone
buttonEl.addEventListener('click', function(){

    // Inserisco un nuovo elemento che indichi se è consentito l'accesso o meno
    const divEl = document.createElement('div');

    // Verifico se l'email inserita è presente nell'array
    if (listMail.includes(mail.value)){
        divEl.innerHTML ='Puoi accedere'
    } else{
        divEl.innerHTML =`Mi dispiace, non puoi accedere`
    }

    // Inserisco risultato in pagina
    buttonEl.insertAdjacentElement ('afterend', divEl);

})


// GIOCO DEI DADI
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Genero un numero random per il giocatore
const playerNumber = Math.floor(Math.random() * 6) + 1;

console.log(playerNumber);

// Genero un numero random per il pc

const pcNumber = Math.floor (Math.random() * 6 ) + 1;
console.log(pcNumber);

// Stabilisco il vincitore
if (playerNumber > pcNumber){
    console.log('Hai vinto');
} else {
    console.log('Mi dispiace, ha vinto il pc');
}
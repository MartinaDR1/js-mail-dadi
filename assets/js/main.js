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
let access = false;
// Aggiungo un event listener al bottone
buttonEl.addEventListener('click', function(){

    // Inserisco un nuovo elemento che indichi se è consentito l'accesso o meno
    const divEl = document.createElement('div');

    access = false;
   
    // Leggo gli elementi dell'array 
    
    for (let i= 0 ; i < listMail.length; i++){
      
        if (listMail[i] == mail.value){
            access= true;
        }
    }

    // Verifico se l'email inserita è presente nell'array

    if (access){
        divEl.innerHTML ='Puoi accedere!'
        divEl.style.color='green'

    } else{
        divEl.innerHTML =`Mi dispiace, non puoi accedere!`
        divEl.style.color='red'
    }

    // Inserisco risultato in pagina
    buttonEl.insertAdjacentElement ('afterend', divEl);

})



// GIOCO DEI DADI
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

const btnEl = document.getElementById('btn');
const playerNumber = document.getElementById ('player');
const pcNumber = document.getElementById ('pc');
const resultEl = document.getElementById('result')

btnEl.addEventListener('click', function(){
    // Genero un numero random per il giocatore
    
    playerNumber.innerHTML = Math.floor(Math.random() * 6) + 1;
    
    // Genero un numero random per il pc

    pcNumber.innerHTML = Math.floor(Math.random() * 6) + 1;
    
    // Stabilisco il vincitore
    
    if (playerNumber.innerHTML > pcNumber.innerHTML){
        resultEl.innerHTML= 'Hai vinto';
        resultEl.style.backgroundColor='green'

    } else if (playerNumber.innerHTML == pcNumber.innerHTML){
        resultEl.innerHTML= 'Hai pareggiato';
        resultEl.style.backgroundColor='yellow'

    } else {
        resultEl.innerHTML= 'Hai perso'
        resultEl.style.backgroundColor='red'
   
    }
    
})



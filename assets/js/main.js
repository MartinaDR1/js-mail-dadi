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
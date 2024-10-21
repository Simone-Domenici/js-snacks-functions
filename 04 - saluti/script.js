/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.
function sayHi(userName) {
    return `Ciao ${userName}`;
  }

// Invoca la funzione qui e stampa il risultato in console
const greet = sayHi(name);
console.log(greet);


//Risultato atteso se si passa 'Mario': // ciao Mario
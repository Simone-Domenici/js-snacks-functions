/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function findFirst(array, letter) {
    const firstletter = array.filter(name => name[0] === letter);
    return firstletter;
  }

// Invoca la funzione qui e stampa il risultato in console
const result = findFirst(names, 'A')
console.log(result)

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
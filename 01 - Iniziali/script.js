/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function initials(array) {
    let initials = []

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        initials.push(element.charAt(0)) 
    }
    return initials
}

// Invoca la funzione qui e stampa il risultato in console
let firstLetter = initials(names)
console.log(firstLetter)

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
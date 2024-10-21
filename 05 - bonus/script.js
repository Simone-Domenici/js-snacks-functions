/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function greet(userName) {
    const currentTime = new Date('October 21, 2024 18:00:00').getHours();
    let greeting = 'Buonasera'
  
    if (currentTime < 13) {
      greeting = 'Buongiorno';
    } else if (currentTime < 17) {
      greeting = 'Buon pomeriggio';
    }

    return `${greeting} ${userName}.`;
  }



// Invoca la funzione qui e stampa il risultato in console
const message = greet(name)
console.log(message)


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
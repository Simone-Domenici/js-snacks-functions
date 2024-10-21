/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.
function vowelCount(text) {
    const vowels = ['a','e','i','o','u','y']
    let numberVowels = 0
    let textVowels = []

    const lowerCaseText = text.toLowerCase()
    for (let i = 0; i < lowerCaseText.length; i++) {
        if (vowels.includes(lowerCaseText[i])){
            numberVowels++
            textVowels.push(lowerCaseText.charAt(i))
        }
    }
    return (textVowels)
}

// Invoca la funzione qui e stampa il risultato in console
vowelCount(word)
console.log(vowelCount(word))


//Risultato atteso se si passa 'javascript': 3 (a, a, i)
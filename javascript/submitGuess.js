
import { getActiveTiles } from "./pressDeleteKey.js";
import { dictionary } from "./dictionary.js";
import { alertMessage } from "./alertMessage.js";


export function submitUserGuess() {
    // Use this as an array so then I can map/reduce the values
    const activeTiles = [...getActiveTiles()]

    // If the lenght of the tiles is not 5 can't submit the guess
    if (activeTiles.length !== 5){
        alertMessage("Not 5 letters long")
        return 
    }

    let guessLettersArray = []
    
    activeTiles.map((tile) => {
        guessLettersArray.push(tile.dataset.letter)
    
    })
    const guessedWord = guessLettersArray.join('')
    console.log(guessedWord)

    // Check if the guess exist in the dictionart file
    if (!dictionary.includes(guessedWord)) {
        console.log('Word does not exist in our dictionary')
        alertMessage('Word does not exist in our dictionary')

        // TO DO create an alert message 
        return
    }
    else {
        console.log('your word was in the dict')
        alertMessage('Word found in our dictionary')
    }
}


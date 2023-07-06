
import { getActiveTiles } from "./pressDeleteKey.js";
import { dictionary } from "./dictionary.js";
import { alertMessage } from "./alertMessage.js";
import { endGame } from "./startEndGame.js";
import { showColorTile } from "./showTileColor.js";
import { getSecretWord } from "./getSecretWord.js";

let targetWord = getSecretWord()
console.log('Target role is', targetWord)
export function submitUserGuess() {
    // Use this as an array so then I can map/reduce the values
    const activeTiles = [...getActiveTiles()]

    // If the lenght of the tiles is not 5 can't submit the guess
    if (activeTiles.length !== 5){
        alertMessage("Not enough letters!")
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
        alertMessage('Word does not exist in our dictionary!')
        return
    }

    if (targetWord === guessedWord) {
        endGame()
        alertMessage('YOU WON!')
    }
    
    
    activeTiles.forEach((...parameters) => showColorTile(...parameters, guessedWord, targetWord))
}


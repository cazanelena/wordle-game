
import { getActiveTiles } from "./press_delete_key.js";
import { dictionary } from "./dictionary.js";
import { alertMessage } from "./alert_message.js";
import { endGame } from "./start_end_game.js";
import { showColorTile } from "./show_tile_color.js";
import { getSecretWord } from "./get_secret_word.js";

let targetWord = getSecretWord()

console.log('Target word is', targetWord)

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

    // Check if the guess exist in the dictionary file
    if (!dictionary.includes(guessedWord)) {
        alertMessage('Word does not exist in our dictionary!')
        return
    }

    if (targetWord === guessedWord) {
        endGame()
    }
    
    activeTiles.forEach((...parameters) => showColorTile(...parameters, guessedWord, targetWord))
}


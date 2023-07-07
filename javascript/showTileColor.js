import { endGame, startGame } from "./startEndGame.js"
import { alertMessage } from "./alertMessage.js"

export function  showColorTile(tile, index, array, guess, correctWord) {
    const keyboard = document.querySelector("[data-keyboard]")
    const letter = tile.dataset.letter

    const key = keyboard.querySelector(`[data-key="${letter}"i]`)
    
    if (correctWord[index] === letter) {
        tile.dataset.state = 'correct'
        tile.classList.add('correct')
        key.classList.add('correct')
    } else if(correctWord.includes(letter)) {
        tile.dataset.state = 'wrong-location'
        tile.classList.add('wrong-location')
        key.classList.add('wrong-location')
    } else {
        tile.dataset.state = "wrong"
        tile.classList.add("wrong")
        key.classList.add("wrong")
    }

    if (index === array.length - 1){
            startGame()
            checkWinLose(guess, array, correctWord)
        }
}

function checkWinLose (guess, _, correctWord){
    if (guess === correctWord) {
        alertMessage('You Won!', 5000)
        endGame()
        return
    }
    let guessGrid = document.querySelector('[data-guess-grid]')
    let tilesLeft = guessGrid.querySelectorAll(":not([data-letter])")
    if (tilesLeft.length === 0) {
        alertMessage(`You lost! The correct word is ${correctWord}`, null)
    }
}
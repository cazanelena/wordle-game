import { pressKey, deleteKey } from "./press_delete_key.js";
import { submitUserGuess } from "./submit_guess.js";
import { getActiveTiles } from "./press_delete_key.js";

let active = getActiveTiles();
export function startGame() {
    document.addEventListener('click', handleMouseClick);
    document.addEventListener('keydown', handleKeyPress);
}

function handleMouseClick(event) {
    // check if the user clicked on a letter
    if (event.target.matches('[data-key]')){
        // return the letter user pressed
        pressKey(event.target.dataset.key, guessGrid)
        return
    }
    if (event.target.matches('[data-enter]')){
        // If the Enter key was press than submit the guess
        submitUserGuess()
        return 
    }

    if (event.target.matches('[data-delete]')) {
        deleteKey()
        return
    }
}

// Follows the same logic as the handleMouseClick but for the keypress
function handleKeyPress(event) {
    // match is used for regex expression 
    if (event.key.match(/^[a-z]$/)) {
        pressKey(event.key)
        return
    }
    if (event.key === 'Enter') {
        submitUserGuess()
        return
    }
    if (event.key === 'Backspace' || event.key === 'Delete') {
        deleteKey();
        return
    }
}

export function endGame() {
    document.removeEventListener('click', handleMouseClick);
    document.removeEventListener('keydown', handleKeyPress);

}
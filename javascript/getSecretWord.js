import { secretWords } from "./secretWords.js";

export function getSecretWord() {
    let randomIndex = Math.floor(Math.random() * secretWords.length)
    return secretWords[randomIndex]
}


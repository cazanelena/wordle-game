import { secretWords } from "./secret_words_data.js";

export function getSecretWord() {
    let randomIndex = Math.floor(Math.random() * secretWords.length)
    return secretWords[randomIndex]
}


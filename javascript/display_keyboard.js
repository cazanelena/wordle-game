export function displayKeyboard() {
    const keyboard = document.getElementById("keyboard");
    const lettersFirstRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];

    // First row
    const numOfKeysFirst = 10;
    createKeyLetter(numOfKeysFirst, lettersFirstRow, keyboard)

    // Second row
    const spaceDiv = document.createElement('div')
    spaceDiv.classList.add('space')
    keyboard.appendChild(spaceDiv)
    const numOfKeysSecond = 9;
    const lettersSecondRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
    createKeyLetter(numOfKeysSecond, lettersSecondRow, keyboard)
    const spaceDivSecond = document.createElement('div')
    spaceDivSecond.classList.add('space')
    keyboard.appendChild(spaceDivSecond)

    //Third row
    const enterBtn = document.createElement('button');
    enterBtn.setAttribute('class','key large')
    enterBtn.setAttribute('data-enter', '');
    enterBtn.textContent = 'ENTER'
    keyboard.appendChild(enterBtn)

    const numOfKeysThird = 7;
    const lettersThirdRow = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
    createKeyLetter(numOfKeysThird, lettersThirdRow, keyboard)
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class','key large')
    deleteBtn.setAttribute('data-delete', '');
    const svg = `
         <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path fill="var(--color-tone-1)" d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path>
         </svg>
`;
    deleteBtn.innerHTML = svg;
    keyboard.appendChild(deleteBtn)
}

function createKeyLetter(num, symbol, parent) {
    for (let i = 0; i < num; i++){
        const letterBtn = document.createElement('button');
        letterBtn.classList.add('key')
        letterBtn.setAttribute('data-key', symbol[i])
        letterBtn.textContent = symbol[i];
        parent.appendChild(letterBtn)
    }
}
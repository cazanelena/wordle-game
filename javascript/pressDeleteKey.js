const guessGrid = document.querySelector("[data-guess-grid]")

export function pressKey(key) {
    const allActiveTiles = getActiveTiles()
    if (allActiveTiles.length >= 5) return
    // This will select the first tile that doesn't have a data-letter attribuite
    const nextTile = guessGrid.querySelector(':not([data-letter])')
    nextTile.dataset.letter = key.toLowerCase()
    nextTile.textContent = key
    nextTile.dataset.state = 'active'
}

function getActiveTiles() {
    return guessGrid.querySelectorAll("[data-state='active']")
}

export function deleteKey() {
    const activeTiles = getActiveTiles()
    const lastActiveTile = activeTiles[activeTiles.length - 1]
    if (lastActiveTile == null) return
    lastActiveTile.textContent = ''
    delete lastActiveTile.dataset.state
    delete lastActiveTile.dataset.letter

}
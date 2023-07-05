export function displayGridTiles() {
    const gridContainer = document.getElementById('tiles-container');
    console.log(gridContainer)
    const numberOfTiles = 30;

    for (let i = 0; i < numberOfTiles; i++){
        const divTile = document.createElement('div');
        divTile.classList.add('tile')
        gridContainer.appendChild(divTile)
    }

}
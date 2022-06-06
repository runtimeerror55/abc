

function addClass(previous, currentDpTrueCoordinates, playerNumber) {

    if (previous !== -1) {

        for (let i = 0; i < 4; i++) {

            let newBox = document.querySelector(`.${playerNumber}row${previous[i][0]}column${previous[i][1]}`)
            newBox.classList.toggle('border')
        }
    }
    for (let i = 0; i < 4; i++) {

        let newBox = document.querySelector(`.${playerNumber}row${currentDpTrueCoordinates[i][0]}column${currentDpTrueCoordinates[i][1]}`)
        if (!newBox.classList.contains('border')) {

            newBox.classList.toggle('border')
        }
    }
}

function toggleClass(coordinates, hover, playerNumber, blockColor) {

    for (let i = 0; i < 4; i++) {
        let newBox = document.querySelector(`.${playerNumber}row${coordinates[i][0]}column${coordinates[i][1]}`)

        if (hover) {

            newBox.classList.toggle('border')
        } else {
            newBox.classList.toggle(blockColor)
        }
    }
}
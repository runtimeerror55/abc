

socket.on("joined", (payload) => {

    playerNumber = payload
    console.log(playerNumber)
    play = document.querySelector(`.${playerNumber}play`)
    play.addEventListener('click', () => {
        start()
    })
})


socket.on("toggleClass", (coordinates, hover, playerNumber, blockColor) => {

    toggleClass(coordinates, hover, playerNumber, blockColor)
})



socket.on("addClass", (previous, currentDpTrueCoordinates, playerNumber) => {

    addClass(previous, currentDpTrueCoordinates, playerNumber)
})

socket.on("laserBeamRow", (playerNumber, row, width) => {
    laserBeamRow = document.querySelector(`.${playerNumber}laser-beam-row${row}`)
    laserBeamRow.style.width = width
    console.log(laserBeamRow)
})

socket.on("destroy", (playerNumber, row, column, colorClass) => {

    let box = document.querySelector(`.${playerNumber}row${row}column${column}`)
    box.classList.toggle(colorClass)
})

socket.on("game over", (playerIndexValue) => {
    gameOverNode = document.querySelector(`.${arrayOfPlayers[playerIndexValue]}game-over`)
    gameOverNode.style.height = "100%"
})

socket.on("can i reset", (payload) => {
    if (payload) {
        arrayOfPlayers.forEach(element => {
            gameOverNode = document.querySelector(`.${element}game-over`)
            gameOverNode.style.height = "0"
        })

        createGameBoxContent()
        refreshBinaryMatrix(binaryMatrix)
        addGameBoxContentEventListeners()
    }
})
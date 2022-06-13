
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

socket.on("destroy", (fullRows, arrayOftotalNoOfBlocksInEachRow, playerNumber) => {

    destroy(fullRows, arrayOftotalNoOfBlocksInEachRow, playerNumber)
})

socket.on("game over", (playerIndexValue) => {

    arrayOfPlayersGameOver[playerIndexValue].style.height = "100%"
})

socket.on("can i reset", (payload) => {
    if (payload) {
        arrayOfPlayersGameOver.forEach(element => {

            element.style.height = "0"
        })

        removeBlockColorClasses()
        refreshBinaryMatrix(binaryMatrix)
        refreshArrayOftotalNoOfBlocksInEachRow()
        if (isAdmin) {
            generateBlockProperties()
        }
        currentBlockIndex = -1
        score = 0
        arrayOfPlayersScoreBox.forEach(element => {
            element.innerText = "0"
        })

    }
})


socket.on("update score", (playerIndexValue, score) => {

    arrayOfPlayersScoreBox[playerIndexValue].innerText = `${score}`
})


socket.on("generatedBlockProperties", (payload) => {
    console.log(payload)
    arrayOfObjectsOfBlockProperties = payload
})

socket.on("can i start the game", (areAllPlayersConnected, isGameStarted) => {
    if (areAllPlayersConnected && !isGameStarted) {
        start()
    }

})
function start() {

    ++currentBlockIndex
    currentDpTrueCoordinates = -1
    previous = -1
    blockColor = arrayOfObjectsOfBlockProperties[currentBlockIndex]["color"]
    currentCoordinates = deepCloneArray(arrayOfObjectsOfBlockProperties[currentBlockIndex]["coordinates"])
    if (isGameOver(currentCoordinates)) {
        gameOver()
        return
    }
    toggleClass(currentCoordinates, false, playerNumber, blockColor)
    socket.emit("toggleClass", currentCoordinates, false, playerNumber, blockColor)

    let blockFallingInterval = setInterval(() => {

        if (moveTheCoordinates(currentCoordinates, "down", 24)) {


            currentCoordinates = down(currentCoordinates, 1, 0)
        }
        else {

            clearInterval(blockFallingInterval)
            clearInterval(dpInterval)
            markTheCoordinates(currentCoordinates)
            isRowFull(currentCoordinates)

            if (currentDpTrueCoordinates != -1) {

                toggleClass(currentDpTrueCoordinates, true, playerNumber, blockColor)
                socket.emit("toggleClass", currentDpTrueCoordinates, true, playerNumber, blockColor)
                previous = -1
                currentDpTrueCoordinates = -1
            }

            start()
        }
    }, 500)
}


function moveTheCoordinates(inputCoordinates, direction, column) {

    if (direction == "down") {

        return inputCoordinates.every(element => (element[0] < column) && (binaryMatrix[element[0] + 1][element[1]] == 0))
    }
    else if (direction == "left") {

        return inputCoordinates.every(element => (element[1] > column) && (binaryMatrix[element[0]][element[1] - 1] == 0))
    }
    else if (direction == "right") {

        return inputCoordinates.every(element => (element[1] < column) && (binaryMatrix[element[0]][element[1] + 1] == 0))
    }


}


function isRowFull(currentCoordinates) {

    let i = 0


    let fullRows = currentCoordinates.flat().filter((element, index) => index % 2 == 0 && arrayOftotalNoOfBlocksInEachRow[element] == 15)
    fullRows = [...new Set(fullRows)].sort((a, b) => a - b)

    if (fullRows.length) {

        socket.emit("destroy", fullRows, arrayOftotalNoOfBlocksInEachRow, playerNumber, false)
        destroy(fullRows, arrayOftotalNoOfBlocksInEachRow, playerNumber, true)
        if (fullRows.length) {
            updateScore(fullRows.length)
        }

    }



}



function isRotationPossible(rotatedCoordinates) {

    return rotatedCoordinates.every(element => {

        return element[0] <= 24 && element[1] <= 14 && binaryMatrix[element[0]][element[1]] == 0
    })
}


function isGameOver(currentCoordinates) {
    return currentCoordinates.some(element => {
        return binaryMatrix[element[0]][element[1]] == 1
    });
}
// generate new coordinates for moving the shape in desired direction
function generateNewCoordinates(currentCoordinates, rowValue, columnValue) {

    return currentCoordinates.map(element => [element[0] + rowValue, element[1] + columnValue])
}

// move right
function right(currentCoordinates, rowValue, columnValue) {

    toggleClass(currentCoordinates, false, playerNumber, blockColor)
    socket.emit("toggleClass", currentCoordinates, false, playerNumber, blockColor)
    let newCoordinates = generateNewCoordinates(currentCoordinates, rowValue, columnValue)
    toggleClass(newCoordinates, false, playerNumber, blockColor)
    socket.emit("toggleClass", newCoordinates, false, playerNumber, blockColor)
    return newCoordinates
}

// move down
function down(currentCoordinates, rowValue, columnValue) {

    toggleClass(currentCoordinates, false, playerNumber, blockColor)
    socket.emit("toggleClass", currentCoordinates, false, playerNumber, blockColor)
    let newCoordinates = generateNewCoordinates(currentCoordinates, rowValue, columnValue)
    toggleClass(newCoordinates, false, playerNumber, blockColor)
    socket.emit("toggleClass", newCoordinates, false, playerNumber, blockColor)
    return newCoordinates
}

// move left
function left(currentCoordinates, rowValue, columnValue) {

    toggleClass(currentCoordinates, false, playerNumber, blockColor)
    socket.emit("toggleClass", currentCoordinates, false, playerNumber, blockColor)
    let newCoordinates = generateNewCoordinates(currentCoordinates, rowValue, columnValue)
    toggleClass(newCoordinates, false, playerNumber, blockColor)
    socket.emit("toggleClass", newCoordinates, false, playerNumber, blockColor)
    return newCoordinates
}




function mouseEnter(e) {

    mouseCoordinates = calculateMouseCoordinates(e)
    refreshTheDpArray(dp)


    isDpTrue = shortestPath(deepCloneArray(currentCoordinates), 0, dp, 2)
    if (isDpTrue) {

        fireball.play()
        addClass(previous, currentDpTrueCoordinates, playerNumber)
        socket.emit("addClass", previous, currentDpTrueCoordinates, playerNumber)
        previous = -1
        addDpInterval()
    }
    else {
        bump.play()
    }

}


function addDpInterval() {

    dpInterval = setInterval(() => {

        refreshTheDpArray(dp)
        isDpTrue = shortestPath(deepCloneArray(currentCoordinates), 0, dp, 2)
        if (isDpTrue) {

            addClass(previous, currentDpTrueCoordinates, playerNumber)
            socket.emit("addClass", previous, currentDpTrueCoordinates, playerNumber)

        }
        else {
            bump.play()
            clearInterval(dpInterval)

            if (currentDpTrueCoordinates != -1) {

                toggleClass(currentDpTrueCoordinates, true, playerNumber, blockColor)
                socket.emit("toggleClass", currentDpTrueCoordinates, true, playerNumber, blockColor)
            }

            previous = -1
            currentDpTrueCoordinates = -1
        }


    }, 100);
}

function mouseLeave() {

    clearInterval(dpInterval)
    if (currentDpTrueCoordinates != -1) {

        toggleClass(currentDpTrueCoordinates, true, playerNumber, blockColor)
        socket.emit("toggleClass", currentDpTrueCoordinates, true, playerNumber, blockColor)
        previous = -1
        currentDpTrueCoordinates = -1
    }
}


function mouseClick() {
    if (isDpTrue) {
        whipShot.play()
        clearInterval(dpInterval)
        toggleClass(currentDpTrueCoordinates, true, playerNumber, blockColor)
        socket.emit("toggleClass", currentDpTrueCoordinates, true, playerNumber, blockColor)
        toggleClass(currentCoordinates, false, playerNumber, blockColor)
        socket.emit("toggleClass", currentCoordinates, false, playerNumber, blockColor)
        toggleClass(currentDpTrueCoordinates, false, playerNumber, blockColor)
        socket.emit("toggleClass", currentDpTrueCoordinates, false, playerNumber, blockColor)
        currentCoordinates = currentDpTrueCoordinates
        previous = -1
        currentDpTrueCoordinates = -1
    }
}

function mouseWheel() {

    let rotatedCoordinates = rotateTheCoordinates(currentCoordinates)
    if (isRotationPossible(rotatedCoordinates)) {
        fireball.play()
        toggleClass(currentCoordinates, false, playerNumber, blockColor)
        socket.emit("toggleClass", currentCoordinates, false, playerNumber, blockColor)
        toggleClass(rotatedCoordinates, false, playerNumber, blockColor)
        socket.emit("toggleClass", rotatedCoordinates, false, playerNumber, blockColor)
        currentCoordinates = rotatedCoordinates
    }
    else {
        bump.play()
    }
}

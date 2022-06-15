
function calculateMouseCoordinates(e) {

    let target = e.target
    let className = target.className
    let position = className.search(/[0-9]column/)
    let row = Number(className.substring(position - 1, position + 1))

    // chech if row is NaN
    if (!(row == row)) {
        row = Number(className[position])
    }


    position = className.search(/column[0-9]/)
    let column = Number(className.substring(position + 6))
    return [row, column]

}


function sumOfCoordinates(currentCoordinates) {
    let sum = [0, 0];
    currentCoordinates.forEach((element) => {
        sum[0] = sum[0] + element[0]
        sum[1] = sum[1] + element[1]
    })
    return sum
}



function rotateTheCoordinates(currentCoordinates) {
    let rotatedCoordinates = currentCoordinates.map((element) => {
        return [(element[1] - currentCoordinates[0][1]) + currentCoordinates[0][0], -(element[0] - currentCoordinates[0][0]) + currentCoordinates[0][1]]
    })

    return rotatedCoordinates
}


function markTheCoordinates(currentCoordinates) {

    currentCoordinates.forEach(element => {
        binaryMatrix[element[0]][element[1]] = 1
        binaryMatrix[element[0]][15]++;
        arrayOftotalNoOfBlocksInEachRow[element[0]]++
    });
}






function destroy(fullRows, arrayOftotalNoOfBlocksInEachRow, playerNumber, flag) {

    fullRows.forEach(row => {

        laserInSpace.play()
        let laserBeamRow = document.querySelector(`.${playerNumber}laser-beam-row${row}`)
        laserBeamRow.style.width = "360px"
        socket.emit("laserBeamRow", playerNumber, row, "360px")

        setTimeout(() => {

            glassBreak.play()
            for (let i = 0; i < 15; i++) {

                let box = document.querySelector(`.${playerNumber}row${row}column${i}`)
                let position = box.className.search(/active[0-9]/)
                let colorClass = box.className.substring(position, position + 7)
                box.classList.toggle(colorClass)
                if (flag) {
                    binaryMatrix[row][i] = 0
                }
            }

            arrayOftotalNoOfBlocksInEachRow[row] = 0
            let k = row - 1

            while (arrayOftotalNoOfBlocksInEachRow[k]) {

                for (let i = 0; i < 15; i++) {

                    let box = document.querySelector(`.${playerNumber}row${k}column${i}`)
                    let position = box.className.search(/active[0-9]/)

                    if (position != -1) {

                        let box1 = document.querySelector(`.${playerNumber}row${k + 1}column${i}`)
                        let colorClass = box.className.substring(position, position + 7)
                        box.classList.toggle(colorClass)
                        box1.classList.toggle(colorClass)

                        if (flag) {

                            binaryMatrix[k][i] = 0
                            binaryMatrix[k + 1][i] = 1
                        }
                    }

                }

                arrayOftotalNoOfBlocksInEachRow[k + 1] = arrayOftotalNoOfBlocksInEachRow[k]
                arrayOftotalNoOfBlocksInEachRow[k] = 0
                k--
            }

            laserBeamRow.style.width = '0px'
            socket.emit("laserBeamRow", playerNumber, row, "0px")
        }, 400)
    })

}



function deepCloneArray(input) {

    return input.map(element => Array.isArray(element) ? deepCloneArray(element) : element)
}






function moveTheCoordinatesToTheMouse(inputCoordinates, direction, column) {

    while (true) {

        if (moveTheCoordinates(inputCoordinates, direction, column)) {

            inputCoordinates = direction == "right" ? generateNewCoordinates(inputCoordinates, 0, 1) : generateNewCoordinates(inputCoordinates, 0, -1)
        }
        else {

            break
        }

    }

    let isTrue = inputCoordinates.some(element => element[1] == column)

    if (isTrue) {

        toggleClass(currentCoordinates, false, playerNumber, blockColor)
        currentCoordinates = inputCoordinates
        return true;
    }

    return false;
}


function gameOver() {

    arrayOfPlayersGameOver[playerIndexValue].style.height = "100%"
    addResetButtonEventListeners()
    socket.emit("game over", roomIdInputvalue, playerIndexValue)
}

function updateScore(length) {
    score += length * (100 * length)
    arrayOfPlayersScoreBox[playerIndexValue].innerText = `${score}`
    socket.emit("update score", playerIndexValue, score)
}
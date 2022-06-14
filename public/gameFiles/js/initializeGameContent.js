function createDpArray() {
    dp = new Array(100)
    for (let i = 0; i < 100; i++) {

        dp[i] = new Array(60)

        for (let j = 0; j < 60; j++) {

            dp[i][j] = new Array(3)

            for (let k = 0; k < 3; k++) {

                dp[i][j][k] = -1
            }

        }
    }
}



function createBinaryMatrix() {
    binaryMatrix = new Array(25)
    for (let i = 0; i < 25; i++) {

        binaryMatrix[i] = new Array(16)
    }

    for (let i = 0; i < 25; i++) {

        for (let j = 0; j < 16; j++) {

            binaryMatrix[i][j] = 0
        }
    }
}


function createGameBoxContent() {

    for (let playerIndex = 0; playerIndex < matchTypeValue; playerIndex++) {
        arrayOfPlayersGameBoxContainer[playerIndex].innerHTML = ""
        for (let row = 0; row < 25; row++) {


            let createRow = document.createElement("div")
            let laserBeam = document.createElement("span")
            laserBeam.classList.add('laser-beam', `${arrayOfPlayers[playerIndex]}laser-beam-row${row}`)
            createRow.appendChild(laserBeam)
            createRow.classList.add('rows', `${arrayOfPlayers[playerIndex]}row${row}`)
            arrayOfPlayersGameBoxContainer[playerIndex].appendChild(createRow)

            for (let column = 0; column < 15; column++) {

                let createColumn = document.createElement("span")
                createColumn.classList.add('small-boxes', `${arrayOfPlayers[playerIndex]}small-boxes`, `${arrayOfPlayers[playerIndex]}row${row}column${column}`)
                createRow.appendChild(createColumn)

            }
        }
    }
}


function refreshTheDpArray(dp) {

    for (let i = 0; i < 100; i++) {

        for (let j = 0; j < 60; j++) {

            for (let k = 0; k < 3; k++) {
                dp[i][j][k] = -1
            }

        }
    }
}


function refreshBinaryMatrix(binaryMatrix) {
    for (let i = 0; i < 25; i++) {

        for (let j = 0; j < 16; j++) {

            binaryMatrix[i][j] = 0
        }
    }
}


function generateBlockProperties() {

    for (let i = 0; i < 1000; i++) {

        let randomBlockIndex = Math.floor(Math.random() * 5)
        arrayOfObjectsOfBlockProperties[i] = {

            "coordinates": coordinatesOfShapes[randomBlockIndex],
            "color": arrayOfColorClasses[randomBlockIndex]
        }
    }
    socket.emit("generatedBlockProperties", arrayOfObjectsOfBlockProperties)
}

function createArrayOftotalNoOfBlocksInEachRow() {

    arrayOftotalNoOfBlocksInEachRow = new Array(25)

    for (let i = 0; i < 25; i++) {

        arrayOftotalNoOfBlocksInEachRow[i] = 0
    }
}


function refreshArrayOftotalNoOfBlocksInEachRow() {

    for (let i = 0; i < 25; i++) {

        arrayOftotalNoOfBlocksInEachRow[i] = 0
    }
}


function createArrayOfPlayersGameBoxContainer() {
    arrayOfPlayersGameBoxContainer = new Array(matchTypeValue)
    for (let playerIndex = 0; playerIndex < matchTypeValue; playerIndex++) {
        arrayOfPlayersGameBoxContainer[playerIndex] = document.querySelector(`.${arrayOfPlayers[playerIndex]}gbc`)
    }
}

function createArrayOfPlayersGameOver() {

    arrayOfPlayersGameOver = new Array(matchTypeValue)

    for (let playerIndex = 0; playerIndex < matchTypeValue; playerIndex++) {

        arrayOfPlayersGameOver[playerIndex] = document.querySelector(`.${arrayOfPlayers[playerIndex]}game-over`)
    }
}

function removeBlockColorClasses() {

    for (let playerIndex = 0; playerIndex < matchTypeValue; playerIndex++) {

        for (let row = 0; row < 25; row++) {

            for (let column = 0; column < 15; column++) {

                let block = document.querySelector(`.${arrayOfPlayers[playerIndex]}row${row}column${column}`)
                let position = block.className.search(/active[0-9]/)

                if (position != -1) {

                    let colorClass = block.className.substring(position, position + 7)
                    block.classList.toggle(colorClass)
                }
            }
        }
    }
}


function createArrayOfPlayersScorebox() {
    arrayOfPlayersScoreBox = new Array(matchTypeValue)

    for (let playerIndex = 0; playerIndex < matchTypeValue; playerIndex++) {

        arrayOfPlayersScoreBox[playerIndex] = document.querySelector(`.${arrayOfPlayers[playerIndex]}score`)
    }
}

function createArrayOfPlayersReadyButton() {
    arrayOfPlayersReadyButton = new Array(matchTypeValue)

    for (let playerIndex = 1; playerIndex < matchTypeValue; playerIndex++) {

        arrayOfPlayersReadyButton[playerIndex] = document.querySelector(`.${arrayOfPlayers[playerIndex]}ready`)
    }
}
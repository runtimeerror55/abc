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

    for (let playerIndex = 0; playerIndex < 2; playerIndex++) {
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
}
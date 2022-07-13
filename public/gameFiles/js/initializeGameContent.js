function createDpArray()
{
    dp = new Array(100)
    for (let i = 0; i < 100; i++)
    {

        dp[i] = new Array(60)

        for (let j = 0; j < 60; j++)
        {

            dp[i][j] = new Array(3)

            for (let k = 0; k < 3; k++)
            {

                dp[i][j][k] = -1
            }

        }
    }
}



function createBinaryMatrix()
{
    binaryMatrix = new Array(25)
    for (let i = 0; i < 25; i++)
    {

        binaryMatrix[i] = new Array(16)
    }

    for (let i = 0; i < 25; i++)
    {

        for (let j = 0; j < 16; j++)
        {

            binaryMatrix[i][j] = 0
        }
    }
}


function createGameBoxContent()
{

    for (let playerIndex = 0; playerIndex < matchTypeValue; playerIndex++)
    {
        arrayOfPlayersGameBoxContainer[playerIndex].innerHTML = ""
        for (let row = 0; row < 25; row++)
        {


            createRow = document.createElement("div")
            laserBeam = document.createElement("span")
            laserBeam.classList.add('laser-beam', `${arrayOfPlayers[playerIndex]}laser-beam-row${row}`)
            createRow.appendChild(laserBeam)
            createRow.classList.add('rows', `${arrayOfPlayers[playerIndex]}row${row}`)
            arrayOfPlayersGameBoxContainer[playerIndex].appendChild(createRow)

            for (let column = 0; column < 15; column++)
            {

                createColumn = document.createElement("div")
                createColumn.classList.add('small-boxes', `${arrayOfPlayers[playerIndex]}small-boxes`, `${arrayOfPlayers[playerIndex]}row${row}column${column}`)
                createRow.appendChild(createColumn)

            }
        }
    }
}


function refreshTheDpArray(dp)
{

    for (let i = 0; i < 100; i++)
    {

        for (let j = 0; j < 60; j++)
        {

            for (let k = 0; k < 3; k++)
            {
                dp[i][j][k] = -1
            }

        }
    }
}


function refreshBinaryMatrix(binaryMatrix)
{
    for (let i = 0; i < 25; i++)
    {

        for (let j = 0; j < 16; j++)
        {

            binaryMatrix[i][j] = 0
        }
    }
}


function generateBlockProperties()
{
    arrayOfObjectsOfBlockProperties = new Array(1000)
    arrayOfColorClasses
    for (let i = 0; i < 1000; i++)
    {

        randomBlockIndex = Math.floor(Math.random() * 5)
        arrayOfObjectsOfBlockProperties[i] = {

            "coordinates": coordinatesOfShapes[randomBlockIndex],
            "color": arrayOfColorClasses[randomBlockIndex]
        }
    }
    socket.emit("generatedBlockProperties", roomIdInputvalue, arrayOfObjectsOfBlockProperties)
}

function createArrayOftotalNoOfBlocksInEachRow()
{

    arrayOftotalNoOfBlocksInEachRow = new Array(25)

    for (let i = 0; i < 25; i++)
    {

        arrayOftotalNoOfBlocksInEachRow[i] = 0
    }
}


function refreshArrayOftotalNoOfBlocksInEachRow()
{

    for (let i = 0; i < 25; i++)
    {

        arrayOftotalNoOfBlocksInEachRow[i] = 0
    }
}


function createArrayOfPlayersGameBoxContainer()
{
    arrayOfPlayersGameBoxContainer = new Array(matchTypeValue)
    for (let playerIndex = 0; playerIndex < matchTypeValue; playerIndex++)
    {
        arrayOfPlayersGameBoxContainer[playerIndex] = document.querySelector(`.${arrayOfPlayers[playerIndex]}gbc`)
    }
}

function createArrayOfPlayersGameOver()
{

    arrayOfPlayersGameOver = new Array(matchTypeValue)

    for (let playerIndex = 0; playerIndex < matchTypeValue; playerIndex++)
    {

        arrayOfPlayersGameOver[playerIndex] = document.querySelector(`.${arrayOfPlayers[playerIndex]}game-over`)
    }
}

function removeBlockColorClasses()
{

    for (let playerIndex = 0; playerIndex < matchTypeValue; playerIndex++)
    {

        for (let row = 0; row < 25; row++)
        {

            for (let column = 0; column < 15; column++)
            {

                block = document.querySelector(`.${arrayOfPlayers[playerIndex]}row${row}column${column}`)
                position = block.className.search(/active[0-9]/)

                if (position != -1)
                {

                    colorClass = block.className.substring(position, position + 7)
                    block.classList.toggle(colorClass)
                }
            }
        }
    }
}


function createArrayOfPlayersScorebox()
{
    arrayOfPlayersScoreBox = new Array(matchTypeValue)

    for (let playerIndex = 0; playerIndex < matchTypeValue; playerIndex++)
    {

        arrayOfPlayersScoreBox[playerIndex] = document.querySelector(`.${arrayOfPlayers[playerIndex]}score`)
    }
}

function createArrayOfPlayersReadyButton()
{
    arrayOfPlayersReadyButton = new Array(matchTypeValue)

    for (let playerIndex = 1; playerIndex < matchTypeValue; playerIndex++)
    {

        arrayOfPlayersReadyButton[playerIndex] = document.querySelector(`.${arrayOfPlayers[playerIndex]}ready`)
    }
}



function initializeGameArenaPageDomVariables()
{

    resetButton = document.querySelector(`.${playerNumber}reset`)
    playButton = document.querySelector(`.${playerNumber}play`)
    exitButton = document.querySelector(".exit")
    createArrayOfPlayersGameBoxContainer()
    createArrayOfPlayersGameOver()
    createArrayOfPlayersScorebox()
    createArrayOfPlayersReadyButton()
}

function initializeGameArenaPageAllVariables()
{

    initializeGameArenaPageDomVariables()
    createDpArray()
    createBinaryMatrix()
    createArrayOftotalNoOfBlocksInEachRow()
    currentDpTrueCoordinates = -1
    arrayOfColorClasses = ["active0", "active1", "active2", "active3", "active4"]
    currentBlockIndex = -1
    coordinatesOfShapes = [

        [[0, 5], [1, 5], [2, 5], [2, 6]], // l shape

        [[0, 5], [0, 6], [0, 7], [1, 6]], // t shape

        [[0, 5], [0, 6], [1, 5], [1, 6]], // square

        [[0, 5], [0, 6], [0, 7], [0, 8]], // line shape

        [[0, 5], [1, 5], [1, 6], [2, 6]] // skew shape
    ]
    currentCoordinates = [[0, 5], [1, 5], [2, 5], [2, 6]]
    randomShape = Math.floor(Math.random() * 5)
    mouseCoordinates = [-1, -1]
    blockColor = -1
    isDpTrue = false
    dpInterval = undefined
    previous = -1
    score = 0
    play = undefined
    if (isAdmin)
    {
        generateBlockProperties()
    }

}

function initializeGameArenaPageAllEventListeners()
{

    addGameBoxContentEventListeners()
    addBodyEventListeners()
    addExitButtonEventListeners()
    if (isAdmin)
    {
        addPlayButtonEventListeners()
    }
    else
    {
        addReadyButtonEventListeners()
    }
}

function initializeGameArenaPageAllSoundFiles()
{

    clear = new Audio('/gameFiles/sound/clear.wav');
    fall = new Audio('/gameFiles/sound/fall.wav')
    selection = new Audio('/gameFiles/sound/selection.wav')
    fireball = new Audio('/gameFiles/sound/fireball.wav')
    bump = new Audio('/gameFiles/sound/bump.wav')
    whipShot = new Audio('/gameFiles/sound/whipShot.wav')
    laserGunShot = new Audio('/gameFiles/sound/laserGunShot.wav')
    laserInSpace = new Audio('/gameFiles/sound/laserInSpace.wav')
    fallingHit = new Audio('/gameFiles/sound/fallingHit.wav')
    windowBreak = new Audio('/gameFiles/sound/windowBreak.mp3')
    glassBreak = new Audio('/gameFiles/sound/glassBreak.mp3')


}

function initializeGameArenaPageAllThings()
{

    initializeGameArenaPageAllVariables()
    createGameBoxContent()
    initializeGameArenaPageAllEventListeners()
    initializeGameArenaPageAllSoundFiles()

}
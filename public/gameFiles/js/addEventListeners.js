


function addGameBoxContentEventListeners()
{


    for (let row = 0; row < 25; row++)
    {

        for (let column = 0; column < 15; column++)
        {

            let currentBox = document.querySelector(`.${playerNumber}row${row}column${column}`)
            currentBox.addEventListener('mouseenter', (e) =>
            {
                mouseEnter(e)
            })
            currentBox.addEventListener('mouseleave', () =>
            {
                mouseLeave()
            })
            currentBox.addEventListener('click', () =>
            {
                mouseClick()
            })
            currentBox.addEventListener('wheel', () =>
            {
                mouseWheel()
            })

        }
    }

}


function addBodyEventListeners()
{
    body.addEventListener('keydown', (e) =>
    {

        if (e.key == "ArrowRight")
        {


            if (moveTheCoordinates(currentCoordinates, "right", 14))
            {
                fireball.play()
                currentCoordinates = right(currentCoordinates, 0, 1)
            }
            else
            {
                bump.play()
            }


        }
        else if (e.key == "ArrowDown")
        {

            if (moveTheCoordinates(currentCoordinates, "down", 24))
            {
                fireball.play()
                currentCoordinates = down(currentCoordinates, 1, 0)
            }
            else
            {
                bump.play()
            }
        }
        else if (e.key == "ArrowLeft")
        {

            if (moveTheCoordinates(currentCoordinates, "left", 0))
            {
                fireball.play()
                currentCoordinates = left(currentCoordinates, 0, -1)
            } else
            {
                bump.play()
            }
        }
        else if (e.key == " ")
        {
            let rotatedCoordinates = rotateTheCoordinates(currentCoordinates)
            if (isRotationPossible(rotatedCoordinates))
            {
                fireball.play()
                toggleClass(currentCoordinates, false, playerNumber, blockColor)
                socket.emit("toggleClass", currentCoordinates, false, playerNumber, blockColor)
                toggleClass(rotatedCoordinates, false, playerNumber, blockColor)
                socket.emit("toggleClass", rotatedCoordinates, false, playerNumber, blockColor)
                currentCoordinates = rotatedCoordinates
            }
            else
            {
                bump.play()
            }
        }
    })
}


function addResetButtonEventListeners()
{

    resetButton.addEventListener("click", () =>
    {
        if (isAdmin)
        {
            socket.emit("can i reset", roomIdInputvalue)
        }
    })
}



function addPlayButtonEventListeners()
{

    playButton.addEventListener("click", () =>
    {
        socket.emit("can i start the game", roomIdInputvalue)
    })
}


function addReadyButtonEventListeners()
{
    arrayOfPlayersReadyButton[playerIndexValue].addEventListener("click", () =>
    {

        socket.emit("can i toggle player ready state", roomIdInputvalue, playerIndexValue)

    })
}


function addExitButtonEventListeners()
{
    exitButton.addEventListener("click", () =>
    {
        socket.emit("player exited game arena", roomIdInputvalue)
        transitionUpward()
        setTimeout(() =>
        {

            pageHistory.currentPage.style.display = "none"
            pageHistory.currentPage = document.querySelector(".room-dashboard-page")
            pageHistory.currentPage.style.display = "block"
            cssLink.href = "/roomDashboardFiles/css/style.css"
            pageHistory.currentPlayPageCssFilePath = "/roomDashboardFiles/css/style.css"
            pageHistory.currentPlayPage = pageHistory.currentPage
        }, 500)
        setTimeout(transitionClose, 1500)
    })
}
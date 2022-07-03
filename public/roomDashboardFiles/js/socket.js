socket.on("connected player", (playerIndex, numberOfconnectedPlayers, flag) => {

    if (flag) {
        playerNumber = arrayOfPlayers[playerIndex]
        if (playerIndex == 0) {
            isAdmin = true
        }
        playerIndexValue = playerIndex
        disconnectButtons[playerIndex].style.display = "block"
    }

    if (numberOfconnectedPlayers == matchTypeValue && isAdmin) {
        goButton.style.display = "block"
    }
    connectButtons[playerIndex].classList.add("active")
    connectButtons[playerIndex].innerText = "connected"



})


socket.on("disconnected player", (playerIndex, flag) => {
    if (flag) {
        playerNumber = ""
        if (isAdmin) {
            isAdmin = false
        }
        playerIndexValue = -1
        disconnectButtons[playerIndex].style.display = "none"

    }
    connectButtons[playerIndex].classList.remove("active")
    connectButtons[playerIndex].innerText = "connect"
    goButton.style.display = "none"
})




socket.on("anyone connected", (connectedPlayersIndexes) => {
    console.log(connectedPlayersIndexes)
    connectedPlayersIndexes?.forEach((element) => {

        connectButtons[element].classList.add("active")
        connectButtons[element].innerText = "connected"
        disconnectButtons[element].style.display = "none"

    });
})


socket.on("enter the game arena", () => {

    insertGameHtml()
    pageHistory.currentPage.style.display = "none"
    pageHistory.currentPage = document.querySelector(".game-arena-page")
    pageHistory.currentPage.style.display = "block"
    pageHistory.currentPlayPage = pageHistory.currentPage
    pageHistory.currentPlayPageCssFilePath = "/gameFiles/css/style.css"
})


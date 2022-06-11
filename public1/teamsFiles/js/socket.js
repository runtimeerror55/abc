socket.on("connected player", (playerIndex, numberOfconnectedPlayers, flag) => {

    if (flag) {
        playerNumber = arrayOfPlayers[playerIndex]
        playerIndexValue = playerIndex
        disconnectButtons[playerIndex].style.display = "block"
    }

    if (numberOfconnectedPlayers == matchTypeValue) {
        goButton.style.display = "block"
    }
    connectButtons[playerIndex].classList.add("active")
    connectButtons[playerIndex].innerText = "connected"
    console.log(numberOfconnectedPlayers)

})


socket.on("disconnected player", (playerIndex, flag) => {
    if (flag) {
        playerNumber = ""
        playerIndexValue = -1
        disconnectButtons[playerIndex].style.display = "none"

    }
    connectButtons[playerIndex].classList.remove("active")
    connectButtons[playerIndex].innerText = "connect"
    goButton.style.display = "none"
})




socket.on("anyone connected", (connectedPlayersIndexes) => {
    console.log(connectedPlayersIndexes)
    connectedPlayersIndexes?.forEach((element, index) => {
        if (element) {
            connectButtons[index].classList.add("active")
            connectButtons[index].innerText = "connected"
            disconnectButtons[index].style.display = "none"
        }
    });
})
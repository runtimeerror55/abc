function addConnectButtonsEventListeners() {
    connectButtons.forEach((element, index) => {
        element.addEventListener("click", function () {
            if (!connectButtons[index].classList.contains("active") && playerNumber == "") {
                socket.emit("connect player", roomIdInputvalue, index, matchTypeValue)
            }
        })
    });
}


function addDisconnectButtonsEventListeners() {
    disconnectButtons.forEach((element, index) => {

        element.addEventListener("click", function () {

            socket.emit("disconnect player", roomIdInputvalue, index)
        })
    })
}


function addGoButtonEventListeners() {
    goButton.addEventListener("click", () => {
        socket.emit("enter the game arena", roomIdInputvalue)
        insertGameHtml()
    })
}

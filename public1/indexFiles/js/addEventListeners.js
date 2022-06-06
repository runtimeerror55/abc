
function addRoomButtonsEventListeners() {

    createRoomIdButton.addEventListener("click", () => {

        roomIdOutput.innerText = socketId
    })
    joinRoomIdButton.addEventListener("click", () => {

        roomIdInputvalue = roomIdInput.value
        matchTypeIndex = Number(matchType.value)

        if (roomIdInputvalue != "") {
            socket.emit("join room", roomIdInputvalue)
            insertTeamsHtml()
        }
    })
}
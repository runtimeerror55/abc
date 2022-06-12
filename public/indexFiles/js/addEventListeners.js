
function addRoomButtonsEventListeners() {

    createRoomIdButton.addEventListener("click", () => {

        roomIdOutput.innerText = socketId
    })
    joinRoomIdButton.addEventListener("click", () => {

        roomIdInputvalue = roomIdInput.value
        matchTypeValue = Number(matchType.value)

        if (roomIdInputvalue != "") {
            socket.emit("join room", roomIdInputvalue)
            insertTeamsHtml()
        }
    })
}


function addMatchTypeEventListeners() {
    matchType.addEventListener("input", (e) => {
        matchTypeValue = e.target.value
    })
}
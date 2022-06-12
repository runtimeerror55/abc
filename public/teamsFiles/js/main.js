addConnectButtonsEventListeners()
addDisconnectButtonsEventListeners()
addGoButtonEventListeners()

if (roomIdInputvalue != "") {
    socket.emit("anyone connected", roomIdInputvalue)
}

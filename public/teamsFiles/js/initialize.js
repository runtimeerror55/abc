function initializeDomVariables() {
    connectButtons = document.querySelectorAll('.teams-container__connect-button')
    disconnectButtons = document.querySelectorAll('.teams-container__disconnect-button')
    goButton = document.querySelector(".go-button")

}

function initializeAllVariables() {
    initializeDomVariables()
}


function initializeAllEventListeners() {

    addConnectButtonsEventListeners()
    addDisconnectButtonsEventListeners()
    addGoButtonEventListeners()

}

function initializeAnyoneConnected() {
    if (roomIdInputvalue != "") {
        socket.emit("anyone connected", roomIdInputvalue)
    }
}

function initializeAllthings() {

    initializeAllVariables()
    initializeAllEventListeners()
    initializeAnyoneConnected()

}
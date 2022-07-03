function initializeRommDashboardPageDomVariables() {


    matchType = document.querySelector(".g-s-c__match-type")
    roomDashboardPageArticlesContainer = document.querySelector(".articles-container")
    teamsContainer = undefined
    exitRoomButton = document.querySelector(".g-s-c__exit-room")
    applySettingsButton = document.querySelector(".g-s-c__apply-button")
}

function initializeRommDashboardPageTeamsDomVariables() {

    connectButtons = document.querySelectorAll('.teams-container__connect-button')
    disconnectButtons = document.querySelectorAll('.teams-container__disconnect-button')
    goButton = document.querySelector(".go-button")
}

function initializeRommDashboardPageAllVariables() {
    initializeRommDashboardPageDomVariables()
}

function initializeRommDashboardPageAllEventListeners() {
    addApplySettingsButtonEventListeners()
    addExitRoomButtonEventListeners()
}

function initializeRommDashboardPageTeamsDashBoardEventListeners() {

    addConnectButtonsEventListeners()
    addDisconnectButtonsEventListeners()
    addGoButtonEventListeners()

}

function initializeAnyoneConnected() {
    if (roomIdInputvalue != "") {
        socket.emit("anyone connected", roomIdInputvalue)
    }
}

function initializeRommDashboardPageAllthings() {

    initializeRommDashboardPageAllVariables()
    initializeRommDashboardPageAllEventListeners()


}
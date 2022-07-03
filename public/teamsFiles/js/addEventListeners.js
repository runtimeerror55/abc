function addConnectButtonsEventListeners() {
    connectButtons.forEach((element, index) => {
        element.addEventListener("click", function () {
            if (!connectButtons[index].classList.contains("active") && playerNumber == "") {
                socket.emit("connect player", roomIdInputvalue, index, matchTypeValue, userProfileInformation)
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

        pageHistory.currentPage.style.display = "none"
        insertGameHtml()
        pageHistory.currentPage = document.querySelector(".game-arena-page")
        pageHistory.currentPlayPage = pageHistory.currentPage
        pageHistory.currentPlayPageCssFilePath = "/gameFiles/css/style.css"

    })
}


function addApplySettingsButtonEventListeners() {
    applySettingsButton.addEventListener("click", () => {
        matchTypeValue = Number(matchType.value)
        insertTeamsDashboardHtml()
        initializeRommDashboardPageTeamsDomVariables()
        initializeRommDashboardPageTeamsDashBoardEventListeners()
        initializeAnyoneConnected()
    })
}

function addExitRoomButtonEventListeners() {
    exitRoomButton.addEventListener("click", () => {

        pageHistory.currentPage.style.display = "none"
        pageHistory.currentPage = document.querySelector(".room-settings-page")
        pageHistory.currentPage.style.display = "block"
        cssLink.href = "/gameSettingsFiles/css/style.css"
        pageHistory.currentPlayPageCssFilePath = "/gameSettingsFiles/css/style.css"
        pageHistory.currentPlayPage = pageHistory.currentPage

        roomIdInputvalue = ""

    })
}
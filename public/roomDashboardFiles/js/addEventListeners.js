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

        transitionUpward()
        setTimeout(() => {

            socket.emit("enter the game arena", roomIdInputvalue)
            insertGameHtml()
            pageHistory.currentPage.style.display = "none"
            pageHistory.currentPage = document.querySelector(".game-arena-page")
            pageHistory.currentPage.style.display = "block"
            pageHistory.currentPlayPage = pageHistory.currentPage
            pageHistory.currentPlayPageCssFilePath = "/gameFiles/css/style.css"
        }, 500)
        setTimeout(transitionClose, 2000)
    })
}


function addApplySettingsButtonEventListeners() {
    applySettingsButton.addEventListener("click", () => {

        transitionUpward()
        setTimeout(() => {

            matchTypeValue = Number(matchType.value)
            if (playerIndexValue != -1) {
                socket.emit("disconnect player", roomIdInputvalue, playerIndexValue)
            }
            insertRoomDashboardPageTeamsdHtml()
            initializeRommDashboardPageTeamsDomVariables()
            initializeRommDashboardPageTeamsDashBoardEventListeners()
            initializeAnyoneConnected()
        }, 500)
        setTimeout(transitionClose, 2000)
    })
}

function addExitRoomButtonEventListeners() {
    exitRoomButton.addEventListener("click", () => {

        pageHistory.currentPage.style.display = "none"
        pageHistory.currentPage = document.querySelector(".room-settings-page")
        pageHistory.currentPage.style.display = "block"
        cssLink.href = "/roomSettingsFiles/css/style.css"
        pageHistory.currentPlayPageCssFilePath = "/roomSettingsFiles/css/style.css"
        pageHistory.currentPlayPage = pageHistory.currentPage

        roomIdInputvalue = ""

    })
}
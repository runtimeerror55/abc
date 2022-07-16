function addConnectButtonsEventListeners()
{
    connectButtons.forEach((element, index) =>
    {
        element.addEventListener("click", function ()
        {
            if (!connectButtons[index].classList.contains("active") && playerNumber == "")
            {
                socket.emit("connect player", roomIdInputvalue, index, matchTypeValue, userProfileInformation)
            }
        })
    });
}


function addDisconnectButtonsEventListeners()
{
    disconnectButtons.forEach((element, index) =>
    {

        element.addEventListener("click", function ()
        {

            socket.emit("disconnect player number", roomIdInputvalue, index)
        })
    })
}


function addGoButtonEventListeners()
{
    goButton.addEventListener("click", () =>
    {

        transitionUpward()
        setTimeout(() =>
        {

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


function addApplySettingsButtonEventListeners()
{
    applySettingsButton.addEventListener("click", () =>
    {
        if (isAdmin)
        {

            socket.emit("can i apply settings", roomIdInputvalue, Number(matchType.value))
        } else
        {
            alert("only admin can change settings")
        }
    })
}

function addExitRoomButtonEventListeners()
{
    exitRoomButton.addEventListener("click", () =>
    {

        transitionUpward()
        setTimeout(() =>
        {

            pageHistory.currentPage.style.display = "none"
            pageHistory.currentPage = document.querySelector(".room-settings-page")
            pageHistory.currentPage.style.display = "block"
            cssLink.href = "/roomSettingsFiles/css/style.css"
            pageHistory.currentPlayPageCssFilePath = "/roomSettingsFiles/css/style.css"
            pageHistory.currentPlayPage = pageHistory.currentPage
            roomIdInput.value = ""
            roomIdInputvalue = ""
        }, 500)
        setTimeout(transitionClose, 1500)
    })
}

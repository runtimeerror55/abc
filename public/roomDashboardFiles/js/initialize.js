function initializeRommDashboardPageDomVariables()
{


    matchType = document.querySelector(".g-s-c__match-type")
    roomDashboardPageArticlesContainer = document.querySelector(".articles-container")
    exitRoomButton = document.querySelector(".g-s-c__exit-room")
    applySettingsButton = document.querySelector(".g-s-c__apply-button")
    joinedPlayersContainer = document.querySelector(".j-ps-c")
    teamsDashboardArticle = undefined
}

function initializeRommDashboardPageTeamsDomVariables()
{

    connectButtons = document.querySelectorAll('.teams-container__connect-button')
    disconnectButtons = document.querySelectorAll('.teams-container__disconnect-button')
    goButton = document.querySelector(".go-button")
}

function initializeRommDashboardPageAllVariables()
{
    initializeRommDashboardPageDomVariables()
    joinedPlayersHtml = ""
}

function initializeRommDashboardPageAllEventListeners()
{
    addApplySettingsButtonEventListeners()
    addExitRoomButtonEventListeners()
}

function initializeRommDashboardPageTeamsDashBoardEventListeners()
{

    addConnectButtonsEventListeners()
    addDisconnectButtonsEventListeners()
    addGoButtonEventListeners()

}

function initializeAnyoneConnected()
{
    if (roomIdInputvalue != "")
    {
        socket.emit("anyone connected", roomIdInputvalue)
    }
}

function initializeAnyOneJoined()
{
    socket.emit("anyone joined", roomIdInputvalue)
}

function initializeRommDashboardPageAllthings()
{

    initializeRommDashboardPageAllVariables()
    initializeRommDashboardPageAllEventListeners()
    initializeAnyOneJoined()


}
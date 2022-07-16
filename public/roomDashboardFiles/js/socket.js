socket.on("connected player", (playerIndex, numberOfconnectedPlayers, flag) =>
{

    if (flag)
    {
        playerNumber = arrayOfPlayers[playerIndex]
        if (playerIndex == 0)
        {
            isAdmin = true
        }
        playerIndexValue = playerIndex
        disconnectButtons[playerIndex].style.display = "block"
    }

    if (numberOfconnectedPlayers == matchTypeValue && isAdmin)
    {
        goButton.style.display = "block"
    }
    connectButtons[playerIndex].classList.add("active")
    connectButtons[playerIndex].innerText = userProfileInformation.name
    console.log(numberOfconnectedPlayers)


})


socket.on("disconnected player number", (playerIndex, flag) =>
{
    if (flag)
    {
        playerNumber = ""
        playerIndexValue = -1
        disconnectButtons[playerIndex].style.display = "none"

    }
    connectButtons[playerIndex].classList.remove("active")
    connectButtons[playerIndex].innerText = "connect"
    goButton.style.display = "none"
})

socket.on("player disconnected", () =>
{
    transitionUpward()
    setTimeout(() =>
    {

        insertRoomDashboardHtml()
        matchTypeValue = 1
        playerIndexValue = -1
        playerNumber = ""
        insertRoomDashboardPageTeamsdHtml()
        initializeRommDashboardPageTeamsDomVariables()
        initializeRommDashboardPageTeamsDashBoardEventListeners()
        initializeAnyoneConnected()
        pageHistory.currentPage.style.display = "none"
        pageHistory.currentPage = document.querySelector(".room-dashboard-page")
        pageHistory.currentPage.style.display = "block"
        pageHistory.currentPlayPage = pageHistory.currentPage
        pageHistory.currentPlayPageCssFilePath = "/roomDashboardFiles/css/style.css"

    }, 500)
    setTimeout(transitionClose, 2000)
})


socket.on("anyone connected", (connectedPlayersIndexes) =>
{
    console.log(connectedPlayersIndexes)
    connectedPlayersIndexes?.forEach((element) =>
    {

        connectButtons[element].classList.add("active")
        connectButtons[element].innerText = "connected"
        disconnectButtons[element].style.display = "none"

    });
})

socket.on("anyone joined", (players) =>
{

    players.forEach(element =>
    {
        joinedPlayersHtml +=
            `<div class="j-p-c">
                <div class="label">${element}</div>
                <button class="button">remove</button>
            </div>`
    })
    joinedPlayersContainer.innerHTML = `<h1 class="j-ps-c__heading">joined players</h1></h1>` + joinedPlayersHtml
})


socket.on("player joined", (name) =>
{
    let divElement = document.createElement("div")
    divElement.classList.add("j-p-c")
    divElement.innerHTML = ` <div class="label">${name}</div>
    <button class="button">remove</button>`
    joinedPlayersContainer.appendChild(divElement)
})

socket.on("enter the game arena", () =>
{

    insertGameHtml()
    pageHistory.currentPage.style.display = "none"
    pageHistory.currentPage = document.querySelector(".game-arena-page")
    pageHistory.currentPage.style.display = "block"
    pageHistory.currentPlayPage = pageHistory.currentPage
    pageHistory.currentPlayPageCssFilePath = "/gameFiles/css/style.css"
})


socket.on("settings apply error", () =>
{
    alert("joined players are more than the required.please remove them and try again")
})


socket.on("yes you can apply settings", (payload) =>
{
    transitionUpward()
    setTimeout(() =>
    {

        matchTypeValue = payload
        matchType.value = `${payload}`
        playerNumber = ""
        playerIndexValue = -1
        insertRoomDashboardPageTeamsdHtml()
        initializeRommDashboardPageTeamsDomVariables()
        initializeRommDashboardPageTeamsDashBoardEventListeners()
        initializeAnyoneConnected()
    }, 500)
    setTimeout(transitionClose, 2000)
})
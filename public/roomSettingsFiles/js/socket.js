let socket = io()
socket.on("connect", () =>
{
    console.log(socket.id)
    socketId = socket.id
})


socket.on("joining error", (errorMessage) =>
{
    alert(errorMessage)
})

socket.on("joined room", (payload) =>
{
    transitionUpward()
    setTimeout(() =>
    {

        insertRoomDashboardHtml()
        matchTypeValue = payload
        matchType.value = `${payload}`
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
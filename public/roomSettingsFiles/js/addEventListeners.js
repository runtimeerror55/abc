
function addRoomButtonsEventListeners() {

    createRoomIdButton.addEventListener("click", () => {

        roomIdOutput.innerText = socketId
    })
    joinRoomIdButton.addEventListener("click", () => {

        roomIdInputvalue = roomIdInput.value


        if (roomIdInputvalue == "") {
            alert("please enter room id to join the room")
        }
        else if (userProfileInformation == undefined) {
            alert("please sign in using google account to play")
        }
        else {


            insertRoomDashboardHtml()
            pageHistory.currentPage.style.display = "none"
            pageHistory.currentPage = document.querySelector(".room-dashboard-page")
            pageHistory.currentPlayPage = pageHistory.currentPage
            pageHistory.currentPlayPageCssFilePath = "/teamsFiles/css/style.css"




        }
    })
}


function addSignOutButtonEventListeners() {
    signOutButton.addEventListener("click", () => {

        signOutButton.style.display = "none"
        signInButton.style.display = "block"
        userProfileInformation = undefined

    })
}

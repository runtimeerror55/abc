
function addRoomButtonsEventListeners() {

    createRoomIdButton.addEventListener("click", () => {

        roomIdOutput.innerText = socketId
    })
    joinRoomIdButton.addEventListener("click", () => {

        roomIdInputvalue = roomIdInput.value
        matchTypeValue = Number(matchType.value)

        if (roomIdInputvalue == "") {
            alert("please enter room id to join the room")
        }
        else if (userProfileInformation == undefined) {
            alert("please sign in using google account to play")
        }
        else {
            socket.emit("join room", roomIdInputvalue)

            insertTeamsHtml()
            pageHistory.currentPage.style.display = "none"
            pageHistory.currentPage = document.querySelector(".teams-page")
            pageHistory.currentPlayPage = pageHistory.currentPage
            pageHistory.currentPlayPageCssFilePath = "/teamsFiles/css/style.css"




        }
    })
}


function addMatchTypeEventListeners() {
    matchType.addEventListener("input", (e) => {
        matchTypeValue = e.target.value
    })
}

function addSignOutButtonEventListeners() {
    signOutButton.addEventListener("click", () => {

        signOutButton.style.display = "none"
        signInButton.style.display = "block"
        userProfileInformation = undefined

    })
}

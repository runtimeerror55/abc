function initializeDomVariable() {

    createRoomIdButton = document.querySelector('.container__create-room-id-button')
    joinRoomIdButton = document.querySelector('.container__join-room-id-button')
    roomIdOutput = document.querySelector('.container__room-id-output')
    roomIdInput = document.querySelector('.container__room-id-input')
    matchType = document.querySelector('.container__match-type')
    signInButton = document.querySelector(".container__sign-in")
    signOutButton = document.querySelector(".container__sign-out")

}

function initializeAllVariables() {

    initializeDomVariable()
    userProfileInformation = undefined
    players = ["one", "two", "three", "four"]
    socketId = ""


}


function initializeAllEventListeners() {
    addRoomButtonsEventListeners()
    addSignOutButtonEventListeners()


}


function initializeAllThings() {

    initializeAllVariables()
    initializeAllEventListeners()

}
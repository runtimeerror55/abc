function initializeRoomSettingsPageDomVariable()
{

    createRoomIdButton = document.querySelector('.container__create-room-id-button')
    joinRoomIdButton = document.querySelector('.container__join-room-id-button')
    roomIdOutput = document.querySelector('.container__room-id-output')
    roomIdInput = document.querySelector('.container__room-id-input')
    matchType = document.querySelector('.container__match-type')
    signInButton = document.querySelector(".container__sign-in")
    signOutButton = document.querySelector(".container__sign-out")

}

function initializeRoomSettingsPageAllVariables()
{

    initializeRoomSettingsPageDomVariable()
    userProfileInformation = undefined
    players = ["one", "two", "three", "four"]
}


function initializeRoomSettingsPageAllEventListeners()
{
    addJoinRoomButtonEventListeners()
    addCreateRoomButtonEventListeners()
    addSignOutButtonEventListeners()



}


function initializeRoomSettingsPageAllThings()
{

    initializeRoomSettingsPageAllVariables()
    initializeRoomSettingsPageAllEventListeners()
    initializeGoogleAuthentication()

}
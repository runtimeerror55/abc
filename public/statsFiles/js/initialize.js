function initializeAllThings()
{
    socket.emit("retrieve stats data", userProfileInformation.googleId)
}
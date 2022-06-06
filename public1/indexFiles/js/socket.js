let socket = io()
socket.on("connect", () => {
    console.log(socket.id)
    socketId = socket.id
})



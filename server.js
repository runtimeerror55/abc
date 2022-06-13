const express = require('express')
const path = require('path')
const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {
    cors: {
        origin: "*",
    },
})
let id = undefined
let objecOfConnectedRooms = {}
let objectOfConnectedSocketIds = {}



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/indexFiles/html/index.html');
});

app.set('views engine', 'ejs')
app.use('/indexFiles', express.static('public/indexFiles'))
app.use('/teamsFiles', express.static('public/teamsFiles'))
app.use('/gameFiles', express.static('public/gameFiles'))
app.use('/globalFiles', express.static('public/globalFiles'))


io.on("connection", (socket) => {

    socket.on("join room", (roomId) => {
        id = roomId
        socket.join(roomId)
    })

    socket.on("connect player", (roomId, playerIndex, matchTypeValue) => {
        id = roomId
        socket.join(roomId)

        if (!objecOfConnectedRooms.hasOwnProperty(roomId)) {

            objecOfConnectedRooms[roomId] = {

                "connectedPlayers": 0,
                "playerIndexes": Array(matchTypeValue).fill(false),
                "gameOver": Array(matchTypeValue).fill(false),
                "game started": false,
                "matchTypeValue": matchTypeValue
            }
        }

        if (!objectOfConnectedSocketIds.hasOwnProperty(socket.id)) {

            objectOfConnectedSocketIds[socket.id] = {

                "playerIndex": undefined,
                "roomId": undefined
            }
        }

        objectOfConnectedSocketIds[socket.id]["playerIndex"] = playerIndex
        objectOfConnectedSocketIds[socket.id]["roomId"] = roomId


        objecOfConnectedRooms[roomId]["playerIndexes"][playerIndex] = true
        objecOfConnectedRooms[roomId]["connectedPlayers"]++
        io.to(socket.id).emit("connected player", playerIndex, objecOfConnectedRooms[roomId]["connectedPlayers"], true)
        socket.broadcast.in(id).emit("connected player", playerIndex, objecOfConnectedRooms[roomId]["connectedPlayers"], false)

    })


    socket.on("disconnect player", (roomId, playerIndex) => {

        objecOfConnectedRooms[roomId]["playerIndexes"][playerIndex] = false
        objecOfConnectedRooms[roomId]["connectedPlayers"]--
        objectOfConnectedSocketIds[socket.id]["playerIndex"] = undefined
        io.to(socket.id).emit("disconnected player", playerIndex, true)
        socket.broadcast.in(id).emit("disconnected player", playerIndex, false)

    })

    socket.on("disconnect", () => {
        if (objectOfConnectedSocketIds[socket.id] != undefined) {

            if (objectOfConnectedSocketIds[socket.id]["playerIndex"] != undefined) {

                objecOfConnectedRooms[objectOfConnectedSocketIds[socket.id]["roomId"]]["playerIndexes"][objectOfConnectedSocketIds[socket.id]["playerIndex"]] = false
            }

            objecOfConnectedRooms[objectOfConnectedSocketIds[socket.id]["roomId"]]["connectedPlayers"]--
            socket.broadcast.in(objectOfConnectedSocketIds[socket.id]["roomId"]).emit("disconnected player", objectOfConnectedSocketIds[socket.id]["playerIndex"], false)

            if (!objecOfConnectedRooms[objectOfConnectedSocketIds[socket.id]["roomId"]]["connectedPlayers"]) {

                delete objecOfConnectedRooms[objectOfConnectedSocketIds[socket.id]["roomId"]]
            }

            delete objectOfConnectedSocketIds[socket.id]
        }
    })



    socket.on("toggleClass", (coordinates, hover, playerNumber, blockColor) => {
        socket.broadcast.in(id).emit("toggleClass", coordinates, hover, playerNumber, blockColor)



    })
    socket.on("addClass", (previous, currentDpTrueCoordinates, playerNumber) => {
        socket.broadcast.in(id).emit("addClass", previous, currentDpTrueCoordinates, playerNumber)

    })

    socket.on("laserBeamRow", (playerNumber, row, width) => {
        socket.broadcast.in(id).emit("laserBeamRow", playerNumber, row, width)
    })

    socket.on("destroy", (fullRows, arrayOftotalNoOfBlocksInEachRow, playerNumber, flag) => {
        socket.broadcast.in(id).emit("destroy", fullRows, arrayOftotalNoOfBlocksInEachRow, playerNumber, flag)
    })

    socket.on("anyone connected", (roomId) => {
        io.to(socket.id).emit("anyone connected", objecOfConnectedRooms[roomId]?.["playerIndexes"])
    })

    socket.on("game over", (roomId, playerIndexValue) => {
        objecOfConnectedRooms[roomId]["gameOver"][playerIndexValue] = true
        socket.broadcast.in(id).emit("game over", playerIndexValue)
    })

    socket.on("can i reset", (roomId) => {
        let ans = objecOfConnectedRooms[roomId]["gameOver"].every(element => {
            return element
        })
        io.to(roomId).emit("can i reset", ans)
        if (ans) {
            objecOfConnectedRooms[roomId]["gameOver"].fill(false)
            objecOfConnectedRooms[roomId]["game started"] = false
        }
    })

    socket.on("update score", (playerIndexValue, score) => {
        socket.broadcast.in(id).emit("update score", playerIndexValue, score)
    })

    socket.on("generatedBlockProperties", (arrayOfObjectsOfBlockProperties) => {
        socket.broadcast.in(id).emit("generatedBlockProperties", arrayOfObjectsOfBlockProperties)
    })

    socket.on("enter the game arena", (roomId) => {
        socket.broadcast.in(roomId).emit("enter the game arena")
    })

    socket.on("can i start the game", (roomId) => {


        let areAllPlayersConnected = objecOfConnectedRooms[roomId]["connectedPlayers"] == objecOfConnectedRooms[roomId]["matchTypeValue"]
        let isGameStarted = objecOfConnectedRooms[roomId]["game started"]
        io.to(roomId).emit("can i start the game", areAllPlayersConnected, isGameStarted)

        if (areAllPlayersConnected && !isGameStarted) {

            objecOfConnectedRooms[roomId]["game started"] = true
        }
    })

})


const port = process.env.PORT || 3000

server.listen(port, () => {
    console.log(`listening at ${port}`)
})
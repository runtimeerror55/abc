let body = document.querySelector('body')
let cssLink = document.querySelector('link')
let playerNumber = ""
let arrayOfPlayers = ["player-one__", "player-two__", "player-three__"]
let roomIdInputvalue = ""
let playerIndexValue = -1
let matchTypeValue = 2
let playersHtml = ""
let isAdmin = false





function loadJsDynamically(filePath) {

    let scriptElement = document.createElement('script')
    scriptElement.src = filePath
    scriptElement.async = false
    body.appendChild(scriptElement)

    // success event 
    scriptElement.addEventListener("load", (e) => {
        console.log("File loaded", e.target)
    });
    // error event
    scriptElement.addEventListener("error", (ev) => {
        console.log("Error on loading file", ev);
    });
}
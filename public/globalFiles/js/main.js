let body = document.querySelector('body')
let main = document.querySelector('main')
let head = document.querySelector('head')
let cssLink = document.querySelector('.main-css')
let playerNumber = ""
let arrayOfPlayers = ["player-one__", "player-two__", "player-three__"]
let roomIdInputvalue = ""
let playerIndexValue = -1
let matchTypeValue = 1
let playersHtml = ""
let isAdmin = false
let mainElement = undefined
let articleElement = undefined
let roomSettingsPage = document.querySelector(".room-settings-page")
let roomDashboardPage = document.querySelector(".room-dashboard-page")
let gameArenaPage = document.querySelector(".game-arena-page")
let statsPage = document.querySelector(".stats-page")
let socketId = ""

let filePaths = {
    "homePage": {
        link: document.querySelector("homePage"),
        filePath: "/indexFiles/css/style.css"
    },
    "gameSettingsPage": {
        link: document.querySelector(".game-settings-page"),
        filePath: "/gameSettingsFiles/css/style.css"
    },
    "teamsPage": {
        link: document.querySelector(".teams-page"),
        filePath: "/teamsFiles/css/style.css"
    },
    "gameArenaPage": {
        link: document.querySelector(".game-arena-page"),
        filePath: "/gameFiles/css/style.css"
    },
    "statsPage": {
        link: document.querySelector(".stats-page"),
        filePath: "/statsFiles/css/style.css"
    },
    "intstructionsPage": {
        link: document.querySelector(".instructions-page"),
        filePath: "/instructionsFiles/css/style.css"
    }
}
let pageHistory = {
    currentPage: document.querySelector(".home-page"),
    currentPlayPage: undefined,
    currentPlayPageCssFilePath: undefined,
    optionsClicked: [true, false, false, false]
}






function loadJsDynamically(filePath)
{

    let scriptElement = document.createElement('script')
    scriptElement.src = filePath
    scriptElement.async = false
    body.appendChild(scriptElement)

    // success event 
    scriptElement.addEventListener("load", (e) =>
    {
        console.log("File loaded", e.target)
    });
    // error event
    scriptElement.addEventListener("error", (ev) =>
    {
        console.log("Error on loading file", ev);
    });
}


function loadCssDynamically(filePath)
{
    let linkElement = document.createElement('link')
    linkElement.href = filePath
    linkElement.rel = "stylesheet"
    linkElement.async = false
    head.appendChild(linkElement)
    console.log(linkElement)
    linkElement.addEventListener("load", (e) =>
    {
        console.log("File loaded", e.target)
    });
    // error event
    linkElement.addEventListener("error", (ev) =>
    {
        console.log("Error on loading file", ev);
    });
}
let arrayOfPlayersGameBoxContainer = undefined
let currentDpTrueCoordinates = -1
let previous = -1
let dpInterval = undefined
let isDpTrue = false
let blockColor = -1
let mouseCoordinates = [-1, -1]
let dp = undefined
let clear = new Audio('/gameFiles/sound/clear.wav');
let fall = new Audio('/gameFiles/sound/fall.wav')
let selection = new Audio('/gameFiles/sound/selection.wav')
let fireball = new Audio('/gameFiles/sound/fireball.wav')
let bump = new Audio('/gameFiles/sound/bump.wav')
let whipShot = new Audio('/gameFiles/sound/whipShot.wav')
let laserGunShot = new Audio('/gameFiles/sound/laserGunShot.wav')
let laserInSpace = new Audio('/gameFiles/sound/laserInSpace.wav')
let fallingHit = new Audio('/gameFiles/sound/fallingHit.wav')
let windowBreak = new Audio('/gameFiles/sound/windowBreak.mp3')
let glassBreak = new Audio('/gameFiles/sound/glassBreak.mp3')
let score = 0
let play = undefined
let arrayOfPlayersScoreBox = undefined
let binaryMatrix = undefined
let coordinatesOfShapes = [

    [[0, 5], [1, 5], [2, 5], [2, 6]], // l shape

    [[0, 5], [0, 6], [0, 7], [1, 6]], // t shape

    [[0, 5], [0, 6], [1, 5], [1, 6]], // square

    [[0, 5], [0, 6], [0, 7], [0, 8]], // line shape

    [[0, 5], [1, 5], [1, 6], [2, 6]] // skew shape
]

let randomShape = Math.floor(Math.random() * 5)
let currentCoordinates = [[0, 5], [1, 5], [2, 5], [2, 6]]
let arrayOfObjectsOfBlockProperties = new Array(1000)
let arrayOfColorClasses = ["active0", "active1", "active2", "active3", "active4"]
let currentBlockIndex = -1
let arrayOfPlayersGameOver = undefined
let playButton = undefined
let resetButton = undefined
let arrayOftotalNoOfBlocksInEachRow = undefined
let arrayOfPlayersReadyButton = undefined
let container = document.querySelector('.part-one__game-box-container')
let body = document.querySelector('body')
let column90 = -1
let row90 = -1
let currentDpTrueCoordinates = -1
let previous = -1
let dpInterval
let isDpTrue = false
let colorOfShape = -1
let k = [20, 11]
let dp = new Array(100)
let clear = new Audio('sounds/clear.wav');
let fall = new Audio('sounds/fall.wav')
let selection = new Audio('sounds/selection.wav')
let fireball = new Audio('sounds/fireball.wav')
let bump = new Audio('sounds/bump.wav')
let whipShot = new Audio('sounds/whipShot.wav')
let laserGunShot = new Audio('sounds/laserGunShot.wav')
let laserInSpace = new Audio('sounds/laserInSpace.wav')
let fallingHit = new Audio('sounds/fallingHit.wav')
for (let i = 0; i < 100; i++) {

        dp[i] = new Array(60)

        for (let j = 0; j < 60; j++) {

                dp[i][j] = new Array(3)

                for (let k = 0; k < 3; k++) {

                        dp[i][j][k] = -1
                }

        }
}

// 5 different shapes in the game
let coordinatesOfShapes = [

        [[0, 5], [1, 5], [2, 5], [2, 6]], // l shape

        [[0, 5], [0, 6], [0, 7], [1, 6]], // t shape

        [[0, 5], [0, 6], [1, 5], [1, 6]], // square

        [[0, 5], [0, 6], [0, 7], [0, 8]], // line shape

        [[0, 5], [1, 5], [1, 6], [2, 6]] // skew shape
]

// generate random number [0,4] which determines the shape to be choosen 
let randomShape = Math.floor(Math.random() * 5)

let translateArray = ["X(1500px)", "Y(1500px)", "x(-1500px)", "Y(-1500px)"]

// assign generated shape coordinates to currentCoordinates
let currentCoordinates = deepCloneArray(coordinatesOfShapes[randomShape])

// 25rows x 15column matrix
for (let i = 0; i < 25; i++) {
        // let randomNumber = Math.floor(Math.random() * 4)
        let row = document.createElement("div")
        let laserBeam = document.createElement("span")
        laserBeam.classList.add('laser-beams', `laser-beam-row${i}`)
        row.appendChild(laserBeam)
        row.classList.add('rows', `row${i}`)
        container.appendChild(row)
        for (let j = 0; j < 15; j++) {
                let column = document.createElement("span")
                column.classList.add('small-boxes', `row${i}column${j}`)

                // column.style.transform = `translate${translateArray[randomNumber]}`

                column.addEventListener('mouseenter', (e) => {

                        mouseE(e)
                        refreshTheDpArray(dp)
                        k = [row90, column90]

                        isDpTrue = shortestPath(deepCloneArray(currentCoordinates), 0, dp, 2)

                        if (isDpTrue) {
                                fireball.play()
                                addClass(previous, currentDpTrueCoordinates)
                                previous = -1
                                dpInterval = setInterval(() => {



                                        refreshTheDpArray(dp)


                                        k = [row90, column90]
                                        isDpTrue = shortestPath(deepCloneArray(currentCoordinates), 0, dp, 2)
                                        if (isDpTrue) {

                                                addClass(previous, currentDpTrueCoordinates)

                                        }
                                        else {
                                                bump.play()
                                                clearInterval(dpInterval)

                                                if (currentDpTrueCoordinates != -1) {
                                                        toggleClass(currentDpTrueCoordinates, true)
                                                }

                                                previous = -1
                                                currentDpTrueCoordinates = -1
                                        }


                                }, 100);
                        }
                        else {
                                bump.play()
                        }



                })
                column.addEventListener('mouseleave', () => {
                        clearInterval(dpInterval)

                        if (currentDpTrueCoordinates != -1) {

                                toggleClass(currentDpTrueCoordinates, true)
                                previous = -1
                                currentDpTrueCoordinates = -1
                        }

                })
                column.addEventListener('click', (e) => {
                        if (isDpTrue) {
                                fallingHit.play()
                                clearInterval(dpInterval)
                                toggleClass(currentDpTrueCoordinates, true)
                                toggleClass(currentCoordinates, false)
                                toggleClass(currentDpTrueCoordinates)
                                currentCoordinates = currentDpTrueCoordinates
                                previous = -1
                                currentDpTrueCoordinates = -1
                        }
                })
                column.addEventListener('wheel', () => {
                        let rotatedCoordinates = rotateTheCoordinates(currentCoordinates)
                        if (isRotationPossible(rotatedCoordinates)) {
                                fireball.play()
                                toggleClass(currentCoordinates)
                                toggleClass(rotatedCoordinates)
                                currentCoordinates = rotatedCoordinates
                        }
                        else {
                                console.log("no")
                        }
                })
                row.appendChild(column)

        }
}


// paintTheShape(randomShape)
// function paintTheShape(randomShape) {

//     for (let i = 0; i < 4; i++) {
//         let [x, y] = coordinatesOfShapes[randomShape][i]
//         let box = document.querySelector(`.row${x}column${y}`)
//         box.classList.toggle('active')

//     }
// }

// add the class active if not present or remove if present 














function addClass(previous, currentDpTrueCoordinates) {

        if (previous !== -1) {
                for (let i = 0; i < 4; i++) {
                        let newBox = document.querySelector(`.row${previous[i][0]}column${previous[i][1]}`)


                        newBox.classList.toggle('border')


                }
        }
        for (let i = 0; i < 4; i++) {
                let newBox = document.querySelector(`.row${currentDpTrueCoordinates[i][0]}column${currentDpTrueCoordinates[i][1]}`)

                if (!newBox.classList.contains('border')) {
                        newBox.classList.toggle('border')
                }

        }
}

function toggleClass(coordinates, hover) {

        for (let i = 0; i < 4; i++) {
                let newBox = document.querySelector(`.row${coordinates[i][0]}column${coordinates[i][1]}`)
                if (hover) {

                        newBox.classList.toggle('border')
                } else {
                        newBox.classList.toggle(`${colorOfShape}`)
                }
        }
}

// generate new coordinates for moving the shape in desired direction
function generateNewCoordinates(currentCoordinates, rowValue, columnValue) {

        return currentCoordinates.map(element => [element[0] + rowValue, element[1] + columnValue])
}

// move right
function right(currentCoordinates, rowValue, columnValue) {

        toggleClass(currentCoordinates)
        let newCoordinates = generateNewCoordinates(currentCoordinates, rowValue, columnValue)
        toggleClass(newCoordinates)
        return newCoordinates
}

// move down
function down(currentCoordinates, rowValue, columnValue) {
        toggleClass(currentCoordinates)
        let newCoordinates = generateNewCoordinates(currentCoordinates, rowValue, columnValue)
        toggleClass(newCoordinates)
        return newCoordinates


}

// move left
function left(currentCoordinates, rowValue, columnValue) {
        toggleClass(currentCoordinates)
        let newCoordinates = generateNewCoordinates(currentCoordinates, rowValue, columnValue)
        toggleClass(newCoordinates)
        return newCoordinates

}



function moveTheCoordinates(inputCoordinates, direction, column) {

        if (direction == "down") {
                return inputCoordinates.every(element => (element[0] < column) && (binaryMatrix[element[0] + 1][element[1]] == 0))
        }
        else if (direction == "left") {

                return inputCoordinates.every(element => (element[1] > column) && (binaryMatrix[element[0]][element[1] - 1] == 0))
        }
        else if (direction == "right") {
                return inputCoordinates.every(element => (element[1] < column) && (binaryMatrix[element[0]][element[1] + 1] == 0))
        }


}

















body.addEventListener('keydown', (e) => {

        if (e.key == "ArrowRight") {

                if (moveTheCoordinates(currentCoordinates, "right", 14)) {
                        fireball.play()
                        currentCoordinates = right(currentCoordinates, 0, 1)
                }
                else {
                        bump.play()
                }


        }
        else if (e.key == "ArrowDown") {
                if (moveTheCoordinates(currentCoordinates, "down", 24)) {
                        fireball.play()
                        currentCoordinates = down(currentCoordinates, 1, 0)
                }
                else {
                        bump.play()
                }
        }
        else if (e.key == "ArrowLeft") {
                if (moveTheCoordinates(currentCoordinates, "left", 0)) {
                        fireball.play()
                        currentCoordinates = left(currentCoordinates, 0, -1)
                } else {
                        bump.play()
                }
        }
        else if (e.key == " ") {
                let rotatedCoordinates = rotateTheCoordinates(currentCoordinates)
                if (isRotationPossible(rotatedCoordinates)) {
                        fireball.play()
                        toggleClass(currentCoordinates)
                        toggleClass(rotatedCoordinates)
                        currentCoordinates = rotatedCoordinates
                }
                else {
                        console.log("no")
                }
        }
})














function deepCloneArray(input) {

        return input.map(element => Array.isArray(element) ? deepCloneArray(element) : element)
}


let binaryMatrix = new Array(25)
for (let i = 0; i < 25; i++) {

        binaryMatrix[i] = new Array(16)
}

for (let i = 0; i < 25; i++) {

        for (let j = 0; j < 16; j++) {

                binaryMatrix[i][j] = 0
        }
}


function markTheCoordinates(currentCoordinates) {

        currentCoordinates.forEach(element => {
                binaryMatrix[element[0]][element[1]] = 1
                binaryMatrix[element[0]][15]++;
        });
}



function isRowFull(currentCoordinates) {
        let i = 0
        while (i < 4) {
                if (binaryMatrix[currentCoordinates[i][0]][15] == 15) {
                        console.log(currentCoordinates[i][0])
                        destroy(currentCoordinates[i][0])

                }
                else {
                        i++
                }

        }
}



function destroy(row) {
        laserInSpace.play()
        let laserBeamRow = document.querySelector(`.laser-beam-row${row}`)
        laserBeamRow.style.width = "360px"

        for (let i = 0; i < 15; i++) {
                let newBox = document.querySelector(`.row${row}column${i}`)
                let lastClass = newBox.classList[2]
                console.log(newBox.classList)
                newBox.classList.toggle(lastClass)
                binaryMatrix[row][i] = 0
        }
        binaryMatrix[row][15] = 0;
        let k = row - 1
        while (binaryMatrix[k][15]) {
                for (let i = 0; i < 15; i++) {
                        let newBox = document.querySelector(`.row${k}column${i}`)
                        let newBox1 = document.querySelector(`.row${k + 1}column${i}`)
                        if (newBox.classList.length == 3) {
                                let lastClass = newBox.classList[2]
                                console.log(newBox.classList)
                                newBox.classList.toggle(lastClass)

                                newBox1.classList.toggle(lastClass)
                                binaryMatrix[k][i] = 0
                                binaryMatrix[k + 1][i] = 1
                        }

                }
                binaryMatrix[k + 1][15] = binaryMatrix[k][15]
                binaryMatrix[k][15] = 0
                k--

        }
        setTimeout(() => {
                laserBeamRow.style.width = '0px'
        }, 200)



}

function start() {
        column90 = -1
        row90 = -1
        currentDpTrueCoordinates = -1
        previous = -1
        // generate random number [0,4] which determines the shape to be choosen 
        randomShape = Math.floor(Math.random() * 5)
        colorOfShape = `active${randomShape}`

        // assign generated shape coordinates to currentCoordinates
        currentCoordinates = deepCloneArray(coordinatesOfShapes[randomShape])

        toggleClass(currentCoordinates)




        let xy = setInterval(() => {



                if (moveTheCoordinates(currentCoordinates, "down", 24)) {
                        currentCoordinates = down(currentCoordinates, 1, 0)


                }
                else {
                        clearInterval(xy)
                        clearInterval(dpInterval)
                        markTheCoordinates(currentCoordinates)
                        isRowFull(currentCoordinates)
                        if (currentDpTrueCoordinates != -1) {

                                toggleClass(currentDpTrueCoordinates, true)
                                previous = -1
                                currentDpTrueCoordinates = -1
                        }
                        start()
                }


        }, 500)


}






function mouseE(e) {
        column90 = mouseColumn(e)
        row90 = mouseRow(e)

}






function moveTheCoordinatesToTheMouse(inputCoordinates, direction, column) {


        while (true) {

                if (moveTheCoordinates(inputCoordinates, direction, column)) {
                        inputCoordinates = direction == "right" ? generateNewCoordinates(inputCoordinates, 0, 1) : generateNewCoordinates(inputCoordinates, 0, -1)
                }
                else {
                        break
                }

        }
        let isTrue = inputCoordinates.some(element => element[1] == column)
        if (isTrue) {
                toggleClass(currentCoordinates)
                currentCoordinates = inputCoordinates
                return true;
        }
        return false;
}


function mouseColumn(e) {
        let target = e.target
        let column = Number(target.classList[1].substr(-2))

        // chech if column is NaN
        if (!(column == column)) {
                column = Number(target.classList[1].substr(-1))
        }


        return column

}

function mouseRow(e) {
        let target = e.target
        let row = Number(target.classList[1].substr(3, 2))


        // chech if row is NaN
        if (!(row == row)) {
                row = Number(target.classList[1].substr(3, 1))
        }



        return row

}










function sumOfCoordinates(currentCoordinates) {
        let sum = [0, 0];
        currentCoordinates.forEach((element) => {
                sum[0] = sum[0] + element[0]
                sum[1] = sum[1] + element[1]
        })
        return sum
}

function shortestPath(tempCoordinates, i, dp, direction) {
        let sum = sumOfCoordinates(tempCoordinates)
        if (dp[sum[0]][sum[1]][direction] != -1) {

                return dp[sum[0]][sum[1]][direction]
        }
        let ans = false
        let x = false
        for (let t = 0; t < 4; t++) {

                if (tempCoordinates[t][0] == k[0] && tempCoordinates[t][1] == k[1]) {

                        x = true;
                        if (currentDpTrueCoordinates === -1 && previous === -1) {

                                currentDpTrueCoordinates = tempCoordinates
                        }
                        else {
                                previous = currentDpTrueCoordinates
                                currentDpTrueCoordinates = tempCoordinates
                        }

                        break;
                }

                if (x) {
                        break;
                }
        }
        if (x) {

                return true;
        }

        if (i == 4) {

                if (moveTheCoordinates(tempCoordinates, "down", 24)) {
                        i = 0;
                        tempCoordinates = generateNewCoordinates(tempCoordinates, 1, 0)
                        ans = ans || shortestPath(tempCoordinates, i, dp, 2)

                        dp[sum[0]][sum[1]][2] = ans;
                        if (ans) {

                                return true;
                        }
                }
                else {
                        dp[sum[0]][sum[1]][2] = false
                }
        }
        else {

                if (moveTheCoordinates(tempCoordinates, "left", 0)) {
                        let newCoordinates = generateNewCoordinates(tempCoordinates, 0, -1)
                        ans = ans || shortestPath(newCoordinates, i + 1, dp, 0)

                        dp[sum[0]][sum[1]][0] = ans;
                        if (ans) {
                                return true;
                        }
                }
                else {

                        dp[sum[0]][sum[1]][0] = false
                }
                if (moveTheCoordinates(tempCoordinates, "right", 14)) {
                        let newCoordinates = generateNewCoordinates(tempCoordinates, 0, 1)
                        ans = ans || shortestPath(newCoordinates, i + 1, dp, 1)

                        dp[sum[0]][sum[1]][1] = ans;
                        if (ans) {
                                return true;
                        }
                }
                else {
                        dp[sum[0]][sum[1]][1] = false
                }
                if (moveTheCoordinates(tempCoordinates, "down", 24)) {
                        let newCoordinates = generateNewCoordinates(tempCoordinates, 1, 0)
                        ans = ans || shortestPath(newCoordinates, i + 1, dp, 2)

                        dp[sum[0]][sum[1]][2] = ans;
                        if (ans) {
                                return true;
                        }
                }
                else {
                        dp[sum[0]][sum[1]][2] = false
                }
        }

        return ans;



}


function rotateTheCoordinates(currentCoordinates) {
        let rotatedCoordinates = currentCoordinates.map((element) => {
                return [(element[1] - currentCoordinates[0][1]) + currentCoordinates[0][0], -(element[0] - currentCoordinates[0][0]) + currentCoordinates[0][1]]
        })

        return rotatedCoordinates
}


function isRotationPossible(rotatedCoordinates) {
        return rotatedCoordinates.every(element => {
                console.log(element)
                return element[0] <= 24 && element[1] <= 14 && binaryMatrix[element[0]][element[1]] == 0
        })
}


function refreshTheDpArray(dp) {

        for (let i = 0; i < 100; i++) {

                for (let j = 0; j < 60; j++) {

                        for (let k = 0; k < 3; k++) {
                                dp[i][j][k] = -1
                        }

                }
        }
}




let play = document.querySelector('.gbc__play')
play.addEventListener('click', () => {
        start()
})

function abc() {
        let x = 0
        for (let i = 0; i < 25; i++) {
                let columns = document.querySelectorAll(`.row${i} .small-boxes`)
                for (let j = 0; j < 15; j++) {
                        x = (x + 50)
                        setTimeout(() => {

                                columns[j].style.transform = 'translate(0px,0px)'


                        }, x)



                }

        }
        setTimeout(() => {
                start()
        }, 10000)

}




let gameBoxContainer = document.querySelector('.part-one__game-box-container')
let smallBoxes = document.querySelector('.small-boxes')
let scoreBox = document.querySelector('.gbc__score')
let playBox = document.querySelector('.gbc__play')
let restartBox = document.querySelector('.gbc__restart')
let settingsAreas = [body, gameBoxContainer, smallBoxes, scoreBox, playBox, restartBox]

let settingsBackgroundColor = document.querySelectorAll('.category__background-color')
let settingsBorderColor = document.querySelectorAll('.category__border-color')
let settingsBorderWidth = document.querySelectorAll('.category__border-width')
let settingsBorderStyle = document.querySelectorAll('.category__border-style')
let settingsShadowColor = document.querySelectorAll('.category__shadow-color')
let settingsShadowXOffSet = document.querySelectorAll('.category__shadow-x-offset')
let settingsShadowYOffSet = document.querySelectorAll('.category__shadow-y-offset')
let settingsShadowZOffSet = document.querySelectorAll('.category__shadow-z-offset')


let settingsIcon = document.querySelector('.part-two__settings-icon')
let settingsOptions = document.querySelector('.part-two__settings-options')

settingsIcon.addEventListener('click', () => {
        settingsOptions.style.transform = "translateX(0px)"
})

for (let i = 0; i < 6; i++) {
        settingsBackgroundColor[i].addEventListener('input', (e) => {

                settingsAreas[i].style.backgroundColor = e.target.value
        })

        settingsBorderColor[i].addEventListener('input', (e) => {
                settingsAreas[i].style.borderColor = e.target.value
        })
        settingsBorderWidth[i].addEventListener('input', (e) => {
                console.log(e.target.value)
                settingsAreas[i].style.borderWidth = e.target.value
        })

        settingsBorderStyle[i].addEventListener('input', (e) => {
                settingsAreas[i].style.borderStyle = e.target.value
        })
        if (i != 0) {
                settingsShadowColor[i - 1].addEventListener('input', (e) => {
                        settingsAreas[i].style.boxShadow = settingsShadowXOffSet[i - 1].value + ' ' + settingsShadowYOffSet[i - 1].value + ' ' + settingsShadowZOffSet[i - 1].value + ' ' + settingsShadowColor[i - 1].value
                })
                settingsShadowXOffSet[i - 1].addEventListener('input', (e) => {
                        settingsAreas[i].style.boxShadow = settingsShadowXOffSet[i - 1].value + ' ' + settingsShadowYOffSet[i - 1].value + ' ' + settingsShadowZOffSet[i - 1].value + ' ' + settingsShadowColor[i - 1].value
                })
                settingsShadowYOffSet[i - 1].addEventListener('input', (e) => {
                        settingsAreas[i].style.boxShadow = settingsShadowXOffSet[i - 1].value + ' ' + settingsShadowYOffSet[i - 1].value + ' ' + settingsShadowZOffSet[i - 1].value + ' ' + settingsShadowColor[i - 1].value
                })
                settingsShadowZOffSet[i - 1].addEventListener('input', (e) => {
                        settingsAreas[i].style.boxShadow = settingsShadowXOffSet[i - 1].value + ' ' + settingsShadowYOffSet[i - 1].value + ' ' + settingsShadowZOffSet[i - 1].value + ' ' + settingsShadowColor[i - 1].value
                })
        }

}


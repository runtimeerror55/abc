createArrayOfPlayersGameBoxContainer()
createArrayOfPlayersGameOver()
createDpArray()
createGameBoxContent()
addGameBoxContentEventListeners()
createBinaryMatrix()
addBodyEventListener()
createArrayOftotalNoOfBlocksInEachRow()
createArrayOfPlayersScorebox()
createArrayOfPlayersReadyButton()
if (isAdmin) {
    generateBlockProperties()
    addPlayButtonEventListeners()
}
else {
    addReadyButtonEventListeners()
}



// let smallBoxes = document.querySelector('.small-boxes')

// let playBox = document.querySelector('.gbc__play')
// let restartBox = document.querySelector('.gbc__restart')
// let settingsAreas = [body, gameBoxContainer, smallBoxes, scoreBox, playBox, restartBox]

// let settingsBackgroundColor = document.querySelectorAll('.category__background-color')
// let settingsBorderColor = document.querySelectorAll('.category__border-color')
// let settingsBorderWidth = document.querySelectorAll('.category__border-width')
// let settingsBorderStyle = document.querySelectorAll('.category__border-style')
// let settingsShadowColor = document.querySelectorAll('.category__shadow-color')
// let settingsShadowXOffSet = document.querySelectorAll('.category__shadow-x-offset')
// let settingsShadowYOffSet = document.querySelectorAll('.category__shadow-y-offset')
// let settingsShadowZOffSet = document.querySelectorAll('.category__shadow-z-offset')



// let settingsIcon = document.querySelector('.part-two__settings-icon')
// let settingsOptions = document.querySelector('.part-two__settings-options')

// settingsIcon.addEventListener('click', () => {
//         settingsOptions.style.transform = "translateX(0px)"
// })

// for (let i = 0; i < 6; i++) {
//         settingsBackgroundColor[i].addEventListener('input', (e) => {

//                 settingsAreas[i].style.backgroundColor = e.target.value
//         })

//         settingsBorderColor[i].addEventListener('input', (e) => {
//                 settingsAreas[i].style.borderColor = e.target.value
//         })
//         settingsBorderWidth[i].addEventListener('input', (e) => {
//                 console.log(e.target.value)
//                 settingsAreas[i].style.borderWidth = e.target.value
//         })

//         settingsBorderStyle[i].addEventListener('input', (e) => {
//                 settingsAreas[i].style.borderStyle = e.target.value
//         })
//         if (i != 0) {
//                 settingsShadowColor[i - 1].addEventListener('input', (e) => {
//                         settingsAreas[i].style.boxShadow = settingsShadowXOffSet[i - 1].value + ' ' + settingsShadowYOffSet[i - 1].value + ' ' + settingsShadowZOffSet[i - 1].value + ' ' + settingsShadowColor[i - 1].value
//                 })
//                 settingsShadowXOffSet[i - 1].addEventListener('input', (e) => {
//                         settingsAreas[i].style.boxShadow = settingsShadowXOffSet[i - 1].value + ' ' + settingsShadowYOffSet[i - 1].value + ' ' + settingsShadowZOffSet[i - 1].value + ' ' + settingsShadowColor[i - 1].value
//                 })
//                 settingsShadowYOffSet[i - 1].addEventListener('input', (e) => {
//                         settingsAreas[i].style.boxShadow = settingsShadowXOffSet[i - 1].value + ' ' + settingsShadowYOffSet[i - 1].value + ' ' + settingsShadowZOffSet[i - 1].value + ' ' + settingsShadowColor[i - 1].value
//                 })
//                 settingsShadowZOffSet[i - 1].addEventListener('input', (e) => {
//                         settingsAreas[i].style.boxShadow = settingsShadowXOffSet[i - 1].value + ' ' + settingsShadowYOffSet[i - 1].value + ' ' + settingsShadowZOffSet[i - 1].value + ' ' + settingsShadowColor[i - 1].value
//                 })
//         }

// }

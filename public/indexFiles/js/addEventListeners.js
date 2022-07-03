// function addGetStartedButtonEventListeners() {
//     getStarted.addEventListener('click', function () {
//         setTimeout(transitionUpward, 400)
//         toggleClass(body, "body-active1")
//         setTimeout(transitionClose, 2000)
//     });
// }

function addHomeOptionEventListeners() {
    homeOption.addEventListener("click", () => {


        pageHistory.currentPage.style.display = "none"
        pageHistory.currentPage = document.querySelector(".home-page")
        pageHistory.currentPage.style.display = "block"
        cssLink.href = "/indexFiles/css/style.css"


    })
}



function addPlayOptionEventListeners() {
    playOption.addEventListener("click", () => {

        transitionUpward()
        setTimeout(() => {

            if (!pageHistory.optionsClicked[1]) {

                insertRoomSettingsHtml()
                pageHistory.currentPage.style.display = "none"
                pageHistory.currentPage = document.querySelector(".room-settings-page")
                pageHistory.currentPage.style.display = "block"
                pageHistory.currentPlayPage = pageHistory.currentPage
                pageHistory.optionsClicked[1] = true
                pageHistory.currentPlayPageCssFilePath = "/roomSettingsFiles/css/style.css"
            }
            else {

                pageHistory.currentPage.style.display = "none"
                pageHistory.currentPlayPage.style.display = "block"
                cssLink.href = pageHistory.currentPlayPageCssFilePath
                pageHistory.currentPage = pageHistory.currentPlayPage


            }
        }, 500)
        setTimeout(transitionClose, 2000)
    })
}

function addStatsOptionEventListeners() {
    statsOption.addEventListener("click", () => {

        if (!pageHistory.optionsClicked[2]) {

            insertStatsHtml()

        }
        else {

            pageHistory.currentPage.style.display = "none"
            pageHistory.currentPage = document.querySelector(".stats-page")
            pageHistory.currentPage.style.display = "block"
            cssLink.href = "/statsFiles/css/stats.css"


        }

    })
}

function addInstructionsOptionEventListeners() {
    instructionsOption.addEventListener("click", () => {
        if (!clickedButtons[3]) {
            insertHowToPlayHtml()
        }
        else {
            currentPage.style.display = "none"
            currentPage = document.querySelector(".three")
            currentPage.style.display = "block"
        }
    })
}



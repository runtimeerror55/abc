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





        // setTimeout(transitionUpward, 400)
        // toggleClass(body, "body-active1")
        // setTimeout(transitionClose, 2000)
        if (!pageHistory.optionsClicked[1]) {

            insertGameSettingsHtml()
            pageHistory.currentPage.style.display = "none"
            pageHistory.currentPage = document.querySelector(".game-settings-page")
            pageHistory.currentPlayPage = pageHistory.currentPage
            pageHistory.optionsClicked[1] = true
            pageHistory.currentPlayPageCssFilePath = "/gameSettingsFiles/css/style.css"
        }
        else {

            pageHistory.currentPage.style.display = "none"
            pageHistory.currentPlayPage.style.display = "block"
            cssLink.href = pageHistory.currentPlayPageCssFilePath
            pageHistory.currentPage = pageHistory.currentPlayPage


        }



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



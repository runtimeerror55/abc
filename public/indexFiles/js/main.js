
function transitionUpward() {

    toggleClass(loader, "loader-active1")
    setTimeout(() => {
        toggleClass(loaderSvg, "loader-svg-active1")
    }, 500)

}

function transitionClose() {

    toggleClass(loader, "loader-active1");
    toggleClass(loaderSvg, "loader-svg-active1");
    toggleClass(body, "body-active1");
    toggleClass(navBar, "nav-bar-active1")
}



function toggleClass(element, className) {
    element.classList.toggle(className)
}


// addGetStartedButtonEventListeners()
addPlayOptionEventListeners()
addHomeOptionEventListeners()
addInstructionsOptionEventListeners()
addStatsOptionEventListeners()

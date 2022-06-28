function insertTeamsHtml() {

    for (let i = 0; i < matchTypeValue; i++) {

        playersHtml +=

            `
                <div class="teams-container__team-${players[i]}-container">
                    <div class="teams-container__player-${players[i]}-container teams-container__player-container">
                        <div class="teams-container__player-${players[i]} teams-container__player"></div>
                        <input type="text" placeholder="enter room id" class="teams-container__room-id-input">
                        <button class="teams-container__connect-button button">connect</button>
                        <button class="teams-container__disconnect-button button">disconnect</button>
                    </div>
                </div>
                `

    }

    let nodeExist = document.querySelector("one-one")
    if (nodeExist != null) {
        nodeExist.innerHTML = `
        <article class="positioning">
            <section>
                <div class="teams-container">
                    ${playersHtml}
                </div>
            </section>
            <section>
                <div class="go-button">lets go</div>
            </section>
        </article >
    
    `

    }
    else {
        mainElement = document.createElement('main')
        mainElement.classList.add("teams-page")


        mainElement.innerHTML =
            `
                <article>
                <div class ="positioning">
                    <section>
                        <div class="teams-container">
                            ${playersHtml}
                        </div>
                    </section>
                    <section>
                        <div class="go-button">lets go</div>
                    </section>
                    </div>
                </article >
            
            `
        body.appendChild(mainElement)

    }

    cssLink.href = "/teamsFiles/css/style.css"
    loadJsDynamically("/teamsFiles/js/socket.js")
    loadJsDynamically("/teamsFiles/js/variables.js")
    loadJsDynamically("/teamsFiles/js/insertHtml.js")
    loadJsDynamically("/teamsFiles/js/addEventListeners.js")
    loadJsDynamically("/teamsFiles/js/initialize.js")
    loadJsDynamically("/teamsFiles/js/main.js")

}

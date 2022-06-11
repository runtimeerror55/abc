function insertTeamsHtml() {
    cssLink.href = "/teamsFiles/css/style.css"
    if (matchTypeValue != 5) {

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

        body.innerHTML =
            `<main>
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
            </main >
            `
    }
    else {
        body.innerHTML =
            `<main>
            <article class="positioning">
                <section>
                <div class="teams-container">

                  
                        <div class="teams-container__team-one-container">
                            <div class="teams-container__player-one-container teams-container__player-container">
                                <div class="teams-container__player-one teams-container__player">
                                </div>
                                <input type="text" placeholder="enter room id" class="teams-container__room-id-input">
                                <button class="teams-container__connect-button button">connect</button>
                                <button class="teams-container__disconnect-button button">disconnect</button>
                            </div>

                            <div class="teams-container__player-two-container teams-container__player-container">
                                <div class="teams-container__player-one teams-container__player">
                                </div>
                                <input type="text" placeholder="enter room id" class="teams-container__room-id-input">
                                <button class="teams-container__connect-button button">connect</button>
                                <button class="teams-container__disconnect-button button">disconnect</button>
                            </div>
                        </div>
                    

                   
                        <div class="teams-container__team-two-container">
                            <div class="teams-container__player-three-container teams-container__player-container">
                                <div class="teams-container__player-three teams-container__player">
                                </div>
                                <input type="text" placeholder="enter room id" class="teams-container__room-id-input">
                                <button class="teams-container__connect-button button">connect</button>
                                <button class="teams-container__disconnect-button button">disconnect</button>
                            </div>
                            <div class="teams-container__player-four-container teams-container__player-container">
                                <div class="teams-container__player-four teams-container__player">
                                </div>
                                <input type="text" placeholder="enter room id" class="teams-container__room-id-input">
                                <button class="teams-container__connect-button button">connect</button>
                                <button class="teams-container__disconnect-button button">disconnect</button>
                            </div>
                        </div>
                   
                </div>
                </section>
                <section>
                <div class="go-button">lets go</div>
            </section>
            </article>
        </main>
        `
    }
    loadJsDynamically("/teamsFiles/js/socket.js")
    loadJsDynamically("/teamsFiles/js/variables.js")
    loadJsDynamically("/teamsFiles/js/insertHtml.js")
    loadJsDynamically("/teamsFiles/js/addEventListeners.js")
    loadJsDynamically("/teamsFiles/js/main.js")
}


function insertGameHtml() {
    cssLink.href = "/gameFiles/css/style.css"
    playersHtml = ""
    for (let playerIndex = 0; playerIndex < matchTypeValue; playerIndex++) {
        playersHtml +=

            `

                            <article class="article ${arrayOfPlayers[playerIndex]}
                                <!-- gac = game-area-container -->
                                <div class="${arrayOfPlayers[playerIndex]}gac gac">
                                    <section>
                                        <div class="${arrayOfPlayers[playerIndex]}part-one part-one">

                                            <!-- gbuc = game-buttons-container -->
                                            <div class="${arrayOfPlayers[playerIndex]}gbuc gbuc">
                                                <div class="${arrayOfPlayers[playerIndex]}score score">
                                                    score</div>
                                                <div class="${arrayOfPlayers[playerIndex]}play play">
                                                    play</div>
                                                <div class="${arrayOfPlayers[playerIndex]}restart restart">
                                                    restart
                                                </div>

                                            </div>
                                        </div>
                                    </section>
                                    <section>
                                        <div class="${arrayOfPlayers[playerIndex]}part-two part-two">

                                            <section>
                                                <div class="${arrayOfPlayers[playerIndex]}rectangle-left rectangle-left">

                                                </div>
                                                <div class="${arrayOfPlayers[playerIndex]}rectangle-left rectangle-left">

                                                </div>
                                                <div class="${arrayOfPlayers[playerIndex]}rectangle-left rectangle-left">

                                                </div>
                                                <div class="${arrayOfPlayers[playerIndex]}rectangle-left rectangle-left">

                                                </div>
                                                <div class="${arrayOfPlayers[playerIndex]}rectangle-left rectangle-left">

                                                </div>
                                                <div class="${arrayOfPlayers[playerIndex]}rectangle-left rectangle-left">

                                                </div>
                                                <div class="${arrayOfPlayers[playerIndex]}rectangle-left rectangle-left">

                                                </div>
                                                <div class="${arrayOfPlayers[playerIndex]}rectangle-left rectangle-left">

                                                </div>
                                                <div class="${arrayOfPlayers[playerIndex]}rectangle-left rectangle-left">

                                                </div>
                                            </section>

                                            <section>
                                                <!-- gbc = game-box-container -->
                                                <div class="${arrayOfPlayers[playerIndex]}gbc gbc"></div>

                                                <section>
                                                    <div class="${arrayOfPlayers[playerIndex]}rectangle-center rectangle-center">

                                                    </div>
                                                    <div class=" ${arrayOfPlayers[playerIndex]}rectangle-center rectangle-center">

                                                    </div>
                                                    <div class="${arrayOfPlayers[playerIndex]}rectangle-center rectangle-center">

                                                    </div>
                                                    <div class=" ${arrayOfPlayers[playerIndex]}rectangle-center rectangle-center">

                                                    </div>
                                                    <div class="${arrayOfPlayers[playerIndex]}rectangle-center rectangle-center">

                                                    </div>
                                                    <div class=" ${arrayOfPlayers[playerIndex]}rectangle-center rectangle-center">

                                                    </div>
                                                    <div class="${arrayOfPlayers[playerIndex]}rectangle-center rectangle-center">

                                                    </div>


                                                </section>

                                            </section>

                                            <section>
                                                <div class=" ${arrayOfPlayers[playerIndex]}rectangle-right rectangle-right">

                                                </div>
                                                <div class=" ${arrayOfPlayers[playerIndex]}rectangle-right rectangle-right">

                                                </div>
                                                <div class="${arrayOfPlayers[playerIndex]}rectangle-right rectangle-right">

                                                </div>
                                                <div class=" ${arrayOfPlayers[playerIndex]}rectangle-right rectangle-right">

                                                </div>
                                                <div class="${arrayOfPlayers[playerIndex]}rectangle-right rectangle-right">

                                                </div>
                                                <div class=" ${arrayOfPlayers[playerIndex]}rectangle-right rectangle-right">

                                                </div>
                                                <div class="${arrayOfPlayers[playerIndex]}rectangle-right rectangle-right">

                                                </div>
                                                <div class=" ${arrayOfPlayers[playerIndex]}rectangle-right rectangle-right">

                                                </div>
                                                <div class="${arrayOfPlayers[playerIndex]}rectangle-right rectangle-right">

                                                </div>
                                            </section>

                                        </div>
                                    </section>
                                </div>
                                <section>

                                    <div class="${arrayOfPlayers[playerIndex]}game-over game-over">
                                        <button class="${arrayOfPlayers[playerIndex]}reset reset">reset</button>
                                    </div>
                                </section>
                            </article >
                            `
    }
    body.innerHTML = `<main class="main">${playersHtml}</main>`
    loadJsDynamically("/gameFiles/js/directions.js")
    loadJsDynamically("/gameFiles/js/addAndToggleClass.js")
    loadJsDynamically("/gameFiles/js/initializeGameContent.js")
    loadJsDynamically("/gameFiles/js/addEventListeners.js")
    loadJsDynamically("/gameFiles/js/calculations.js")
    loadJsDynamically("/gameFiles/js/conditions.js")
    loadJsDynamically("/gameFiles/js/dpAlgorithm.js")
    loadJsDynamically("/gameFiles/js/variables.js")
    loadJsDynamically("/gameFiles/js/startTheGame.js")
    loadJsDynamically("/gameFiles/js/socket.js")
    loadJsDynamically("/gameFiles/js/main.js")
}
function insertGameHtml()
{

    playersHtml = ""
    for (let playerIndex = 0; playerIndex < matchTypeValue; playerIndex++)
    {
        playersHtml +=

            `

                            <article class="article"> ${arrayOfPlayers[playerIndex]}
                                <!-- gac = game-area-container -->
                                <div class="${arrayOfPlayers[playerIndex]}gac gac">
                                    <section>
                                        <div class="${arrayOfPlayers[playerIndex]}part-one part-one">

                                            <!-- gbuc = game-buttons-container -->
                                            <div class="${arrayOfPlayers[playerIndex]}gbuc gbuc">
                                               ${insertButtonsHtml(playerIndex)}

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


    gameArenaPage.innerHTML = `
                        <div class ="articles-container">
                            ${playersHtml}
                        </div>
                        <section>
                            <div class = "winner-message"></div>
                        </section>
                     `
    cssLink.href = "/gameFiles/css/style.css"
    // loadJsDynamically("/gameFiles/js/variables.js")
    // loadJsDynamically("/gameFiles/js/directions.js")
    // loadJsDynamically("/gameFiles/js/addAndToggleClass.js")
    // loadJsDynamically("/gameFiles/js/addEventListeners.js")
    // loadJsDynamically("/gameFiles/js/calculations.js")
    // loadJsDynamically("/gameFiles/js/conditions.js")
    // loadJsDynamically("/gameFiles/js/dpAlgorithm.js")
    // loadJsDynamically("/gameFiles/js/startTheGame.js")
    // loadJsDynamically("/gameFiles/js/socket.js")
    // loadJsDynamically("/gameFiles/js/initializeGameContent.js")
    // loadJsDynamically("/gameFiles/js/main.js")
    initializeGameArenaPageAllThings()
}


function insertButtonsHtml(playerIndex)
{
    if (playerIndexValue == playerIndex)
    {
        if (playerIndexValue == 0)
        {
            return ` <div class="${arrayOfPlayers[playerIndex]}name name">
            ${userProfileInformation.name}</div>
            <div class="${arrayOfPlayers[playerIndex]}exit exit">
        exit</div>
        <div class="${arrayOfPlayers[playerIndex]}score score">
        score</div>
    <div class="${arrayOfPlayers[playerIndex]}play play">
        play</div>`
        }
        else
        {
            return ` <div class="${arrayOfPlayers[playerIndex]}name name">
            ${userProfileInformation.name}</div>
              <div class="${arrayOfPlayers[playerIndex]}exit exit">
        exit</div>
        <div class="${arrayOfPlayers[playerIndex]}score score">
        score</div>
    <div class="${arrayOfPlayers[playerIndex]}ready ready not-ready-active">
        not ready
    </div>`
        }
    }
    else
    {
        if (playerIndex == 0)
        {

            return `<div class="${arrayOfPlayers[playerIndex]}name name">
            ${userProfileInformation.name}</div>
            <div class="${arrayOfPlayers[playerIndex]}score score">
        score</div>
    <div class="${arrayOfPlayers[playerIndex]}play play">
        play</div>`
        }
        else
        {
            return ` <div class="${arrayOfPlayers[playerIndex]}name name">
            ${userProfileInformation.name}</div>
             <div class="${arrayOfPlayers[playerIndex]}score score">
        score</div>
    <div class="${arrayOfPlayers[playerIndex]}ready ready not-ready-active">
        not ready
    </div>`
        }

    }
}


function insertRoomDashboardPageTeamsdHtml()
{

    playersHtml = ""
    for (let i = 0; i < matchTypeValue; i++)
    {

        playersHtml +=

            `
                <div class="teams-container__team-${players[i]}-container">
                    <div class="teams-container__player-${players[i]}-container teams-container__player-container">
                        <div class="teams-container__player-${players[i]} teams-container__player"></div>
                        <button class="teams-container__connect-button button">connect</button>
                        <button class="teams-container__disconnect-button button">disconnect</button>
                    </div>
                </div>
                `

    }

    teamsDashboardArticle = document.querySelector(".teams-dashboard")
    teamsDashboardArticle.innerHTML =
        `            
                    <section>
                        <div class="teams-container">
                            ${playersHtml}
                        </div>
                    </section>
                    <section>
                        <div class="go-button button">lets go</div>
                    </section>
            
            `



}
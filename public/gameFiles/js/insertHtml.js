function insertTeamsHtml() {
    cssLink.href = "teams.css"
    if (matchTypeIndex != 5) {
        for (let i = 0; i < matchTypeIndex; i++) {

            playersHtml +=

                `<section>
         
            <div class="teams-container__player-${players[i]}-container teams-container__player-container">
                <div class="teams-container__player-${players[i]} teams-container__player"></div>
                <input type="text" placeholder="enter room id" class="teams-container__room-id-input">
                <button class="teams-container__connect-button button">connect</button>
                <button class="teams-container__disconnect-button button">disconnect</button>
            </div>
                
        </section>
        `
        }

        body.innerHTML =
            `<main class="teams-html">
            <article >
                <div class="teams-container">
                    ${playersHtml}
                </div>
            </article >
        </main >
        `
    }
    else {
        body.innerHTML =
            `<main class="teams-html">
            <article>
                <div class="teams-container">

                    <section>
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
                    </section>

                    <section>
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
                    </section>
                </div>
            </article>
        </main>
        `
    }
    connectButtons = document.querySelectorAll('.teams-container__connect-button')
    teamsHtml = document.querySelector('.teams-html')
    addConnectButtonsEventListeners()
}


function insertGameHtml() {
    cssLink.href = "app.css"
    body.innerHTML =
        `
    <main class="main">

    <article class=" article player-one">
        <!-- gac = game-area-container -->
        <div class="player-one__gac gac">
            <div class="player-one__part-one part-one">
                <section>
                    <!-- gbuc = game-buttons-container -->
                    <div class="player-one__gbuc gbuc">
                        <div class="player-one__score player-one__game-button score game-button">
                            score</div>
                        <div class="player-one__play player-one__game-button play game-button">
                            play</div>
                        <div class="player-one__restart player-one__game-button restart game-button">
                            restart
                        </div>

                    </div>
                </section>
            </div>


            <div class="player-one__part-two part-two">

                <section>
                    <div class="player-one__rectangle-left rectangle-left">

                    </div>
                    <div class="player-one__rectangle-left rectangle-left">

                    </div>
                    <div class="player-one__rectangle-left rectangle-left">

                    </div>
                    <div class="player-one__rectangle-left rectangle-left">

                    </div>
                    <div class="player-one__rectangle-left rectangle-left">

                    </div>
                    <div class="player-one__rectangle-left rectangle-left">

                    </div>
                    <div class="player-one__rectangle-left rectangle-left">

                    </div>
                    <div class="player-one__rectangle-left rectangle-left">

                    </div>
                    <div class="player-one__rectangle-left rectangle-left">

                    </div>
                </section>

                <section>
                    <!-- gbc = game-box-container -->
                    <div class="player-one__gbc gbc"></div>

                    <section>
                        <div class="player-one__rectangle-center rectangle-center">

                        </div>
                        <div class=" player-one__rectangle-center rectangle-center">

                        </div>
                        <div class="player-one__rectangle-center rectangle-center">

                        </div>
                        <div class=" player-one__rectangle-center rectangle-center">

                        </div>
                        <div class="player-one__rectangle-center rectangle-center">

                        </div>
                        <div class=" player-one__rectangle-center rectangle-center">

                        </div>
                        <div class="player-one__rectangle-center rectangle-center">

                        </div>


                    </section>

                </section>

                <section>
                    <div class=" player-one__rectangle-right rectangle-right">

                    </div>
                    <div class=" player-one__rectangle-right rectangle-right">

                    </div>
                    <div class="player-one__rectangle-right rectangle-right">

                    </div>
                    <div class=" player-one__rectangle-right rectangle-right">

                    </div>
                    <div class="player-one__rectangle-right rectangle-right">

                    </div>
                    <div class=" player-one__rectangle-right rectangle-right">

                    </div>
                    <div class="player-one__rectangle-right rectangle-right">

                    </div>
                    <div class=" player-one__rectangle-right rectangle-right">

                    </div>
                    <div class="player-one__rectangle-right rectangle-right">

                    </div>
                </section>

            </div>
        </div>
    </article>

    <article class="article player-two">
        <!-- gac = game-area-container -->
        <div class="player-two__gac gac">
            <div class="player-two__part-one part-one">
                <section>
                    <!-- gbuc = game-buttons-container -->
                    <div class="player-two__gbuc gbuc">
                        <div class="player-two__score player-two__game-button score game-button">
                            score</div>
                        <div class="player-two__play player-two__game-button play game-button">
                            play</div>
                        <div class="player-two__restart player-two__game-button restart game-button">
                            restart
                        </div>

                    </div>
                </section>
            </div>


            <div class="player-two__part-two part-two">

                <section>
                    <div class="player-two__rectangle-left rectangle-left">

                    </div>
                    <div class="player-two__rectangle-left rectangle-left">

                    </div>
                    <div class="player-two__rectangle-left rectangle-left">

                    </div>
                    <div class="player-two__rectangle-left rectangle-left">

                    </div>
                    <div class="player-two__rectangle-left rectangle-left">

                    </div>
                    <div class="player-two__rectangle-left rectangle-left">

                    </div>
                    <div class="player-two__rectangle-left rectangle-left">

                    </div>
                    <div class="player-two__rectangle-left rectangle-left">

                    </div>
                    <div class="player-two__rectangle-left rectangle-left">

                    </div>
                </section>

                <section>
                    <!-- gbc = game-box-container -->
                    <div class="player-two__gbc gbc"></div>

                    <section>
                        <div class="player-two__rectangle-center rectangle-center">

                        </div>
                        <div class=" player-two__rectangle-center rectangle-center">

                        </div>
                        <div class="player-two__rectangle-center rectangle-center">

                        </div>
                        <div class=" player-two__rectangle-center rectangle-center">

                        </div>
                        <div class="player-two__rectangle-center rectangle-center">

                        </div>
                        <div class=" player-two__rectangle-center rectangle-center">

                        </div>
                        <div class="player-two__rectangle-center rectangle-center">

                        </div>


                    </section>

                </section>

                <section>
                    <div class=" player-two__rectangle-right rectangle-right">

                    </div>
                    <div class=" player-two__rectangle-right rectangle-right">

                    </div>
                    <div class="player-two__rectangle-right rectangle-right">

                    </div>
                    <div class=" player-two__rectangle-right rectangle-right">

                    </div>
                    <div class="player-two__rectangle-right rectangle-right">

                    </div>
                    <div class=" player-two__rectangle-right rectangle-right">

                    </div>
                    <div class="player-two__rectangle-right rectangle-right">

                    </div>
                    <div class=" player-two__rectangle-right rectangle-right">

                    </div>
                    <div class="player-two__rectangle-right rectangle-right">

                    </div>
                </section>

            </div>
        </div>
    </article>

    <div class="room">
        <button class="create-room">create room</button>
        <input type="text" class="join-room-input">
        <button class="join-room">join room</button>
    </div>
</main>
    `
}
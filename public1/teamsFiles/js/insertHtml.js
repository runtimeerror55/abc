function insertGameHtml() {
    cssLink.href = "/gameFiles/css/style.css"
    body.innerHTML =
        ` 
        <main class="main">

        <article class="article player-one">
            <!-- gac = game-area-container -->
            <div class="player-one__gac gac">
                <section>
                    <div class="player-one__part-one part-one">

                        <!-- gbuc = game-buttons-container -->
                        <div class="player-one__gbuc gbuc">
                            <div class="player-one__score score">
                                score</div>
                            <div class="player-one__play play">
                                play</div>
                            <div class="player-one__restart restart">
                                restart
                            </div>

                        </div>
                    </div>
                </section>
                <section>
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
                </section>
            </div>
            <section>

                <div class="player-one__game-over">
                    <button class="player-one__reset reset">reset</button>
                </div>
            </section>
        </article>

        <article class="article player-two">
            <!-- gac = game-area-container -->
            <div class="player-two__gac gac">
                <section>
                    <div class="player-two__part-one part-one">

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

                    </div>
                </section>


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
            <section>

                <div class="player-two__game-over">
                    <button class="player-two__reset reset">reset</button>
                </div>
            </section>
        </article>


    </main>
    `
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
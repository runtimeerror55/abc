function insertRoomDashboardHtml()
{

    roomDashboardPage.innerHTML =
        `
          
                <div class ="articles-container">
                <article>
                <!-- g-s-c = game-settings-container -->


                <div class="g-s-c">
                <h1 class="g-s-c__heading">game settings</h1>

                    <div class="g-s-c__part-one">
               
                    <!-- m-t-y = match-type-container -->

                    <div class="g-s-c__match-type-container">
                    <div class="label">match type</div>
                        <select class="g-s-c__match-type button" for>
                            <option value="1">single player</option>
                            <option value="2">1 vs 1</option>
                            <option value="3">1 vs 1 vs 1</option>
                            <option value="4">1 vs 1 vs 1 vs 1</option>
                            <option value="5">2 vs 2</option>
                        </select>
                       
                    </div>


        
                    <div class="g-s-c__match-mode-container">
                    <div class="label">match mode</div>
                        <select class="g-s-c__match-mode button" for>
                            <option value="0">until the last guy beats the highest score</option>
                            <option value="5">maximise the score in 5 min</option>
                            <option value="7">maximise the score in 7 min</option>
                            <option value="10">maximise the score in 10 min</option>
                            <option value="15">maximise the score in 15 min</option>
                        </select>
                        
                    </div>
                    </div>
        
                   <div class="g-s-c__part-two">
                    <div class="g-s-c__button-container">
                    <button class="g-s-c__exit-room button">exit room</button>
                        <button class="g-s-c__apply-button button">apply settings</button>
                    </div>
                    </div>
        
        
                </div>
            </article>

            <article>
              <!-- j-ps-c = joined-players-container -->
            
                
                <div class="j-ps-c">
                    <h1 class="j-ps-c__heading">joined players</h1>
                </div>
            </article>

            <article class="teams-dashboard"></article>
        </div>
`

    cssLink.href = "/roomDashboardFiles/css/style.css"
    // loadJsDynamically("/teamsFiles/js/socket.js")
    // loadJsDynamically("/teamsFiles/js/variables.js")
    // loadJsDynamically("/teamsFiles/js/insertHtml.js")
    // loadJsDynamically("/teamsFiles/js/addEventListeners.js")
    // loadJsDynamically("/teamsFiles/js/initialize.js")
    // loadJsDynamically("/teamsFiles/js/main.js")
    initializeRommDashboardPageAllthings()


}


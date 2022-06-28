socket.emit("retrieve stats data", userProfileInformation.googleId)

socket.on("take your data", (payload) => {
        cssLink.href = "/stats.css"
        console.log(payload)
        let htmlData = ""
        let innerHtmlData = ""
        for (let i = 0; i < payload.games.playersDetails.length; i++) {

                for (let j = 0; j < payload[i].games.playersDetails.length; j++) {
                        innerHtmlData += `  
                        <div class="inner-row">

                                <span class="inner-column">${playload[j].games.playersDetails.playerNumber}</span>
                                <span class="inner-column">${playload[j].games.playersDetails.name}</span>
                                <span class="inner-column">${playload[j].games.playersDetails.score}</span>
                                <span class="inner-column">5 min</span>
        
        
        
                </div>`
                }
                htmlData += ` 

<div class="toc__row${1} row">

        <span class="toc__row${1}-column1 column">21 july</span>
        <span class="toc__row${1}-column2 column">7:40 pm Ist</span>
        <span class="toc__row${1}-column3 column">single player</span>
        <span class="toc__row${1}-column4 column">aakash</span>

        <!-- i-h-r = inner-heading-row -->
        <div class="row${1}__i-h-r i-h-r">

                <!-- i-h-c = inner-heading-column -->
                <span class="i-h-c">player number</span>
                <span class="i-h-c">player name</span>
                <span class="i-h-c">score</span>
                <span class="i-h-c">time</span>


        </div>
        <div class="row${i}__i-d-c">
        ${innerHtmlData}
        </div>
</div>
`
        }

        let tableOneContainer = document.querySelector(".toc")
        body.innerHTML =
                `  
                <main>
                <article>
                        <div class="tables-container">


                                <section>
                                        <!-- tac = table-one-container -->
                                        <div class="toc">

                                        <div class="toc_heading-row heading-row">

                                        <!-- hr1c1 = heading-row1-column1 -->
                                        <span class="toc__hr1c1 heading-column">Date</span>
                                        <span class="toc__hr1c2 heading-column">time</span>
                                        <span class="toc__hr1c3 heading-column">matchType</span>
                                        <span class="toc__hr1c4 heading-column">winner</span>
                                
                                </div>
                                
                                ${htmlData}


                                        </div>
                                </section>
                        </div>

                </article>
        </main>
        
       
`

})
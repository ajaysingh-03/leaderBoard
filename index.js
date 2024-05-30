const errorMsg = document.querySelector(".error-msg");
const scoreboardContainer = document.querySelector(".scoreboard-container");
const mainScoreboard = document.querySelectorAll(".main-scoreboard");
// let eventOnAllBtn = document.querySelectorAll(".main-btn-container");

document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault();
    const firstName = e.target.children[0].value;
    const lastName = e.target.children[1].value;
    const country = e.target.children[2].value;
    const score = e.target.children[3].value;
    console.log(firstName, lastName, country,score);

    if(firstName == "" || lastName== "" || country == "" || score== ""){
        return errorMsg.style.display = "block";
    }

    const scoreboardEle = document.createElement("div");

    scoreboardEle.classList.add("main-scoreboard")
    scoreboardEle.innerHTML = `
    <div>
        <p class="main-player">${firstName}</p>
    </div>
        <p class="main-country">${country}</p>
        <p class="main-score">${score}</p>
    <div class="main-btn-container">
        <button>&#x1f5d1;</button>
        <button>+5</button>
        <button>-5</button>
    </div>
    `
    scoreboardContainer.appendChild(scoreboardEle);
    sortScoreboard();
    activateBtnEventListener();

});

function activateBtnEventListener(){
    document.querySelectorAll(".main-btn-container").forEach((el)=>{
        console.log(el);
        el.addEventListener("click", (e)=>{
            let textContent = e.target.textContent;
            console.log(textContent);
            let playerScore = e.target.parentElement.parentElement.children[2];

            if(textContent.length > 2) return;
            console.log(e.target.parentElement.parentElement);
            console.log("hiii");
            
            if(textContent === "🗑"){
                return e.target.parentElement.parentElement.remove();
            }
            playerScore.textContent = parseInt(playerScore.textContent)+ parseInt(textContent);
            sortScoreboard();
        })
    })

}

activateBtnEventListener();

function sortScoreboard(){
    let scoreArray =[];
    mainScoreboard.forEach(function(el){
        scoreArray.push(el);
    });
    console.log(scoreArray);
    let sortedEle = scoreArray.map(function(e){
        return e;
    });
    sortedEle.sort(function(a,b){
        let numA = parseInt(a.children[2].tetxContent);
        let numB = parseInt(b.children[2].tetxContent);

        if(numA > numB) return -1;
        if(numA < numB) return 1;
    });
    sortedEle.forEach(function(el){
        scoreboardContainer.appendChild(el);
    })

}
// listen to the reset btn to reload the page
document.querySelector(".btn-outline-info").addEventListener("click", ()=> {
    location.reload();
});

// card running with setInterval function
let imgCard = ["Rock", "Scissors", "Paper"];

// result msg html element
let result = document.querySelector(".result-msg");

let playerScore = 0;
let compScore = 0;
let randomCard;
document.querySelector(".player-score").innerHTML = `${playerScore}`;
document.querySelector(".computer-score").innerHTML = `${compScore}`;

intervalFun = setInterval(()=> {
    let randomIndex = Math.floor(Math.random()*imgCard.length);
    randomCard = imgCard[randomIndex];
}, 50);

// select the images to listen for the click event
const images = document.querySelectorAll("img");
images.forEach(image => {
    image.addEventListener("click", ()=> {
        // computer pick
        const computerPick = imgCard[Math.floor(Math.random()*imgCard.length)];

        clearTimeout(intervalFun);
        if (randomCard == image.id && randomCard == computerPick) {
            playerScore++;
            compScore++;
            result.innerHTML = "both"
        } else if (randomCard == image.id) {
           // increment the player score
           playerScore++;
           // display get card msg
           result.innerHTML = "player get it"
       } else if (randomCard == computerPick) {
           // increment the comp score
           compScore++;
           // display get card msg
            result.innerHTML = "computer get it"
       } else {
           // display none of both
            result.innerHTML = "no one get it"
       }
    })
})


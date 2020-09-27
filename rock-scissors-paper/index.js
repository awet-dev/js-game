const rest = document.querySelector(".rest");
const playerScore = document.querySelector(".player-score");
const compScore = document.querySelector(".comp-score");
const images = document.querySelectorAll("img");
const result = document.querySelector(".result");

const card = ['scissor', 'rock', 'paper'];
let randomCard;
let scorePlayer = 0;
let scoreComp = 0;

setInterval(()=> {
    let randomIndex = Math.floor(Math.random()*card.length);
    randomCard = card[randomIndex];
}, 100)


images.forEach(image => {
    image.addEventListener('click', () => {
        let comp = card[Math.floor(Math.random()*card.length)];
        if (scorePlayer == 30 || scoreComp == 30) {
            if (scoreComp > scorePlayer) {
                let winner = 'Computer'
                result.innerHTML = `The winner is ${winner}`
            } else if (scorePlayer == scoreComp) {
                result.innerHTML = `They have equal points`
            } else {
                result.innerHTML = `The winner is Player`
            }
        } else if (image.id == randomCard && comp == randomCard) {
            scorePlayer++;
            scoreComp++;
            playerScore.innerHTML = `player score : ${scorePlayer}`;
            compScore.innerHTML = `${scoreComp} : computer score`
            result.innerHTML = 'they guess both the card'
        } else if (image.id == randomCard) {
            scorePlayer++;
            playerScore.innerHTML = `player score : ${scorePlayer}`
            result.innerHTML = 'player guesses the card'
        } else if (comp == randomCard) {
            scoreComp++;
            compScore.innerHTML = `${scoreComp} : computer score`
            result.innerHTML = 'comp guesses the card'
        } else {
            result.innerHTML = 'no one guesses the card'
        }
    })
})

rest.addEventListener("click", ()=> {
    scoreComp = 0;
    scorePlayer = 0;
    playerScore.innerHTML = `player score : ${scorePlayer}`
    compScore.innerHTML = `${scoreComp} : computer score`
    result.innerHTML = 'select your weapon';
});



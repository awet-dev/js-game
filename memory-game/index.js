/*
(()=> {
    let id = 0;
    document.addEventListener('keydown', event => {
        if (event.keyCode == 39) {
            if (id == 11) {
                id = 0;
            } else {
                id++;
            }
        } else if (event.keyCode == 37) {
            if (id == 0) {
                id = 11;
            } else {
                id--;
            }
        }
        else if (event.keyCode == 38) {
            if (id == 0) {
                id = 8;
            } else if (id == 1) {
                id = 9;
            } else if (id == 2) {
                id = 10;
            } else if (id == 3) {
                id = 11;
            } else {
                id -= 4;
            }
        }  else if (event.keyCode == 40) {
            if (id == 8) {
                id = 0;
            } else if (id == 9) {
                id = 1;
            } else if (id == 10) {
                id = 2;
            } else if (id == 11) {
                id = 3;
            } else {
                id += 4;
            }
        }
        if (event.keyCode == 13) {
            timer++;
            if (timer <= 36) {
                flipCard(cardArray[id].id); // call the function with card id parameter
            } else if (timer == 37) {
                soundEffect();
                // if timer limit reaches display msg of loosing to the player
                const d1 = document.querySelector('.navbar');
                d1.insertAdjacentHTML('afterend', `<div class="alert alert-danger mt-2" role="alert">\n
                <strong>Sorry You Loose!</strong> If you want to play one more, <strong>Click Reset</strong>.\n
            </div>`);
            }
        }
    });
})();
 */



// set a random image to the card when the game start
// disable clicking when the first card flips
// check if images of the second card is the same as the first one, put it in a variable.
// when the third card is clicked react corresponding to the situation (let cards stay is the are the same, otherwise flip back the cards back
// make the variable empty, and remove the imgSrc of the matched cards from their array

let progress = 0; // the progress of your answer
let randomSrcImg = [];
let index = 0;
let timer = 0; // count number of clicks to check if player looses
let winCounter = 0;
let firstCard;
let clickCounter = 1;
let checkImgArray = []; // checkImgArray is to hold the randomly clicked pair srcImg
let srcImg = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg"]; // array of the srcImg

// to get the randomly placed images
for (let i = 0; i < 12; i++) {
    let randomIndex = Math.floor(Math.random()*srcImg.length);
    randomSrcImg[i] = srcImg[randomIndex];// get Img at the index of randomIndex
    srcImg.splice(randomIndex, 1);
}

// listen to the click event of the reset btn to reset the game
document.querySelector("#reset").addEventListener("click", ()=> {
    location.reload();
})

let cardArray = Array.from(document.querySelectorAll(".flip-card"));
cardArray.forEach(card => {
    let cardId = card.getAttribute("id");
    document.querySelector(`#${cardId} .flip-card-inner .flip-card-back img`).setAttribute("src", `../share/images/${randomSrcImg[index]}`);
    index++;
    card.addEventListener("click", ()=> {
        timer++;
        if (timer < 25) {
            if (clickCounter < 2) {
                firstCard = card;
                firstCard.classList.add("disable");
                card.classList.toggle("check");
                let cardId = card.getAttribute("id");
                let cardImg = document.querySelector(`#${cardId} .flip-card-inner .flip-card-back img`).getAttribute("src");
                checkImgArray.push(cardImg);
                clickCounter++;
            } else {
                card.classList.toggle("check");
                let cardId = card.getAttribute("id");
                let cardImg = document.querySelector(`#${cardId} .flip-card-inner .flip-card-back img`).getAttribute("src");
                checkImgArray.push(cardImg);
                setTimeout(()=> {
                    if (checkImgArray[0] === checkImgArray[1]) {
                        card.classList.add("disable")
                        progress += 16.67; // increment the progress when ever srcImg matches
                        document.querySelector(".progress-bar").style.width = `${progress}%`;
                        winCounter++;
                        if (winCounter == 6) {
                            soundEffect();
                            const d1 = document.querySelector('.navbar');
                            d1.insertAdjacentHTML('afterend', `<div class="alert alert-success mt-2" role="alert">\n
                            <strong>Congratulation!</strong> If you want to play one more, <strong>Click Reset</strong>.\n
                            </div>`);
                        }
                    } else {
                        // if they don't match flip both the cards back
                        firstCard.classList.toggle("check");
                        firstCard.classList.remove("disable")
                        card.classList.toggle("check")
                        card.classList.remove("disable")
                    }
                    clickCounter--;
                    checkImgArray = [];
                    firstCard = "";
                }, 500)
            }
        } else if (timer == 25) {
            soundEffect();
            // if timer limit reaches display msg of loosing to the player
            const d1 = document.querySelector('.navbar');
            d1.insertAdjacentHTML('afterend', `<div class="alert alert-danger mt-2" role="alert">\n
                <strong>Sorry You Loose!</strong> If you want to play one more, <strong>Click Reset</strong>.\n
            </div>`);
        }
    });

})

// add soundEffect that react if you win or loose
const soundEffect = ()=> {
    let soundLoose = new Audio("../share/sound/loose.mp3");
    let soundWin = new Audio("../share/sound/win-sound.mp3");
    if (timer == 25) {
        soundLoose.play();
    } else if (winCounter == 6) {
        soundWin.play();
    }
}















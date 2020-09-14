let timer = 0; // count number of clicks to check if player looses
let progress = 0; // the progress of your answer
let checkImgArray = []; // checkImgArray is to hold the randomly clicked pair srcImg
let firstCard; // firstCard will save the first clicked card in pair of click
let clickCounter = 1; // create counter to count how many times is clicked for a pair of try
let srcImg = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg"]; // array of the srcImg
let cardArray = Array.from(document.querySelectorAll(".flip-card"));

// listen to the reset btn to reload the page
document.querySelector(".btn-outline-info").addEventListener("click", ()=> {
    location.reload();
});

// add soundEffect that react if you win or loose
const soundEffect = ()=> {
    let soundLoose = new Audio("../share/sound/loose.mp3");
    let soundWin = new Audio("../share/sound/win-sound.mp3");
    if (timer == 37) {
        soundLoose.play();
    } else if (srcImg.length == 0) {
        soundWin.play();
    }
}
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

/* listen to the click event of specifically clicked card by selecting it with its ID
And call the flipCard function */
cardArray.forEach(card => {
    card.addEventListener("click", ()=> {
        timer++;
        if (timer <= 36) {
            flipCard(card.id); // call the function with card id parameter
        } else if (timer == 37) {
           soundEffect();
            // if timer limit reaches display msg of loosing to the player
            const d1 = document.querySelector('.navbar');
            d1.insertAdjacentHTML('afterend', `<div class="alert alert-danger mt-2" role="alert">\n
                <strong>Sorry You Loose!</strong> If you want to play one more, <strong>Click Reset</strong>.\n
            </div>`);
        }
    });
})

// flipCard function to flip both cards if they are the same else turn the first card back
const flipCard = (imageId)=> {
    // get the card that is clicked at the moment
    let card = document.getElementById(`${imageId}`);

    // generate random index to be used for assigning a random srcImg to the clicked card
    let randomIndex = Math.floor(Math.random()*srcImg.length);
    let randomSrcImg = srcImg[randomIndex]; // get Img at the index of randomIndex
    checkImgArray.push(randomSrcImg); // update the checkImgArray with the randomSrcImg

    if (clickCounter < 2) {
        firstCard = card; // save the first clicked card

        // assign the randomSrcImg to the back of the card
        document.querySelector(`#${imageId} .flip-card-back img`).setAttribute("src", `../share/images/${randomSrcImg}`);
        card.classList.toggle("check"); // flip the card to display the hidden image
        clickCounter++; // increment the clickCounter to specify that first click is done
        firstCard.classList.add("disable"); // make card not clickable
    } else {
        // display the second image to show the player if they match
        document.querySelector(`#${imageId} .flip-card-back img`).setAttribute("src", `../share/images/${randomSrcImg}`);
        card.classList.toggle("check");

        // after 500 ms check it if they match or not, and react accordingly
        setTimeout(()=> {
            firstCard.classList.remove("disable"); // enable clicking the card
            // in second click check if both the randomSrcImg are same
            if (checkImgArray[0] == checkImgArray[1]) {
                // remove this image from the array so that it will no more appear in another card.
                for( let i = 0; i < srcImg.length; i++) {
                    if ( srcImg[i] == randomSrcImg) {
                        srcImg.splice(i, 1);
                    }
                }
                // loop over the cardArray to make the matched cards not clickable any more
                cardArray.forEach(cardCheck => {
                    if (firstCard.id == cardCheck.id){
                        cardCheck.classList.add("disable");
                    }
                    if (card.id == cardCheck.id){
                        cardCheck.classList.add("disable");
                    }
                })
                progress += 16.67; // increment the progress when ever srcImg matches
                document.querySelector(".progress-bar").style.width = `${progress}%`;

                // check if game is done or yet with in the intended try limit, If player wins display congratulation message
                if (srcImg.length == 0) {
                    soundEffect();
                    const d1 = document.querySelector('.navbar');
                    d1.insertAdjacentHTML('afterend', `<div class="alert alert-success mt-2" role="alert">\n
                        <strong>Congratulation!</strong> If you want to play one more, <strong>Click Reset</strong>.\n
                        </div>`);
                }

            } else {
                // if they don't match flip both the cards back
                firstCard.classList.toggle("check");
                card.classList.toggle("check")
            }
            // prepare all the variables for the next cycle
            firstCard = "";
            clickCounter--;
            checkImgArray = [];
        }, 500)
    }
}


// disable enter key if card matched
// make msg display once in clicking enter when playing with enter key
// replace the setTimeOut with another function to be called when clickCounter is 3


// make input to enter url, define







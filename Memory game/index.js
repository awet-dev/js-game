
// selected html elements of img
let images = document.querySelectorAll("img");

/* listen to the click event of specifically clicked card by selecting it with its ID
And call the flipCard function */
Array.from(document.querySelectorAll(".flip-card")).forEach(card => {
    card.addEventListener("click", ()=> {
        flipCard(card.id);
    });
})

let checkArray = []; // checkArray is to hold the randomly clicked pair srcImg
let firstCard; // firstCard will save the first clicked card
let clickCounter = 1; // create counter to count how many times is clicked

// flipCard function to flip both cards if they are the same else turn the first card back
const flipCard = (imageId)=> {
    // array of the srcImg
    let srcImg = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg"];

    // get the card that is clicked at the moment
    let card = document.getElementById(`${imageId}`);

    // generate random index to be used for assign a random srcImg
    let randomIndex = Math.floor(Math.random()*srcImg.length);
    let randomSrcImg = srcImg[randomIndex]; // get the randomSrcImg
    checkArray.push(randomSrcImg); // update the checkArray with the randomSrcImg

    // check if it is the first click or the second click
    if (clickCounter < 2) {
        firstCard = card; // save the first clicked card

        // assign the randomSrcImg to the hidden image
        document.querySelector(`#${card.id} .flip-card-back img`).setAttribute("src", `../share/images/${randomSrcImg}`);
        card.classList.toggle("check"); // flip the card to display the hidden image
        clickCounter++; // increment the clickCounter to specify that first click is done
    } else {
        // in second click check if both the randomSrcImg are same
        if (checkArray[0] == checkArray[1]) {
            // if they do display both of them
            document.querySelector(`#${card.id} .flip-card-back img`).setAttribute("src", `../share/images/${randomSrcImg}`);
            card.classList.toggle("check");
        } else {
            // if they dont flip the first cards back
            firstCard.classList.toggle("check");
        }
        firstCard = ""; // remove the first card that was clicked
        clickCounter--; // decrement the clickCounter to it initial value
        checkArray = []; // remove the randomSrcImg which are already checked

    }
}

// OR
// assign the cards to random image source
// when clicked get the image source of the first card and display it
// in the next click get the image source of the second card
// then check if they are the same
// if they do display the second card
// if they don't close both







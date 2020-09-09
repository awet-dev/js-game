// selected html elements
let images = document.querySelectorAll("img");

/*
// array of the image src to be display
const srcImg = ["img1.jpg", "img2.jpg"];

let i = 1;
let checkArray = [];
// this function executed when clicked
const displayImage = ()=> {
    let checker, src1;
    if (i < 2) {
        src1 = Math.floor(Math.random()*srcImg.length) -1;
        checker = src1;
        i++;
    } else {
        if (checker == src1) {
            // display both
            images[src1].setAttribute("src", `../share/images/${srcImg[src1]}`)
            checkArray.push(checker);
            i--;
            // remove it from the srcImg
        } else {
            displayImage();
        }
    }

};
 */

// listen to the click event of the card
Array.from(document.querySelectorAll(".flip-card")).forEach(card => {
    card.addEventListener("click", ()=> {
        console.log(card.id);

    });
})



// on click call the displayImage function
// displayImage function =>
// 1. get random number
// 2. take the src at the index of // 1. of the srcImg array
// 3. save it variable a and display the image
// then comes the second round
// 4. get random another number
// 5. take the src at the index of // 4. of the srcImg array
// 6. save it variable b
// 7. check if a and b are the same =>
// 8. if they do display the second images
// 9. if not restore the first image to background image

// OR
// assign the cards to random image source
// when clicked get the image source of the first card and display it
// in the next click get the image source of the second card
// then check if they are the same
// if they do display the second card
// if they don't close both





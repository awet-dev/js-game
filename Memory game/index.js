// selected html elements
let images = document.querySelectorAll("img");

// array of the image src to be display
const srcImg = ["img1", "img2", "img3", "img4", "img5", "img6"];

let i = 1;
// this function excuted when clicked
const displayImage = ()=> {
    let checker, src1;
    if (i < 2) {
        src1 = Math.floor(Math.random()*srcImg.length) -1;
        checker = src1;
        i++;
    } else {
        if (checker == src1) {
            // display both
            let checkArray = [];
            checkArray.push(checker);
            i--;
            // remove it from the srcImg
        } else {
            displayImage();
        }
    }

};

// listen to the click event of the card

Array.from(images).forEach(image => {

})


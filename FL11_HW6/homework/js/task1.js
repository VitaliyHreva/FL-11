let aX = +prompt("Please provide your 'aX' coordinate");
let aY = +prompt("Please provide your 'aY' coordinate");

let bX = +prompt("Please provide your 'bx' coordinate");
let bY = +prompt("Please provide your 'bY' coordinate");

let cX = +prompt("Please provide your 'cX' coordinate");
let cY = +prompt("Please provide your 'cY' coordinate");

let middle = 2;

if (isNaN(aX) || isNaN(aY) || isNaN(bX) || isNaN(bY) || isNaN(cX) || isNaN(cY)) {
    console.log('Invalid data')
} else if ((aX + bX) / middle === cX && (aY + bY) / middle === cY) {
    console.log(true);      
  } else {
    console.log(false);   
  }

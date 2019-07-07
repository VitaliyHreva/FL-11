let a = parseFloat(prompt("Please provide length of 'A' side"));
let b = parseFloat(prompt("Please provide length of 'B' side"));
let c = parseFloat(prompt("Please provide lenght of 'C' side"));

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log('Triangle doesn’t exist')
} else if (a === b && b === c && c === a) {
  console.log('Eequivalent triangle');
} else if (a === b || b === c || c === a) {
  console.log('Sosceles triangle')
} else {
  console.log('Normal triangle')
}
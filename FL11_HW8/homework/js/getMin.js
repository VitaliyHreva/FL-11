function getMin() {
  let numbersArr = arguments[0];
  
  for (let i = 1; i <= arguments.length; i++) {
    if (numbersArr > arguments[i]) {
        numbersArr = arguments[i];
    }
  }
  
  return numbersArr;
}

getMin(3, 0, -3);
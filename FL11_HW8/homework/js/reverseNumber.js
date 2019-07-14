function reverseNumber(num) {
  num = num + ''
  let reverseNum = Math.abs(parseInt(num.split('').reverse().join('')));
  
  if (num < 0) {
    return -reverseNum
  } else {
    return reverseNum
  }
}

reverseNumber(123);
reverseNumber(-456);
reverseNumber(10000);
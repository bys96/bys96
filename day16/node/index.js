const { odd, even } = require("./var");
// const { odd: odd2, even: even2 } = require("./var");
// object를 받는거라 그냥 다르면 안됨
const checkNumber = require("./func");
// 함수를 받는거라 이름이 달라도 됨

function checkStringOddOrEven(str) {
  if (str.length % 2) {
    return odd;
  }

  return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven("hello"));

'use strict'
module.exports = function getZerosCount(number) {
  let countZero = 0;
  for (let i = 5; i <= number; i=i*5) {
  	  countZero= Math.floor(number/i) + countZero;
      }  
  return countZero;
}


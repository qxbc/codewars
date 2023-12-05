{/*

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

*/}

function findAverage(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++){
      sum = sum + array[i]
    }
    if (sum == 0) {
      return 0
    } else {
      return sum/array.length
    }
  }
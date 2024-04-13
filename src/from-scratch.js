
// Question 1 //
const addToFrontOrBack = (arr, value, isFront) => {
  if (isFront === true) {
    arr.unshift(value)
  } else {
    arr.push(value)
  }
  return arr
};

// Question 2 //
const reverseString = (str) => {
  return str.split('').reverse().join('')
};
console.log(reverseString('hello'))


// Question 3 //
const newArrayFullOf = (value, numOfValue) => {
  let array = Array(numOfValue).fill(value);
  return array;
  };
console.log(newArrayFullOf(true, 4));


// Question 4 //
const insertIntoMiddle = (arr, value) => {
  let array = Math.floor(arr.length / 2)
  arr.splice(array, 0, value)
  return arr
};
console.log(insertIntoMiddle([1, 2, 3, 4, 5], 6))


// Question 5 //
const deleteFromMiddle = (arr) => {
  let middle = Math.floor(arr.length / 2)
  arr.splice(middle, 1)
  return arr
};
console.log(deleteFromMiddle([1, 2, 3, 4, 5,]))


// Question 6 //
const isRightIndex = (arr, value, index) => {
  if (arr[index] === value) {
    return true
  } else {
    return false
  }
};
//                 0     1    2 
let testArray6 = ['yo', 'hi', 6]
console.log(isRightIndex(testArray6, 6, 2))


// Question 7 //
arr01 = [1, 2, 3, 4.4, 4.7, 5.4, ] // output : 1,2,3,4,4,5
console.log(arr01)
const roundAllNumsDown = (arr) => {
let roundDown = arr.map((arr) => Math.floor(arr))
return roundDown
};
console.log(roundAllNumsDown(arr01));


// Question 8 //
const arr02 = [[12.3, 81.3], [1.2, 3.4], [5.6, 7.8]];
console.log(arr02);
const getAllYCoordinates = (arrOfCoords) => {
  let accessIndex = []
  for (let i = 0; i < arrOfCoords.length; i++){
  accessIndex.push(arrOfCoords[i][1])
}
return accessIndex
};
console.log(getAllYCoordinates(arr02));

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
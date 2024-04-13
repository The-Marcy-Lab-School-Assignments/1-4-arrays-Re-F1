const uppercaseAll = (...words) => {
  let upperCaseWords = [];
  for (let word of words) {
    upperCaseWords.push(word.toUpperCase());
  }
  return upperCaseWords;
};
console.log(uppercaseAll('flip', 'this', 'shit', 'beach', '!'))


const destructureCoordinates = (coordinates) => {
  const [x, y] = coordinates;
  return `X is: ${x}, Y is: ${y}`;
};

console.log(destructureCoordinates([1, 2]))
console.log(destructureCoordinates([3, 4]))

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};

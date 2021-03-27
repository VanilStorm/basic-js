const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let array = arr.flat();
  return array.reduce((count, cats) => {
    if(cats == '^^') {
      count++
    } 
    return count
  }, 0)
};

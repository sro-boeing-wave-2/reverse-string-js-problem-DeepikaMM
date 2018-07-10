// The intent of this file is to reverse the string using iterators (for, foreach)
const reverse = (toBereversed) => {
  const len = toBereversed.length;
  let reversedString = '';
  for (let i = len - 1; i >= 0; i -= 1) {
    reversedString += toBereversed[i];
  }
  return reversedString;
};

module.exports = reverse;

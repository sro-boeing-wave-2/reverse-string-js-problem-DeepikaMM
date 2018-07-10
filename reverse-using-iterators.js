// The intent of this file is to reverse the string using iterators (for, foreach)
const reverse = (toBereversed) => {
  const len = toBereversed.length;
  let reversedStringg = '';
  for (let i = len - 1; i >= 0; i -= 1) {
    reversedStringg += toBereversed[i];
  }
  return reversedStringg;
};

module.exports = reverse;

// The intent of this file is to reverse
// the string using built in functions.
const reverse = (toBeReversed) => {
  const splitString = toBeReversed.split('');
  const reverse1 = splitString.reverse();
  const reversedString = reverse1.join('');
  return reversedString;
};

module.exports = reverse;

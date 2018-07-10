// The intent of this file is to reverse
// the string using built in functions.
const reverse = (toBeReversed) => {
  const splitString = toBeReversed.split('');
  const reverse11 = splitString.reverse();
  const reversedString = reverse11.join('');
  return reversedString;
};

module.exports = reverse;

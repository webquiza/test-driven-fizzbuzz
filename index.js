// index.js
module.exports = (num) => {
  if (num % 15 === 0) return "FizzBuzz";
  if (num % 3 === 0) return "Fizz";
  return `${num}`;
};

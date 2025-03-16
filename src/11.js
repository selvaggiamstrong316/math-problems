const math = require('mathjs');

function getRandomProblem() {
  const operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
  let operands = [];
  for (let i = 0; i < 2; i++) {
    operands.push(math.round(math.random(1, 10)));
  }
  return `${operands[0]} ${operator} ${operands[1]}`;
}

console.log(getRandomProblem());

// Generate a random math problem
let problem = {
  operator: ['+', '-', '*', '/'][Math.floor(Math.random() * 4)],
  numbers: [10, 20, 30, 40, 50][Math.floor(Math.random() * 5)]
};

// Generate a random answer
let answer = problem.numbers[0] + problem.numbers[1];

if (problem.operator === '+') {
  answer += problem.numbers[2];
} else if (problem.operator === '-') {
  answer -= problem.numbers[2];
} else if (problem.operator === '*') {
  answer *= problem.numbers[2];
} else if (problem.operator === '/') {
  answer /= problem.numbers[2];
}

console.log(problem.numbers[0] + ' ' + problem.operator + ' ' + problem.numbers[1] + ' = ' + answer);

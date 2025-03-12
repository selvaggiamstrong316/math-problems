const mathProblems = {
  1: () => '2 + 2',
  2: () => '3 * 4',
  3: () => '5 - 2',
  4: () => '7 / 3',
  5: () => '9 % 2'
};

const randomProblem = Math.floor(Math.random() * Object.keys(mathProblems).length) + 1;
console.log(mathProblems[randomProblem]());

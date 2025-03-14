// Random Math Problem
const getRandomMathProblem = () => {
  // Generate a random number between 1 and 10
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;

  // Return the problem as a string
  return `${num1} x ${num2}`;
};

// Example usage
const problem = getRandomMathProblem();
console.log(`The math problem is: ${problem}`);

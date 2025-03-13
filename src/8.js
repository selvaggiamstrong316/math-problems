const mathProblem = () => {
  // Generate a random number between 1 and 100
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;
  
  // Generate a random operator (+, -, x, /)
  const operator = ['+', '-', 'x', '/'][Math.floor(Math.random() * 4)];
  
  // Calculate the problem
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case 'x':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
  }
  
  // Return the problem and the answer
  return {
    problem: `${num1} ${operator} ${num2} = ?`,
    answer: result
  };
};

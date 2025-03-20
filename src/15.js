const generateRandomMathProblem = () => {
  let num1 = Math.floor(Math.random() * 10);
  let num2 = Math.floor(Math.random() * 10);
  let operator;
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      operator = "+";
      return `${num1} ${operator} ${num2}`;
    case 1:
      operator = "-";
      return `${num1} ${operator} ${num2}`;
    default:
      operator = "*";
      return `${num1} ${operator} ${num2}`;
  }
};

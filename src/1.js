  const generateMathProblem = () => {
    const numbers = [1, 2, 3, 4, 5];
    const operator = ["+", "-", "*", "/"];
    let problemString = "";
    for (let i = 0; i < 3; i++) {
      let num1 = numbers[Math.floor(Math.random() * numbers.length)];
      let num2 = numbers[Math.floor(Math.random() * numbers.length)];
      problemString += `${num1} ${operator[i]} ${num2}`;
    }
    return problemString;
  };

// This is a simple example of how you could generate math problems in Node.js using an array of numbers and operators. The code randomly selects two numbers from the `numbers` array, a random operator from the `operator` array, and concatenates them into a string to form a mathematical problem. You can then use this string to display the problem to the user or evaluate it for a correct answer.
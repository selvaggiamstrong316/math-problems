
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateProblems = () => {
  const problems = [];

  for (let i = 0; i < 10; i++) {
    let type = getRandomInt(1, 3);
    let operation = "";
    let num1 = 0;
    let num2 = 0;

    switch (type) {
      case 1: // addition
        operation = "+";
        num1 = getRandomInt(1, 10);
        num2 = getRandomInt(1, 10);
        break;
      case 2: // subtraction
        operation = "-";
        num1 = getRandomInt(1, 10);
        num2 = getRandomInt(1, num1);
        break;
      case 3: // multiplication
        operation = "*";
        num1 = getRandomInt(2, 5);
        num2 = getRandomInt(2, 5);
        break;
    }

    problems.push({
      problem: `${num1} ${operation} ${num2}`,
      solution: num1 + operation + num2,
    });
  }

  return problems;
};

const main = () => {
  const problems = generateProblems();
  console.log(problems);
};

main();
const mathProblems = {
    getRandomMathProblem() {
        // Generate a random number between 1 and 10
        let number = Math.floor(Math.random() * 10) + 1;

        // Generate a random operation (+, -, x, /)
        let operator = ['+', '-', 'x', '/'][Math.floor(Math.random() * 4)];

        // Generate two random numbers to use in the equation
        let num1 = Math.floor(Math.random() * number);
        let num2 = Math.floor(Math.random() * number);

        // Return the math problem as a string
        return `What is ${num1} ${operator} ${num2}?`;
    }
};

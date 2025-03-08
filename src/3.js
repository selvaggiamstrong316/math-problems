const getRandomProblem = () => {
  const problems = [
    { type: "addition", values: [2, 3, 4] },
    { type: "subtraction", values: [10, 5, 4] },
    { type: "multiplication", values: [2, 3, 4] },
    { type: "division", values: [12, 4, 4] },
    { type: "modulus", values: [10, 3, 5] }
  ];

  const problem = problems[Math.floor(Math.random() * problems.length)];

  return `
    <div class="math-problem">
      ${problem.type}
      ${problem.values.join(" + ")}
    </div>
  `;
};

// Node.js code example: fibonacci sequence generator

function calculateFibonacci(n) {
  if (n <= 1) return n;
  let previous = 0;
  let current = 1;
  for (let i = 2; i <= n; i++) {
    [previous, current] = [current, previous + current];
  }
  return current;
}

// Example usage
console.log(calculateFibonacci(10)); // Output: 55

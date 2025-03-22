function findMaxPrime(nums) {
  let maxPrime = -1;
  for (let i = 0; i < nums.length; i++) {
    if (isPrime(nums[i])) {
      if (nums[i] > maxPrime) {
        maxPrime = nums[i];
      }
    }
  }
  return maxPrime;
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

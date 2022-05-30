//You are given a number n. Determine whether n has exactly 3 divisors or not.

function divisors(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  if (count === 3) {
    return true;
  } else {
    return false;
  }
}   
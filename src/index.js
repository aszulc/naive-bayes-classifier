// @flow

/**
 * Calculates a square
 * @param {number} n - number
 */
function square(n: number): number {
  return n * n;
}

/**
 * Start the program
 */
function main() {
  for (let i = 0; i < 5; i += 1) {
    setTimeout(() => alert(square(i)), 0);
  }
}

main();

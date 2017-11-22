"use strict";

/**
 * Calculates a square
 * @param {number} n - number
 */
function square(n) {
  return n * n;
}

/**
 * Start the program
 */
function main() {
  var _loop = function _loop(i) {
    setTimeout(function () {
      return alert(square(i));
    }, 0);
  };

  for (var i = 0; i < 5; i += 1) {
    _loop(i);
  }
}

main();
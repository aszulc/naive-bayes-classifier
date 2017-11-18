"use strict";

var _loop = function _loop(i) {
  setTimeout(function () {
    return console.info(i);
  }, 0);
};

for (var i = 0; i < 5; i++) {
  _loop(i);
}
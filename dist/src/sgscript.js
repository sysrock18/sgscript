"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sgscript;
function sgscript() {
  var res = 0;

  for (var _len = arguments.length, nums = Array(_len), _key = 0; _key < _len; _key++) {
    nums[_key] = arguments[_key];
  }

  for (var i in nums) {
    res += nums[i];
  }
  return res;
}
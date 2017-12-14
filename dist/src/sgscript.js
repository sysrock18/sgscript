"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sum;
function sum() {
  for (var _len = arguments.length, nums = Array(_len), _key = 0; _key < _len; _key++) {
    nums[_key] = arguments[_key];
  }

  length = nums.length;
  var res = 0;
  for (var i = 0; i < length; i++) {
    res += nums[i];
  }
  return res;
}
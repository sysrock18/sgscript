export default function sgscript(...nums) {
  let res = 0
  for (let i in nums) {
    res += nums[i]
  }
  return res
}

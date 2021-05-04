/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  let closest, sum, left, right;
  nums.sort( (a, b) => a - b)
  
  for (let i = 0; i < nums.length; i++) {
    left = i + 1;
    right = nums.length - 1;
    while (left < right) {
      sum = nums[i] + nums[left] + nums[right] ;
    
      if (sum === target) {
        return sum
      } else if (sum > target) {
        right--
      } else {
        left++
      }

      if (closest === undefined) {
        closest = sum;
      } else {
        closest = Math.abs(target - sum) < Math.abs(target - closest) ? sum : closest;
      }
    }
  }
  
    return closest;
};
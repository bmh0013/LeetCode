/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let permutations = [];
    
    const recurse = (combination) => {
        if (combination.length === nums.length) {
            permutations.push(combination.slice());
        }
        
        for (let i = 0; i < nums.length; i++) {
            if ( combination.includes(nums[i]) ) {
                continue;
            } else {
                combination.push(nums[i]);
                recurse(combination);
            }
            combination.pop();
        }
    };
    recurse([])
    
    return permutations
};
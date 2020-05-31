/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if(nums.length == 0)
        return false;
    let indexValueMap = new Map();
    for(let i = 0;i<nums.length;i++) {
        let complement = target - nums[i];
        if(indexValueMap.has(complement))
            return [indexValueMap.get(complement),i];
        indexValueMap.set(nums[i],i);
    }
};

/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    return divide(nums,0,nums.length - 1);
};

var divide = function(nums,begin,end) {
    //terminator
    if(begin == end)
        return nums[begin];
    //divide
    let mid = Math.floor(left +( right - left) / 2);
    let leftMajority = divide(nums,begin,mid);
    let rightMajority = divide(nums,mid+1,end);
    //conquer
    if(leftMajority == rightMajority)
        return leftMajority;
    let leftCount = 0,
        rightCount =0;
        for(let num of nums) {
            if(num == leftMajority) leftCount++;
            if(num == rightMajority) rightCount++;
    }
    return leftCount > rightCount ? leftMajority : rightMajority;
}

// @lc code=end


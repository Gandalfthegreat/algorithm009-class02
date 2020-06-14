/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let total_profit = 0;
    let price_diff = 0;
    for(let i = 1;i<prices.length;i++) {
        price_diff = prices[i] - prices[i-1] // sell out - buy in
        if(price_diff > 0) total_profit += price_diff;  
    }
    return total_profit;

};
// @lc code=end


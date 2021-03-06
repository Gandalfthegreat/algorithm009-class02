/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let five = ten = 0;
    for(let bill of bills) {
        if(bill == 5)
            five++;
        else if(bill == 10) {
            if(five == 0) return false;
            ten++;
            five--;
        }
        else if(bill == 20) {
            // exchange 10 + 5
            if(ten > 0 && five > 0) {
                ten--;
                five--;
            }
            // exchange 3 * 5
            else if(five > 3) {
                five -= 3;
            }
            else return false;
        }
    }
    return true;
};

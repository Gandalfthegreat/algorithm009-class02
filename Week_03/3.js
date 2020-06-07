/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {    
    return n > 0? quickPow(x,n) : quickPow(1/x,-n); 
};
var quickPow = function(base,exponent) {
    //terminator
    if(exponent == 0) return 1;
    if(exponent == 1) return base;
    //drill down
    let ans = quickPow(base,Math.floor(exponent/2));
    //process current logic
    if(exponent % 2 == 0)
        ans = ans * ans;
    else ans = ans * ans * base;
    return ans;
}
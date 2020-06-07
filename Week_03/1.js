/**
 * @param {number} k
 * @return {number}
 */
var getKthMagicNumber = function(k) {
    let p3 = 0,
        p5 = 0,
        p7 = 0;
    let dp = new Array(k);
    dp[0] = 1;
    for(let i = 1;i<k;i++) {
        let multiply3 = dp[p3] * 3;
        let multiply5 = dp[p5] * 5;
        let multiply7 = dp[p7] * 7;
        let min57 = Math.min(multiply5,multiply7);
        dp[i] = Math.min(multiply3,min57);
        if(dp[i] == multiply3) p3++;
        if(dp[i] == multiply5) p5++;
        if(dp[i] == multiply7) p7++;
    }
    return dp[k-1];
}
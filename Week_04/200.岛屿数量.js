/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    //for loop 
    // mark and get count
    let count = 0;
    let row = grid.length;
    let column = grid[0].length;
    if(grid == null || row == null || column == null) 
        return 0;
    for(let r = 0;r<row;r++) {
        for(let c = 0;c<column;c++) {
            if(grid[r][c] == '1') {
                markAndDFS(grid,r,c);
                count++;
            }
        }
    }
    return count;
};
var markAndDFS = function(grid,r,c) {
    let row = grid.length;
    let column = grid[0].length;
    if(r < 0 || r > row - 1 || c < 0 || c > column - 1 || grid[r][c] == '0')
        return;
    grid[r][c] = '0';
    markAndDFS(grid,r,c+1)
    markAndDFS(grid,r,c-1)
    markAndDFS(grid,r+1,c)
    markAndDFS(grid,r-1,c)
}
// @lc code=end


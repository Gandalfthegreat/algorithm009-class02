/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var result = [];
var inorderTraversal = function(root) {
    dfs(root);
    return result;
};

var dfs = function(root) {
    if(root == null) return;
    dfs(root.left);
    result.push(root.val);
    dfs(root.right);
}
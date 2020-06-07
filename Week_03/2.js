/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    //terminator
    if(root == null) return null;
    //drill down
    let leftTree = invertTree(root.left);
    let rightTree = invertTree(root.right);
    //current
    root.left = rightTree;
    root.right = leftTree;
    return root;
};
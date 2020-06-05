
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function(root) {
  if (!root) {
    return root;
  }
  if (root.left || root.right) {
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)]
  }
  return root;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const root = new TreeNode(5)
const a = new TreeNode(3)
a.left = new TreeNode(1)
a.right = new TreeNode(4)

const b = new TreeNode(8)
b.left = new TreeNode(6)
b.right = new TreeNode(9)

root.left = a;
root.right = b;


console.log(invertTree(root))


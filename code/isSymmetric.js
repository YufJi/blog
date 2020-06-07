

const isSymmetric = (root) => {
  const compare = (a, b) => {
    if(a === null && b === null) {
      return true;
    }
    if(a === null || b === null) {
      return false;
    }
    return (a.val === b.val) && compare(a.left, b.right) && compare(a.right, b.left)
  }

  return compare(root, root)
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const root = new TreeNode(1)
const a = new TreeNode(2)
a.left = new TreeNode(3)
a.right = new TreeNode(4)

const b = new TreeNode(2)
b.left = new TreeNode(4)
b.right = new TreeNode(3)

root.left = a;
root.right = b;


console.log(isSymmetric(root));
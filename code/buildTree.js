

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const buildTree = (preorder, inorder) => {
  if (!preorder || preorder.length === 0) {
    return null;
  }

  const idxMap = {};
  for (let i = 0; i < preorder.length; i++) {
    idxMap[inorder[i]] = i;
  }

  function genTree(preorder, preorderStart, preorderEnd, inorder, inorderStart, inorderEnd, idxMap) {
    if (preorderStart > preorderEnd) {
      return null;
    }

    const rootVal = preorder[preorderStart];
    const root = new TreeNode(rootVal);
    if (preorderStart === preorderEnd) {
      return root;
    } else {
      const rootIdx = idxMap[rootVal];
      const leftNodes = rootIdx - inorderStart;
      const rightNodes = inorderEnd - rootIdx;

      const leftSubTree = genTree(preorder, preorderStart + 1, preorderStart + leftNodes, inorder, inorderStart, rootIdx - 1, idxMap);
      const rightSubTree = genTree(preorder, preorderEnd - rightNodes + 1, preorderEnd, inorder, rootIdx + 1, inorderEnd, idxMap);

      root.left = leftSubTree;
      root.right = rightSubTree

      return root;
    }
  }

  return genTree(preorder, 0, preorder.length-1, inorder, 0, preorder.length-1, idxMap)
}

const preorder = [3,9,20,15,7] // 前序
const inorder = [9,3,15,20,7] // 中序


console.log(buildTree(preorder, inorder))

# 面试题07. 重建二叉树

输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

 
例如，给出

前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]
返回如下的二叉树：
```
    3
   / \
  9  20
    /  \
   15   7
```

限制：

0 <= 节点个数 <= 5000


```js

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}


const buildTree = (preorder, inorder) => {
  if (!preorder || preorder.length === 0) {
    return null;
  }

  const idxMap = {};
  const len = inorder.length;
  for (let i = 0; i < len; i+=1) {
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

      root.left = genTree(preorder, preorderStart + 1, preorderStart + leftNodes, inorder, inorderStart, rootIdx - 1, idxMap);
      root.right = genTree(preorder, preorderEnd - rightNodes + 1, preorderEnd, inorder, rootIdx + 1, inorderEnd, idxMap);

      return root;
    }
  }

  return genTree(preorder, 0, len - 1, inorder, 0, len - 1, idxMap);

}


```

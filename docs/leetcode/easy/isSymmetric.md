# 101. 对称二叉树

给定一个二叉树，检查它是否是镜像对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
```

    1
   / \
  2   2
 / \ / \
3  4 4  3
```
但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
```
    1
   / \
  2   2
   \   \
   3    3
```
说明:

如果你可以运用递归和迭代两种方法解决这个问题，会很加分。

```js

// 优化后
var isSymmetric = function(root) {
  function compare(a, b) {
    if (a === null && b === null) {
      return true;
    }
    if (a === null || b === null) {
      return false;
    }
    return a.val === b.val && compare(a.left, b.right) && compare(a.right, b.left);
  }

  return compare(root, root);;
};

// 一开始的💩
var isSymmetric = function(root) {
  let flag = true;

  function xx(a, b) {
    if (!flag) return;

    if (a === null && b === null) {
      return;
    }

    if (!!a && b === null) {
      flag = false;
      return;
    }

    if (a === null && !!b) {
      flag = false;
      return;
    }

    if(a.val === b.val) {
      xx(a.left, b.right);
      xx(a.right, b.left)
    } else {
      flag = false;
    }
  }

  if (root === null) {
    return flag;
  }

  xx(root.left, root.right);

  return flag;
};
```

总结：
思路我也是用到了递归，虽然也是写出来了，但是我在条件的逻辑判断上还是火候不够， 写的不够干练，
还有一种解法 使用 队列迭代

```js
function isSymmetric(root) {

  const queue = [];

  queue.push(root);
  queue.push(root);

  while (queue.length > 0) {
    const a = queue.shift();
    const b = queue.shift();
    if (a === null && b === null) continue;
    if (a === null || b === null) return false;
    if (a.val !== b.val) return false;
    queue.push(a.left)
    queue.push(b.right)
    queue.push(a.right)
    queue.push(b.left)
  }

  return true;
}
```

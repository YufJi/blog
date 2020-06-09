
// 当不确定节点值是否重复时，使用深度优先搜索
const deleteNode = (head, val) => {

  const dfs = (prev, node, val) => {
    if (!node) {
      return node;
    }
    if (node.val === val) {
      if (prev) {
        prev.next = node.next;
        dfs(prev, node.next, val);
        return prev;
      } else {
        dfs(prev, node.next, val);
        node = node.next;
        return node;
      }
    } else {
      dfs(node, node.next, val);
      return node;
    }
  }

  return dfs(null, head, val)
}

//当不确定节点值是否重复时，使用迭代
const deleteNode1 = (head, val) => {
  if (!head) {
    return head;
  }
  if (head.val === val) {
    head = head.next;
  }

  let cur = head;
  while (cur.next && cur.next.val !== val) {
    cur = cur.next;
  }
  if (cur.next) {
    cur.next = deleteNode1(cur.next.next);
  }

  return head;
}

//  保证节点值不相同时，可以用下面这种
const deleteNode2 = (head, val) => {
  if (!head) {
    return head;
  }
  if (head.val === val) {
    return head.next;
  }
  let cur = head;
  while (cur.next && cur.next.val !== val) {
    cur = cur.next;
  }
  if (cur.next) {
    cur.next = cur.next.next;
  }

  return head;
}


function Node(val) {
  this.val = val;
  this.next = null;
}


const head = new Node(-1);
head.next = new Node(5)
head.next.next = new Node(-11)
head.next.next.next = new Node(-3)
head.next.next.next.next = new Node(-12)
head.next.next.next.next.next = new Node(-4)
head.next.next.next.next.next.next = new Node(-13)


console.time(1)
console.log(deleteNode(head, -3))
console.timeEnd(1)

console.time(2)
console.log(deleteNode1(head, -3))
console.timeEnd(2)

console.time(3)
console.log(deleteNode2(head, -3))
console.timeEnd(3)

# 21. 合并两个有序链表

将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

示例：
```
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
```

迭代：
```js
function mergeTwoLists(l1, l2) {
  let result = new ListNode(-1);
  let temp = result;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      temp.next = l1;
      l1 = l1.next;
    } else {
      temp.next = l2;
      l2 = l2.next;
    }

    temp = temp.next;
  }

  temp.next = l1 === null ? l2 : l1;
  return result.next;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

const l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

console.log(mergeTwoLists(l1, l2))
```

递归：

```js
function mergeTwoLists(l1, l2) {
  if (l1 === null) {
    return l2;
  } else if (l2 === null) {
    return l1;
  } else if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2;
  }
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

const l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

console.log(mergeTwoLists(l1, l2))
```
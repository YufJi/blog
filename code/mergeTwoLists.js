

function mergeTwoLists(l1, l2) {
  // let result = new ListNode(-1);
  // let temp = result;

  // while (l1 !== null && l2 !== null) {
  //   if (l1.val < l2.val) {
  //     temp.next = l1;
  //     l1 = l1.next;
  //   } else {
  //     temp.next = l2;
  //     l2 = l2.next;
  //   }

  //   temp = temp.next;
  // }

  // temp.next = l1 === null ? l2 : l1;
  // return result.next;

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
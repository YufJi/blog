
class Node {
  constructor(val) {
    this.val = val;
    this.next = null
  }
}


const head = new Node(null)
head.next = new Node(1);
head.next.next = new Node(2);
head.next.next.next = new Node(3);

const reversePrint1 = (head) => {
  if (!head) {
    return []
  }
  let ans = [];
  function fn(node) {
    if (node.next !== null) {
      fn(node.next)
    }
    ans.push(node.val)
  }

  fn(head)

  return ans;
}

const reversePrint2 = (head) => {
  const stack = [];
  while (head !== null) {
    stack.push(head.val)
    head = head.next
  }

  return stack.reverse();
}

console.log(reversePrint1(head))


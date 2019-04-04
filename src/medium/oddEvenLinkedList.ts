/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head: ListNode): ListNode {
  // zero, one, two nodes
  if (!head || !head.next || !head.next.next) {
    return head;
  }

  const evenHead = head.next;

  let odd = head, even = head.next;
  while (even && even.next) {
    odd.next = even.next;
    odd = even.next;
    even.next = odd.next;
    even = odd.next!;
  }
  odd.next = evenHead;
  return head;
};

// // test case 
// const head = new ListNode(1);
// for (let current = head, i = 1; i < 5; i++){
//   const next = new ListNode(i + 1);
//   current.next = next;
//   current = next;
// }

// oddEvenList(head);
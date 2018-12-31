function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * reverse a linked list recursively
 * @param {ListNode} head
 * @return {ListNode}
 */
// var reverseList = function (head) {
//   // zero or one node
//   if (!head || head.next === null) {
//     return head;
//   }

//   const next = head.next;
//   // two nodes
//   if (next.next === null) {
//     next.next = head;
//     head.next = null;
//     return next;  // new head
//   }

//   // more
//   const result = reverseList(next);
//   reverseList(head);
//   return result;
// };

/**
 * reverse a linked list iteratively
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head || head.next === null) {
    return head;
  }

  let ptrA = head, ptrB = head.next, newHead = ptrB, next;    // ptrA and ptrB are alternately on the front
  while (ptrA && ptrB) {
    // each iteration reverses two nodes at most
    next = ptrB.next;
    ptrB.next = ptrA;
    ptrA = next;
    newHead = ptrB;

    if (ptrA) {
      next = ptrA.next;
      ptrA.next = ptrB;
      ptrB = next;
      newHead = ptrA;
    }
  }

  head.next = null;   // remove redundant edge

  return newHead;
};

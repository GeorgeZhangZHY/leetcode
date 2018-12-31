function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode | null}
 */
var detectCycle = function (head) {
  if (!head) {
    return null;
  }
  
  // floyd's tortoise hare algorithm (fast slow pointer)
  let fastPtr = head, slowPtr = head;

  // phase 1: determine whether there is a cycle
  while (true) {
    if (fastPtr.next === null || fastPtr.next.next === null) {
      return null;
    }
    fastPtr = fastPtr.next.next;
    slowPtr = slowPtr.next;
    if (fastPtr === slowPtr && fastPtr !== null) {
      break;
    }
  }

  // phase 2: locate the start position of the cycle
  let slowPtr2 = head;
  while (slowPtr !== slowPtr2) {
    slowPtr = slowPtr.next;
    slowPtr2 = slowPtr2.next;
  }
  return slowPtr;
};
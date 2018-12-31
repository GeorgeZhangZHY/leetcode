function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head) {
    return false;
  }
  
  let fastPtr = head, slowPtr = head;
  while (true) {
    if (fastPtr.next === null || fastPtr.next.next === null) {
      return false;
    }
    fastPtr = fastPtr.next.next;
    slowPtr = slowPtr.next;
    if (fastPtr === slowPtr && fastPtr !== null) {
      return true;
    }
  }
};
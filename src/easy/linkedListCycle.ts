/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head: ListNode) {
  if (!head) {
    return false;
  }

  let fastPtr: ListNode | null = head, slowPtr: ListNode | null = head;
  while (true) {
    if (fastPtr.next === null || fastPtr.next.next === null) {
      return false;
    }
    fastPtr = fastPtr.next.next;
    slowPtr = slowPtr!.next;
    if (fastPtr === slowPtr && fastPtr !== null) {
      return true;
    }
  }
};

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head: ListNode, val: number): ListNode | null {
  if (!head) {
    return null;
  }

  let current: ListNode | null = head,
    prev: ListNode | null = null,
    newHead: ListNode | null = head;
  while (current) {
    const next: ListNode | null = current.next;

    if (current.val === val) {
      if (current === newHead) {
        // remove first element
        newHead = next;
        current.next = null;
      } else {
        // not first element
        prev!.next = next;
        current.next = null;
      }
    } else {
      prev = current;
    }

    current = next;
  }

  return newHead;
};
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (!head) {
    return head;
  }

  let current = head, prev = null, newHead = head;
  while (current) {
    const next = current.next;

    if (current.val === val) {
      if (current === newHead) {
        // remove first element
        newHead = next;
        current.next = null;
      } else {
        // not first element
        prev.next = next;
        current.next = null;
      }
    } else {
      prev = current;
    }

    current = next;
  }

  return newHead;
};
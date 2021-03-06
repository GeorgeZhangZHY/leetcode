/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode} the result list's head
 */
var removeNthFromEnd = function (head: ListNode, n: number): ListNode {
  if (!head || n <= 0) {
    return head;
  }

  let ptr = head, targetPrev = head;
  for (let i = 0; i < n; i++) {
    if (ptr.next) {
      ptr = ptr.next;
    } else {
      // the head element itself doesn't have targetPrev
      // removes the head
      return head.next!;
    }
  }

  while (ptr.next) {
    ptr = ptr.next;
    targetPrev = targetPrev.next!;
  }

  targetPrev.next = targetPrev.next!.next;
  return head;
};
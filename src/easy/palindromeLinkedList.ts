/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head: ListNode) {
  if (!head || !head.next) {
    return true;
  }

  // find the middle node 
  let fastPtr: ListNode | null = head,
    slowPtr: ListNode | null = head,
    slowPtrPrev: ListNode | null = null;
  while (fastPtr && fastPtr.next) {
    fastPtr = fastPtr.next.next;
    slowPtrPrev = slowPtr;
    slowPtr = slowPtr!.next;
  }

  const isOdd = fastPtr !== null;
  const detachPoint = isOdd ? slowPtr : slowPtrPrev;
  let firstHalfPtr = head;
  const secondHalfHead = detachPoint!.next!;
  let secondHalfPtr = reverseList(secondHalfHead)
  const reversedSecondHalfHead = secondHalfPtr;

  // compare
  let result = true;
  while (secondHalfPtr) {
    if (firstHalfPtr.val !== secondHalfPtr.val) {
      result = false;
      break;
    }
    firstHalfPtr = firstHalfPtr.next!;
    secondHalfPtr = secondHalfPtr.next!;
  }

  // restore the list
  const restoredSecondHalfHead = reverseList(reversedSecondHalfHead);
  detachPoint!.next = restoredSecondHalfHead;
  return result;
};

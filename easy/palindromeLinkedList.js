function ListNode(val) {
  this.val = val;
  this.next = null;
}

// space: O(1)  time: O(N)
function reverseList(head) {
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

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {

  if (!head || !head.next) {
    return true;
  }

  // find the middle node 
  let fastPtr = head, slowPtr = head, slowPtrPrev = null;
  while (fastPtr && fastPtr.next) {
    fastPtr = fastPtr.next.next;
    slowPtrPrev = slowPtr;
    slowPtr = slowPtr.next;
  }

  const isOdd = fastPtr !== null;
  const detachPoint = isOdd ? slowPtr : slowPtrPrev;
  let firstHalfPtr = head;
  const secondHalfHead = detachPoint.next;
  let secondHalfPtr = reverseList(secondHalfHead)
  const reversedSecondHalfHead = secondHalfPtr;

  // compare
  let result = true;
  while (secondHalfPtr) {
    if (firstHalfPtr.val !== secondHalfPtr.val) {
      result = false;
      break;
    }
    firstHalfPtr = firstHalfPtr.next;
    secondHalfPtr = secondHalfPtr.next;
  }

  // restore the list
  const restoredSecondHalfHead = reverseList(reversedSecondHalfHead);
  detachPoint.next = restoredSecondHalfHead;
  return result;
};

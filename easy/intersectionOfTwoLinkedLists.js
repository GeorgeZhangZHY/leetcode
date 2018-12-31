function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} headA does not contain any cycle
 * @param {ListNode} headB does not contain any cycle
 * @return {ListNode | null}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) {
    return null;
  }

  let ptrA = headA, ptrB = headB;
  let lengthDiff = 0;   // lengthA - lengthB
  let aStopped = false, bStopped = false;

  while (true) {

    // same length and has intersection node that is not the tail
    if (ptrA === ptrB && ptrA.next !== null) {
      return ptrA;
    }

    if (ptrA.next) {
      ptrA = ptrA.next;
    } else {
      aStopped = true;
    }

    if (ptrB.next) {
      ptrB = ptrB.next;
    } else {
      bStopped = true;
    }

    if (aStopped && !bStopped) {
      lengthDiff--;
    } else if (!aStopped && bStopped) {
      lengthDiff++;
    } else if (aStopped && bStopped) {
      break;
    }
  }

  ptrA = headA;
  ptrB = headB;

  // move pointer to the same positon relative to the tail
  for (let i = 0; i < Math.abs(lengthDiff); i++) {
    if (lengthDiff > 0) {
      ptrA = ptrA.next;
    } else {
      ptrB = ptrB.next;
    }
  }

  while (true) {
    if (ptrA === ptrB) {
      return ptrA;
    }
    if (!ptrA.next) {
      return null;
    }
    ptrA = ptrA.next;
    ptrB = ptrB.next;
  }
};
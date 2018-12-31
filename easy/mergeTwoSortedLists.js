function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (!l1 || !l2) {
    return l1 || l2;
  }

  let l1Current = l1, l1Next = l1.next, l2Current = l2, l2Next = l2.next;
  while (l1Current && l2Current) {
    if (l1Current.val <= l2Current.val) {
      if (!l1Next || l1Next.val >= l2Current.val) {
        l1Current.next = l2Current;
      }
      l1Current = l1Next;
      if (l1Current) {
        l1Next = l1Current.next;
      }
    } else {
      if (!l2Next || l2Next.val >= l1Current.val) {
        l2Current.next = l1Current;
      }
      l2Current = l2Next;
      if (l2Current) {
        l2Next = l2Current.next;
      }
    }
  }

  return l1.val <= l2.val ? l1 : l2;
};
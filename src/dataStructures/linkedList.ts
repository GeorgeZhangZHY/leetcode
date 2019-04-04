interface INode {
  val: any
  prev: INode | null
  next: INode | null
}

/**
 * doubly-linked list
 */
export class MyLinkedList {

  head: INode | null = null;
  tail: INode | null = null;
  _length = 0;

  get length() {
    return this._length;
  }

  set length(value) {
    this._length = value;
    if (this._length === 0) {
      this.head = this.tail = null;
    } else if (this._length === 1) {
      const node = this.head || this.tail;
      this.head = this.tail = node;
    }
  }

  /**
   * Create a node
   * @param {any} val 
   */
  _createNode(val: any): INode {
    return {
      val: val,
      prev: null,
      next: null
    };
  }
  /**
   * Get the index-th node in the linked list. 
   * If the index is invalid, return null. 
   * @param {number} index
   * @return {object | null}
   */
  _getNode(index: number): INode | null {
    if (index < 0 || index >= this.length) {
      return null;
    }

    // use shorter path
    const backwardLen = this.length - 1 - index;
    let current: INode;
    if (index <= backwardLen) {
      // forward
      current = this.head!;
      for (let i = 0; i < index; i++) {
        current = current.next!;
      }
    } else {
      // backward
      current = this.tail!;
      for (let i = 0; i < backwardLen; i++) {
        current = current.prev!;
      }
    }

    return current;
  }

  /**
   * Get the value of the index-th node in the linked list. 
   * If the index is invalid, return -1. 
   * @param {number} index
   * @return {number}
   */
  get(index: number) {
    const node = this._getNode(index);
    if (!node) {
      return -1;
    }
    return node.val;
  }

  /**
   * Add a node of value val before the first element of the linked list. 
   * After the insertion, the new node will be the first node of the linked list. 
   * @param {number} val
   * @return {void}
   */
  addAtHead(val: any) {
    const newNode = this._createNode(val);
    newNode.next = this.head;
    if (this.head) {
      this.head.prev = newNode;
    }
    this.head = newNode;
    this.length++;
  }

  /**
   * Append a node of value val to the last element of the linked list. 
   * @param {number} val
   * @return {void}
   */
  addAtTail(val: any) {
    const newNode = this._createNode(val);
    newNode.prev = this.tail;
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
  }

  /**
   * Add a node of value val BEFORE the index-th node in the linked list. 
   * @param {number} index   0 < index && index < this.length 
   * @param {number} val
   * @return {void}
   */
  addAtMiddle(index: number, val: any) {
    const current = this._getNode(index);
    if (!current) {
      return;
    }

    const newNode = this._createNode(val);
    const prev = current.prev!;
    current.prev = newNode;
    newNode.next = current;
    prev.next = newNode;
    newNode.prev = prev;
    this.length++;
  }

  /**
   * Add a node of value val BEFORE the index-th node in the linked list. 
   * If index equals to the length of linked list, the node will be appended to the end of linked list. 
   * If index is greater than the length, the node will not be inserted. 
   * @param {number} index 
   * @param {number} val
   * @return {void}
   */
  addAtIndex(index: number, val: any) {
    if (index === 0) {
      this.addAtHead(val);
    } else if (index === this.length) {
      this.addAtTail(val);
    } else if (index > 0 && index < this.length) {
      this.addAtMiddle(index, val);
    }
  }

  /**
   * Delete the index-th node in the linked list, if the index is valid. 
   * @param {number} index
   * @return {void}
   */
  deleteAtIndex(index: number) {
    if (index === 0) {
      this.deleteHead();
    } else if (index === this.length - 1) {
      this.deleteTail();
    } else if (index > 0 && index < this.length - 1) {
      this.deleteAtMiddle(index);
    }
  }

  deleteHead() {
    if (this.length === 0) {
      return;
    }
    this.head = this.head!.next;
    if (this.head) {
      this.head.prev = null;    // for garbage collection
    }
    this.length--;
  }

  deleteTail() {
    if (this.length === 0) {
      return;
    }
    this.tail = this.tail!.prev;
    if (this.tail) {
      this.tail.next = null;    // for garbage collection
    }
    this.length--;
  }

  deleteAtMiddle(index: number) {
    const current = this._getNode(index)!;
    const prev = current.prev!, next = current.next!;
    prev.next = next;
    next.prev = prev;
    current.prev = current.next = null;
    this.length--;
  }

}

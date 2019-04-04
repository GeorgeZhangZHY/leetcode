const VALUE_SYMBOL = Symbol.for('value');
const TOTAL_SYMBOL = Symbol.for('total');

/**
 * Initialize your data structure here.
 */
var MapSum = function (this: { trie: any }) {
  this.trie = {};
};

/** 
 * Time: O(1) as key.length is limited
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key: string, val: number) {
  if (!key) {
    return;
  }
  let current = this.trie;
  Array.prototype.forEach.call(key, (char: string) => {
    if (!current[char]) {
      current[char] = {};
    } else {
      // update existing path total value
      if (current[char][TOTAL_SYMBOL] !== undefined) {
        current[char][TOTAL_SYMBOL] += val;
      }
    }
    current = current[char];
  });

  current[VALUE_SYMBOL] = val;
  delete current[TOTAL_SYMBOL];
  current[TOTAL_SYMBOL] = calcTotalValue(current);
};

/** 
 * Time: O(1) as prefix.length is limited
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix: string): number {
  let current = this.trie;
  try {
    Array.prototype.forEach.call(prefix, (char: string) => {
      current = current[char];
      if (!current) {
        throw new Error('No such word of given prefix!');
      }
    });
  } catch (error) {
    console.error(error);
    return 0;
  }

  return calcTotalValue(current);
};

/**
 * collect every value of the subtree (dfs preorder traversal)
 * use TOTAL_VALUE to skip further search
 * @param {Object} tree 
 * @returns {number}
 */
function calcTotalValue(tree: any) {

  if (tree[TOTAL_SYMBOL]) {
    return tree[TOTAL_SYMBOL];
  }

  let result = tree[VALUE_SYMBOL] || 0;

  const collectValue = (current: any) => {
    if (current[TOTAL_SYMBOL] !== undefined) {
      result += current[TOTAL_SYMBOL];
    } else {
      Object.getOwnPropertyNames(current).forEach(subTree => {
        collectValue(current[subTree])
      });
    }
  }
  collectValue(tree);

  return result;
}

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = Object.create(MapSum).createNew()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
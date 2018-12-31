/**
 * O(n+k)
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // build a trie O(n)
  const WORD_SYMBOL = Symbol.for('word');
  const root = {};

  strs.forEach(word => {
    // insert a word into the trie
    let current = root;
    for (let i = 0; i < word.length; i++) {
      if (current[word[i]] === undefined) {
        current[word[i]] = {};
      }
      current = current[word[i]];
    }
    current[WORD_SYMBOL] = true;
  });

  // find the longest common prefix O(k)
  let prefix = '', walker = root;
  while (true) {
    if (walker[WORD_SYMBOL]) {
      break;
    }
    let subNodes = Object.getOwnPropertyNames(walker);
    if (subNodes.length !== 1) {
      break;
    }
    walker = walker[subNodes[0]];
    prefix += subNodes[0];
  }

  return prefix;
};
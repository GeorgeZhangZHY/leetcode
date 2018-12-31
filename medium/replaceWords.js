const WORD_SYMBOL = Symbol.for('word');

class Trie {

  constructor() {
    this.root = {};
  }

  /**
  * Time: O(1) as word.length is limited to 100
  * Inserts a word into the trie. 
  * @param {string} word
  * @return {void}
  */
  insert(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      if (current[word[i]] === undefined) {
        current[word[i]] = {};
      }
      current = current[word[i]];
    }
    current[WORD_SYMBOL] = true;
  }

  /**
   * Time: O(1) as it is basically not affected by path.length or dict.length
   * @param {string} path 
   * @returns {string | null} the prefixing word
   */
  getShortestWordPrefixOf(path) {
    let current = this.root;
    for (let i = 0; i < path.length; i++) {
      if (current[path[i]] === undefined) {
        return null;
      }
      current = current[path[i]];
      if (current[WORD_SYMBOL]) {
        return path.substring(0, i + 1);
      }
    }
    return null;
  }

}

/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dict, sentence) {
  const trie = new Trie();
  dict.forEach(word => trie.insert(word));
  return sentence.split(' ').map(longWord => {
    const prefix = trie.getShortestWordPrefixOf(longWord);
    return prefix !== null ? prefix : longWord;
  }).join(' ');
};
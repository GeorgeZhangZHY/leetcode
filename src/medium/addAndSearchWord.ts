const WORD_SYMBOL = Symbol.for('word');

/**
 * Initialize your data structure here.
 */
var WordDictionary = function (this: { root: any }) {
  this.root = {};
};

/**
 * Adds a word into the data structure. 
 * Time: O(1)
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word: string) {
  let current = this.root;
  for (let i = 0; i < word.length; i++) {
    if (current[word[i]] === undefined) {
      current[word[i]] = {};
    }
    current = current[word[i]];
  }
  current[WORD_SYMBOL] = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * Time: O(1)
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word: string) {

  /**
   * 
   * @param {object} tree 
   * @param {string} word 
   */
  const searchWord = (tree: any, word: string) => {
    let current = tree;
    for (let i = 0; i < word.length; i++) {

      if (word[i] === '.') {

        for (const char in current) {
          if (current.hasOwnProperty(char)) {
            if (searchWord(current[char], word.substring(i + 1))) {
              return true;
            }
          }
        }

        return false;
      }

      if (current[word[i]] === undefined) {
        return false;
      }

      current = current[word[i]];
    }
    return !!current[WORD_SYMBOL];
  }

  return searchWord(this.root, word);
};

export {};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = Object.create(WordDictionary).createNew()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
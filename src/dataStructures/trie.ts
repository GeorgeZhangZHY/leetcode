const WORD_SYMBOL = Symbol.for('word');

export class Trie {

  root: any = {};

  /**
  * Inserts a word into the trie. 
  * @param {string} word
  * @return {void}
  */
  insert(word: string) {
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
  * Returns if the word is in the trie. 
  * @param {string} word
  * @return {boolean}
  */
  search(word: string) {
    const node = this.getNode(word);
    return !!(node && node[WORD_SYMBOL]);
  }

  /**
   * Returns if there is any word in the trie that starts with the given prefix. 
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix: string) {
    return !!this.getNode(prefix);
  }

  /**
   *  
   * @param {string} path 
   * @returns {object|null} the coresponding node of the path
   */
  getNode(path: string) {
    let current = this.root;
    for (let i = 0; i < path.length; i++) {
      if (current[path[i]] === undefined) {
        return null;
      }
      current = current[path[i]];
    }
    return current;
  }

}
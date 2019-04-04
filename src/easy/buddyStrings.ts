interface IDiffPoint {
  index: number
  aChar: string
  bChar: string
}

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function (A: string, B: string): boolean {

  if (A.length !== B.length) {
    return false;
  }

  const diffs: IDiffPoint[] = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) {
      diffs.push({
        index: i,
        aChar: A[i],
        bChar: B[i]
      });
      if (diffs.length > 2) {
        return false;
      }
    }
  }

  // identical strings, check for duplicated chars
  if (diffs.length === 0) {
    const charMap: any = {};
    for (let i = 0; i < A.length; i++) {
      if (charMap[A[i]] !== undefined) {
        return true;
      }
      charMap[A[i]] = i;
    }
    // no duplicated chars
    return false;
  }

  if (diffs.length === 1) {
    return false;
  }

  if (diffs.length === 2) {
    return diffs[0].aChar === diffs[1].bChar && diffs[0].bChar === diffs[1].aChar;
  }

  // make ts happy, actually never reaches here
  return true;

};
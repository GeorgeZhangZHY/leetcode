/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {

  if (!grid || grid.length === 0 || grid[0].length === 0) {
    return 0;
  }

  let perimeter = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[0].length; column++) {

      if (grid[row][column]) {
        let neighbors = 0;
        // check four directions
        if (grid[row - 1] && grid[row - 1][column]) {
          neighbors++;
        }
        if (grid[row][column - 1]) {
          neighbors++;
        }
        if (grid[row][column + 1]) {
          neighbors++;
        }
        if (grid[row + 1] && grid[row + 1][column]) {
          neighbors++;
        }
        perimeter += (4 - neighbors);
      }

    }
  }

  return perimeter;
};
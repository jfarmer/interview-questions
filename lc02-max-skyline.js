/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
  let result = 0
  
  const limitColumn = []
  const limitLine = [] 
  
  if (!grid || !grid.length) {
    return 0
  }
  
  let lineSize = 0
  const heightSize = grid.length
  
  for (let i = 0; i < heightSize; i++) {
    lineSize = grid[i].length
    limitColumn[i] = getMaxVerticalSkyline(grid, i)
  }
  
  for (let i = 0; i < lineSize; i++) {
    limitLine[i] = getHorizontalSkyline(grid, i)
  }
  
  for (let i = 0; i < heightSize; i++) {
    for (let j = 0; j < lineSize; j++) {
      if (limitColumn[i] > limitLine[j]) {
        result += limitLine[j] - grid[i][j]      
      } else {
        result += limitColumn[i] - grid[i][j]
      }
    }
  }
  
  return result
};

const getMaxVerticalSkyline = function (grid, columnIndex) {
  let verticalMax = 0
  for (let i = 0; i < grid.length; i++) {
    if (grid[i][columnIndex] > verticalMax) {
        verticalMax = grid[i][columnIndex]
    }
  }
  return verticalMax
};

const getHorizontalSkyline = function (grid, lineIndex) {
  let horizontalMax = 0
  for (let i = 0; i < grid[lineIndex].length; i++) {
    if (grid[lineIndex][i] > horizontalMax) {
      horizontalMax = grid[lineIndex][i]
    }
  }
  return horizontalMax
}
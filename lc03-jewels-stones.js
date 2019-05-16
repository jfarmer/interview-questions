/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    const stones = S.split('')
    const jewels = J.split('')
    
    return stones.reduce((acc, s) => {
      acc += jewels.includes(s) ? 1 : 0
      return acc
    }, 0) 
};
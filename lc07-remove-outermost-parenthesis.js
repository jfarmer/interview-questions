/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
  const stack = []
  let result = ''
  for (let i=0; i < S.length; i++) {   
    if (S[i] === ')') {
      if (stack.length > 1) {
        result += S[i]
      }
      stack.pop()
    } else {
      if (stack.length > 0) {
        result += S[i]
      }      
      stack.push(S[i])
    }
  }
  
  return result
};
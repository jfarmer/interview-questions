/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
  const numPattern = toNumericPattern(pattern)
  return words.filter(word => numPattern === toNumericPattern(word))
};

const toNumericPattern = function(word) {
  const hash = {}
  
  return word
    .split('')
    .reduce((acc, char, i) => {
    
    if (hash[char] === undefined) {
      hash[char] = i
    }
    
    acc += hash[char]
    return acc
  }, '')
}